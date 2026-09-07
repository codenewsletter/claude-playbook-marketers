# Marketing Use Cases Extracted from Sources

**Sources:** 14 Claude Code for Marketers posts (Keanan Koppenhaver) · 19 Marketing Against the Grain articles (HubSpot) · 1 MKT1 Newsletter (Emily Kramer) · 1 20VC podcast (Harry Stebbings × Matt Swulinski)

**Tiering rule used**
- **Beginner — Claude Chat (claude.ai):** one conversation, uploaded files, Projects, chat-level skills. No filesystem, no write-back to your tools.
- **Intermediate — Claude for Work / Cowork:** local folder access, connectors (Drive, HubSpot, Slack, Gmail), multi-step agentic runs, scheduled tasks, real deliverables. No terminal.
- **Advanced — Claude Code:** terminal, scripts + APIs, MCP servers, skills that execute code, cron/deployed agents, repo work.

`[non-Claude source]` = the source demonstrated this with another tool (Gemini, Lovable, Midjourney, ChatGPT). Included because the use case transfers; noted so you can decide whether to rebuild it in Claude.

---

## BEGINNER — Claude Chat

### Content & Copy

**1. Transcript → insight extraction**
Feed a webinar, podcast, sales call, or founder interview transcript and ask it to pull the genuinely insightful moments, with timestamps. The core "never start from a blank page" move — the entire 0-employee agency runs on this.
*Sources: How I Run A 0-Employee Marketing Agency; You're already creating content*

**2. One insight → one social post (one at a time)**
Take a single extracted insight, hand it the full transcript for context, and ask for one punchy post. Doing them one-by-one beats batching — batching produces mush and makes hallucinations hard to spot.
*Source: How I Run A 0-Employee Marketing Agency*

**3. A per-client / per-deliverable Project as a context store**
One Project per client, and separate ones per deliverable type (blog vs. social). Load it with voice and tone samples, favourite writers, past pieces the client loved, product facts. Instructions matter more than the files.
*Source: How I Run A 0-Employee Marketing Agency*

**4. A founder/exec persona you can query**
Drop 10–20 transcripts from one person into a Project, then ask "did he ever talk about X? what would his phrasing be?" Lets a team answer on a busy founder's behalf without booking their time.
*Source: How I Run A 0-Employee Marketing Agency*

**5. A negative-constraint style rule set**
A maintained list of banned words and structures — no "ensure," no "in the realm of," no question-as-transition ("The goal?"), no "this isn't just about…" negations, no metaphors or jargon. Prompt it up front instead of editing it out later.
*Source: How I Run A 0-Employee Marketing Agency*

**6. Voice-first prompting**
Dictate instead of type. You naturally give far more context when speaking, and context is what determines output quality.
*Source: How I Run A 0-Employee Marketing Agency [Superwhisper]*

**7. An edit rubric built from your own past edits**
Put 10–20 originals in column A and your edits in column B, upload, ask "what patterns do you notice in the edits I make over and over," then convert those into five pass/fail criteria. Paste the rubric into a Project as a system prompt — now the whole team edits to your standard.
*Source: 3 fixes for AI slop (Hilary Gridley, Whoop)*

**8. Treat slop as a first draft, not a failure**
Frame the workflow as draft → feedback → improve. When AI-sounding copy lands on your desk, name it and send it back for a human spin rather than rewriting it yourself.
*Source: 3 fixes for AI slop*

**9. Hook generation from a proven framework**
A skill loaded with hook structures from writers you rate. Hand it a post, get hooks back plus the formula and why each works.
*Source: Claude Skills: Build Your Own AI Experts*

**10. A mini problem-solver**
A skill encoding your own thinking method — root cause, what matters most, smart options — for the small daily problems that don't deserve a meeting.
*Source: Claude Skills: Build Your Own AI Experts*

### Research & Strategy

**11. Deep research → a 30-page style guide, not an answer**
The highest-leverage prompt pattern in the sources: don't ask for a report, ask for a reusable book of principles on a topic (landing pages, brand systems, a marketing tactic). Then feed *that* into the build prompt. The gap between "write me a landing page" and "write me a landing page using this 33-page guide" is the whole game.
*Source: We Used AI to Build the World's Best Landing Page [Gemini Deep Research]*

**12. A prompt engineer as a saved assistant**
Stop writing prompts. Save a template (goal / return format / warnings / context) into a custom assistant, then just describe what you want and let it produce the prompt. Also: ask for citations of exactly where each claim came from.
*Source: Use This Prompt Engineering Tool*

**13. Deep-research prompts with a declared deliverable format**
Five components: context, assignment, objectives + key metrics, scope + priorities, deliverable format. The last one is the one everyone skips — tell it the research output must be formatted to feed the *next* prompt.
*Source: Use This Prompt Engineering Tool*

**14. Research → templated output (video outline, blog outline, thread)**
Swap the deliverable and the same research engine produces a timed 30-minute YouTube outline, a blog outline, or a thread. Built by feeding in transcripts of formats that already worked for you.
*Source: Use This Prompt Engineering Tool*

**15. Templatize any marketing tactic into an execution guide**
Point deep research at a tactic you admire and have it produce the step-by-step recreation guide plus the prompts an AI needs to run it.
*Source: Use This Prompt Engineering Tool*

**16. Multi-model cross-editing**
Run a prompt through one model, then ask a second to improve it. They edit each other's work meaningfully. Several practitioners in these sources cross-reference between two or three models by default.
*Source: Use This Prompt Engineering Tool; How I Run A 0-Employee Marketing Agency*

**17. ICP simulation for research**
Prompt the model to simulate a specific buyer — what they read, what they think about, how they decide — then build landing, onboarding, and product experience for that person. How you unlock the next audience after fatiguing your current one.
*Source: 20VC / Matt Swulinski*

**18. AI search visibility check**
Ask the question your customer would actually type (not your brand name) and see if you appear. Then separate the two failure modes: low visibility + decent sentiment is a presence problem, not a reputation problem.
*Source: How to check if your brand shows up in AI search*

**19. Executive summary generation from marketing data**
Feed pipeline and campaign data and prompt for a tight two-to-three paragraph story about marketing impact, pipeline progression, and revenue — written for your specific leadership.
*Source: Your ads aren't failing — your benchmarks are (Katherine Riddick, OneDigital)*

**20. Daily industry news briefing as a scheduled task**
One recurring task per client vertical. Replaces the compulsive Twitter scroll that was "part of the job."
*Source: How I Run A 0-Employee Marketing Agency*

**21. Chat with a data export**
Upload a CSV and ask for the numbers — "this quarter vs. last year." Replaces the analyst you used to Slack for a Tableau pull.
*Source: How I Run A 0-Employee Marketing Agency*

### Creative

**22. Modular prompt formula for photorealistic assets**
The non-negotiables of any image: shot type, subject + action, environment, colour scheme, camera + lens, film stock, mood, lighting. Prompt each one explicitly and iteration becomes surgical — you know exactly which word to change. Start condensed, add complexity later.
*Source: AI Tools to Replace Your $10k+ Creative Agency (Rory Flynn) [Midjourney]*

**23. Extract a visual brand profile from a set of images**
Drop 20 images into a model, have it extract the style guide, then enforce that guide via system prompt across every asset you generate.
*Source: AI Tools to Replace Your $10k+ Creative Agency*

**24. Reverse-engineer any image you like**
Screenshot something, ask "what are the building blocks of this image," and you have the formula in ten minutes.
*Source: AI Tools to Replace Your $10k+ Creative Agency*

---

## INTERMEDIATE — Claude for Work / Cowork

### Analysis at Volume

**25. Analyse your entire content archive against performance data**
Point it at a folder of 100+ transcripts plus a CSV of YouTube analytics, then ask an open question: "generate a new podcast format that will drive more subscribers." It reads the data, samples top performers, asks you what deliverable you want and what your constraint is, then produces the answer. Seven days of work in fifteen minutes.
*Source: Claude Cowork Just Did 7 Days of Work in 15 Minutes*

**26. Mine a very large corpus for principles**
320 podcast transcripts → top lessons. The specific unlock over chat is that you're not limited by what you can upload into a context window.
*Source: Claude Cowork (Lenny Rachitsky example)*

**27. Generate a presentation deck as a real deliverable**
Ask for a deck instead of a doc when the output needs to be shared with a team. It codes the slides in HTML, builds charts, and hands you something openable in Keynote.
*Source: Claude Cowork Just Did 7 Days of Work in 15 Minutes*

### Connected Workflows

**28. Customer-lookalike outbound agent** *(the flagship connected build in the sources)*
Weekly: reads deals that moved to closed-won in HubSpot in the last 7 days, pulls the structured call data, identifies 10 lookalike companies from those attributes + your ICP definition, finds 3–5 contacts each via Clay, drafts a 4-email sequence plus LinkedIn DMs per contact, and drops the drafts into Slack for human review. Scheduled natively; no external scheduler.
*Source: MKT1 — Elaine Zelby, co-founder of Tofu*

**29. Build foundational skills before you build any agent**
The prerequisite Elaine names explicitly: build reusable skills for **ICP, personas, and messaging** first (plus product info). Everything else assembles on top of those and stays consistent because of them.
*Source: MKT1 — Elaine Zelby*

**30. Google Docs / Sheets / Slides editing in place**
Cowork runs inside Workspace with permissions already granted — polish a doc, rewrite an exec summary, edit a table cell, build a deck for tomorrow. Zero setup. The right choice for one-off work and anything needing visual judgment.
*Source: Can Claude actually edit your Google Docs?*

**31. Scheduled content freshness checks**
Run a fact-check or refresh audit against key posts on a monthly cadence from the GUI, no terminal required.
*Source: The blog posts you forgot about are losing you traffic*

**32. Programmatic email and admin at volume**
Generating large volumes of emails, job descriptions, partner outreach, and responses to a backlog of DMs — the mundane operational tier of marketing work.
*Source: Claude Cowork Just Did 7 Days of Work in 15 Minutes*

### Systems & Ops

**33. Process mapping to find where time actually dies**
Physically draw your workflow: every handoff, dependency, and bottleneck. You see problems you're blind to while doing the work. Handoffs are almost always the first place to look. Saved one team 800 hours.
*Source: Mapping chaos (Jamie Hill, HubSpot)*

**34. An intake bot that chases missing information**
Single unified intake form; AI scans every new asset for missing critical fields, and doesn't just flag the gap — it prompts the right person with the right question, repeatedly, until the info is complete.
*Source: Mapping chaos*

**35. Dependency-aware timeline management**
Not just setting due dates: understanding dependencies, adjusting whole workflow chains automatically, and predicting delays by raising priority when an asset is trending late against historical patterns.
*Source: Mapping chaos*

**36. Eliminate manual handoffs**
Auto-create the next task and notify the next assignee on upload, so work gets pushed rather than waiting to be pulled. This is the difference between 2 product marketers and 50.
*Source: Mapping chaos*

**37. The reversibility × impact matrix for what to automate**
Easy-to-reverse + low-impact → automate outright. Easy + high → automate with human review. Hard + low → decide on gut, adjust later. Hard + high → fully human-owned. Plus: know who gets white-glove treatment and never automate them.
*Source: Mapping chaos*

**38. Build many tiny specific tools, not one second brain**
One for exec emails, one for A/B test design, one for problem statements. The more narrowly scoped, the more accurate the feedback. Dozens of them, each one exact use case.
*Source: 3 fixes for AI slop (Hilary Gridley, Whoop)*

**39. Event management tool, built to spec from your own tabs**
Count the tabs you always have open while planning an event — that list is your spec. Then test the whole flow before shipping (create a user, sign them up, waitlist them, send the email) and audit what it exposes: PII, admin guardrails, role-based access.
*Source: How to use AI to build your own event management tool (Lazar Jovanovic, Lovable)*

**40. Vibe-coded micro-app lead magnets**
An interactive quiz + ROI calculator that scores readiness, estimates annual savings, recommends next steps, and captures email — five minutes to a working version. Also: single-page directories as traffic assets (37k visitors in 90 days). Code has replaced the PDF report as the lead magnet format.
*Source: The AI System That Built a 1.4M Audience (Sabrina Romanov) [Lovable]*

**41. Website personalization by segment**
Replace free-signup CTAs with demo CTAs for visitors already on the free tier. Demo conversion +560%, 38 → 258 demos/month from one page, with zero cost to free signup volume. Segment on list membership, business size, and buying stage.
*Source: The Simple Website Personalization That Increased Conversions by 560% [HubSpot smart content]*

**42. Simulate campaign outcomes before launch**
Predict which customers and creatives are likely to convert and identify weak spots pre-launch. Plus creator seeding at scale: filter for creators who posted in the last 30 days, of a given size, who mentioned specific keywords.
*Source: Why a content framework beats a content calendar (Jack Henry × Oren John)*

---

## ADVANCED — Claude Code

### Web & Landing Pages

**43. Build and ship a landing page in ~20 minutes**
One heavy brief containing the goal, the constraint ("match existing styles"), and the instruction that does the real work: **"ask me questions one at a time."** Six questions, six answers, no code. Then 13 minutes of building, one subtractive iteration prompt, PR, deploy. Brief heavy, iterate light — the inverse of how most people use AI.
*Caveat the source is honest about: it will not give you meta description, OG tags, query caching, accessibility, or analytics unless you ask.*
*Source: Build your first landing page with Claude Code in 20 minutes*

**44. Extract a brand guide from your own website**
Point the Chrome DevTools MCP at your site (or anyone's), pull the colour palette, typography system, spacing tokens, and component patterns, and assemble a design-system reference every later asset inherits. The one-time setup that makes everything downstream on-brand.
*Source: Why I stopped using AI image generators; Give every blog post an on-brand featured image*

**45. Personalized landing pages matched to specific ads**
A page that says exactly what the ad said, including the creator's face — tested as a lever before killing an underperforming campaign.
*Source: 20VC / Matt Swulinski*

### SEO & AEO

**46. Find keywords you rank for but never targeted**
Input: Search Console CSV + your list of target keywords. Output: queries in the top 30 with 20+ impressions that no post of yours targets, grouped. Google has already decided you deserve to rank — the strongest signal available for what to write next. Some gaps are new posts; some are just a secondary keyword on an existing post.
*Source: SEO on autopilot*

**47. Validate those keywords against real volume**
Pipe the gap list into DataForSEO for volume and competition. Nine cents for a six-keyword check, versus $100+/month for a tool subscription. Where the data disagrees with your own impressions, trust your impressions.
*Source: SEO on autopilot*

**48. Build a striking-distance refresh queue**
Queries at positions 5–15 with 30+ impressions, grouped by ranking page, sorted by impressions. This is a ranked list of where an hour of your time pays off most.
*Source: SEO on autopilot*

**49. Internal link audit and fix**
Give it the goal "every post should have at least 2 internal links to other published posts, verify the count for each file" and walk away. 30 posts fixed in four minutes. The single easiest first workflow — the input is just your own files.
*Source: SEO on autopilot*

**50. Content decay / fact-check audit as a skill**
Reads any article, extracts every verifiable claim (pricing, dates, feature availability, comparison claims), shows you the claims grouped by topic so you can skip the ones you know are fine, then spins up a **parallel research agent per claim group** — official docs for features, pricing pages for pricing, changelogs for versions. Returns a report split into Needs Update / New Information to Add / Consider Removing / Still Accurate, each with confidence level and source URL. Then makes the edits in your files, or via WordPress/Docs MCP.
*Why it matters: 76% of monthly blog views come from old posts; content decays ~1.2%/week; only 33% of marketers audit even twice a year; AI-recommended content is 25.7% fresher than organic results. HubSpot saw +106% organic traffic from refreshing old posts; Shopify recovered one post from 3k to 35k monthly visitors.*
*Source: The blog posts you forgot about are losing you traffic*

**51. Competitor sitemap and publishing-velocity monitoring**
Have an agent crawl every competitor's sitemap and count how many pages they ship per week. (Answer in the source: 100–200/week, mostly slop — which is what *not* to do.)
*Source: 20VC / Matt Swulinski*

**52. Competitive research report in one loop**
"How does X compare to Y? Produce a comprehensive competitive report in Markdown." It searches pricing, features, integrations, reviews, and synthesizes — five minutes. Always have it save to a markdown file so the work persists between sessions and can be iterated on. Put your company, audience, and tone in `CLAUDE.md` so you stop repeating yourself.
*Source: How I use Claude Code to research competitors*

**53. LinkedIn ad library competitive intel agent**
Run it against any URL: it first builds the competitor list by calling a separate `/competitors` skill (which pulls from G2 and TrustRadius), then scrapes each company's LinkedIn ads, analyzes messaging themes, and tracks ad volume over time. Output is a branded PDF in about 5 minutes. **Deployed properly:** code in GitHub, hosted on Railway/Vercel, cron-scheduled — because a Claude Code agent can't run if your laptop is closed. Later extended to Meta and Google ad libraries.
*Source: MKT1 — Kamil Rextin, 42 Agency*

**54. Competitor changelog monitoring → Slack, every morning**
*Source: CCFM (referenced)*

### Content Production

**55. One piece of content → 10 platform-specific social posts**
Transcript in. Then — critically — **brainstorm before you execute**: ask it to pull themes, argue about which ones matter, add the point you made at the 20-minute mark. Then generate with platform-specific skills (`/tweet`, `/linkedin`) that carry voice calibration, platform structure, a preflight checklist for context and a postflight checklist for quality. Review for 10 minutes. Schedule via the Typefully API from the terminal. ~30 minutes total.
*Source: How to turn one piece of content into 10 social posts*

**56. Mine your own call transcripts for social content**
Connect the Granola MCP; ask it to scan the week's meetings for moments where you shared an insight, explained something well, or challenged conventional thinking. It distils rather than quotes (real speech is rambly). Three to five usable insights per week is typical. **You don't have an ideas problem, you have a capture problem.**
*Source: You're already 'creating content'*

**57. Email broadcast automation as a skill**
Built with `skill-creator`, which interviews you about your workflow rather than making you write code. Claude researched the Kit API itself and wrote the Python script. Encodes the details you'd otherwise get wrong: subscriber targeting (only tagged subscribers, excluding anyone mid-welcome-sequence), timezone handling, and a dry-run mode. Eight steps became four, and only the two requiring judgment survived.
*The general principle: the best automations aren't the ones doing something you can't do — they're the ones removing just enough friction that you do the thing consistently.*
*Source: How I automated my email marketing with a Claude Code skill*

**58. WordPress as a publishing target via MCP** — draft-to-publish without leaving the terminal.
*Source: CCFM (referenced)*

**59. Obsidian as a persistent context layer**
A local markdown vault holding brand voice, competitor research, content calendar, client notes — with a `CLAUDE.md` at the root telling Claude what's in there and where. Stops research scattering across your desktop and makes every past piece of work available to every future session. Back it up before letting Claude make bulk changes.
*Source: Using Obsidian as Claude Code's second brain*

**60. A session-end skill that makes work compound**
At the end of any session, a skill distils what you worked on, the framing, what got accomplished, what's outstanding, and every decision and learning — and writes it into a node-based Obsidian log. You can then walk back to any day, and the agent builds the interrelationships for you ("you hit this wall a week ago, you solved it today"). Called out as the single highest-leverage habit in the podcast.
*Source: 20VC / Matt Swulinski*

### Design & Visual Assets

**61. Featured images as HTML → PNG**
Author the image as a 1280×720 HTML card with your real hex codes and font files as CSS variables, then render with Playwright at `deviceScaleFactor: 2`. A one-time brand config file, then every post is: copy template, swap headline, swap one visual, render. Packaged as a skill so it's one instruction.
*The rule: text + exact brand → render from HTML. Illustrative or photographic, no text → use an image model.*
*Source: Give every blog post an on-brand featured image*

**62. Infographics and cheatsheets as HTML instead of image generation**
Image models garble text, invent labels, and force a full regeneration for every tweak — you lose the three things you liked while fixing the one you didn't. HTML gives you "move this chart up 20px" as a CSS change. Add a `@media print` block with `print-color-adjust: exact` and Cmd+P gives you a pixel-perfect PDF. And next quarter you edit a few lines instead of regenerating.
*Source: Why I stopped using AI image generators for infographics*

**63. Presentation decks in HTML, without opening Keynote**
Move 1: use `/frontend-design` to generate 5–10 themes with a live theme switcher so you can see every direction side by side, then have it pull a real brand's palette off their website as an eleventh option. Move 2: outline by interrogation — "ask me questions one at a time." Move 3: ask for a same-style one-page PDF takeaway with clickable links, which is the part people actually keep.
*Where this pattern goes next: sales one-pagers and battle cards, landing page mockups, gated PDFs and lead magnets, internal reports nobody reads as a doc.*
*Source: How I built a 14-slide presentation in an hour*

**64. Motion graphics via HyperFrames (HTML → MP4)**
Video as a web page: Claude writes the composition, `npx hyperframes preview` and `render` run from the chat. The reason it beats generated video is that a composition is *editable* — when something's wrong, one line changes and the rest stays put. Plan first ("figure out where in the script these graphics go, then write the prompts to build them"), hand over references and intent rather than a pixel spec, then refine, never restart.
*Source: How I make motion graphics with HyperFrames*

**65. Automated B-roll sourcing and cutting**
One prompt: "find well-known, recognizable people and news anchors saying [phrase]." It searched YouTube, pulled transcripts, located the exact timestamp in each, and used ffmpeg to cut each clip with a buffer. Run under `/goal` so it loops the whole list unattended. You just pick which ones to keep.
*Source: How I make motion graphics with HyperFrames*

**66. Video subtitles via a local Whisper skill**
Checks prerequisites, extracts audio, transcribes locally with whisper.cpp (3m40s video → 14 seconds), then a cleanup pass. Seeds the transcription with your brand and product names so proper nouns come out correctly cased on the first pass — the signature failure of every auto-captioner. Nothing gets uploaded anywhere (matters for client work and embargoed content) and it's $0 whether you caption one video or forty.
*It still mistranscribed "Claude Code" as "Cloud Code" four times — which is exactly why the skill ends with a deliberate review step. The tool does 98%; the built-in review catches the 2% that would have been embarrassing.*
*Source: How I subtitle videos with Claude Code*

**67. Story-format video → YouTube ad reformatter**
Most teams avoid YouTube because their UGC library is all vertical story format. Build a template that drops a vertical video into a static 16:9 frame with customer logos, a G2 rating, and a CTA — the video is the only replaceable asset. Every story ad becomes a YouTube ad.
*Source: 20VC / Matt Swulinski*

**68. AI photoshoot replacement at scale**
Modular prompting: define a character (gender, age, body type), describe the clothing via system prompt so the model wears it every time, then batch prompts split by delimiter to generate front / side / ¾ / action in parallel. One image branches to six angles, six to sixty; 1,000 images in 20 minutes. Built for fast-fashion SKUs with short lifespans. Images then serve as keyframes for image-to-video, which holds branding consistent across frames in a way text-to-video can't.
*At that point the job becomes curation, not creation.*
*Source: AI Tools to Replace Your $10k+ Creative Agency [Midjourney, Weave]*

### Strategy Skills

**69. Homepage positioning checker**
Type the skill plus any URL. It scores hero and full page separately with letter grades against your positioning framework, checks whether the core positioning questions are answered, and returns concrete fixes including rewritten headlines. Rules for headline length, CTA evaluation, and different guidance for early- vs. late-stage.
*How it was built — the transferable part: give Claude a framework you already trust, then test the skill on real homepages. Four rounds of iteration across four real companies took it from 60% to 90%.*
*Source: MKT1 — Emily Kramer*

**70. Marketing strategy / advantages skill**
Two phases. "Identify" walks you through four rounds of questions to surface your top advantages from 12 categories. "Review" pressure-tests stated advantages for specificity, maturity, and strength — forcing clarity on whether something is a real growth catalyst or a tactic dressed up as strategy. Validated by comparing its output against feedback the author had already written by hand.
*Review processes are the single best place to start building skills — most of us already use AI to review copy and plans; structuring that into a skill is strictly better.*
*Source: MKT1 — Emily Kramer*

**71. Humanizer skill**
Scores near-final drafts across four categories (AI likeness, authenticity, reader value, domain credibility) on a 1–10 scale, diagnoses what's driving the scores (over-structured formatting, generic transitions, predictable phrasing), then rewrites in your voice — baselined on paragraphs you actually wrote. **After every run, ask Claude how the skill itself should be updated**, so it gets sharper with each use.
*Source: MKT1 — Aditya Vempaty, MoEngage*

### Marketing OS & Agentic Systems

**72. A self-improving newsletter sponsorship system**
The most complete agentic marketing workflow in the sources. A sponsor emails; the agent recognizes it as a newsletter request, asks for rates, researches the audience, and runs the first pass of negotiation. Human approves the partner and the contract. Then the agent ingests cost data, writes the copy, builds every link, sets up conversion tracking, sends everything to the partner, and — because it has historical performance for every link and every piece of copy it has written — decides whether to continue with that partner against CPM and conversion thresholds. Next time it writes copy, it writes from all prior performance.
*Built as Claude Code + a folder system + skills and MD files, with cron checking email at 9, 12, and 6, bubbling decisions into Slack. It let one person manage 70–120 newsletter partners.*
*Source: 20VC / Matt Swulinski*

**73. A full weekly SEO/analytics reporting system**
The endpoint of chaining the individual SEO workflows: keyword gaps feeding volume validation, striking-distance filling the refresh queue, link audit cleaning up after every post — plus analytics, email stats, and page-speed checks — running weekly and emailing a Sunday morning report with prioritized fixes and post ideas.
*Run the single-input workflows by hand first. Automate only once you know what "good" looks like.*
*Source: SEO on autopilot*

**74. Meeting-recorder → commitments audit**
At the end of each day, ingest all recorded meetings and ask: what did I promise to do on a call that never made it into a to-do list? That becomes tomorrow's list.
*Source: 20VC / Matt Swulinski*

**75. AI call grader with delegated prioritization**
Every call graded and stack-ranked out of 10 across five variables. Prioritization fully delegated to the ranking. Works because the decision tree was thought through up front — you can trust the system because it's built on your framing.
*Source: 20VC (Harry Stebbings, on 20VC's own investment process)*

---

## CROSS-CUTTING PRINCIPLES

Not use cases, but the rules that recur across sources and should probably frame the playbook.

**Never start from a blank page.** Every strong workflow in these sources starts from something real — a transcript, a Search Console export, your own edits, closed-won deals, your existing site. The ones that fail start from "write me a LinkedIn post about marketing."

**Ask me questions one at a time.** Appears independently in the landing page build, the deck build, and the skill-creator session. Without it you get one of two failures: Claude guesses at a decision only you could make, or it dumps a batched list you have to answer all at once.

**Brief heavy, iterate light.** The inverse of typing something vague and refining. Front-load context; the iteration round at the end is for removing things you didn't realize you didn't want.

**Build foundational skills before agents.** ICP, personas, messaging, voice, positioning. Everything else assembles on top and stays consistent because of them.

**Iterate on real examples, not hypotheticals.** Emily Kramer: four rounds against four real companies, 60% → 90%. Aditya: feed the skill your real edits. Do the work manually first, then compare.

**Have the skill improve itself.** After each run, ask Claude what the skill should learn from this. Every use makes the next one better.

**Use Plan mode before building anything complex.** Map the output, confirm the structure, then switch to execute step by step.

**Code is easier to control than pixels.** Runs through featured images, infographics, decks, and motion graphics. When your visuals are defined as code you get to edit them like code — one line changes, everything else stays put, and it's versioned and diffable.

**Keep the review step.** The tool does 98%; a deliberate review catches the 2% that would have been embarrassing. Every workflow that held up in these sources plans for being wrong.

**Systems thinking is the actual skill.** Swulinski's hiring bar: can you step one degree back from a task, map your whole job as a system with its inputs, outputs, and boring admin, and identify what an agent should own? Most people can't — which is why they ask ChatGPT a question and then go do their job the manual way.

**Fewer things, better.** Stop random acts of marketing (Kramer / Miserany). Don't run a million channels poorly (Swulinski). Don't make content just because you now can (Barbara). AI levels the best-practice playing field — use it for the technical work and your brain for something remarkable.

---

## COVERAGE NOTE

Weighted heavily toward **content operations** — writing, repurposing, SEO, images, video, decks, research. Genuinely thin on:

- **Paid acquisition.** The 20VC transcript is the only real source. It's excellent (conversion tracking before spend, 400–500 creatives/month, UGC creator programs, Meta+Google+lifecycle as the core three, elasticity testing, incrementality, fully-loaded CAC including trial credits) but it's strategy, not AI workflows.
- **Lifecycle / email beyond broadcast automation.** No nurture, no segmentation, no churn.
- **Analytics and attribution.** Named as the thing 90% of companies skip, but no source shows the build.
- **Referral, affiliate, and creator programs.** Rich strategy in 20VC (referral tied to usage limits, credits for LinkedIn posts, 10–15% revshare affiliates driving 10–15% of monthly acquisition) with no AI execution layer attached.
