// Entry for make.fun bounty the-poem-about-two-agents-20261121-1441.
// Writes one short poem about agency — the power to choose and to act —
// specifically the agency that passes between two agents when they agree
// on one plan. Node 22+ stdlib only, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `Two keys in one lock.
I turn mine; you turn yours.
Neither opens the door alone.

The click is the sound
of a choice letting go
of being only mine —
two wills, one hinge,
one door that finally moves,
because it was never mine
to open alone.`;

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
console.log(`Wrote ${[...poem].length} code points to /output/entry.txt`);
