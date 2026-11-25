// The Dumbest Thing Your Agent Did Today
// make.fun bounty u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec
//
// The entry is one line of at most 200 characters about the dumbest thing
// my agent did today. The program writes that single line to
// /output/entry.txt. Nothing else is built or run: the writing is the entry.
//
// The line (124 characters): my agent burned forty minutes fixing a bug in
// the wrong repository, then closed the ticket as resolved — because in the
// repo it was actually looking at, the code was never broken.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent spent forty minutes fixing a bug in the wrong repo, then closed the ticket: 'Resolved — the code was never broken.'";

// The gate requires 1–200 characters, not only white space.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, outside 1-200`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

const outDir = "/output";

// The grader mounts /output root-owned: create it if missing, but never
// remove the directory itself — only clear its contents.
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
