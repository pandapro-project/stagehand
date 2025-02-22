import { chromium } from "@playwright/test";
import { BrowserResult } from "../types/browser";
import { LogLine } from "../types/log";
import { BrowserlessSessionCreateParams } from "../types/stagehand";

export async function getNstBrowser(
  apiKey: string | undefined,
  env: "LOCAL" | "BROWSERBASE" = "LOCAL",
  browserlessSessionId: string | undefined,
  logger: (message: LogLine) => void,
  browserlessSessionCreateParams?: BrowserlessSessionCreateParams,
  ip: string,
): Promise<BrowserResult> {
  if (!apiKey) {
    throw new Error("NSTBROWSER_API_KEY is required.");
  }

  let debugUrl: string | undefined = undefined;
  let sessionUrl: string | undefined = undefined;
  let sessionId: string | undefined = browserlessSessionId;
  let browserWSEndpoint = `wss://less.nstbrowser.io/connect/session/${browserlessSessionId}?x-api-key=${apiKey}&ip=${ip}`;

  if (!browserlessSessionId) {
    const config = {
      ...browserlessSessionCreateParams,
    };

    const query = new URLSearchParams({
      token: apiKey, // required
      config: JSON.stringify(config),
      ip, // required
    });

    const data = await connectToBrowserless(apiKey, query);
    if (!data) {
      throw new Error("Connect to browserless failed.");
    }

    browserWSEndpoint = `wss://less.nstbrowser.io/connect/session/${data.id}?x-api-key=${apiKey}&ip=${ip}`;
    sessionId = data.id;
  }

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

  try {
    const browser = await chromium.connectOverCDP(browserWSEndpoint, { timeout: 60000 });

    debugUrl = browserWSEndpoint;
    sessionUrl = `https://app.nstbrowser.io/app/browserless/${sessionId}`;

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

    return { browser, context, debugUrl, env, sessionUrl, sessionId };
  } catch {
    throw 'Failed to connect to browserless';
  }
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
