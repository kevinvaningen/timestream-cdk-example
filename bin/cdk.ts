#!/usr/bin/env node
import "source-map-support/register";
import { App } from "@aws-cdk/core";
import { TimestreamStack } from "../lib/timestream-stack";

const app = new App();
new TimestreamStack(app, "TimestreamStack", {
  tags: {
    service: "Timestream stack",
  },
});
