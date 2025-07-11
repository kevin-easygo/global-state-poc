import tsEslint, { ConfigArray } from "typescript-eslint";
import path from "node:path";
import { existsSync } from "node:fs";
import { includeIgnoreFile } from "@eslint/compat";

const gitignorePath = path.resolve(import.meta.dirname, "../../../.gitignore");

const gitignore: ConfigArray = tsEslint.config(
  ...(existsSync(gitignorePath) ? [includeIgnoreFile(gitignorePath)] : []),
);

export default gitignore;
