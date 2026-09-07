# Build Status

Last updated 2026-09-07, end of session 4.

## Session 4 summary (2026-09-07)

Refinement pass across all 32 lessons in all three modules, per the session 3 priority order (step 1: refine content). All changes are live in `module-1.md`, `module-2.md`, `module-3.md`. Nothing below is pending re-application.

1. **Every lesson opening restructured.** Cut the generic two-sentence scene-setter and the first side heading in each lesson; every lesson now opens by naming the practitioner, their role/title, and a self-contained concrete hook, so a reader who jumps into one lesson without reading the module in order still gets full context. Paragraphs split so no opener runs longer than ~2-3 sentences.
2. **Quotation marks cleaned up resource-wide.** Kept quotes only for a person's actual attributed words or a literal prompt/instruction they typed verbatim (plus episode/article titles, by convention). Converted bare scare-quoted terms/labels/taglines to italics instead (e.g. *hook*, *table data*, *Managed Compute Platform*). Prompt templates inside code blocks were left untouched, since those quotes are literal characters meant to be pasted into Claude.
3. **All three module intros rewritten.** Non-technical, benefit-first, "AI-first marketer" framing instead of tool/setup mechanics (no more terminal/API language up front in Module 3). Short paragraphs, no em dashes, active/simple-tense prose per writing-principles.md. Module 1 dropped its "Before you start" line entirely (Vikra's call — not needed). Modules 2 and 3 kept one condensed line each, linking Anthropic's setup docs.
4. **Side headings reviewed across all three modules; 17 rewritten for clarity.** Fixed headings with vague pronoun references ("the rule," "the question," "half of the job") so each one stands alone and is specific, per writing-principles rule 13. Most headings were already clear and were left untouched — this was not a wholesale rewrite.
5. **Every "Copy This X Prompt" / "Copy These X" heading standardized to "Get Started Today"** across all 32 lessons (one universal heading, Vikra's call). Exception: 1.2's first of two copy blocks (a checklist) keeps its original heading "Copy This Project Knowledge Checklist" since it precedes the actual "Get Started Today" prompt block in that lesson.
6. **Fixed a duplicate lesson-index bug in Module 3** — the lesson list had 3.10 listed twice (once mislabeled "3.12"), both pointing at the same lesson. Now lists 3.1–3.10 correctly.
7. **Removed raw code blocks from lesson bodies in 3.6 and 3.7** (CSS variables, a Playwright JS script, a JSON config, and an `@media print` CSS block) — rewritten as plain-English descriptions, since the audience is non-technical marketers and real code syntax in the body (not inside the final prompt) risks overwhelming them. Checked all other lessons in all three modules: every other code-fenced block turned out to be a plain-English prompt or checklist (not real code syntax), so no further changes needed there. The only place real code now appears anywhere in the resource is inside each lesson's "Get Started Today" prompt, which is meant to be pasted into Claude, not read by the marketer.

**Content is now considered ready for the web build.** Vikra confirmed at the end of session 4 that no further markdown refinement is planned before moving to the website.

## Done

**Module 1 — Beginner, Claude Chat. Complete.**
11 lessons in [module-1.md](module-1.md). Average 502 words of reading prose per lesson, 2.3 minutes each.
- Audited against all 36 writing principles by a verification agent; 40+ violations found and fixed
- 13 inline links to source articles
- 6 video embeds, every view count verified directly on YouTube
- Every lesson ends with a copy-paste prompt or checklist
- 3 diagram opportunities marked inline as `*[Diagram: ...]*`

**Module 2 — Intermediate, Claude for Work / Cowork. Complete.**
11 lessons in [module-2.md](module-2.md). Average 488 words of reading prose, all 11 inside the 400-520 band.
- Built with 2 extraction agents, 4 curation agents drafting 3 lessons each, then 1 verification agent
- Audited against all 36 principles plus the project-specific overrides; findings fixed in a single-author pass
- 11 inline source links, one per lesson, each reaching the specific article
- 2 video embeds, both view counts verified directly on YouTube (44k, 26k)
- Hands-on heading standardized as "Try This In Cowork" across all 11
- Diagram slots marked inline for the decision matrix and the personalization screenshots

**Module 3 — Advanced, Claude Code. Complete.**
10 lessons in [module-3.md](module-3.md). Average 506 words of reading prose, all 10 inside the 400-520 band.
- Built with 5 extraction agents grouped by source, 4 curation agents drafting 3 lessons each, then 1 verification agent
- Cut from 19 lessons to 10 in three rounds; every cut logged with its reason in [outline.md](outline.md)
- Audited against all 36 principles with rule 37 traced sentence by sentence against the extraction notes
- 10 inline source links, every URL traced to a real PDF footer in the notes
- No video blocks: no Module 3 source carries a citable view count
- Hands-on heading standardized as "Try This In Claude Code" across all 10

## Priority

**Set 2026-09-04, updated 2026-09-07 at the end of session 4. Work in this order and do not jump ahead.**

1. ~~Refine the content until it is ready to become a web resource.~~ **Done as of session 4** (see summary above). Vikra confirmed the content is ready to move on.
2. **Build the web version.** Next session's work, split into three parts, in this order:
   1. **Design first.** Vikra brings design references and specifies what kind of web resource this should be (layout, style, structure) before any building starts.
   2. **Build the website.** Landing page, the three modules as pages, GitHub and Netlify. Markdown (`module-1.md`, `module-2.md`, `module-3.md`) is the source of truth for content going in.
   3. **Diagrams, last.** Only after the content is already live on the site: identify lessons where a descriptive passage of text would work better as an infographic or image, and build those. This is explicitly the final step of the web-build session, not something to do while building pages. The `*[Diagram: ...]*` inline notes already marked in the markdown (Module 1: 3 slots; Module 2: decision matrix + personalization screenshots; see per-lesson notes) are the starting candidates, but the session should also look for new candidates created by the session-4 rewrite.
3. **Improve the design of the web resource for readability**, once built. Colors, typography, general polish. Readability is the goal, not decoration.

**The content-refinement priority (old step 1) is met and retired as of session 4.** All three modules are drafted, refined, and confirmed ready. Do not reopen the markdown for further prose refinement unless Vikra explicitly asks — the next session's job is the website, not more editing.

**Note on the AI fluency quiz:** earlier session notes (project memory, session 1-2) described a landing-page quiz that scores the reader and routes them into a module. That is part of the original shipping plan and belongs somewhere in step 2 (build the website), but it was not addressed in session 4 and has no updated spec. Confirm with Vikra whether it is still in scope before building it.

**The resource summarises sources. It does not rewrite or synthesise them.** Rule 37. This governs drafting and
compression alike: when a lesson runs long, cut what the source did not say rather than paraphrasing further from it.
It governs refinement too, which is the whole of step 1.

## Next

**Step 2, build the website.** Start the next session by getting Vikra's design references and the spec for what
kind of web resource this is, before writing any site code. Then build. Diagrams come last, after content is live —
see Priority section above for the three-part breakdown Vikra set at the end of session 4.

The Open items list below (session 3 findings) was not fully worked through item-by-item in session 4 — session 4's
refinement pass addressed openings, quotes, module intros, headings, and code blocks, which resolved some of these
incidentally (e.g. the Koppenhaver title tension is now moot since every lesson opening states his role explicitly)
but not all. Skim the Open items list before the web build in case anything there still matters for site content
(e.g. the unverified YouTube view count, the reconstructed 20VC URL) — most are minor and may not block the build.

## Working method

1. Launch extraction agents in parallel, grouped by source, never by lesson count
2. Curation agents draft in parallel, each given the shared brief, the voice exemplars, and per-lesson source cautions
3. Author runs a single voice-and-accuracy pass over the assembled module
4. Run the verification agent against writing-principles.md, with the project-specific overrides stated explicitly
5. Fix findings, then re-measure summary lengths

The parallel-drafting variant works, but only with the brief plus the author pass. Four drafters produced one systemic tic
(the banned "X, Not Y" heading form, three instances, one self-caught) and a set of consistency seams that no single agent
could see: missing lesson separators at the group boundaries, split job-title casing, and a practitioner whose attribution
was fuller in Module 1 than in Module 2.

## Decisions, session 3

- **Module 3 shipped at 10 lessons, cut from 19 in three rounds.** Five from the outline before drafting, two after
  extraction, two after verification. Every cut is logged with its reason in [outline.md](outline.md).
- **A verification pass that reads the finished modules is worth more than one that reads the rules.** Two of the nine
  cuts came from the auditor comparing Module 3 against Modules 1 and 2, not from any principle.
- **The MKT1 PDF is clipped** and the live article is authoritative for that source.

- **Module 3 cut from 19 lessons to 14 before drafting.** Full rationale in the "Module 3 Cuts" section of
  [outline.md](outline.md). Two sources are now unused: *You're already 'creating content'* and *How I subtitle videos
  with Claude Code*, both CCFM.
- **3.3 rescoped** to session memory and continuity only, because 1.2 already teaches loading brand voice and product facts.
- **The MKT1 source PDF is a clipped print-to-PDF** and lost the end of every line. The Kamil Rextin section was
  re-fetched from <https://newsletter.mkt1.co/p/real-marketers-claude-code-builds> and appended to the group 1
  extraction notes as the authoritative text. Any future work touching that source should use the live article.
- **Keanan Koppenhaver carries no title anywhere.** Nine Module 3 sources, no byline title in any of them.
- **The featured-image and infographic lessons are both kept** even though both render HTML instead of prompting an image model. Koppenhaver calls them
  "the two halves" of making blog visuals without a design tool, and one 500-word lesson cannot carry both the Playwright
  render pipeline and the print stylesheet.

## Decisions, session 2

- **Module 2 runs 11 lessons, not 12.** Campaign simulation was cut. Its source gives it one 34-word bullet with no quotes
  and no numbers, and the episode it teases spends roughly 43 seconds on simulation at 2.9k views, below the video bar.
  Project total is now 41 lessons.
- **Sabrina Ramonov, not Romanov.** The outline had the surname wrong and the drafts inherited it. Corrected in both.
- **Barbara's daily news task is cited as ChatGPT, then bridged to Claude,** because she never names the product and never
  connects it to Claude.
- **The Code-versus-Cowork scheduling disagreement between two sources is left unresolved.** 2.6 teaches Cowork scheduling
  and does not adjudicate.

## Open items

- **Module 2 gives Koppenhaver a title and Module 3 does not.** `module-2.md` calls him "creator of Claude Code for
  Marketers" in two places. No source states a title, so Module 3 attributes him by name alone and Module 2 is the one
  that needs correcting. The resource currently contradicts itself.
- **Rule 19 and rule 35 are in tension over homepage links.** Module 3 links six official homepages the sources name
  without linking: Google Docs, G2, TrustRadius, Ahrefs, Playwright, and Anthropic's own docs in the module intro. None
  invents evidence. One consistent policy is needed, applied across all three modules.
- **The 20VC URL is reconstructed, though the video was checked.** The transcript carries a non-standard
  `youtube.com/watch/bm8rMM4Bxz8`; the canonical `?v=` form was verified to load the right interview, which is also
  where the Wispr Flow spelling came from. It is the sole citation for two lessons, so re-check it before ship.
- **Swulinski's role is past tense.** He was head of growth at Wispr Flow until December and has since moved. Both
  lessons say so; keep it that way if the text is ever tightened.
- **The `fact-check` and social-repurposing material is now unused.** Both sources were cut from Module 3 as duplicates
  of 2.6 and 1.3. If Module 2 or 1 is ever reopened, the decay statistics (HubSpot 76% and 106%, Animalz 1.2% weekly,
  Ahrefs 25.7%) and the internal-link goal sweep are worth folding into 2.6.

- **Module 1 has not been re-verified since the compression pass.** Roughly a third of the prose was rewritten to hit the
  length target, which is exactly what rule 37 now bans. The re-verification must audit for rule 37 specifically, tracing
  each sentence back to a passage in the source, not just re-run the tic sweep.
- **Module 2's trim pass needs the same rule 37 check.** The author pass cut over-band lessons partly by merging and
  tightening sentences. Cutting unsourced commentary is correct under rule 37; sentence-merging that moved the prose
  further from the source is not, and it was not audited under that lens because the rule did not exist yet.
- **Rory Flynn video view count unverified.** YouTube would not render metadata to two separate agents.
- **1.5 has no video.** The matching episode has only 2,736 views, below the quality bar.
- **Module 1 captions the 0-Employee Agency video at "151k+ views"; it now reads 162k.** Module 2's duplicate embed of that
  video was removed rather than run the same asset twice, so the stale caption is Module 1's only.
- **2.1's title says "Hundreds Of Files" while the lesson is explicit that Claude sampled** roughly a hundred transcripts
  rather than reading all of them. Prose is accurate; the title may overstate.
- **Sabrina Ramonov and Kieran Flanagan carry no title in Module 2 where sources do not state one.** Flanagan is placed from
  Module 1's own attribution; Ramonov is not placed at all.
- **Reconstruction disclosures sit under the "Copy This" heading in six lessons and in body prose in the rest.** Both are
  honest; the placement is not yet uniform.

## Deferred to later stages (next session, session 5)

- Website design references and spec (Vikra brings these first)
- Building the website itself: landing page, three module pages, GitHub repo, Netlify deploy
- AI fluency quiz and scoring logic (status unconfirmed — see note in Priority section above)
- Diagrams/infographics for descriptive passages, done last, after content is live on the site
