import { LLMWhispererClient } from "llmwhisperer-client";

export function getWhispererClient() {
  const options = {
    baseUrl: "https://llmwhisperer-api.unstract.com/v1",
    apiKey: process.env.whisperer_api_key,
    apiTimeout: 200,
    loggingLevel: "info",
  };

  // All the option keys are optional
  const client = new LLMWhispererClient(options);
}
