# Timestream CDK project

Read my blog: https://kevin-van-ingen.medium.com/aws-timestream-cdk-5e1b7d760828

This repo and the blog covers:

* Base database creation
* Base table creation
* The table to database lifecycle dependency
* Table data retention options
* Table and database removal policies.


## Useful commands

The `cdk.json` file tells the CDK Toolkit how to execute your app.

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
