#!/usr/bin/env node

import { promises as fs, F_OK, accessSync } from "fs";
import path from "path";
import objectPath from "object-path";
import { prepExampleFileStr } from "../helpers/prepExampleFileStr.js";

// import tasks:
import readme from "./plugins/readme.js";
import hardWrite from "./plugins/hardWrite.js";
import hardDelete from "./plugins/hardDelete.js";
import pack from "./plugins/pack.js";
import npmIgnore from "./plugins/npmIgnore.js";
import rollupConfig from "./plugins/rollupConfig.js";
import tsconfig from "./plugins/tsconfig.js";
// import semaphore from "./plugins/semaphore.js";

import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// SETUP
// -----------------------------------------------------------------------------

const state = {
  isRollup: false,
  isBin: false,
  pack: { name: null, version: null, description: null },
  originalLectrc: {},
};

// 1. Read package.json in the root where this script was called

const packageJson = JSON.parse(await fs.readFile("package.json", "utf8"));
const rootPackageJSON = JSON.parse(
  await fs.readFile(path.resolve("../../package.json"), "utf8")
);
state.pack = packageJson;
state.root = path.resolve("./");

// 2. Categorise. Categories are mutually exclusive - emlint is both
// a program and a cli; gulp plugins are neither;

// - Is it a program? - code in TS, built using esbuild, types via rollup:
state.isRollup = false;
// also present in ./scripts/generate-info.js:
try {
  accessSync(path.join(state.root, "rollup.config.js"), F_OK);
  state.isRollup = true;
} catch (e) {}

// - Is it a CLI?
state.isBin = objectPath.has(packageJson, "bin");

const lectrc = JSON.parse(
  await fs.readFile(path.join(__dirname, ".lectrc.json"), "utf8")
);
state.originalLectrc = { ...lectrc };

let quickTakeExample;
if (state.isRollup) {
  try {
    quickTakeExample = prepExampleFileStr(
      await fs.readFile(path.join(state.root, "examples/_quickTake.js"), "utf8")
    ).str;
  } catch (e) {
    console.log(
      `068 lect: ${`\u001b[${31}m${`no examples`}\u001b[${39}m`}: ${e}`
    );
  }
}

// ACTION
// -----------------------------------------------------------------------------

await Promise.all([
  // write README.md
  Promise.resolve(readme({ state, quickTakeExample, lectrc })),
  // write new files
  Promise.resolve(hardWrite({ lectrc })),
  // delete bad files
  Promise.resolve(hardDelete({ lectrc })),
  // write package.json
  Promise.resolve(pack({ state, lectrc, rootPackageJSON })),
  // write .npmignore
  Promise.resolve(npmIgnore({ state, lectrc })),
  // write rollup.config.js
  Promise.resolve(rollupConfig({ state })),
  // write tsconfig.json
  Promise.resolve(tsconfig({ state })),
  // TBC - write ./.semaphore/semaphore.yml
  // Promise.resolve(semaphore({ state })),
]).catch((e) => {
  console.log(`094 lect: ${`\u001b[${31}m${`failure`}\u001b[${39}m`}: ${e}`);
  process.exit(1);
});
