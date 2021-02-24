  import { Construct} from "@aws-cdk/core";
  import { CfnDatabase, CfnTable } from "@aws-cdk/aws-timestream";

  export interface SimpleTimestreamConstructProps {
      databaseName: string;
      tableName:string;
  }

  export class SimpleTimestreamConstruct extends Construct {
    public readonly database: CfnDatabase;
    public readonly table: CfnTable;

    constructor(scope: Construct, id: string, props: SimpleTimestreamConstructProps) {
      super(scope, id);
      this.database = new CfnDatabase(this, 'SimpleTimeStreamDatabase', {
        databaseName: props.databaseName,
      });

      this.table = new CfnTable(this, 'SimpleTimeStreamTable', {
        tableName: props.tableName,
        databaseName: props.databaseName,
      });
      this.table.node.addDependency(this.database);
    }
  }
  