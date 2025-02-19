export interface LLMTool {
  type: "function";
  name: string;
  description: string;
  parameters: Record<string, unknown>;
}

export interface LLMToolZ {
  [k: string]: any;
}