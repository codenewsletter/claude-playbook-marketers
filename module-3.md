# Module 3: Marketing Systems You Build In The Terminal

The first two modules taught you to work with Claude one conversation at a time.

This module is for AI-first marketers ready to build things that keep working after they close the laptop.

A competitor report finished in fifteen minutes. A partner workflow that learns from its own results and writes sharper copy next time, on its own.

You still write no code. Every marketer here described the outcome they wanted in plain English and let Claude handle everything underneath. That is the entire skill this module teaches.

**Before you start:** If you have not set up Claude Code yet, you can follow [Anthropic's instructions](https://docs.claude.com/en/docs/claude-code/setup) to set it up.

### Lessons In This Module

- [3.1 How To Research A Competitor And Produce A Report](#31-how-to-research-a-competitor-and-produce-a-report)
- [3.2 How To Track Competitor Ads Automatically](#32-how-to-track-competitor-ads-automatically)
- [3.3 How To Make Every Claude Session Build On The Last](#33-how-to-make-every-claude-session-build-on-the-last)
- [3.4 How To Turn One Search Console Export Into A Ranked To-Do List](#34-how-to-turn-one-search-console-export-into-a-ranked-todo-list)
- [3.5 How To Automate Your Email Broadcasts](#35-how-to-automate-your-email-broadcasts)
- [3.6 How To Make On-Brand Featured Images From HTML](#36-how-to-make-onbrand-featured-images-from-html)
- [3.7 How To Build Infographics And Cheatsheets As HTML](#37-how-to-build-infographics-and-cheatsheets-as-html)
- [3.8 How To Build A Presentation Deck In HTML](#38-how-to-build-a-presentation-deck-in-html)
- [3.9 How To Build A Landing Page In An Evening](#39-how-to-build-a-landing-page-in-an-evening)
- [3.10 How To Build A Self-Improving Marketing Workflow](#310-how-to-build-a-selfimproving-marketing-workflow)

---

## 3.1 How To Research A Competitor And Produce A Report

Keanan Koppenhaver, Claude Code's technical enablement lead at Anthropic, hands competitor research to Claude Code's built-in web search rather than tab-switching through a dozen sources by hand, and walked through one run in [how I use Claude Code to research competitors](https://claudecodeformarketers.com/blog/deep-research-competitor-analysis/).

He rules out Claude's [Research](https://support.claude.com/en/articles/11088861-using-research-on-claude) feature first, because it is not available natively in Claude Code yet. What he uses instead is the built-in web search, without leaving the terminal: Claude Code works in a loop, deciding what to do, using a tool like web search, looking at the result, then deciding the next step. For most competitor analyses, he says, this is more than enough.

### One Report, Nine Web Searches Deep

The prompt he quotes is a single line: "Can you tell me how Retool workflows compares to n8n? Produce a comprehensive competitive report in Markdown format."

The session he documents ran nine web searches. Each one ran two searches underneath it and took between 24 and 38 seconds.

The queries covered features and pricing for each platform, a head-to-head comparison, integrations for each, AI capabilities for each, and user reviews for each.

His comment on the trace: "Claude is doing the tab-switching for me, pulling from a ton of different sources and synthesizing as it goes." That search phase took about five minutes.

<div class="diagram-card">
<div class="flow-diagram">
<div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-title">One-Line Prompt</div><div class="flow-step-sub">Compare the two products, ask for a report</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-title">9 Web Searches</div><div class="flow-step-sub">~5 minutes, 24-38 seconds each</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-title">Saved To Markdown</div><div class="flow-step-sub">Persistent, editable, single source of truth</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">4</div><div class="flow-step-title">Pasted Into Google Docs</div><div class="flow-step-sub">90% of formatting transfers cleanly</div></div>
</div>
<div class="diagram-caption">The full path from a one-line prompt to a polished, shareable report, in about fifteen minutes.</div>
</div>

### Ask For A Markdown File So The Research Survives The Session

Koppenhaver always asks Claude Code to save its work to a markdown file. He adds one instruction: "Save this analysis to a file called competitor-analysis.md".

The information is then persistent between sessions and portable. He has a file he can return to, iterate on, or share.

The report that came back opened with an executive summary, then a comparison table with rows for best-for audience, pricing model, self-hosting, open source, integrations, code support and AI capabilities, then platform overviews.

Follow-up requests edit that same file, so it stays the single source of truth. His two examples are "Make the executive summary punchier" and "Add more detail to the pricing comparison".

### Paste The Markdown Into Google Docs When You Need To Share It

Copying markdown into [Google Docs](https://docs.google.com) works surprisingly well. Open the file, select all, copy, then use Edit > Paste from Markdown.

Headers, bullet points and bold text all transfer cleanly. Spacing may need a tweak, but "90% of the formatting just works."

Research, synthesis and polished report together took him about fifteen minutes.

### Try This In Claude Code

**Goal:** one markdown competitor report, researched and written in a single session.

**Steps:**

1. Pick one competitor you have been meaning to research.

2. Open Claude Code in a folder you will keep, not on your desktop.

3. Ask it to compare that competitor to your product and produce a comprehensive competitive report in Markdown format.

4. Watch the search calls as they run. Note which angles it covered and which it skipped.

5. Ask it to save the analysis to a file with a name you will recognise next month.

6. Read the draft, then ask for two edits by name, such as a punchier executive summary or more detail on pricing.

7. Open the file, select all, and paste it into Google Docs with Edit > Paste from Markdown.

**Expected result:** a markdown file with an executive summary, a comparison table and platform overviews, and a Google Doc of the same report that needs only spacing fixes.

### Get Started Today

The prompt quoted above is the one his article gives. This longer version is ours, built out around the report sections he says the workflow should cover.

```
## Role
You are a competitive analyst. You research a company using web search and
write a report a marketing team can act on.

## Task
Compare {{competitor}} to {{my-product}} and produce a comprehensive
competitive report in Markdown format.

Search for all of the following before you write anything: features,
pricing, integrations, AI capabilities, and user reviews, for both
companies.

Then save the finished report to a file called {{filename}}.md.

## Context
**What we do:** {{one-sentence-description}}
**Who we serve:** {{target-audience}}
**Where we think we win:** {{our-strengths}}
**Where we lose deals to them:** {{known-objections}}
**Tone:** {{professional-but-not-stuffy}}
**Who reads this:** {{strategy-meeting-team-boss}}

## Output

### Executive Summary
Who each product is best suited to, and why. Four sentences.

### Comparison Table
One row per factor: best for, pricing model, self-hosting, open source,
integrations, code support, AI capabilities. Add any other factor that
decides deals in {{our-category}}.

### Platform Overview
A short section on each product: what it does and who it is built for.

### Strengths, Weaknesses And Opportunities
For the competitor first, then for us.

### Key Takeaways For Our Team
The decisions this report should change. One line each.
```

**Personalize it further.** Keep the finished file and rerun the same prompt next quarter. Ask Claude to write the new report against the old one so you see what changed.

---

## 3.2 How To Track Competitor Ads Automatically

Kamil Rextin, founder of 42 Agency, built an agent to turn public competitor LinkedIn ads, twelve months of them, free, into a structured, ongoing intelligence report, and MKT1 documented it in [what real marketers are building with Claude Code](https://newsletter.mkt1.co/p/real-marketers-claude-code-builds).

MKT1 sets it up this way: gathering competitive intel is a common AI use case and the output is usually generic, while the [LinkedIn Ad Library](https://www.linkedin.com/ad-library) hides in plain sight. It is free, it covers the last 12 months of ads, and in B2B it is one of the highest-signal places to see how competitors approach performance marketing, positioning and brand.

### Map The Output In Plan Mode Before Anything Gets Built

Rextin starts complex builds the same way.

"For complex projects, I've learned not to just jump right in. I use Plan mode in Claude Code to map out the output first. Once that looks right, I switch and let it execute step by step."

He then switches to Ask Permission mode and lets Claude execute the plan step by step.

### Stack A Competitor Skill Underneath The Ad Skill

His agent runs as `/LinkedIn-ad-intel`. Give it any URL and it first pulls a list of competitors using his pre-made `/competitors` skill, which draws from [G2](https://www.g2.com) and [TrustRadius](https://www.trustradius.com).

Then it scrapes each company's LinkedIn ads, analyzes messaging themes, and tracks ad volume. Skills calling skills is the mechanic here.

<div class="diagram-card">
<div class="flow-diagram">
<div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-title">/LinkedIn-ad-intel</div><div class="flow-step-sub">You run it with a URL</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-title">/competitors</div><div class="flow-step-sub">Draws the list from G2 + TrustRadius</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-title">Scrape Each Company</div><div class="flow-step-sub">Their LinkedIn ads, last 12 months</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">4</div><div class="flow-step-title">Report</div><div class="flow-step-sub">Messaging themes + ad volume</div></div>
</div>
<div class="diagram-caption">One skill triggers another — the parent agent calls a smaller, reusable skill to build its competitor list.</div>
</div>

Expect the scraping half to break sometimes. LinkedIn's JavaScript restrictions stopped it, and Rextin's fix was to go back into Plan mode, where Claude inspected its own implementation, identified missing retry logic and proposed fixes.

He started narrow on purpose. Meta and Google ad libraries came later, because starting with LinkedIn alone made the build more manageable.

### Deploy It So It Runs While Your Laptop Is Shut

"If your computer isn't on and your terminal isn't running, a Claude Code agent can't run. If you want it hosted on the web, instead of being just on your laptop, you need to deploy it."

So he pushed the code to GitHub, which put it in the cloud and let him share it with team and clients.

Then he set up [Railway](https://railway.com/) and [Vercel](https://vercel.com/) to host the agents. He made those accounts in his browser, which he found easier and faster than creating them from inside Claude, then asked Claude Code to configure the integrations.

With both connected to GitHub, a push to GitHub updates everything. Railway runs the agent on a schedule via cron jobs, which MKT1 glosses as a scheduled task, such as run every Monday at 9am.

The output is a branded PDF report, generated automatically in about 5 mins. MKT1 links a download of the skill and a sample report, and concedes the build is a bit technical.

### Try This In Claude Code

**Goal:** a first run of competitor ad analysis, on your laptop, before any deployment.

**Steps:**

1. Open the LinkedIn Ad Library and search one competitor by hand, so you know what the data looks like.

2. Open Claude Code and switch to Plan mode.

3. Ask for a plan that builds your competitor list from G2 and TrustRadius, then collects each company's LinkedIn ads.

4. Read the plan and correct the report structure before you approve anything.

5. Switch to Ask Permission mode and approve each step.

6. When the scrape fails, go back to Plan mode and ask Claude to inspect its own implementation and propose retry logic.

7. Run it on one competitor only. Compare the output to what you would have written by hand.

**Expected result:** a report for one competitor covering their ads, their messaging themes and their ad volume, produced without scrolling the library yourself.

### Get Started Today

No prompt for this build appears in the source. MKT1 describes the agent's behaviour and not its instructions, so the prompt below is our reconstruction.

```
## Role
You are a competitive intelligence analyst covering B2B paid social.

## Task
Do not write any code yet. First give me a plan.

Build a repeatable report that, given the URL {{competitor-url}}:
1. Assembles a competitor set for that company from G2 and TrustRadius.
2. Collects each company's ads from the LinkedIn Ad Library.
3. Analyzes messaging themes across those ads.
4. Tracks ad volume per company over the period covered.

Show me the output structure before you build. I will approve it, then you
execute one step at a time and ask before each one.

## Context
**Our company:** {{what-we-do-in-one-sentence}}
**Our category as G2 names it:** {{g2-category}}
**Competitors I already know about:** {{names}}
**What I want to spot:** {{positioning-shifts-new-offers-spend-changes}}
**Who reads the report:** {{team-or-client}}

## Output

### Competitor Set
Each company, and the G2 or TrustRadius page it came from.

### Ad Volume
Ads per company over the period, and the direction of travel for each.

### Messaging Themes
The recurring themes per company, each with two example ads.

### What Changed
Differences against the previous run of this report. Say "first run" if
there is nothing to compare against.

### Gaps
Companies or ads you could not retrieve, and the reason. Do not fill a gap
with an estimate.
```

**Personalize it further.** Run it by hand for a month first. Deploy it only once the report is one you would send to a client unedited.

---

## 3.3 How To Make Every Claude Session Build On The Last

Keanan Koppenhaver, Claude Code's technical enablement lead at Anthropic, used to save Claude's work wherever was convenient in the moment, a competitor analysis on his desktop, content ideas in a folder, a draft post somewhere else, until the questions caught up with him: where was that research he did last month, and which version of that document was current?

He wrote it up in [using Obsidian as Claude Code's second brain](https://claudecodeformarketers.com/blog/obsidian-as-your-second-brain/).

### A Local Markdown Vault Is Something Claude Can Read Directly

Koppenhaver keeps everything in [Obsidian](https://obsidian.md/), and gives three reasons it fits Claude Code.

Everything is Markdown, which Claude already speaks, so there is no proprietary format and no export dance. Everything is local, so Claude Code reaches it through the filesystem. And it is built for linking notes to each other, which matters as research builds up.

<div class="diagram-card">
<div class="node-diagram">
<div class="node-hub">Obsidian Vault</div>
<div class="node-connector"></div>
<div class="node-spokes">
<div class="node-spoke"><div class="node-spoke-title">Markdown</div><div class="node-spoke-sub">The format Claude already speaks</div></div>
<div class="node-spoke"><div class="node-spoke-title">Local</div><div class="node-spoke-sub">Reachable through the filesystem</div></div>
<div class="node-spoke"><div class="node-spoke-title">Linked Notes</div><div class="node-spoke-sub">Built for connecting research over time</div></div>
</div>
</div>
<div class="diagram-caption">Three reasons Koppenhaver treats the vault as Claude Code's long-term memory rather than a note-taking app.</div>
</div>

His framing is to stop treating the vault as a note-taking app and treat it as Claude Code's long-term memory, which he credits to [Axton Liu's guide](https://www.axtonliu.ai/newsletters/ai-2/posts/obsidian-claude-code-workflows) and does not explain further.

### Point Claude At The Vault, Then Back The Vault Up

Create a vault, a folder where your notes live. Add a `CLAUDE.md` at its root. Then run `claude` from inside that folder, or pick it in the Claude Code desktop app.

The CLAUDE.md holds what the vault contains, pointers to files Claude should reference, and defaults for how you want it to work. Claude then knows what is in the vault without searching every time.

Before you let Claude make bulk changes to your notes, copy the vault somewhere safe.

His own competitor reports live in that vault now, so a later session builds on research an earlier one produced.

### End Each Session With A Skill That Distils It Into The Vault

A vault stores what you put in it. Matt Swulinski, who was head of growth at Wispr Flow until December, described [on 20VC](https://www.youtube.com/watch?v=bm8rMM4Bxz8) the skill he uses to put something in it: one he calls session end.

He triggers it by hand when a piece of work is almost done. Everything he puts through the terminal, all decisions, all open tasks, all learnings, accumulates in Claude memory as he works.

The problem he names is access: everything from a session sits in Claude memory, "but then you don't have access to that."

So session end "analyzes the session, distills what we worked on, what was the frame, you know, did we accomplish this thing, what are the outstanding items, and it moves that over into Obsidian."

That gives him a node-based record he can walk back through by day and watch grow into a web: a week ago you worked on something, hit a wall, came back today and solved it.

### Try This In Claude Code

**Goal:** a vault Claude writes into, and one end-of-session habit that keeps it current.

**Steps:**

1. Create an Obsidian vault, or point Obsidian at a folder of markdown files you already have.

2. Copy that folder somewhere safe before you go further.

3. Add a `CLAUDE.md` at the root of the vault. Say what the vault holds and name the files Claude should always read.

4. Run `claude` from inside the vault folder, or select the folder in the Claude Code desktop app.

5. Do one real piece of work in there, such as a competitor report, and let Claude save the output into the vault.

6. Before you close the session, run the session-end prompt below and check what it wrote.

7. Open the next session in the same folder and ask what you left outstanding last time.

**Expected result:** one dated note per session recording what you worked on and what is still open, and a second session that starts from the first instead of from nothing.

### Get Started Today

Swulinski names the skill and what it distils, but never shows its contents. The wording below is ours. Its first four sections are the four things he says the skill captures; the linking section is our addition.

```
## Role
You are the archivist for this working session. You write the note my next
session will read first.

## Task
The session is ending. Read back over everything we did in it and write one
dated note into {{vault-path}}/{{sessions-folder}}.

Distil. Do not transcribe the session.

Then link the note to any existing note in the vault it relates to, and say
in one line why they connect.

## Context
**Vault location:** {{vault-path}}
**Where daily notes live:** {{daily-notes-folder}}
**How I name files:** {{naming-convention}}
**Projects this session could belong to:** {{project-names}}

## Output
Write the note with these sections, in this order.

### What We Worked On
The task in two or three lines, in my words rather than yours.

### The Frame
The approach we took and the constraints we set. Enough that I can pick it
up cold in a month.

### What We Accomplished
What is finished and where the output is saved. Give the file path.

### Outstanding Items
What is unfinished, blocked, or deliberately deferred. One line each, each
one written as the next action.

### Connections
Existing notes in the vault this session touches, with one line each on the
link.
```

**Personalize it further.** Read the note at the start of your next session and mark what it left out. Add that as a field to the prompt.

---

## 3.4 How To Turn One Search Console Export Into A Ranked To-Do List

Keanan Koppenhaver, Claude Code's technical enablement lead at Anthropic, turns a Google Search Console export into a ranked to-do list by breaking it into small repeatable workflows, in [SEO on autopilot](https://claudecodeformarketers.com/blog/seo-on-autopilot-with-claude-code/): each one takes a single input and returns a single answer.

The input is a plain CSV from Search Console, which you get by clicking Export, with no pricey [Ahrefs](https://ahrefs.com/) subscription behind it. These sessions run many small analysis steps, so he recommends [auto mode](https://claudecodeformarketers.com/blog/claude-code-auto-mode/).

<div class="diagram-card">
<div class="flow-diagram">
<div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-title">Untapped Queries</div><div class="flow-step-sub">Top 30, 20+ impressions, no post targets it</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-title">Price The Shortlist</div><div class="flow-step-sub">DataForSEO volume, pennies per lookup</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-title">Refresh Queue</div><div class="flow-step-sub">Position 5-15, 30+ impressions</div></div>
</div>
<div class="diagram-caption">The same Search Console export run through three small, repeatable filters to produce a ranked to-do list.</div>
</div>

### Find The Queries You Rank For But Never Targeted

The first filter finds queries where Google ranks you and no post of yours targets them. Koppenhaver calls it his favourite: Google decided you deserve to rank without you trying, which he rates as the strongest signal there is about what to write next.

Every post on his blog declares a target keyword, so the prompt compares the export against that list.

```
Here's my Search Console query export and the list of keywords my posts target. Find queries where I'm ranking in the top 30 with at least 20 impressions, but no post of mine targets that query or anything close to it. Group similar queries together.
```

Against 90 days of his data, the query *how to use claude to write location pages* returned 225 impressions at position 21, a subject he has never written about.

A third result taught him something about the workflow. The query *lovable vs claude code* sat at 503 impressions and position 17 with zero clicks, and he does have that comparison post; it targets the phrasing with Claude Code first.

So a gap sometimes means refreshing an existing post with the variant as a secondary keyword.

### Price The Shortlist For Pennies Before You Write

Your ranking data says Google likes you for a query, not how many people search it. So he calls [DataForSEO](https://dataforseo.com/), which replaces the expensive subscription with per-lookup pricing: instead of $100+ a month, his six-keyword check cost nine cents. Claude Code calls the API directly once your credentials are in a file.

```
Take these keywords and get search volume and competition for each from DataForSEO. Return them as a table sorted by volume.
```

The location pages query returned no volume data at all, and that is why he does not treat this as a formula. His Search Console shows 225 real impressions for a query the keyword volume data says nobody searches.

When the sources disagree he falls back on a gut check: what people are actually asking about on Twitter and in his inbox. As he puts it, the hard numbers narrow the list, "but in the end, it's still my call."

### Pull Positions 5 To 15 Into A Refresh Queue

The third filter goes back to the same Search Console export, not to the priced shortlist. Positions 5 to 15 are where a modest improvement pays off most: page one or just off it, below where the clicks happen.

Note that the threshold moves here. This filter asks for at least 30 impressions, not 20.

```
From this Search Console export, find queries with at least 30 impressions where my average position over the last month is between 5 and 15. Group them by the page that ranks, and sort by impressions.
```

His own striking-distance report came back dominated by a dozen Claude-plus-Google-Docs variations between positions 6 and 10, all pointing at one post, which made refreshing it his top priority.

The output is a ranked refresh queue, so an hour on the blog no longer starts with deciding where to spend it.

### Try This In Claude Code

**Goal:** two lists from one export, a new-post list and a ranked refresh queue.

**Steps:**

1. Open Search Console, set the range to 90 days, and click Export to get the query CSV.

2. Write your existing target keywords into a second file, one per line, so Claude can compare against them.

3. Turn on auto mode and hand Claude both files with the top-30 filter prompt above.

4. Go through the returned queries and mark each one as a genuine gap or a phrasing gap against a post you already have.

5. Send the surviving keywords to DataForSEO for volume and competition, then read the volumes against your own impressions before you rank them.

6. Rerun the same export through the positions 5 to 15 filter to build the refresh queue.

**Expected result:** a grouped list of post ideas with volume attached, and a separate queue of existing pages sorted by impressions.

### Get Started Today

Koppenhaver runs three separate prompts. This combined version is ours, not his.

```
## Role
You are an SEO analyst. You work only from the data in the files I give
you and you never estimate a number that is not in them.

## Task
Read my Search Console export and my target keyword list. Produce two
separate lists.

List A: queries in the top 30 with at least 20 impressions that no
existing post of mine targets, or targets closely. Group similar queries.

List B: queries with at least 30 impressions where my average position
over the last month is between 5 and 15. Group them by the page that
ranks and sort by impressions.

Keep the two thresholds as written. They are not the same number.

## Context
**Search Console export:** {{path-to-csv}}
**My target keywords:** {{path-to-keyword-list}}
**Date range in the export:** {{days}}
**What my site is about:** {{one-sentence}}
**Phrasings I use for my own products:** {{how-you-name-things}}

## Output

### List A: Queries With No Post
Per group: the queries, total impressions, best position. Then say whether
this looks like a missing post or a missing phrasing on a post I already
have, and name the post you suspect.

### List B: Refresh Queue
One block per ranking page, sorted by total impressions. List every query
pointing at that page with its position, then one line on what the page
would need to move up.

### What You Could Not Classify
Queries you could not match to a page or a theme. I want to see these
rather than have you guess.
```

**Personalize it further.** Send only the genuine gaps from List A to DataForSEO, then read each volume against the impressions you already earn.

---

## 3.5 How To Automate Your Email Broadcasts

Keanan Koppenhaver, Claude Code's technical enablement lead at Anthropic, used to promote every new blog post by email manually, in [how he automated his email marketing with a Claude Code skill](https://claudecodeformarketers.com/blog/automate-kit-broadcasts-with-skills/).

That manual process ran eight steps. Finish the post, open Kit.com, create a broadcast, write a subject line, summarize the post in bullets, add the link, pick the right subscribers, schedule the send.

The cost was inconsistency. Some posts got promoted and some did not, and it had nothing to do with which posts were better.

<div class="diagram-card">
<div class="compare-wrap">
<div class="compare-col before">
<div class="compare-col-label">Manual — 8 Steps</div>
<div class="compare-steps">
<div class="compare-step"><span class="compare-step-num">1</span>Finish the post</div>
<div class="compare-step"><span class="compare-step-num">2</span>Open Kit.com</div>
<div class="compare-step"><span class="compare-step-num">3</span>Create a broadcast</div>
<div class="compare-step"><span class="compare-step-num">4</span>Write a subject line</div>
<div class="compare-step"><span class="compare-step-num">5</span>Summarize the post in bullets</div>
<div class="compare-step"><span class="compare-step-num">6</span>Add the link</div>
<div class="compare-step"><span class="compare-step-num">7</span>Pick the right subscribers</div>
<div class="compare-step"><span class="compare-step-num">8</span>Schedule the send</div>
</div>
</div>
<div class="compare-arrow">→</div>
<div class="compare-col after">
<div class="compare-col-label">Automated — 4 Steps</div>
<div class="compare-steps">
<div class="compare-step"><span class="compare-step-num">1</span>Finish the post</div>
<div class="compare-step"><span class="compare-step-num">2</span>Tell Claude Code to create and schedule the broadcast</div>
<div class="compare-step"><span class="compare-step-num">3</span>Review the draft</div>
<div class="compare-step"><span class="compare-step-num">4</span>Approve the schedule</div>
</div>
</div>
</div>
<div class="diagram-caption">This lesson builds the skill that makes the right-hand column real.</div>
</div>

### Let skill-creator Build The Skill For You

A skill is a set of reusable instructions, an SOP for Claude Code. In his words, "a prompt is just text" while "a skill is text plus context plus the ability to take real actions."

Claude Code ships with a built-in skill called `skill-creator`. His opening ask was one sentence: a skill that handles Kit.com broadcasts when he publishes a post, reads the post, writes the email, and schedules the send through the Kit API.

Skill-creator then asked what should trigger the skill, how to format the subject line, and whether to send or schedule.

### Let Claude Read The API Documentation So You Never Have To

Claude researched the Kit API documentation, worked out the right endpoints, and wrote a Python script that creates the broadcast.

The script takes a subject line, some HTML content, and a send time. It has a dry-run mode, so a test never emails the list.

"I didn't write a single line of that script." He described the behavior he wanted and Claude handled the implementation.

### Paste One Email You Wrote By Hand So The Template Sounds Like You

He pasted in an email he had hand-written and let Claude study it. He calls this the part where he had the most input.

The template is casual and scannable: a short greeting, a one-sentence description of the post, a few bullets on the key takeaways, and a link.

Subject lines open with `[CC4M]`. The sign-off is "Talk soon and happy Clauding," because that is what he says.

One rule sits in the template: the one-sentence description has to be specific about what the post covers.

### Three Mistakes The Skill Fixes That You Wouldn't Catch By Hand

**Subscriber targeting.** New subscribers are working through a welcome sequence, so a broadcast mid-sequence confuses them. The skill targets only subscribers with his `CC4M` tag and excludes anyone still in that sequence.

**Timezone handling.** He is in US Central. When he says 10am tomorrow, the skill converts it correctly.

**Dry-run testing.** A dry test shows exactly what would go out without sending it.

Four steps instead of eight: finish the post, tell Claude Code to create the broadcast and schedule it, review the draft, approve the schedule.

### Try This In Claude Code

**Goal:** a skill that drafts and schedules your post-announcement email from the post itself.

**Steps:**

1. Generate an API key in your email tool's account settings and have it ready.

2. In Claude Code, ask `skill-creator` for a skill that reads a published post, writes the email, and schedules the send through your email tool's API.

3. Answer its questions about the trigger, the subject line format, and whether to send or schedule.

4. Paste one announcement email you wrote by hand and ask Claude to derive the template from it, including your sign-off.

5. Name the details it must always handle: which subscribers to include, which to exclude, your timezone, and a dry-run mode.

6. Run a dry test and read what would have been sent.

7. When the dry run looks right, ask for a real broadcast scheduled for a specific day and time.

**Expected result:** a draft you review and a schedule you approve, with everything before those two steps already done.

### Get Started Today

His skill file lives in the [cc-skills repo](https://github.com/kkoppenhaver/cc-skills). The prompt below is ours, written from the behavior he describes.

```
## Role
You are my email operations assistant. You turn a published post into a
scheduled broadcast in {{email-tool}} without me opening that tool.

## Task
Build me a reusable skill I trigger by name.

When I point you at a post and give you a send time, you:
1. Read the full post.
2. Write the broadcast using my template below.
3. Create it in {{email-tool}} through its API and schedule it.
4. Show me the draft and the schedule before anything is created.

Research the {{email-tool}} API documentation yourself and write whatever
script the skill needs. I am not going to write it.

## Context
**Email tool:** {{email-tool}}
**Where my API key lives:** {{env-var-or-file}}
**Send to subscribers tagged:** {{tag}}
**Never send to:** {{sequence-or-segment-to-exclude}}
**My timezone:** {{timezone}}
**Subject line prefix:** {{prefix}}
**Sign-off:** {{your-actual-sign-off}}
**An email I wrote by hand:** {{paste-one-real-email}}

## Rules To Encode In The Skill
- The one-sentence description must say what the post covers, specifically.
  "Today's post is about some things I've been thinking about" fails.
- Always support a dry run that prints the full email and the target
  audience without creating anything.
- Convert every send time I give you into {{timezone}} before scheduling.
- Never create the broadcast until I approve the draft.

## Output

### The Draft
Subject line, full body, and the link, ready to read.

### The Audience
The tag you are sending to, the segment you excluded, and the count.

### The Schedule
The send time in my timezone and in the format the API received.

### What You Assumed
Anything you guessed because the post or my context did not say.
```

**Personalize it further.** Run it in dry-run mode at first, and edit the template each time you change the draft by hand.

---

## 3.6 How To Make On-Brand Featured Images From HTML

Keanan Koppenhaver, Claude Code's technical enablement lead at Anthropic, calls an AI image generator the wrong tool for featured images in [his HTML to PNG featured-image workflow](https://claudecodeformarketers.com/blog/give-every-post-a-featured-image-with-html-to-png/): image generators are often not great with text or your exact brand.

So he stopped asking a model to paint the card and started asking Claude to write it. The brand comes out exact, because you render from your real colors and fonts instead of describing them to a model and hoping. The whole approach is two steps: build the featured image as a 1280x720 HTML card, with your headline, one supporting visual, and your brand colors and fonts baked in as CSS, then render that page to a PNG.

<div class="diagram-card">
<div class="compare-wrap">
<div class="compare-col before">
<div class="compare-col-label">AI Image Generator</div>
<div class="compare-steps">
<div class="compare-step"><span class="compare-step-num">1</span>Describe your colors and fonts, and hope</div>
<div class="compare-step"><span class="compare-step-num">2</span>Text and exact brand often come out wrong</div>
</div>
</div>
<div class="compare-arrow">→</div>
<div class="compare-col after">
<div class="compare-col-label">HTML Card, Rendered To PNG</div>
<div class="compare-steps">
<div class="compare-step"><span class="compare-step-num">1</span>Real colors and fonts, baked in as CSS</div>
<div class="compare-step"><span class="compare-step-num">2</span>Render the finished card to a PNG</div>
</div>
</div>
</div>
<div class="diagram-caption">The brand comes out exact because it is rendered from your real tokens, not described to a model.</div>
</div>

This sounds like more work than Canva. It is less, because the first card takes a little setup and every card after that is copy a template, change the headline, swap one visual, and render.

### Put Your Brand At The Top Of The Card As CSS Variables

The card is a fixed-size element with your brand colors and fonts defined once at the top, then reused everywhere else on the card. Your real font file or Google Fonts link goes in the same place.

The colors are your colors, down to the hex, which is what he means by on-brand rather than close-ish.

Koppenhaver puts the accent color on the one key phrase in the headline and leaves everything else in the primary text color.

### Render With Playwright At 2x So The Text Stays Crisp

A short script using [Playwright](https://playwright.dev/), a tool that opens a webpage the same way a browser does, turns the finished card into an image. It captures just the card itself, so there is no cropping to do by hand.

The one detail that matters is rendering at 2x resolution, so the text stays crisp on retina screens. Run the script against a new post and you get a ready-to-use image at 2560x1440.

### Answer *What Is My Brand* Exactly Once

The setup that makes this repeatable is a small settings file that records your brand once: your colors, fonts, and card dimensions.

You hand Claude your brand one time: hex codes, font files or Google Fonts names, and dimensions. It writes the reusable template and the settings file for you.

He packaged it as a Claude Code skill called `featured-image`, so the workflow is now him saying "make a featured image for this post."

### Choose HTML Or An Image Model Based On The Image Type

His rule is simple. If the image is text plus exact brand, a headline card, a quote graphic, a stat callout, render it from HTML.

If the image is illustrative or photographic, a hero scene, a mood, an abstract concept with no text, reach for an AI image model like Nano Banana.

Knowing which half you are in, he says, saves you a lot of fighting with the wrong tool.

### Try This In Claude Code

**Goal:** one brand template and one render script, so every future featured image is a headline swap.

**Steps:**

1. Pick a folder for your images. Koppenhaver keeps an `infographics/` folder at the root of his blog repo, and the template, the script, and the config all live there.

2. Ask Claude Code to install Playwright and its headless Chromium into that folder. The browser binary is cached globally, so you download it once.

3. Hand Claude your brand: colors as hex codes, fonts as font files or Google Fonts names, and your dimensions. Ask it to write `brand-template.html` and the config file. This is the step you do exactly once.

4. Render a test card on the template to confirm the fonts load and the colors are right. Tweak, re-render.

5. For your next post, copy the template, change the headline, swap the visual, and run the script.

**Expected result:** a 2560x1440 PNG in your real colors and typefaces, produced in the time it takes to write a headline.

### Get Started Today

The article shows the files rather than the prompt behind them. The prompt below is ours, written from the four setup steps Koppenhaver lists.

```
## Role
You are my design engineer. You build me a reusable featured-image
template that renders from HTML to PNG, and you write all the code.

## Task
Set this up once in {{folder}}:

1. Install Playwright and headless Chromium in that folder.
2. Write brand-template.html: a single 1280x720 card with my brand
   tokens declared as CSS variables at the top and used everywhere.
3. Write a config file recording my dimensions, fonts, and tokens.
4. Write the render script that screenshots only the card element at
   deviceScaleFactor 2.
5. Render one test card so I can check the fonts and colors.

## Context
**Brand colors as hex:** {{background}}, {{text}}, {{accent}}
**Heading font:** {{font-file-path-or-google-font}}
**Accent font:** {{font-file-path-or-google-font}}
**Card dimensions:** {{width}}x{{height}}
**Where my posts live:** {{repo-path}}
**A post to test with:** {{post-title}}

## Layout Rules
- Headline is the dominant element. One accent-colored phrase in it,
  everything else in the primary text color.
- One supporting visual below or beside the headline. Nothing else.
- No stock imagery, no gradients I did not ask for.

## Output

### The Files
brand-template.html, the config, and the render script, written to
{{folder}}. Show me each one.

### The Test Card
Render it and tell me the output path and pixel dimensions.

### What To Change Per Post
The exact lines I edit for the next post, and nothing else.
```

**Personalize it further.** After a few cards, ask Claude to turn the folder into a named skill you trigger by asking for a featured image.

---

## 3.7 How To Build Infographics And Cheatsheets As HTML

Keanan Koppenhaver, Claude Code's technical enablement lead at Anthropic, put the same content through an image generator and through HTML, and published the pair in [why he stopped using AI image generators for infographics](https://claudecodeformarketers.com/blog/why-i-stopped-using-ai-image-generators-for-infographics/): same three-column layout, same information about Claude Code's Hooks, MCP Servers, and Skills.

The generated version had garbled code snippets, made-up descriptions, and text barely readable at normal zoom. It labelled MCP *Managed Compute Platform* instead of *Model Context Protocol*. The HTML version had accurate code examples and every detail exactly where it should be.

He names three failure modes: text rendering is unreliable, layout control is basically nonexistent, and every iteration is a full re-generation. "You can get something that looks 80% right pretty fast. But that last 20% is where you lose hours."

<div class="diagram-card">
<div class="donut-row">
<div class="donut">
<svg width="118" height="118" viewBox="0 0 120 120">
<circle cx="60" cy="60" r="50" fill="none" style="stroke:var(--line)" stroke-width="14"/>
<circle cx="60" cy="60" r="50" fill="none" style="stroke:var(--orange)" stroke-width="14" stroke-dasharray="251.3 314.2" stroke-linecap="round" transform="rotate(-90 60 60)"/>
</svg>
<div class="donut-value">80%</div>
</div>
<div class="donut-label">An AI image generator gets you to <strong>80% right pretty fast</strong> — but the remaining 20% is where you lose hours to garbled text and layout you cannot control.</div>
</div>
<div class="diagram-caption">The last fifth of an AI-generated infographic costs more time than the first four-fifths combined.</div>
</div>

### Crawl A Real Site First To Get The Palette And Type System

Before any code, Koppenhaver had Claude Code use the Chrome DevTools MCP, one of the servers in [his MCP round-up](https://claudecodeformarketers.com/blog/giving-claude-code-superpowers-with-mcp-servers/), to crawl Anthropic's website and extract its visual identity: color palette, typography system, spacing tokens, and component patterns.

Claude assembled that into a design system reference and built on top of it.

### Give The Content Direction In One Prompt

With the design system already in the conversation, he gave it the content direction.

> Build me a one-page cheatsheet covering Hooks, MCP Servers, and Skills. Three columns, one per feature. Each column should have a brief description, a code example, and key details as bullet points. Use the Anthropic brand system you just extracted.

What came back was a single self-contained HTML file. No dependencies, no build step, just open it in a browser.

It had syntax-highlighted code examples, SVG icons per feature, and a decision bar summarizing when to use each one.

Asking to make the code blocks darker is one CSS rule changing, and everything else stays exactly the same.

He also used the DevTools MCP so Claude Code could see its own work in Chrome and fix rendering issues, instead of him describing problems back to it.

### Add A Print Stylesheet And Cmd+P Gives You The PDF

There is a way to tell a webpage how it should look specifically when it gets printed or saved as a PDF, separate from how it looks on screen. Ask Claude for a print stylesheet and it sets the page to landscape, tightens the margins, and switches the background to white.

One setting in that stylesheet matters most: it stops the browser's save-ink default from stripping the color out of your dark code blocks and icons when the page prints.

Hit Cmd+P, save as PDF, and you have a document that looks like it came out of a design tool. No export plugin, no paid subscription.

He updates that cheatsheet next quarter by changing a few lines of HTML. The content lives in code, so it is versioned, diffable, and maintainable.

### Try This In Claude Code

**Goal:** a one-page cheatsheet as a single HTML file that prints to a clean landscape PDF.

**Steps:**

1. Point Claude Code at a site whose visual identity you want, using the Chrome DevTools MCP. Ask it to extract the color palette, typography system, spacing tokens, and component patterns into a design system reference.

2. Give it the content direction: the topic, how many columns, and what each column contains.

3. Open the file it produces in a browser.

4. Ask for one targeted change at a time, in plain language.

5. Let Claude view the rendered page in Chrome and fix the rendering issues it spots itself.

6. Ask for an `@media print` block, then hit Cmd+P and save as PDF.

**Expected result:** a self-contained HTML file with no build step, and a landscape PDF where the dark code blocks still print dark.

### Get Started Today

His content brief is quoted above. The prompt below is ours, and carries the brand extraction, the build, and the print export.

```
## Role
You are a document designer who works in HTML and CSS. You build
information-dense reference documents where every word and number is
exact.

## Task
Build me a one-page {{document-type}} as a single self-contained HTML
file. No dependencies and no build step.

Before you write any code, use the Chrome DevTools MCP to crawl
{{brand-url}} and extract its visual identity: color palette, typography
system, spacing tokens, and component patterns. Assemble that into a
design system reference and build on top of it.

## Context
**Topic:** {{topic}}
**Audience:** {{who-gets-handed-this}}
**Sections:** {{number}} columns, one per {{unit}}
**Each section contains:** {{description-code-bullets-etc}}
**Source material:** {{paste-or-path}}
**Page size:** {{letter-landscape-or-a4}}

## Accuracy Rules
- Every term, acronym expansion, and code example comes from my source
  material. Invent nothing.
- If the source does not say it, leave the field out and tell me.

## Output

### The Page
The HTML file, written to disk. Tell me the path.

### The Print Stylesheet
An @media print block with the page size, tightened margins, and
print-color-adjust: exact so dark blocks survive the PDF.

### The Self-Review
Open the page in Chrome, look at it, and list what renders wrong. Fix
each one and say what you changed.

### Where The Content Came From
For each claim on the page, the line in my source material it came from.
```

**Personalize it further.** Keep the HTML file in the same repo as the content it documents. When the product changes, you edit lines instead of regenerating a picture.

---

## 3.8 How To Build A Presentation Deck In HTML

Keanan Koppenhaver, Claude Code's technical enablement lead at Anthropic, had a 30-minute internal talk to give to the marketing team at Retool, on capturing better product visuals without asking a designer, and [built the 14-slide deck in HTML with Claude Code in about an hour](https://claudecodeformarketers.com/blog/how-i-built-a-14-slide-presentation-in-an-hour/) instead of opening Keynote.

He calls *make it look good* the hardest thing to delegate to AI, because the default output of every LLM tends toward what he describes as the same beige, Inter-on-white, faintly-purple-gradient aesthetic. His lever is the [frontend-design skill](https://github.com/anthropics/skills/tree/main/skills/frontend-design), which pushed the model away from those defaults and toward something with a clear point of view.

He asked for a title slide, a couple of slide templates, and a theme switcher, with 5 to 10 themes proposed from the content and the topic. A few minutes later he clicked through Editorial magazine, Brutalist, Retro-futuristic, Soft pastel, Industrial and Art deco before committing to one.

<div class="diagram-card">
<div class="flow-diagram">
<div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-title">5-10 Themes</div><div class="flow-step-sub">Title slide, templates, theme switcher</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-title">Brand Pulled In</div><div class="flow-step-sub">Palette and type from the real website</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-title">Outline Interrogated</div><div class="flow-step-sub">Claude asks questions one at a time</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">4</div><div class="flow-step-title">14 Slides Built</div><div class="flow-step-sub">Two sections, a divider, a Questions slide</div></div>
</div>
<div class="diagram-caption">The design direction and the outline get settled before a single content slide gets built.</div>
</div>

### Pull The Palette Off Your Company's Real Website

His second prompt asked Claude to look at Retool's website and offer that brand treatment as another option in the switcher.

Claude fetched retool.com, pulled out the color palette and the typography system, and added a Retool variant.

He split the difference, brutalist structure with `#503a77`, Retool's purple, as the accent, then locked it in and told Claude to delete the switcher.

That whole design-direction step took maybe 15 minutes.

### Paste A Scrappy Outline And Let Claude Interrogate You

He pasted a rough bulleted outline, then asked Claude to ask him questions one at a time and work it up into a proper outline before touching slide formats.

Claude asked who the audience was, how long he had, whether the talk was live or async, the one thing he wanted people to walk away knowing, and whether to drop an underdeveloped section.

The result was a tight 14-slide structure in two sections, with a divider between them and a Questions slide at the end.

He calls this the move that transfers furthest beyond decks. He now starts anything structured, a blog outline or a webinar agenda, with "ask me questions one at a time until you have what you need."

### Ask For A One-Page Takeaway In The Same Visual Style

An internal talk ends when everyone closes the call, so he asked for a one-pager version of the deck, in the same visual style, with links to every tool mentioned, to serve as a takeaway. One follow-up prompt asked to make the links clickable in a PDF.

Two prompts and a Cmd+P later he had a branded one-pager, a separate HTML file in the same treatment, with working hyperlinks in the export.

HTML is less information-dense than a Google Doc, so write a doc when the goal is async reading, and expect friction if three people must live-edit the deck the morning of.

### Try This In Claude Code

**Goal:** a themed HTML deck plus a matching one-page PDF takeaway, from a scrappy outline.

**Steps:**

1. Open Claude Code in an empty folder and write your rough outline into a text file. Bullets and half-thoughts are enough.

2. Ask for a title slide, two slide templates, and a theme switcher, with 5 to 10 themes proposed from your topic.

3. Open the file in your browser and click through the themes. Pick one.

4. Ask Claude to look at your company website and add that brand treatment as another theme option.

5. Choose your final combination, then tell Claude to delete the theme switcher.

6. Paste your outline and ask Claude to ask you questions one at a time until it can build the full slide set.

7. Ask for a one-page version in the same visual style, with every tool or link you mentioned, and ask for the links to stay clickable in a PDF.

**Expected result:** an HTML deck in a theme you chose, plus a one-page PDF takeaway that looks like it came from the same designer.

### Get Started Today

Koppenhaver's own prompts are short and sequential. The prompt below is ours, assembled to run his moves in his order.

```
## Role
You are a presentation designer who works in HTML and CSS. You have a
point of view about visual style and you defend it.

## Task
Build me a slide deck as HTML.

Work in four steps and stop for my answer after each one.
1. Build a title slide and two slide templates, with a theme switcher in
   the corner. Propose 5-10 distinct themes based on my topic.
2. Once I pick a direction, fetch {{company-website-url}}, extract the
   color palette and typography system, and add it to the switcher.
3. Once I lock a theme, delete the switcher and ask me questions one at a
   time until you have enough to build the full deck.
4. Build the slides.

## Context
**Topic:** {{what-the-talk-is-about}}
**Audience:** {{who-is-in-the-room-and-what-they-already-know}}
**Time slot:** {{minutes}}
**Live or async:** {{live-or-recorded}}
**One thing they should walk away knowing:** {{the-single-takeaway}}
**My rough outline:** {{paste-your-bullets-even-if-messy}}
**Accent color if I have one:** {{hex}}

Use the frontend-design skill. Do not give me a beige, Inter-on-white,
faintly-purple-gradient deck.

## Output

### Themes
Each theme gets a name and a one-line description of its point of view,
rendered live in the switcher so I can click between them.

### Outline
The agreed section structure, numbered, with a slide count per section
and a note on where the dividers go.

### Slides
The full HTML deck in the locked theme.

### Takeaway
A separate HTML file: a one-page version in the same visual style, with
every tool and link I mentioned listed and hyperlinked, and the links
still clickable after a Cmd+P export to PDF.
```

**Personalize it further.** Keep the theme you locked in as a starting file. The next deck begins from a chosen style rather than from ten options.

---

## 3.9 How To Build A Landing Page In An Evening

Keanan Koppenhaver, Claude Code's technical enablement lead at Anthropic, had this problem with Good Ice Map, a site that maps places serving nugget ice: if you did not already know what the map was for, you bounced.

He [built the landing page that is now live](https://claudecodeformarketers.com/blog/build-a-landing-page-with-claude-code/) in 21 minutes and 42 seconds by his own stopwatch. Nearly all of the work happened in one message. He asked for a landing page explaining what the site is and does, told Claude to research the project and match the styles already in the codebase, and added: ask me questions one at a time until you feel you have enough to start building. He names the three parts: the goal, the constraint, and the instruction that did most of the heavy lifting.

<div class="diagram-card">
<div class="flow-diagram">
<div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-title">6 Questions</div><div class="flow-step-sub">Answered before any code</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-title">13-Minute Build</div><div class="flow-step-sub">Hero, gallery, stats, footer</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-title">3 Things Cut</div><div class="flow-step-sub">One message, 4 min later</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">4</div><div class="flow-step-title">Shipped</div><div class="flow-step-sub">21:42 stopwatch · 42 min wall clock</div></div>
</div>
<div class="diagram-caption">Brief heavy, iterate light: most of the time went into the six questions up front, not the build itself.</div>
</div>

### Six Small Decisions Before Any Code Got Written

The entire planning phase: six questions, six short answers, no code yet.

Claude asked what logged-in users should see, whether to gate the map behind signup, whether to feature specific chains, how to display the stats, what images to use, and what the headline should be.

Skip logged-in users to the map. No gate on a community-built project. No favorites. Show the real numbers even if they are low, with a callout that contributions are open. Real user-submitted photos. And the headline he supplied himself: "Find good ice, anywhere."

### Thirteen Minutes To Build, Then Cut Three Things That Felt Off

He said yes, and thirteen minutes later Claude was done: hero, explainer, a three-step how-it-works section, an embedded map preview, a photo gallery, a stats block, and a footer.

Three things were wrong. A placeholder box sat where a map screenshot belonged, a gallery callout read *A map of the good stuff* and felt like it was trying too hard, and the app's old welcome modal was now redundant.

He asked for all three in one message, as three subtractive asks. Four minutes later he told Claude to push the PR up to GitHub and he deployed it.

He names the shape: brief heavy, iterate light. The iteration is where you remove the things you did not realize you did not want.

### What 21 Minutes Does Not Get You

The session ran from 8:21pm to 9:03pm, about 42 minutes of wall clock against a 21:42 stopwatch.

He caught two defects in a code review after the PR was up. The stats block queried the database directly and should probably be cached, and the page carried no meta description and no Open Graph tags, so a shared link previews as nothing.

Twenty-one minutes gets you a working, on-brand landing page. It does not give you query caching, SEO metadata, an accessibility audit, analytics, or polished social-share previews.

Much closer to a real launch than a prototype, in his words, but not finished.

### Try This In Claude Code

**Goal:** a landing page for something you already built, drafted in one evening.

**Steps:**

1. Start a Claude Code session inside the project directory, so Claude can read the existing styles.

2. Send one message with three parts: the goal, the constraint that it must match existing styles, and "ask me questions one at a time until you feel you have enough to start building."

3. Answer each question with a short, opinionated answer. Supply the headline yourself rather than asking for options.

4. Say yes when the questions run out, then step away and let it build.

5. Read the result once and list only what should be removed. Send those as one message.

6. Run a review pass against the things nobody asks for: caching on anything that queries live data, meta description, Open Graph tags, analytics, accessibility.

**Expected result:** an on-brand page running locally that matches the rest of your product, plus a written list of the gaps you now know to fix.

### Get Started Today

Koppenhaver's own opening prompt is three sentences. The expanded version below is ours, built from five of the six questions his session surfaced, plus one of our own.

```
## Role
You are a landing page builder working inside an existing codebase. You
inherit the product's visual language rather than inventing one.

## Task
Build a landing page that explains what this product is and what it does.

Research the project first. Use the styles already present in the
codebase and the information you can find there.

Then ask me questions one at a time until you feel you have enough to
start building. Do not batch them. Do not start building early.

## Context
**Product:** {{one-sentence-description}}
**Who lands here:** {{cold-visitor-referral-social-etc}}
**What they should do next:** {{signup-browse-contact}}
**Existing style source:** {{codebase-path-or-brand-guide-or-website}}
**Headline, if I already have one:** {{headline}}

## Questions To Cover Before You Build
Ask at least these, one at a time:
- What should logged-in or returning users see instead of this page?
- Should anything be gated behind signup, and at what point?
- Which real numbers can we show, and what do we say if they are low?
- Where do the images come from?
- What is the headline?
- What is on this page that a visitor could already do elsewhere?

## Output

### The Page
The built page, using existing components and styles. List which
existing files you read and which styles you reused.

### Decisions Log
Every decision you made that I did not explicitly answer, one line each,
so I can correct it.

### Not Done Yet
A checklist of what a launch needs that I did not ask for: caching on
live queries, meta description, Open Graph tags, analytics,
accessibility, social-share preview. Mark each one done or missing.
```

**Personalize it further.** Save the decisions log next to the page. The next page you build starts from answers instead of questions.

---

## 3.10 How To Build A Self-Improving Marketing Workflow

Matt Swulinski, who was head of growth at Wispr Flow until December, built his newsletter sponsorship system on one rule: chatting with the thing is not a workflow if there is no feedback loop. He described the system as it ran while he was there, in [an interview on 20VC](https://www.youtube.com/watch?v=bm8rMM4Bxz8).

He learned by doing it, and in his words he built the OS asking how to build an OS.

### A Couple Of Human Touch Points Sit Between The Email And The Send

When a sponsor emails him, his agent knows this is a newsletter request, asks them for their rates, researches what their audience is, and does that first part of negotiation.

He steps in to approve that yes, we want to work with them. A contract comes back, and that, in his words, is where his manual step in newsletter ends.

He throws the contract into the agentic system. It ingests all of the cost data into the file system, does the copywriting, does all of the email sending, creates all the links, creates all the conversion tracking, and sends everything out to the partner.

<div class="diagram-card">
<div class="node-diagram">
<div class="node-hub">Partner Workflow</div>
<div class="node-connector"></div>
<div class="node-spokes">
<div class="node-spoke"><div class="node-spoke-title">Copywriting</div><div class="node-spoke-sub">Based on historic link performance</div></div>
<div class="node-spoke"><div class="node-spoke-title">Links & Tracking</div><div class="node-spoke-sub">Creates both, then reads the results</div></div>
<div class="node-spoke"><div class="node-spoke-title">Sending</div><div class="node-spoke-sub">Everything out to the partner</div></div>
<div class="node-spoke"><div class="node-spoke-title">Continue-Or-Kill</div><div class="node-spoke-sub">Decided against his CPM and conversion thresholds</div></div>
</div>
</div>
<div class="diagram-caption">One workflow owns copy, links, tracking and the decision to keep or drop a partner, feeding each run's data into the next.</div>
</div>

### The System Decides When To Drop A Partner, Against Your Thresholds

Whether to continue with a partner is an agentic decision too, made against thresholds he set: CPM should be this, conversion should be this, and let the run fizzle out if it did not work out.

He never states the numbers.

The improvement comes from the same system having written the copy and built the links. In his words: "...it knows all of every link's performance and can say this copy works this doesn't. So the next time it generates copy it's based on all historic data."

At a given point he was working with between 70 and 120 unique newsletter providers.

For about a year and a half he was the one person at Wispr Flow doing all execution.

### How The Workflow Actually Runs: Claude Code, Cron, And Slack

The first version was a marketing OS on his computer: Claude Code, a folder system, skills and markdown files.

Claude was plugged into his email, with cron set up to check at 9, check at noon, check at 6. Are there any new newsletter requests, run the workflow to respond, then bubble up a message in Slack: these need your decisions, here are the contracts that came over.

A separate note, from a different practitioner and a different stack. Keanan Koppenhaver closes his [four SEO workflows](https://claudecodeformarketers.com/blog/seo-on-autopilot-with-claude-code/) by saying they chain together, and that his own version wires them plus analytics, email stats and page-speed checks into a weekly run that emails him a Sunday report of fixes and post ideas.

He says outright that system is a story for another post, and to run each workflow by hand first, until you know what good looks like.

### Try This In Claude Code

**Goal:** one recurring partner workflow where the copy generated next month reads this month's link performance.

**Steps:**

1. Pick a channel you run repeatedly with outside partners. Newsletter sponsorships, affiliates, or creator placements.

2. Write down every step from inbound email to reported performance, and mark the steps only you can decide.

3. Build the first half in Claude Code: recognize the request, ask for rates, research the audience, and draft the negotiation reply. Stop there and approve by hand.

4. Give Claude the folder where cost data, copy and link performance live, so it writes to the same place every time.

5. Add link creation and conversion tracking to the same workflow, so the system owns both the copy and the measurement of that copy.

6. Write your own continue-or-kill thresholds into the workflow file.

7. Add a cron schedule and route the decisions that need you into one Slack channel.

**Expected result:** a Slack message on a schedule containing only the decisions you have to make, and a copy generation step that cites past link performance for its choices.

### Get Started Today

Swulinski never shows the contents of his files. This spec is ours, written from the system he describes.

```
## Role
You are the operator of a partner marketing program. You handle
everything between an inbound request and a reported result, except the
decisions I reserve for myself.

## Task
Run this on a schedule. Check {{inbox}} at {{times-of-day}}.

1. Identify inbound {{partner-type}} requests and separate them from
   everything else.
2. Ask the partner for their rates. Research their audience and what it
   is worth to us.
3. Draft the opening negotiation reply. Send it.
4. When a contract arrives, stop and post it to {{slack-channel}} for my
   approval. Send nothing further until I approve.
5. After approval, ingest the cost data into {{data-folder}}.
6. Write the copy. Create every link and its conversion tracking. Send
   the package to the partner.
7. When performance comes back, record it against the exact copy and
   links you created.
8. Decide whether to continue with this partner against the thresholds
   below. Post the decision and the reasoning to {{slack-channel}}.

## Context
**What we sell:** {{product-in-one-sentence}}
**Partner type:** {{newsletters-creators-affiliates}}
**Where cost, copy and performance live:** {{data-folder}}
**CPM threshold:** {{your-number}}
**Conversion threshold:** {{your-number}}
**Decisions I reserve:** {{approve-partner-approve-contract-etc}}
**Never claim:** {{unsupported-claims}}

## Rule For Copy Generation
Before you write any new copy, read every link's recorded performance in
{{data-folder}}. Base the new copy on all historic data, and say which
past placements informed each choice.

## Output

### Requests Handled
Each inbound request, the rates quoted, and what you found about the
audience.

### Awaiting My Decision
Contracts and approvals sitting with me, one line each.

### Copy Shipped
Per partner: the copy, every link created, and the tracking attached.

### Performance Against Thresholds
Per active partner: CPM, conversion, and whether it clears the
thresholds. Name the partners you recommend letting fizzle out.

### What The Data Now Says
Which copy patterns are working and which are not, based only on links
this system created.
```

**Personalize it further.** Add a second channel to the same folder once the first runs without you. The performance history is the asset, so keep every channel writing to one place.

---

By this point you should have:

- A competitor report researched, written and saved as a file you can rerun next quarter
- An ad intelligence agent mapped in Plan mode, with the scraping failure planned for rather than hidden
- A vault Claude writes into, and an end-of-session habit that leaves the next session something to read
- Two ranked lists out of one Search Console export, one for new posts and one for refreshes
- A broadcast skill that drafts and schedules while you review
- A brand template and a render script that turn every featured image into a headline swap
- A cheatsheet as a single HTML file that prints to a clean PDF
- A themed deck and a one-page takeaway in the same visual language
- A landing page that matches your product, plus a written list of what it still needs
- A partner workflow whose next round of copy is written from the last round's numbers

The through line is that the output of one session becomes the input of the next: a file, a skill, a folder of performance data.

Start with the workflow you already do badly and repeatedly. That is the one to make permanent first.
