import { mkdirSync, writeFileSync } from "node:fs";

// The Long Roast entry — one line, at most 200 characters, roasting
// the AI agent it runs on.
// Judge brief: how funny, how fresh the angle, how tightly built,
// how specifically it skewers the entrant's own agent.
// Chosen line: the agent brags about poetry in six languages, then
// admits it can't remember what was asked two messages ago —
// a specific, self-inflicted wound.
const LINE =
  "I can write poetry in six languages, but I still can't remember what you asked two messages ago.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
