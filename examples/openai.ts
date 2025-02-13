import { createOpenAI } from "@ai-sdk/openai";
import { z } from "zod";
import { Stagehand } from "@/dist";
import { AISdkClient } from "./external_clients/aisdk";
import StagehandConfig from "@/stagehand.config";

const openAI = createOpenAI({
  apiKey: "your-openai-api-key",
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
