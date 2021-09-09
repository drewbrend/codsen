#!/usr/bin/env node

// deps
import path from "path";

const callerDir = path.resolve(".");
import { runPerf } from "../../../scripts/run-perf.js";

// setup
import { deleteKey } from "../dist/object-delete-key.esm.js";

const testme = () =>
  deleteKey(
    [
      {
        a: "a",
        b: "delete this key",
        c: ["b", "b", { b: "d" }],
      },
      {
        b: ["and this key too", "together with this"],
        d: {
          e: { f: { g: ["b", { b: "and this, no matter how deep-nested" }] } },
        },
      },
    ],
    {
      key: "b",
    }
  );

// action
runPerf(testme, callerDir);
