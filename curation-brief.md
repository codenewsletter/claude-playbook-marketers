# Curation Agent Brief

Reusable across modules. Written during Module 2; the module-specific lines are marked.

Read this file completely before you write a single word.

**Per module, set these before you brief anyone:** the hands-on heading, the voice-exemplar line range, and the extraction notes path.

## Module 3 values (set 2026-09-04)

- **Hands-on heading:** `### Try This In Claude Code`. Used in all 10 lessons without variation.
- **Voice exemplars:** `module-1.md` lines 530-767 (1.5 and 1.6) remain the target. Read `module-2.md` 2.5 and 2.7 as well; they are the closest in kind to Module 3's build-a-system lessons.
- **Extraction notes path:** named in your individual assignment. All Module 3 notes live in `/private/tmp/claude-501/-Users-vikravardhan-Builds-Superhuman-claude-marketing-playbook/452cb131-4819-408c-826e-8fb76d7a599d/scratchpad/m3-notes/`.
- **Keanan Koppenhaver carries no title.** He wrote nine of the Module 3 sources and not one states a job title or company for him. Attribute him by name alone, as Module 2 does for Sabrina Ramonov. Never import a title from elsewhere.
- **Word band:** 400-520 of reading prose, matching Modules 1 and 2.
- **Module 3 runs 10 lessons, not the 19 the earlier outline listed.** Nine were cut, merged or folded on 2026-09-04. Read the "Module 3 Cuts" section of `outline.md` before drafting; it tells you which material is deliberately absent so you do not reinstate it. Four of those cuts were made after drafting: two on the evidence in the extraction notes, two because a verification pass found Modules 1 and 2 already taught the material.
- **Group setup is shared, so duplication risk is high.** Lessons 3.6 to 3.9 all render HTML. Say the shared premise once, in the lesson the outline assigns it to, and let the others assume it.

Working directory: `/Users/vikravardhan/Builds/Superhuman/claude-marketing-playbook`

## What you are building

"The Claude Playbook for Marketers" teaches non-technical marketers real AI use cases, curated from 36 practitioner sources. You are drafting lessons for one module of it.

Every lesson solves exactly one marketing use case. Setup is never a lesson.

## Read these first, in this order

1. `writing-principles.md` — all 36 rules, in full. These are binding.
2. `module-1.md` lines 530-767 — lessons 1.5 and 1.6, complete. **This is your voice target.** Do not describe it to yourself; read it and match it. 1.5 has no video, 1.6 has one, so between them you see both shapes. `module-2.md` is a second finished reference.
3. `prompt-references.md` — the depth every closing prompt must reach.
4. `outline.md` — the Module 2 section, for how your lessons sit beside the others.
5. Your extraction notes file (named in your individual assignment).

## The lesson template, exactly

```
## 2.X How To [Verb] [Object]        <- Title Case, "How To" phrasing, rule 31

[Hook paragraph. 1-2 sentences. Second person. The reader's actual situation.]

[Second paragraph. 1-2 sentences. The cost of that situation, concrete.]

### [Specific benefit-oriented heading]      <- rule 13, must stand alone
[1-2 sentence paragraphs. Concept before tool, rule 8.]
[Practitioner named with title and company exactly as the source states, rule 21.]
[Inline link to the specific source article on first attribution, rule 35. MANDATORY.]

### [Second section heading]
### [Third section heading]
### [Fourth section heading]

### Watch [Name] [do the specific thing]     <- ONLY if you have a real candidate
[1-2 sentences on what the clip shows.]
[![Title](https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg)](https://www.youtube.com/watch?v=VIDEO_ID)
*Channel, "Title" (VIEWS views — UNVERIFIED)*

### Try This In [module heading]
**Goal:** [one line, what this exercise produces]

**Steps:**
1. [One action per step.]
...

**Expected result:** [one line, what the reader should see]

### Copy This [Name] Prompt
```
## Role
## Task
## Context
**Field:** {{variable}}
## Output
### [Named output section]
### [Named output section]
```

**Personalize it further.** [One or two sentences on how to adapt or rerun it.]

---
```

## Hard constraints — these are pass/fail

- **400-500 words of reading prose per lesson.** Count prose only. Exclude the fenced prompt block, the video block, and the Try This steps. Slightly over is tolerated; 550+ is not. Four `###` sections lands on target. Six overshoots. Count your words before you hand the lesson over and state the number.
- **Four sections.** Five only if the material genuinely demands it.
- **Paragraphs are 1-2 sentences** (rule 30), with a blank line between nearly every pair.
- **Every lesson ends with a copy-paste prompt** at the depth of `prompt-references.md`: Role / Task / Context with `{{variables}}` / named Output sections. A checklist may substitute where a prompt makes no sense, and then it goes in a fenced code block (rule 10).
- **Every lesson links its source article inline on first attribution** (rule 35). No exceptions. If your notes do not carry the URL, say so rather than inventing one.
- **No em dashes** (rule 2). None.

## Project-specific overrides

`writing-principles.md` was written for an earlier guide about agentic coding. Where it collides with this project, these win:

- **Rule 16 does not apply.** Hands-on examples are marketing tasks, never coding tasks.
- **Rule 11 is superseded.** The hands-on heading is fixed per module and used everywhere in it without variation. Module 1 uses `### Try This In Claude Chat`, Module 2 uses `### Try This In Cowork`. Module 3 (Claude Code) needs its own, set once.
- **Rule 27's video ban is superseded.** Videos are part of this resource. Propose a candidate only when your extraction notes carry a real one, and mark the view count UNVERIFIED. Never invent a URL, a video ID, or a count. A lesson with no candidate simply has no video block, which is normal.
- **Rule 24 has two sanctioned exceptions.** The `Try This In Cowork` section and the closing prompt are ours by design. Everything else in the lesson must trace to a source. When the closing prompt is our reconstruction rather than the practitioner's own, say so plainly in the prose.
- **Rule 28 is Module 1 only.** Later modules may go deeper. Each module stays on its own surface and does not teach the next one.
- **Rule 34 holds.** No "Tools Required" section, no tool table. Name each tool inline where the practitioner uses it, linked on first mention (rule 19).

## Source fidelity

- Cite tools as-is. If the practitioner used Lovable or Gemini or Clay, say so, then bridge to Claude separately. Never quietly swap the tool.
- Preserve the source's own order and terminology (rule 23).
- Keep practitioner titles exactly as the source states them (rule 21). Never upgrade a title.
- **Write only from your extraction notes.** If a note is thin, or your notes do not cover something the outline implies, write the lesson around what you do have and flag the gap in your handover. Do not fill a gap with plausible detail. An invented number or an invented quote is the worst possible failure here.

## AI writing tics that get caught every time

Beyond the numbered rules, these three are the ones the author catches most:

- Sentences opening with "Most," "Many," "Some," "Every" as a population generalization (rule 32).
- Negate-then-correct twin sentences: "The fix is not X. The fix is Y." Includes the heading form "X Is The Y, Not The Z" and the standalone negation opener (rule 33).
- Announcing importance before saying the thing: "this is the key point," "the sentence the rest of the lesson rests on" (rule 36). Also "which is what makes X work" tacked onto a clause.

Scan your own draft for siblings of these patterns, not just exact matches.

## Handover format

Write your three lessons to the output file named in your assignment, in lesson order, separated by `---`. Do not write a module intro and do not write a module recap; the author handles both.

Then reply with:
1. Word count of reading prose for each lesson.
2. Any gap where your notes were too thin to support what the outline implied.
3. Any video candidate you proposed, with its URL and stated view count.
4. Anything you were unsure of and resolved by judgment rather than evidence.
