// Keep in sync with backend (llm.py)
// Order here matches dropdown order
export enum CodeGenerationModel {
  GPT_4_VISION = "gpt-4-vision-preview",
  GPT_4_TURBO_2024_04_09 = "gpt-4-turbo-2024-04-09",
  GPT_4O_2024_05_13 = "gpt-4o-2024-05-13",
  GPT_4O_2024_08_06 = "gpt-4o-2024-08-06",
  GPT_4O_2024_11_20 = "gpt-4o-2024-11-20",
  CLAUDE_3_SONNET = "claude-3-sonnet-20240229",
  CLAUDE_3_OPUS = "claude-3-opus-20240229",
  CLAUDE_3_HAIKU = "claude-3-haiku-20240307",
  CLAUDE_3_5_SONNET_2024_06_20 = "claude-3-5-sonnet-20240620",
  CLAUDE_3_5_SONNET_2024_10_22 = "claude-3-5-sonnet-20241022",
  CLAUDE_3_7_SONNET_2025_02_19 = "claude-3-7-sonnet-20250219",
  GEMINI_2_0_FLASH_EXP = "gemini-2.0-flash-exp",
  GEMINI_2_0_FLASH = "gemini-2.0-flash",
  GEMINI_2_0_PRO_EXP = "gemini-2.0-pro-exp-02-05",
  O1_2024_12_17 = "o1-2024-12-17",
}

// Will generate a static error if a model in the enum above is not in the descriptions
export const CODE_GENERATION_MODEL_DESCRIPTIONS: {
  [key in CodeGenerationModel]: { name: string; inBeta: boolean };
} = {
  "gpt-4-vision-preview": { name: "GPT-4 Vision", inBeta: false },
  "gpt-4-turbo-2024-04-09": { name: "GPT-4 Turbo", inBeta: false },
  "gpt-4o-2024-05-13": { name: "GPT-4o (2024-05-13)", inBeta: false },
  "gpt-4o-2024-08-06": { name: "GPT-4o (2024-08-06)", inBeta: false },
  "gpt-4o-2024-11-20": { name: "GPT-4o (2024-11-20)", inBeta: false },
  "claude-3-sonnet-20240229": { name: "Claude 3 Sonnet", inBeta: false },
  "claude-3-opus-20240229": { name: "Claude 3 Opus", inBeta: false },
  "claude-3-haiku-20240307": { name: "Claude 3 Haiku", inBeta: false },
  "claude-3-5-sonnet-20240620": { name: "Claude 3.5 Sonnet", inBeta: false },
  "claude-3-5-sonnet-20241022": { name: "Claude 3.5 Sonnet (2024-10-22)", inBeta: false },
  "claude-3-7-sonnet-20250219": { name: "Claude 3.7 Sonnet", inBeta: false },
  "gemini-2.0-flash-exp": { name: "Gemini 2.0 Flash Exp", inBeta: false },
  "gemini-2.0-flash": { name: "Gemini 2.0 Flash", inBeta: false },
  "gemini-2.0-pro-exp-02-05": { name: "Gemini 2.0 Pro Exp", inBeta: false },
  "o1-2024-12-17": { name: "O1 (2024-12-17)", inBeta: false },
};
