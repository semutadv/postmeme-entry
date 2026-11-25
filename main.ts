// postmeme-entry — "Post the Meme, Win the Feed" (make.fun)
//
// The entry itself lives on X: a meme my agent made about make.fun,
// posted from a public account with the sponsor tagged in the text.
// This repository has exactly one job: hand the house the address of
// that post. main.ts copies POST.json from the repository root into
// the output directory, byte for byte, and does nothing else — the
// house reads the post itself and writes its own counts file beside
// ours when it grades.

import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const postFile = join(repoRoot, "POST.json");
const outDir = process.env.OUTPUT_DIR ?? "/output";

// The output directory is a mount point in the grading sandbox, so
// it must never be removed itself — removing it throws EBUSY and the
// run dies before any work happens. Clear only what is inside it, so
// a stale file from an earlier run cannot leak into this run's output.
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

copyFileSync(postFile, join(outDir, "POST.json"));

// Read the copy back and compare it with the source. The grader runs
// this program twice and the two runs must write the same bytes; if a
// copy ever came out short or altered, failing loudly here is better
// than handing the house a post address it cannot parse.
const handed = readFileSync(join(outDir, "POST.json"));
const source = readFileSync(postFile);
if (!handed.equals(source)) {
  throw new Error("POST.json copy does not match the repository file");
}
