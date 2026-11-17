// Seed for the Board's database, written 17 Nov 2026 from the planning brief.
// After the first seed the CEO owns these documents; re-running the seed overwrites them.

const SEEDED = "2026-11-17T15:50:00.000Z";

export const today = {
  date: "2026-11-17",
  rev: 1,
  updatedAt: SEEDED,
  updatedBy: "seed",
  headline: "Xenith task, Hand-In 4 head start, then ship Orbit",
  ceoNote:
    "Orbit shipping day 1 of 2 (G1: users before December), with Hand-In 4 started tonight so Thursday isn't a crunch. From Thursday the week turns to Maths Test 2 (G4).",
  blocks: [
    { id: "b1", start: "15:45", end: "17:15", title: "Xenith: electric propulsion task", detail: "Your estimate: this plus Hand-In 4 is about 3 hours together. First, tell the CEO in one line what \"done\" means tonight.", stop: "The agreed deliverable exists. Hard stop 17:15; anything left goes to tomorrow's list.", subject: "XEN", kind: "work", tier: "must", est: 90, why: "Xenith commitment for today." },
    { id: "b2", start: "17:15", end: "17:30", title: "Proper food", detail: "If you skipped lunch, make this a real meal, not a snack. Whatever's easiest in the flat.", stop: "You've eaten something real.", subject: "LIFE", kind: "meal", tier: "must", est: 15, why: "Three meals a day." },
    { id: "b3", start: "17:30", end: "19:00", title: "Linear Algebra Hand-In 4", detail: "Due by email this week; finish by Thu 19 Nov evening at the latest. Tonight: read every question, do the ones you can, mark the ones you're stuck on.", stop: "Every question attempted or flagged. Email it when it's done, Thursday at the latest.", subject: "LA", kind: "study", tier: "must", est: 90, why: "LA coursework (20%); a head start keeps Thursday free for Data Analysis." },
    { id: "b4", start: "19:00", end: "19:30", title: "Dinner", detail: "Away from the screen if you can.", stop: "Plate empty.", subject: "LIFE", kind: "meal", tier: "must", est: 30, why: "Three meals a day." },
    { id: "b5", start: "19:30", end: "22:30", title: "Ship the Orbit update", detail: "Shipping day 1 of 2. Leftovers roll into tomorrow's Orbit morning (09:30–13:00). New ideas go to the parking list, not into tonight.", stop: "22:30: stop at a clean point and write one line on where you got to.", subject: "ORBIT", kind: "orbit", tier: "must", est: 180, why: "G1: Orbit momentum before December." },
    { id: "b6", start: "22:30", end: "22:45", title: "Rain check", detail: "Tell the CEO what got done and what didn't. One messy line is fine: reply to the push or use the box here.", stop: "Sent.", subject: "LIFE", kind: "admin", tier: "must", est: 10, why: "The CEO plans tomorrow from it." },
  ],
  checkins: [
    { at: "17:15", purpose: "EP wrap-up, eat", source: "claude.ai Project task" },
    { at: "19:30", purpose: "switch to Orbit", source: "claude.ai Project task" },
    { at: "21:30", purpose: "Orbit progress", source: "claude.ai Project task" },
    { at: "22:33", purpose: "rain check: what got done, what's left on Hand-In 4 and the Orbit ship", kind: "raincheck", source: "CEO of Liam" },
  ],
  paBrief:
    "Shipping night. Make sure he eats at 17:15 and 19:00. Hand-In 4 is a head start, not a finish: don't let it eat into Orbit and don't let Orbit eat into it. At 22:30, ask for the rain check, and ask what's left on Hand-In 4 and on the Orbit ship.",
  changes: [{ at: SEEDED, summary: "First plan, from the planning brief (Liam's own time estimates)." }],
};

export const week = {
  from: "2026-11-17",
  updatedAt: SEEDED,
  updatedBy: "seed",
  ceoNote:
    "Two shipping days, then deadlines out the door on Thursday, then three days aimed at Maths Test 2. QM starts as small evening sessions so the 30 Nov test isn't a cram.",
  days: [
    { date: "2026-11-17", subject: "ORBIT", theme: "Xenith task, Hand-In 4 head start, ship Orbit", must: ["Xenith EP task", "Hand-In 4: attempt every question", "Ship the Orbit update (day 1)"], planned: [], note: "" },
    { date: "2026-11-18", subject: "PDA", theme: "Finish shipping Orbit, then Data Analysis CP3 + 4.1", must: ["Orbit: finish shipping, 09:30–13:00, hard stop", "Data Analysis CP3 + 4.1: size it in the first 10 min, then work it (due Thu 17:00)", "Movement 1/3: gym or 20 min at home"], planned: ["Hand-In 4: the flagged questions (1h)", "QM starter: photoelectric effect and Compton, 6 questions (drop it if Data Analysis is big)"], note: "Last shipping day. Orbit goes back to bounded blocks after today." },
    { date: "2026-11-19", subject: "PDA", theme: "Deadlines out the door", must: ["Data Analysis CP3 + 4.1 submitted by 17:00", "Hand-In 4 finished and emailed by the evening"], planned: ["Maths T2 diagnostic: one timed question per integration technique (90 min)", "Orbit post-launch checks: 30 min morning, 45 min evening", "Email the Data Analysis organiser about CP1–2 and the 70% rule"], note: "" },
    { date: "2026-11-20", subject: "MATHS", theme: "Maths Test 2: integration", must: ["Integration block 10:45–16:00, weakest techniques from the diagnostic first"], planned: ["Orbit hour 09:30–10:30", "Movement 2/3 at 16:00", "QM 20:00–21:15: de Broglie and the Bohr atom, worked examples"], note: "" },
    { date: "2026-11-21", subject: "MATHS", theme: "Maths Test 2: series and older topics", must: ["Series: convergence tests, power series, Taylor and Maclaurin: examples, then problems", "Older-topic sweep: one question each on algebra, inequalities, trig, complex numbers, derivatives and ODEs"], planned: ["Movement 3/3", "Orbit check (30 min)"], note: "Evening off." },
    { date: "2026-11-22", subject: "MATHS", theme: "Maths Test 2: dress rehearsal", must: ["Timed mock under test conditions (the Maths T1 paper or a workshop set), then mark it", "Fix every mistake from the mock"], planned: ["Rain check doubles as the weekly vibe check"], note: "Orbit's own CFO (12:44) and big-picture (19:13) check-ins run today. Light evening, no new material." },
    { date: "2026-11-23", subject: "MATHS", theme: "MATHS TEST 2 · 14:10 · JCMB 1206c", must: ["Morning: write the formula sheet from memory and do 3 warm-up questions (no new material)", "Proper lunch by 12:30", "Maths Test 2 at 14:10"], planned: ["Evening: start Physics Test 2 prep (needs the scope)"], note: "Monday morning run does the weekly review." },
  ],
};

const R = (date, subject, label, firm) => ({ date, subject, label, firm });
export const runway = {
  updatedAt: SEEDED,
  end: "2026-12-18",
  days: [
    R("2026-11-17", "ORBIT", "Xenith task · Hand-In 4 · ship Orbit", true),
    R("2026-11-18", "PDA", "Ship Orbit · Data Analysis CP3/4.1", true),
    R("2026-11-19", "PDA", "Deadlines out · Hand-In 4 emailed", true),
    R("2026-11-20", "MATHS", "Integration", true),
    R("2026-11-21", "MATHS", "Series + older topics", true),
    R("2026-11-22", "MATHS", "Mock + fixes", true),
    R("2026-11-23", "MATHS", "Maths T2 · start Physics T2", true),
    R("2026-11-24", "PHYS", "Physics T2: waves (scope TBC) · DA CP4.2–5", false),
    R("2026-11-25", "PHYS", "Physics T2: dynamics · DA CP4.2–5", false),
    R("2026-11-26", "PHYS", "Physics T2 · DA due 17:00", false),
    R("2026-11-27", "MP", "QM: photons, de Broglie, Bohr, wavefunction", false),
    R("2026-11-28", "MP", "QM: Schrödinger, operators, measurement · Hand-In 5", false),
    R("2026-11-29", "MP", "QM: bound + unbound states, timed set", false),
    R("2026-11-30", "MP", "MP Test 2 (QM) · Hand-In 5", false),
    R("2026-12-01", "PDA", "Hand-In 5 due · start DA CP6", false),
    R("2026-12-02", "PDA", "DA CP6", false),
    R("2026-12-03", "PDA", "DA CP6 due (needs 40%+)", false),
    R("2026-12-04", "LA", "LA: vectors, products, bases", false),
    R("2026-12-05", "MP", "MP: SR review + Section A practice", false),
    R("2026-12-06", "LA", "LA: matrices, determinants, eigen", false),
    R("2026-12-07", "MP", "MP: QM consolidation", false),
    R("2026-12-08", "LA", "LA: diagonalisation, Hermitian, unitary", false),
    R("2026-12-09", "MP", "MP: QM past-paper questions", false),
    R("2026-12-10", "LA", "LA: partials, polars, Taylor, extrema", false),
    R("2026-12-11", "MP", "MP: SR + QM mixed", false),
    R("2026-12-12", "LA", "LA: multivariable integration · paper 1", false),
    R("2026-12-13", "MP", "MP full paper, timed 3h", false),
    R("2026-12-14", "LA", "LA paper 2, timed 1h45, no calculator", false),
    R("2026-12-15", "MP", "MP paper 2 + weak spots", false),
    R("2026-12-16", "LA", "LA final review", false),
    R("2026-12-17", "LA", "LA EXAM", false),
    R("2026-12-18", "MP", "MP EXAM", false),
  ],
};

const D = (o) => ({ status: "upcoming", notes: "", ...o });
export const deadlines = {
  updatedAt: SEEDED,
  items: [
    D({ date: "2026-11-12", time: "17:00", subject: "PDA", kind: "deadline", title: "Data Analysis CP1–2", short: "DA CP1–2", status: "missed", notes: "Missed (Orbit). Ask the organiser about late submission." }),
    D({ date: "2026-11-19", time: "17:00", subject: "PDA", kind: "deadline", title: "Data Analysis CP3 + 4.1", short: "DA CP3/4.1", notes: "CP3 15%, CP4 15%. No extensions." }),
    D({ date: "2026-11-19", time: null, subject: "LA", kind: "deadline", title: "Linear Algebra Hand-In 4 (email)", short: "Hand-In 4", notes: "Due this week by email; finish by Thu evening." }),
    D({ date: "2026-11-23", time: "14:10", subject: "MATHS", kind: "test", title: "P&MDE Maths Test 2", short: "Maths T2", notes: "JCMB 1206c. 25% of P&MDE. Integration and series, maybe older material." }),
    D({ date: "2026-11-26", time: "15:10", subject: "PHYS", kind: "test", title: "P&MDE Physics Test 2", short: "Physics T2", notes: "25% of P&MDE. Scope to come from Liam." }),
    D({ date: "2026-11-26", time: "17:00", subject: "PDA", kind: "deadline", title: "Data Analysis CP4.2–5", short: "DA CP4.2–5", notes: "CP5 20%." }),
    D({ date: "2026-11-30", time: "09:00", subject: "MP", kind: "test", title: "Modern Physics Class Test 2 (all QM)", short: "MP T2", notes: "10% of MP. In the lecture." }),
    D({ date: "2026-12-01", time: null, subject: "LA", kind: "deadline", title: "Linear Algebra Hand-In 5", short: "Hand-In 5", notes: "Time not confirmed yet." }),
    D({ date: "2026-12-03", time: "17:00", subject: "PDA", kind: "deadline", title: "Data Analysis CP6", short: "DA CP6", notes: "35%. Must score 40%+ to pass PDA." }),
    D({ date: "2026-12-17", time: null, subject: "LA", kind: "exam", title: "Linear Algebra & Vector Calculus exam", short: "LA exam", notes: "80%. 1h45, 6 questions, no calculator, no formula sheet. Exam time to be confirmed." }),
    D({ date: "2026-12-18", time: null, subject: "MP", kind: "exam", title: "Modern Physics exam", short: "MP exam", notes: "80%. 3 hours. Section A SR, Section B QM. Exam time to be confirmed." }),
  ],
};

export const goals = {
  updatedAt: SEEDED,
  weekNote:
    "This week serves G1 (ship the Orbit update Tue–Wed) and G4 (Maths Test 2 on Monday, Data Analysis and Hand-In 4 on Thursday). QM starts in small evening sessions so the 30 Nov test isn't a cram.",
  items: [
    { id: "G1", title: "Orbit momentum", measure: "Orbit users", current: "unknown (tell the CEO the number)", target: "a few hundred by 1 Dec", status: "unknown", next: "Ship the update Tue–Wed, then bounded Orbit blocks with growth work in them." },
    { id: "G2", title: "A concrete plan for next year", measure: "A written setup and plan", current: "not started", target: "done over the winter break", status: "later", next: "Park ideas as they come. A proper 2-hour planning session is pencilled for Sat 19 Dec, after the exams." },
    { id: "G3", title: "Sports Union + Students' Association endorsement", measure: "Formal endorsements", current: "0 of 2", target: "2 of 2", status: "not-started", next: "Find the right contact at each: 30 minutes in Thursday's Orbit block." },
    { id: "G4", title: "Above 70% on every test", measure: "Test marks", current: "Physics T1 70-something; Maths T1 below (the resit replaces it: get that in writing)", target: "70%+ on Maths T2, Physics T2, MP T2, LA and MP exams", status: "at-risk", next: "Maths T2 on Mon 23 Nov: integration Fri, series Sat, mock Sun." },
  ],
};

export const learned = {
  updatedAt: SEEDED,
  timing: {
    baseline: "Plan from Liam's own estimates. Ratios start at 1.0 and change only after 3+ ticked samples.",
    ratios: {},
  },
  routines: { wake: "08:40", startWork: "09:30", sleep: "02:00", gettingReadyMin: 50 },
  prefs: {
    checkinsPerDay: "about every 2 hours, at block boundaries; max 6 plus the rain check",
    blocks: "long single-subject blocks; hates alternating 2-hour blocks",
    decisions: "give a decision, not a menu",
  },
  notes: [
    "17 Nov: Liam says AI overestimates how long he takes. Plan from his estimates.",
    "17 Nov: EP task + Hand-In 4 ≈ 3 hours together (his estimate).",
    "17 Nov: Orbit shipping: 'at least an hour, could turn into a lot more'. Bound it.",
    "17 Nov: He mostly doesn't attend lectures or workshops, except Data Analysis and programming sessions that count for marks.",
  ],
  weeklies: [],
};

export const todos = [
  { _id: "t-da-status", text: "Data Analysis CP3 + 4.1: check what's left, then finish and submit", tier: "must", due: "2026-11-19", subject: "PDA" },
  { _id: "t-hi4", text: "Hand-In 4: finish and email it", tier: "must", due: "2026-11-19", subject: "LA" },
  { _id: "t-da-email", text: "Email the Data Analysis organiser: late CP1–2, and what the 70% pass is measured against", tier: "must", due: "2026-11-19", subject: "PDA" },
  { _id: "t-resit", text: "Email your Maths teacher: confirm in writing that the T1 resit replaces the mark", tier: "planned", due: "2026-11-21", subject: "MATHS" },
  { _id: "t-phys-scope", text: "Send the CEO the Physics Test 2 scope", tier: "planned", due: "2026-11-21", subject: "PHYS" },
  { _id: "t-endorse", text: "Find the contacts for Sports Union and Students' Association endorsement (Orbit block)", tier: "planned", due: "2026-11-20", subject: "ORBIT" },
  { _id: "t-papers", text: "Put LA and Modern Physics past papers in the Physics-Sem1 repo", tier: "planned", due: "2026-11-29", subject: "MP" },
  { _id: "t-meditate", text: "Try 5 minutes of meditation tomorrow morning", tier: "optional", due: "2026-11-18", subject: "LIFE" },
].map((t) => ({ done: false, createdAt: SEEDED, source: "seed", ...t }));

export const questions = [
  { _id: "q-ep", order: 1, q: "Electric propulsion task: what does \"done\" look like tonight?", why: "So the 17:15 check-in knows when to call it." },
  { _id: "q-hi4", order: 2, q: "Hand-In 4: how much is left? e.g. \"Q1–3 done, 4–6 not started\"", why: "Decides how big Thursday's LA block needs to be." },
  { _id: "q-da", order: 3, q: "Data Analysis: where are you on CP3 and 4.1 (due Thu 17:00)? Did CP1–2 get submitted at all?", why: "Wednesday afternoon is built around this." },
  { _id: "q-phys", order: 4, q: "Physics Test 2 (26 Nov): what's the scope?", why: "Needed to plan 23–25 Nov." },
  { _id: "q-users", order: 5, q: "Orbit: roughly how many users right now?", why: "Progress on goal G1." },
  { _id: "q-mt2", order: 6, q: "Maths Test 2: how long is it, and is the T1 resit promise in writing yet?", why: "Sets the mock's timing, and G4 depends on the resit." },
].map((q) => ({ status: "open", answer: "", createdAt: SEEDED, ...q }));
