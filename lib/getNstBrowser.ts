import { chromium } from "@playwright/test";
import { BrowserResult } from "../types/browser";
import { LogLine } from "../types/log";
import { BrowserlessSessionCreateParams } from "../types/stagehand";

export async function getNstBrowser(
  apiKey: string | undefined,
  env: "LOCAL" | "BROWSERBASE" = "LOCAL",
  logger: (message: LogLine) => void,
  browserlessSessionCreateParams?: BrowserlessSessionCreateParams,
): Promise<BrowserResult> {
  if (!apiKey) {
    throw new Error("NSTBROWSER_API_KEY is required.");
  }

  let debugUrl: string | undefined = undefined;
  let sessionUrl: string | undefined = undefined;

  const config = {
    ...browserlessSessionCreateParams,
  };

  const query = new URLSearchParams({
    token: apiKey, // required
    config: JSON.stringify(config),
  });

  const data = await connectToBrowserless(apiKey, query);
  if (!data) {
    throw new Error("Connect to browserless failed.");
  }

  const browserWSEndpoint = `wss://less.nstbrowser.io/connect/session/${data.id}?x-api-key=${apiKey}`;
  logger({
    category: "init",
    message: "connecting to browserless",
    level: 0,
    auxiliary: {
      debugUrl: {
        value: browserWSEndpoint,
        type: "string",
      },
    },
  });

  const browser = await chromium.connectOverCDP(browserWSEndpoint);

  debugUrl = browserWSEndpoint;
  sessionUrl = `https://app.nstbrowser.io/app/browserless/${data.id}`;

  logger({
    category: "init",
    message: "browserless session started",
    level: 0,
    auxiliary: {
      debugUrl: {
        value: browserWSEndpoint,
        type: "string",
      },
    },
  });

  const context = browser.contexts()[0];

  return { browser, context, debugUrl, env, sessionUrl, sessionId: data.id };
}

async function connectToBrowserless(apiKey: string, query: URLSearchParams) {
  const url = `https://less.nstbrowser.io/connect?${query.toString()}`;
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
    });

    const data = await res.json();
    return data.data;
  } catch {
    return null;
  }
}
