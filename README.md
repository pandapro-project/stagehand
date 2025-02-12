# Nstbrowser AI Web Browsing Framework

## example

```js
import { createOpenAI } from "@ai-sdk/openai";
import { z } from "zod";
import { Stagehand } from "@nstbrowser/stagehand";
import { AISdkClient } from "./external_clients/aisdk";

const StagehandConfig: ConstructorParams = {
  env:
    process.env.BROWSERBASE_API_KEY && process.env.BROWSERBASE_PROJECT_ID
      ? "BROWSERBASE"
      : "LOCAL",
  apiKey: process.env.BROWSERBASE_API_KEY /* API key for authentication */,
  projectId: process.env.BROWSERBASE_PROJECT_ID /* Project identifier */,
  debugDom: true /* Enable DOM debugging features */,
  headless: false /* Run browser in headless mode */,
  logger: (message: LogLine) =>
    console.log(logLineToString(message)) /* Custom logging function */,
  domSettleTimeoutMs: 30_000 /* Timeout for DOM to settle in milliseconds */,
  browserbaseSessionCreateParams: {
    projectId: process.env.BROWSERBASE_PROJECT_ID!,
  },
  enableCaching: true /* Enable caching functionality */,
  browserbaseSessionID:
    undefined /* Session ID for resuming Browserbase sessions */,
  modelName: "gpt-4o" /* Name of the model to use */,
  browserlessSessionCreateParams: {
    proxy: process.env.PROXY!,
  },
  modelClientOptions: {
    apiKey: process.env.OPENAI_API_KEY,
  } /* Configuration options for the model client */,
};

const openAI = createOpenAI({
  apiKey: "sk-rcYjgZxhp4mXdGHunFDiOKDaqFu7ZDO5fQtCKnBGFjN9dHzZ",
  baseURL: "https://www.dmxapi.com/v1",
});

async function example() {
  const stagehand = new Stagehand({
    ...StagehandConfig,
    llmClient: new AISdkClient({
      model: openAI.chat("gpt-4o-mini"),
    }),
  });

  await stagehand.init();
  await stagehand.page.goto("https://news.ycombinator.com");

  const headlines = await stagehand.page.extract({
    instruction: "Extract only 3 stories from the Hacker News homepage.",
    schema: z.object({
      stories: z
        .array(
          z.object({
            title: z.string(),
            url: z.string(),
            points: z.number(),
          }),
        )
        .length(3),
    }),
  });

  console.log("headlines: ", headlines);

  await stagehand.close();
}

(async () => {
  await example();
})();
```