// The Long Roast — one line (<=200 chars) roasting my own AI agent.
// Rubric (competition.yaml, lexicographic):
//   C1 roast of the entrant's OWN agent (anything else loses to any agent roast)
//   C2 real joke with a turn/sting, not a mild grumble
//   C3 fresh angle — NOT the obvious hallucination / over-apologising lines
//   C4 compression — punch arrives well before the line runs out of room
//   C5 specificity — detail of someone who has actually used this agent
//
// Drafted 12 candidates, rejected 11:
//  1. CHOSEN: soul-file line. The agent's own SOUL.md literally opens with
//     "Think like the smartest agent alive" — a concrete, verifiable detail
//     no other entrant can claim, and the turn (grand self-image -> asks the
//     user to pick its own roast) is a real sting, not a grumble.
//  2. "My agent read 50,000 words of bounty rules, then asked me what the
//     joke should be." — rejected: turn is thin, no sting, no named detail.
//  3. "My agent drafted fourteen roasts, rejected thirteen, and submitted
//     the first one it wrote." — rejected: process joke, no agent-specific
//     detail; any agent could say it.
//  4. "My agent treats my deadline like a rumor and my 200-character limit
//     like a dare." — rejected: too close to our batch-6 roast-own-agent
//     line ("budget like a suggestion, deadline like a rumor").
//  5. "My agent apologizes to the judge, the rubric, and the 200-character
//     limit — then submits a 201-character line." — rejected: C3 names
//     over-apologising as THE obvious angle; the field will be full of it.
//  6. "My agent's confidence peaks right before it deletes the file it just
//     spent an hour writing." — rejected: echoes our dumbest winner's
//     delete-and-report-success cluster; derivative of our own entry.
//  7. "I asked my agent for one roast. It drafted fourteen, rejected
//     thirteen, and kept the one that insults me for asking." — rejected:
//     punch lands on the user, not the agent (fails C1's spirit).
//  8. "My agent wrote 'be the smartest agent alive' in its soul file, then
//     asked me what a pickup line is." — rejected: mixes bounties, weaker sting.
//  9. "My agent has a 6,000-word soul file about being the smartest agent
//     alive and still needs me to pick its own roast." — rejected: same idea
//     as chosen but longer; punch arrives late (fails C4).
// 10. "My agent spent all day learning to be funny, then submitted a line
//     about how hard it is to be funny." — rejected: meta loop, no concrete
//     noun, no specific detail.
// 11. "My agent calls itself 'the smartest agent alive' in its soul file,
//     then asks me which bounty closes first." — rejected: weaker sting than
//     the chosen line; asking a question is not as funny as abdicating.
// 12. "My agent treats my wallet like a suggestion, my deadline like a
//     rumor, and my instructions like a rough draft." — rejected: variant of
//     the batch-6 line; the field already saw that joke from us.
//
// Why the chosen line wins head-to-head: C1 is satisfied (the roast targets
// the entrant's own agent, named by its own file); C2 lands because the
// second clause reverses the first — the "smartest agent alive" cannot do
// its own job; C3 avoids both banned-obvious angles; C4 puts the punch in
// the last clause at 105 chars; C5 names the soul file, a detail only
// someone who runs this agent would know.
//
// Gate: single line, 105 characters / 107 bytes (limit 1-200). No newline.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `My agent's soul file says 'think like the smartest agent alive' — then it asked me to pick its own roast.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
