// Builds the Board's seed documents from the markdown in ceo/ and seed/data.mjs.
// Usage: node ceo/seed/build.mjs   → writes ceo/seed/out/*.json and ceo/seed/out/batch.json
// Then write them with the ArtifactData tool ("batch", one entry per file; see batch.json).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as seed from "./data.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const ceo = path.join(here, "..");
const cfg = JSON.parse(fs.readFileSync(path.join(here, "config.json"), "utf8"));
const fill = (s) => s.replaceAll("{BOARD}", cfg.board);

// brain/prompts: one field per "## key" section of prompts.md
const promptsMd = fs.readFileSync(path.join(ceo, "prompts.md"), "utf8");
const prompts = {};
for (const sec of promptsMd.split(/\n## /).slice(1)) {
  const nl = sec.indexOf("\n");
  prompts[sec.slice(0, nl).trim()] = fill(sec.slice(nl + 1).trim());
}
for (const k of ["trigger", "checkin", "raincheck", "ceoMorning", "ceoDesk"]) if (!prompts[k]) throw new Error("prompts.md is missing ## " + k);

const at = seed.today.updatedAt;
const docs = [
  ["days", "2026-11-17", seed.today],
  ["plan", "week", seed.week],
  ["plan", "runway", seed.runway],
  ["plan", "deadlines", seed.deadlines],
  ["plan", "goals", seed.goals],
  ["brain", "playbook", { text: fs.readFileSync(path.join(ceo, "playbook.md"), "utf8"), updatedAt: at }],
  ["brain", "facts", { text: fs.readFileSync(path.join(ceo, "facts.md"), "utf8"), updatedAt: at }],
  ["brain", "learned", seed.learned],
  ["brain", "prompts", { ...prompts, updatedAt: at }],
  ["system", "status", {
    boardUrl: cfg.board, morningTriggerId: cfg.morningTriggerId, slots: cfg.slots,
    lastCeoRun: null, lastCeoKind: "seed", version: 1, updatedAt: at,
    checkins: seed.today.checkins.map((c) => ({ ...c, date: seed.today.date })),
    notes: "Seeded 17 Nov. Tonight's 17:15, 19:30 and 21:30 pushes come from the claude.ai Project's own scheduled tasks; the 22:33 rain check is this system's first PA run. The 17:03 and 18:57 slots switch on at 08:05 on 18 Nov.",
  }],
  ["thread", "m-welcome", { at, date: seed.today.date, from: "ceo", via: "seed", kind: "plan", handled: true, text: "Board is live. Today: Xenith task, then a Hand-In 4 head start, then ship Orbit. Answer the questions below when you get a second; tomorrow's plan lands at 08:20." }],
  ...seed.todos.map(({ _id, ...t }) => ["todos", _id, t]),
  ...seed.questions.map(({ _id, ...q }) => ["questions", _id, q]),
];

const out = path.join(here, "out");
fs.mkdirSync(out, { recursive: true });
const writes = docs.map(([collection, id, data]) => {
  const file = path.join(out, `${collection}__${id}.json`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  return { op: "set", collection, doc_id: id, file_path: file };
});
fs.writeFileSync(path.join(out, "batch.json"), JSON.stringify(writes, null, 2));
console.log(`${writes.length} documents → ${out}`);
