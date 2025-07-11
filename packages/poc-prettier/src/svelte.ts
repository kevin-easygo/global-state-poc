import { type Config } from "prettier";
import base from "./base.js";

const config: Config = {
  ...base,
  plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
  svelteSortOrder: "options-scripts-markup-styles",
  svelteStrictMode: false,
  overrides: [{ files: ["*.svelte", "*.svelte.js", "*.svelte.ts"], options: { parser: "svelte" } }],
  svelteAllowShorthand: true,
  svelteIndentScriptAndStyle: true,
};

export default config;
