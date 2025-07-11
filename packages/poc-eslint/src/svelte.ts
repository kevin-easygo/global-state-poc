import tsEslint, { ConfigArray } from "typescript-eslint";
import sveltePlugin from "eslint-plugin-svelte";
import base from "./base.js";
import path from "node:path";
import { existsSync } from "node:fs";
import gitignore from "./gitignore.js";
import typescript from "./typescript.js";

const extraFileExtensions = [".svelte"];
const svelteConfig = path.resolve("svelte.config.js");

const svelte: ConfigArray = tsEslint.config([
  base,
  sveltePlugin.configs["flat/recommended"],
  sveltePlugin.configs["flat/prettier"],
  {
    name: "svelte",
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        parser: tsEslint.parser,
        projectService: true,
        extraFileExtensions,
        svelteConfig: existsSync(svelteConfig) ? svelteConfig : undefined,
      },
    },
  },
  {
    name: "typescript",
    files: ["**/*.ts"],
    extends: [typescript],
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        projectService: true,
        extraFileExtensions,
        svelteConfig: existsSync(svelteConfig) ? svelteConfig : undefined,
      },
    },
  },
  gitignore,
]);

export default svelte;
