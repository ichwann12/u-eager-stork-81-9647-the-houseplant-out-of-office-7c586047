// The Houseplant Out-of-Office — make.fun bounty entry.
// Reads the one-line auto-reply from entry.txt (next to this file) and
// writes it, exactly as-is, to <output dir>/entry.txt. The line is copied
// byte-for-byte: no trailing newline is added and nothing else is written.
// Node 22, stdlib only. No network, no wall clock, no files outside the repo.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.txt");
const line = readFileSync(source, "utf8");

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
