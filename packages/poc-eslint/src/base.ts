import tsEslint, { type ConfigArray } from "typescript-eslint";
import eslintJs from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier/flat";
import gitignore from "./gitignore.js";
import jsdoc from "eslint-plugin-jsdoc";

const base: ConfigArray = tsEslint.config(
  eslintJs.configs.recommended,
  prettier,
  jsdoc.configs["flat/recommended-error"],
  {
    name: "base",
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.es2020, ...globals.node },
    },
  },
  gitignore,
);

export default base;
