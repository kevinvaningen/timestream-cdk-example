import {Construct, RemovalPolicy} from "@aws-cdk/core";
import {CfnDatabase, CfnTable} from "@aws-cdk/aws-timestream";

export interface TimestreamConstructProps {
    databaseName: string;
    tableName: string;
}

export class TimestreamConstruct extends Construct {
    public readonly database: CfnDatabase;
    public readonly table: CfnTable;

    constructor(scope: Construct, id: string, props: TimestreamConstructProps) {
        super(scope, id);
        this.database = new CfnDatabase(this, 'Database', {
            databaseName: props.databaseName,
        });
        this.database.applyRemovalPolicy(RemovalPolicy.RETAIN);

        this.table = new CfnTable(this, 'Table', {
            tableName: props.tableName,
            databaseName: props.databaseName,
            retentionProperties: {
                memoryStoreRetentionPeriodInHours: (24 * 60).toString(10),
                magneticStoreRetentionPeriodInDays: (365 * 10).toString(10)
            }
        });
        this.table.node.addDependency(this.database);
        this.table.applyRemovalPolicy(RemovalPolicy.RETAIN);
    }
}
  