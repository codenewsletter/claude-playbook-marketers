# The Claude Playbook for Marketers: Full Outline

32 lessons across 3 modules, mapped from the 75 use cases in [use-cases.md](use-cases.md).

Every lesson solves one marketing use case. Setup is not a lesson. Each module opens with a short "Before you start" note that links to Anthropic's own documentation.

Lesson headings follow the "How To [verb] X" Title Case template.

---

## File Index

```
claude-marketing-playbook/
├── Sources/                    36 source files (35 PDFs + 1 transcript)
├── extraction-notes/           per-source notes Module 3 was traced against
├── writing-principles.md       rules to follow when drafting
├── use-cases.md                the 75 extracted use cases
├── outline.md                  this file
├── prompt-references.md        reference prompts for depth calibration
├── STATUS.md                   build status, priority order, open items
├── curation-brief.md           reusable brief for drafting agents
├── module-1.md                 Beginner, Claude Chat (11 lessons)
├── module-2.md                 Intermediate, Claude for Work (11 lessons)
└── module-3.md                 Advanced, Claude Code (10 lessons)
```

---

# MODULE 1: BEGINNER (Claude Chat)

11 lessons. Everything runs in a browser tab. No setup, no connectors, no terminal.

**1.1 How To Start Every AI Task With Real Context**
Barbara Jovanovic runs a six-figure content agency with zero employees. She never prompts from scratch, not even for a social post. Every piece starts from a transcript.
*Source: How I Run A 0-Employee Marketing Agency (MATG)*
*Actionable: transcript insight-extraction prompt*

**1.2 How To Give Claude Your Brand Voice And Product Facts Once**
One Project per client and per deliverable type. Voice samples, favourite writers, product facts, pieces the client already loved. Barbara loads 10-20 transcripts from one founder to answer "what would he say about this?" on their behalf.
*Source: How I Run A 0-Employee Marketing Agency (MATG)*
*Actionable: Project setup checklist and custom instructions template*

**1.3 How To Turn One Transcript Into A Week Of Social Posts**
One insight at a time, not the whole list. Give it the full transcript even when you write about one section. Ask for "punchy," which outperforms "concise."
*Source: How I Run A 0-Employee Marketing Agency (MATG)*
*Actionable: single-insight social post prompt*

**1.4 How To Make AI Writing Sound Like You**
The banned-words list. No "ensure," no "in the realm of," no question-as-transition, no "this isn't just about" negations. Barbara dictates rather than types, because you give more context when you speak.
*Source: How I Run A 0-Employee Marketing Agency (MATG)*
*Actionable: style-constraint block to paste into any prompt*

**1.5 How To Build An Edit Rubric From Your Own Past Edits**
Hilary Gridley, head of core product and AI at Whoop. Originals in column A, your edits in column B, then ask what patterns repeat. Turn those into five pass/fail criteria your team can use.
*Source: 3 fixes for AI slop in your marketing content (MATG)*
*Actionable: rubric-extraction prompt*

**1.6 How To Write Social Hooks That Stop The Scroll**
Kieran Flanagan builds a hook skill loaded with frameworks from writers he rates. Hand it a post, get hooks back plus the formula and why each one works.
*Source: Claude Skills: Build Your Own AI Experts (MATG)*
*Actionable: the hook skill*

**1.7 How To Run Deep Research That Produces A Reusable Playbook**
Do not ask for an answer. Ask for a 30-page book of principles, then feed that into the build prompt. Includes Greg Brockman's four-part prompt structure and the assistant that writes your prompts for you.
*Source: We Used AI to Build the World's Best Landing Page; Use This Prompt Engineering Tool (MATG)*
*Actionable: deep-research playbook prompt*

**1.8 How To Research Your Buyer By Simulating Them**
Matt Swulinski simulates a specific buyer. What they read, what they think about, how they decide. Then he builds landing, onboarding, and product experience for that person.
*Source: 20VC / Matt Swulinski*
*Actionable: ICP simulation prompt*

**1.9 How To Check If Your Brand Appears In AI Search**
Ask the question your customer would type, not your brand name. Low visibility with decent sentiment is a presence problem, not a reputation problem. Carries Aja Frost's finding that an LLM visitor is worth more than four times a search visitor.
*Sources: How to check if your brand shows up in AI search; How to Rank #1 in ChatGPT Results (MATG)*
*Actionable: visibility audit prompt set*

**1.10 How To Turn Marketing Data Into An Executive Summary**
Katherine Riddick at OneDigital feeds pipeline data and prompts for two or three paragraphs written for her leadership. Marketing impact, pipeline progression, revenue.
*Source: Your ads aren't failing — your benchmarks are (MATG)*
*Actionable: exec summary prompt*

**1.11 How To Generate On-Brand Images With A Modular Prompt Formula**
Rory Flynn's non-negotiables. Shot type, subject and action, environment, colour scheme, camera and lens, film stock, mood, lighting. Prompt each one and you know which word to change.
*Source: AI Tools to Replace Your $10k+ Creative Agency (MATG)*
*Actionable: modular image prompt template*

---

# MODULE 2: INTERMEDIATE (Claude for Work / Cowork)

11 lessons. Claude gets access to your files, your tools, and a schedule.

**2.1 How To Analyze Hundreds Of Files At Once**
Kieran Flanagan points Cowork at 100 podcast transcripts plus a CSV of YouTube analytics and asks one open question. Lenny Rachitsky ran 320 transcripts for top lessons.
*Source: Claude Cowork Just Did 7 Days of Work in 15 Minutes (MATG)*
*Actionable: corpus analysis prompt*

**2.2 How To Turn An Analysis Into A Presentation Deck**
Ask for a deck instead of a document when the output goes to a team. Claude codes the slides and builds the charts.
*Source: Claude Cowork Just Did 7 Days of Work in 15 Minutes (MATG)*
*Actionable: deck generation prompt*

**2.3 How To Edit Google Docs, Sheets, And Slides In Place**
Keanan Koppenhaver tested tables, comments, formulas, and Drive organization, and documents what does not work.
*Source: Can Claude actually edit your Google Docs? (CCFM)*
*Actionable: Workspace task prompt set*

**2.4 How To Define Your ICP, Personas, And Messaging**
Elaine Zelby, co-founder of Tofu, builds these three first. Everything else assembles on top and stays consistent because of them.
*Source: MKT1, Elaine Zelby*
*Actionable: three foundation prompts*

**2.5 How To Build A Weekly Lookalike Outbound Agent**
Reads closed-won deals from HubSpot weekly, finds 10 lookalike companies, gets 3-5 contacts each from Clay, drafts a 4-email sequence plus LinkedIn DMs, posts drafts to Slack for review.
*Source: MKT1, Elaine Zelby*
*Actionable: agent build spec*

**2.6 How To Schedule Recurring Marketing Tasks**
Barbara runs a daily news task per client vertical instead of scrolling X. Keanan runs a monthly content fact-check.
*Sources: How I Run A 0-Employee Marketing Agency; The blog posts you forgot about (CCFM)*
*Actionable: three scheduled task prompts*

**2.7 How To Map Your Marketing Process To Find Wasted Hours**
Jamie Hill, lead program manager for HubSpot's Product Marketing team, saved 800 hours. Draw every handoff. Add an intake bot that chases missing fields. Then his reversibility-against-impact matrix for what to automate.
*Source: Mapping chaos: The exercise that saved us 800 hours (MATG)*
*Actionable: process mapping prompt and automation decision matrix*

**2.8 How To Build A Reviewer For Each Recurring Deliverable**
Hilary Gridley built dozens, each scoped to one exact use case. Exec emails, A/B test design, problem statements. The narrower the scope, the more accurate the feedback.
*Source: 3 fixes for AI slop (MATG)*
*Actionable: single-purpose reviewer template*

**2.9 How To Build An Interactive Lead Magnet That Captures Emails**
Sabrina Ramonov built an AI readiness and ROI calculator in Lovable in five minutes. Her vibe-coded directory drew 37,000 visitors in 90 days.
*Source: The AI System That Built a 1.4M Audience (MATG)*
*Actionable: lead magnet build prompt*

**2.10 How To Build An Internal Marketing Tool From Your Tab List**
Lazar Jovanovic, GTM engineer at Lovable. Count the tabs you always have open while you plan an event. That list is your spec.
*Source: How to use AI to build your own event management tool (MATG)*
*Actionable: tab-audit-to-spec prompt*

**2.11 How To Personalize Your Website For Different Visitor Segments**
Pam Vaughan on HubSpot's web strategy team replaced free-signup CTAs with demo CTAs for people already on the free tier. Demo conversion rose 560%, from 38 to 258 demos a month.
*Source: The Simple Website Personalization That Increased Conversions by 560% (MATG)*
*Actionable: personalization rule-builder prompt*

---

# MODULE 3: ADVANCED (Claude Code)

10 lessons in four groups. Cut from 19 on 2026-09-04; see "Module 3 cuts" at the bottom of this file.

### Research and Competitive Intelligence

**3.1 How To Research A Competitor And Produce A Report**
One prompt, five minutes, pricing and features and reviews synthesized. Save to markdown so the work persists between sessions. Introduces skill creation as the mechanism.
*Source: How I use Claude Code to research competitors (CCFM)*

**3.2 How To Track Competitor Ads Automatically**
Kamil Rextin, Founder of 42 Agency. Builds the competitor list from G2 and TrustRadius, scrapes the LinkedIn Ad Library, tracks ad volume, outputs a branded PDF in 5 minutes. Includes the GitHub and Railway deploy so it runs without his laptop.
*Source: MKT1, Kamil Rextin*

**3.3 How To Make Every Claude Session Build On The Last**
A local markdown vault Claude reads and writes, plus Matt Swulinski's session-end skill, which distils the session into the vault so each one compounds. The daily log accumulates in Claude memory; the skill is what moves it across. Scoped to memory and continuity only. Module 1.2 already taught loading brand voice and product facts; do not re-teach it here.
*Sources: Using Obsidian as Claude Code's second brain (CCFM); 20VC*

### Content Operations

**3.4 How To Turn One Search Console Export Into A Ranked To-Do List**
One CSV, two filters, two outputs. Top-30 queries no post targets become new post ideas; positions 5 to 15 with 30+ impressions, grouped by page and sorted by impressions, become the refresh queue. Validate either list through DataForSEO instead of a $100 monthly subscription; his own six-keyword check cost nine cents. Koppenhaver's own run surfaced a query he ranked 17th for with 503 impressions and zero clicks, which turned out to need a phrasing fix rather than a new post.
*Source: SEO on autopilot (CCFM), workflows 1, 2 and 3*
*Merged 2026-09-04 from two separate lessons. Same export, same session, same prompt shape; the source itself chains them.*

**3.5 How To Automate Your Email Broadcasts**
Claude researched the Kit API and wrote the script. Encodes subscriber targeting, timezone handling, and a dry-run mode. Eight steps became four.
*Source: How I automated my email marketing with a Claude Code skill (CCFM)*

### Design and Visual Assets

**3.6 How To Make On-Brand Featured Images From HTML**
Author a 1280x720 HTML card with your real hex codes and font files. Render with Playwright at 2x. One brand config, then every post is swap the headline and render. Carries the brand-token setup step in the one form the source states it: hand Claude your hex codes, fonts and dimensions once and have it write the template and config.
*Source: Give every blog post an on-brand featured image (CCFM)*

**3.7 How To Build Infographics And Cheatsheets As HTML**
Image models garble text and force full regeneration for every tweak. HTML gives you "move this up 20px" as a CSS change. A print stylesheet turns Cmd+P into a pixel-perfect PDF. The Chrome DevTools MCP appears here as the source uses it: crawl a site to extract palette, typography, spacing tokens and component patterns before building, then let Claude view its own rendered page and fix it.
*Source: Why I stopped using AI image generators for infographics (CCFM)*

**3.8 How To Build A Presentation Deck In HTML**
Generate 5-10 themes with a live switcher. Pull a real brand's palette off their website. Outline by interrogation. Then ask for the same-style one-page PDF takeaway. The source shows four prompts and no code, so this lesson teaches the process and does not attempt to teach how to present the finished HTML.
*Source: How I built a 14-slide presentation in an hour (CCFM)*

**3.9 How To Build A Landing Page In An Evening**
One brief with the goal, the constraint, and "ask me questions one at a time." Six questions, 13 minutes of building, one iteration prompt four minutes later, 21:42 of Claude working inside about 42 minutes of wall clock. The source never names a host: the whole deploy is "I told Claude to push the PR up to GitHub and I deployed it." Do not name a platform, and do not promise shipping the lesson cannot teach. Its limits list, what 21 minutes does not get you, is the honest close.
*Source: Build your first landing page with Claude Code in 20 minutes (CCFM)*

### Agentic Systems

**3.10 How To Build A Self-Improving Marketing Workflow**
Matt Swulinski, who was head of growth at Wispr Flow until December, ran a newsletter sponsorship system that negotiates rates, writes the copy, builds every link and its conversion tracking, then decides whether to continue with a partner from how those links performed. Between 70 and 120 unique newsletter providers at a given point. The loop in his words: "it knows all of every link's performance and can say this copy works this doesn't. So the next time it generates copy it's based on all historic data." Koppenhaver's weekly chained SEO report is a one-paragraph aside in his source, which says outright "that system is a story for another post," so mention it as a direction and do not build it out.
*Sources: 20VC / Matt Swulinski; SEO on autopilot (CCFM)*

## Module 3 Cuts

**Cut 2026-09-04, before drafting.** Module 3 went from 19 lessons to 10. The goal is not lesson count. The first five cuts were made from the outline; two more after extraction, when the notes showed what the sources actually contain; and two more after verification, when an audit against the finished Modules 1 and 2 found the material already taught.

- **3.11 How To Extract A Brand Guide From Your Website — cut, source missing.** The outline mapped it to *Why I stopped using AI image generators*, but that article does not teach brand extraction. It spends one paragraph on it and links to a separate post, "building a brand guide with the DevTools MCP," which is not in `Sources/`. The featured-image article does the same. Drafting the lesson would have meant synthesising a workflow from two passing mentions, which rule 37 bans. The sourced sentence now sits inside 3.9 and 3.10 as the setup step both authors put it in.
- **Former 3.4 and 3.5 — merged into the new 3.4.** Same Search Console export, same session, same prompt shape; only the filter changes. The source chains them explicitly and the DataForSEO validation belongs to both.
- **3.17 How To Subtitle Your Videos Locally — cut.** A local whisper.cpp install whose payoff is a captions file. The least marketing-shaped use case in the module.
- **3.9 How To Mine Your Call Transcripts For Content — cut.** Overlaps 1.1 and 1.3, which already teach turning a transcript into content. The Granola MCP connection was the only new part.
- **3.18 How To Grade Your Homepage Positioning — cut.** Two skills bolted together. Vempaty's humanizer duplicates 1.4 and 2.8's single-purpose reviewer; Kramer's grader is another instance of the reviewer pattern 2.8 already teaches. The "Strategy Review" group goes with it, leaving five groups.

**How To Fix Internal Links Across Your Whole Blog, 3.5 in the 14-lesson numbering — folded into the content-audit lesson after extraction.** Its source gives it five sentences and says outright "I wrote about this one in detail in the /goal command post, so I'll give you the short version." That post is not in `Sources/`. The goal string, the 30 posts and the four minutes survive as a second example inside the content-audit lesson.

**How To Make Motion Graphics Without After Effects, 3.13 in the 14-lesson numbering — cut after extraction.** No composition code, no install, no project structure, no render specs, and only one fully verbatim prompt; the other is the author's own paraphrase. The three embedded videos render as blank players, so there is no clip to cite either. Building a lesson would have meant reconstructing the workflow.

**How To Audit Old Content For Outdated Claims, 3.5 in the 12-lesson numbering — cut after verification.** Module 2's lesson 2.6 is built from the same article and already teaches the `fact-check` skill, the URL input, the parallel research agents, the four-bucket report by name, the 22-claim run, the connector catch and the rerun cadence. What was left was three decay statistics and a stop step. The internal-link sweep folded into it goes too.

**How To Turn One Piece Of Content Into Ten Social Posts, 3.6 in the 12-lesson numbering — cut after verification.** Module 1's lesson 1.3 already teaches turning one long piece into social posts, and opens on the same premise that asking for ten posts at once produces ten you will not publish. The brainstorm conversation, the platform skills and Typefully scheduling were the only new material.

Five sources are now unused: *You're already 'creating content'* (CCFM) and *How I subtitle videos with Claude Code* (CCFM). Emily Kramer and Aditya Vempaty drop out of the MKT1 source; Kamil Rextin still carries it in 3.2.

Considered and kept: **3.9 and 3.10** both render HTML instead of prompting an image model, but the author calls them "the two halves" of making blog visuals without a design tool, and a 500-word lesson cannot carry both the Playwright render pipeline and the print stylesheet.

---

## Where The Non-Workflow Sources Go

**Cut 2026-09-04.** *Why a content framework beats a content calendar* was slated as lesson 2.12 (campaign simulation). The article gives it one 34-word bullet with no quotes and no numbers, and the episode it teases spends roughly 43 seconds on simulation at 2.9k views, below the video bar. Module 2 runs 11 lessons instead.

Five sources carry evidence, not workflows. They get woven into the lessons they support rather than becoming lessons.

- **The Collapse of Organic Marketing.** The visit-to-scrape data. Google moved from 2:1 to 18:1, OpenAI from 250:1 to 1,500:1. Supports the AI search lesson.
- **How to Rank #1 in ChatGPT Results.** Aja Frost at HubSpot. LLM visitors worth more than 4x. Specificity beats quality. Mentions matter more than backlinks. Supports the AI search lesson.
- **Reddit's Growth Advisor.** Kevin Indig on vertical-specific SEO fragmentation. Supports the SEO lessons.
- **Why SurveyMonkey's Marketing Leader Says Your Foundation Is Broken.** Katie Miserany on random acts of marketing. Supports the ICP and messaging lesson.
- **How An Obsession With Quality Led Emily Kramer to 48k Subscribers.** The quality bar. Supports the content production lessons.
