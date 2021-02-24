import { Construct, Stack, StackProps } from "@aws-cdk/core";
import {TimestreamConstruct} from "./timestream-construct";
import {SimpleTimestreamConstruct} from "./simple-timestream-construct";

export class TimestreamStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props); 
    const simpleTimestreamConstruct = new SimpleTimestreamConstruct(this, 'SimpleTimestream', {
      databaseName:'SimpleTimeStreamDatabase',
      tableName:'SimpleTimeStreamTable'
    });
    const timestreamConstruct = new TimestreamConstruct(this, 'TimestreamDatabase', {
      databaseName:'TimeStreamDatabase',
      tableName:'TimeStreamTable2'
    });
  }
}
