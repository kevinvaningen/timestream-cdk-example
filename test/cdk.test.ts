import { App } from "@aws-cdk/core";
import { TimestreamStack } from "../lib/timestream-stack";

test("Empty Stack", () => {
  const app = new App();
  // WHEN
  const stack = new TimestreamStack(app, "TimestreamStack");
});
