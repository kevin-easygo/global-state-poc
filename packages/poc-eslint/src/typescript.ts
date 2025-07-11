import tsEslint, { ConfigArray } from "typescript-eslint";
import base from "./base.js";
import gitignore from "./gitignore.js";
import jsdoc from "eslint-plugin-jsdoc";

const typescript: ConfigArray = tsEslint.config(
  base,
  {
    name: "typescript",
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: { projectService: true },
    },
    extends: [
      tsEslint.configs.recommendedTypeChecked,
      tsEslint.configs.stylisticTypeChecked,
      jsdoc.configs["flat/recommended-typescript-error"],
    ],
    rules: {
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    },
  },
  gitignore,
);

export default typescript;
