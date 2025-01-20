# Technical documentation

This is a node.js project is built using npm.

## Deployment

Currently, we need to manually deploy to elastic beanstalk.

> [!NOTE]\
> **typescript**\
> This project is written in typescript, so it needs to be compiled to javascript before deployment. The `tsconfig.json` we have is set up to compile to `dist/` so that's where the compiled code will be. Notice that in `package.json` the `start` script is `node dist/index.js` accordingly. Use

- zip the contents of this directory (not the directory itself - the zip should contain `package.json` etc at the top level)
- Go to a properly configured elastic beanstalk environment (currently I'm using
  environment `e-q3nu9agtwx`, "sapphire-backend-env-1", in us-east-2).
- Select Upload and Deploy
- Upload the zip file

Note `.ebextensions`. This is an artifact from the [sample nodejs application](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/samples/nodejs.zip) I copied from the [getting started guide](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/GettingStarted.DeployApp.html). It's supposed to allow for logging of some kind, I don't really get it. I'm not sure if it's necessary because EB collects console logs anyway. If we want to use it, it would look like

```ts
export const log = (entry: string) =>
  fs.appendFileSync(
    "/tmp/sample-app.log", // name based on the config in .ebextensions
    new Date().toISOString() + " - " + entry + "\n"
  );

app.listen(port, () => {
  log(`Server running at http://localhost:${port}`);
});
```

but when I do that I don't see the log file in the aws logs 🤷‍♂️.

`cron.yaml` is another artifact from the sample app. I'm not sure if we'll need it but I'm keeping it around for now.

The main server file resides at `./app.ts`.