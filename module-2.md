# Module 2: Marketing Work Claude Does With Your Files And Tools

Your best material already lives on your computer. Call transcripts, old decks, a CRM full of closed deals.

The next step in AI-first marketing is to hand Claude everything at once, not one file at a time.

A hundred transcripts read in one pass. A deck built straight from the analysis. Outbound drafts waiting in Slack every Monday morning.

You still write no code. You learn from marketers running real agencies and GTM teams, who turned Claude into a coworker that handles the busywork. Their time goes to the judgment calls only they can make.

**Before you start:** If you have not set up Claude Cowork yet, you can follow [Anthropic's instructions](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork) to set it up.

### Lessons In This Module

- [2.1 How To Analyze Hundreds Of Files At Once](#21-how-to-analyze-hundreds-of-files-at-once)
- [2.2 How To Turn An Analysis Into A Presentation Deck](#22-how-to-turn-an-analysis-into-a-presentation-deck)
- [2.3 How To Edit Google Docs, Sheets, And Slides In Place](#23-how-to-edit-google-docs-sheets-and-slides-in-place)
- [2.4 How To Define Your ICP, Personas, And Messaging](#24-how-to-define-your-icp-personas-and-messaging)
- [2.5 How To Build A Weekly Lookalike Outbound Agent](#25-how-to-build-a-weekly-lookalike-outbound-agent)
- [2.6 How To Schedule Recurring Marketing Tasks](#26-how-to-schedule-recurring-marketing-tasks)
- [2.7 How To Map Your Marketing Process To Find Wasted Hours](#27-how-to-map-your-marketing-process-to-find-wasted-hours)
- [2.8 How To Build A Reviewer For Each Recurring Deliverable](#28-how-to-build-a-reviewer-for-each-recurring-deliverable)
- [2.9 How To Build An Interactive Lead Magnet That Captures Emails](#29-how-to-build-an-interactive-lead-magnet-that-captures-emails)
- [2.10 How To Build An Internal Marketing Tool From Your Tab List](#210-how-to-build-an-internal-marketing-tool-from-your-tab-list)
- [2.11 How To Personalize Your Website For Different Visitor Segments](#211-how-to-personalize-your-website-for-different-visitor-segments)

---

## 2.1 How To Analyze Hundreds Of Files At Once

Kieran Flanagan, CMO of Zapier, points [Claude Cowork](https://claude.com/product/cowork) at a folder nobody has read end to end, rather than opening a handful of files and hoping the rest agree: Cowork runs inside the [Claude desktop app](https://claude.ai/download) and reads the files already on your machine, so it carries more context than a chat where you upload files against a ceiling.

He put it at the center of his walkthrough [on Marketing Against the Grain](https://marketingagainstthegrain.com/articles/claude-cowork-just-did-7-days-of-work-in-15-minutes): what makes Cowork interesting is that you can give it access to the files on your computer. Cowork was Max-subscriber only at $100 a month when he recorded, before it reached the other paid plans, and tasks run locally without syncing across your devices.

### Pair The Messy Corpus With One Structured File

Flanagan gives it two things. A folder of about a hundred podcast transcripts, and a CSV export of the show's YouTube analytics that he calls *table data*.

The two inputs answer different halves of one question. The transcripts hold what was said, and the CSV holds how each episode performed.

<div class="diagram-card">
<div class="flow-diagram">
<div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-title">Two Inputs</div><div class="flow-step-sub">~100 transcripts plus one performance CSV</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-title">One-Sentence Question</div><div class="flow-step-sub">"Generate a format that gets more subscribers"</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-title">Claude Reads, Then Samples</div><div class="flow-step-sub">CSV first, then top-performing transcripts</div></div>
</div>
<div class="diagram-caption">Claude found its own reading order from the CSV and transcripts without being told how, then sampled rather than reading every file.</div>
</div>

### Ask One Open Question And Let Claude Find The Order

His prompt is a single sentence: looking at the podcast data and the show transcripts, generate a new format of our podcast that will generate more subscribers on YouTube. His own verdict on it is "a very basic query."

Claude reads the CSV first, then finds the transcripts, then samples the top performers. Flanagan's reaction: "I didn't tell it this much. It figured out everything that it had here."

Expect permission prompts while it works. "You do have to hit allow a few times."

### Read The Output As A Sample Of The Corpus

The run samples. Claude picks top-performing transcripts and reads one more high performer, rather than opening all hundred files.

The deck it produces then describes the corpus as *200+ videos and transcripts*, against an upload of roughly a hundred transcripts plus one CSV. That figure is the deck's own summary line.

Flanagan hedges his timing too. He says 15 to 20 minutes and adds that he does not know the full runtime.

He also catches the model favoring itself. The deck advises him to double down on Claude content, and he notes that Claude seems a little biased towards Claude.

"It's still early. There are bugs. You've got to hit allow. You need to be okay with the rough edges."

### Watch Kieran Flanagan Point Cowork At A Hundred Transcripts

The clip shows the folder permissions, the one-sentence query, and Claude self-directing through the CSV before it touches the transcripts.

[![Claude Cowork Just Did 7 Days of Work in 15 Minutes](https://img.youtube.com/vi/xRdlmFBtGn0/maxresdefault.jpg)](https://www.youtube.com/watch?v=xRdlmFBtGn0)

*Marketing Against the Grain, "Claude Cowork Just Did 7 Days of Work in 15 Minutes" (44k views)*

### Try This In Cowork

**Goal:** get one strategic answer out of a folder you have never read end to end.

**Steps:**

1. Collect your corpus into a single folder. Transcripts, exports, briefs, or call notes all work.

2. Add one structured file to the same folder. A CSV of performance data gives Claude something to rank the corpus by.

3. Open the Cowork tab in the Claude desktop app and add that folder. Approve the permission prompts.

4. Ask the question below in one sentence, then answer the clarifying questions Claude asks back.

5. Read the run log as it works. Note which files it opens and which it skips.

6. Ask it to list every file it actually read before you accept any count in the output.

**Expected result:** a strategic answer built from the corpus, plus a list of which files it sampled to get there.

### Get Started Today

Flanagan's own query was one sentence. This longer version is the playbook's, written to make the sampling visible while it runs.

```
## Role
You are an analyst. You read a body of source material and a performance
file, and you find the pattern that connects them.

## Task
Look at everything in the folder I gave you and answer one question:
{{the-strategic-question}}

Before you answer, tell me your reading plan. Say which files you will
open in full, which you will sample, and which you will skip.

## Context
**What the corpus is:** {{transcripts-briefs-exports-call-notes}}
**How many files:** {{approximate-count}}
**The structured file:** {{csv-name-and-what-each-column-measures}}
**What I want to change:** {{the-decision-this-informs}}
**What I already believe:** {{your-current-hypothesis}}

## Output

### Reading Plan
The files you opened, the files you sampled, and the files you never
touched. Give me counts for each group.

### The Pattern
What the top performers share that the rest do not. Cite the specific
file each claim comes from.

### Where The Data Disagrees With The Corpus
Anything the structured file says that the source material contradicts.

### The Answer
Your recommendation on {{the-strategic-question}}, in five lines.

### What You Could Not Check
Claims you inferred rather than verified against a file I gave you.
```

**Personalize it further.** Run the same question against a second folder from a different quarter. When the two answers disagree, the pattern was sampling and not a finding.


---


## 2.2 How To Turn An Analysis Into A Presentation Deck

Claude asked Kieran Flanagan what he wanted before it built anything: strategy document, presentation deck, one-page summary, or something else. He picked the deck, since the format of an analysis decides who uses it — a document suits one reader who studies it, and a deck suits a room you talk to.

His reason is the audience. In [the Cowork walkthrough](https://marketingagainstthegrain.com/articles/claude-cowork-just-did-7-days-of-work-in-15-minutes) he says a strategy document is the obvious output and a better fit if only he and his co-host read it. The deck earns its place when the learnings travel — he wanted to take the presentation, share what he derived with Claude, and put it in front of other people.

### Tell Claude Your Time, Budget, Or Team Size Constraint

Claude asks a second question after the format one: what is your primary constraint for implementing the new format, time, budget, or team size.

Flanagan answers time. That one word shapes which recommendations survive into the slides.

The two questions together are the whole brief he gives. He picks a format and a constraint, and Claude fills in the rest from the analysis it already ran.

<div class="diagram-card">
<div class="flow-diagram">
<div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-title">Pick The Format</div><div class="flow-step-sub">Document, deck, or one-page summary</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-title">Name The Constraint</div><div class="flow-step-sub">Time, budget, or team size</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-title">Claude Builds The Deck</div><div class="flow-step-sub">Codes the slides and the charts</div></div>
</div>
<div class="diagram-caption">Flanagan's entire brief was two one-word answers; Claude filled in the rest from the analysis it already had.</div>
</div>

### Let Claude Code The Slides And The Charts

Flanagan watches the build happen in the open. Claude writes the HTML for the individual slides, then creates a JavaScript file to build the presentation with charts.

Claude writes chart code into his slides rather than handing him a list of numbers to plot.

Claude Code codes lots of things, including slides, which does not get talked about much.

Traditional Claude would not tell you it was using JavaScript to build presentations.

### Walk Away, Then Open The File

Long builds do not need supervision. Flanagan's advice is to set it running, go work on other things, and come back when it is done.

The output is a real file at the end. He previews it in place and notes you can open it in [Keynote](https://www.apple.com/keynote/) instead.

The generated deck asserted figures of its own, including a claim about a *6.26 CTR*, with no unit stated for it anywhere in the run.

### Try This In Cowork

**Goal:** turn an analysis you already trust into a slide deck your team can open.

**Steps:**

1. Run your analysis in Cowork first, or point it at the folder holding the finished analysis.

2. When Claude asks what deliverable you want, answer *presentation deck* and say who will sit in the room.

3. Answer the constraint question with one word. Time, budget, or team size.

4. Paste the prompt below to set the slide count, the audience, and the charts you want built.

5. Leave it running and do other work while it writes the slides and the chart file.

6. Open the deck. Check every number on every chart against the source file before you share it.

**Expected result:** a slide file with built charts, sized for one meeting, that you can open locally or in Keynote.

### Get Started Today

The source shows the deliverable choice and the build, not a deck brief. This prompt is the playbook's version of the brief Flanagan gave in two one-word answers.

```
## Role
You are a strategy consultant who presents findings to marketing teams.
You build the deck the room needs, not a document with slide breaks.

## Task
Turn the analysis you just produced into a presentation deck. Write the
slides as HTML and build any charts as code, so the numbers render.

## Context
**Who is in the room:** {{roles-and-seniority}}
**The decision they must leave with:** {{decision}}
**My primary constraint:** {{time-budget-or-team-size}}
**Slide count:** {{number}}
**Source of every number:** {{filename-of-the-data-file}}
**Charts I want:** {{what-should-be-visual-rather-than-written}}

Every figure on a slide must come from the data file. If a number is
your estimate, label it as an estimate on the slide itself.

## Output

### Slide Plan
One line per slide, with the single point that slide makes.

### The Deck
Build it. Charts as code, one idea per slide, no slide that needs me
to narrate it.

### Chart Sources
For each chart, the file and the columns it was built from.

### Speaker Notes
Three lines per slide for whoever presents it.

### Open Questions
What you would need from me to make this deck stronger.
```

**Personalize it further.** Ask for the one-page summary from the same analysis after the deck is built. You then have the version for the room and the version for the follow-up email.


---


## 2.3 How To Edit Google Docs, Sheets, And Slides In Place

Keanan Koppenhaver, creator of Claude Code for Marketers, tested which of three different things called Claude can actually edit your Google Docs in place, changing the live document itself rather than handing back text in chat for you to paste, which drops table formatting and comment threads on the way through.

He opens [his answer to whether Claude can edit your Google Docs](https://claudecodeformarketers.com/blog/can-claude-edit-google-docs/) with the reason the question is hard: three different things called Claude can touch a Google account, and his summary of them is "same brand, three very different surfaces." His rule for choosing between them is about task shape. Cowork is the one to reach for on a one-off edit with zero setup.

<div class="diagram-card">
<div class="node-diagram">
<div class="node-hub">Claude</div>
<div class="node-connector"></div>
<div class="node-spokes">
<div class="node-spoke"><div class="node-spoke-title">claude.ai Drive Connector</div><div class="node-spoke-sub">Reads, but cannot update a doc</div></div>
<div class="node-spoke"><div class="node-spoke-title">Cowork</div><div class="node-spoke-sub">Best for a one-off edit, zero setup</div></div>
<div class="node-spoke"><div class="node-spoke-title">Claude Code + Workspace CLI</div><div class="node-spoke-sub">Handles tables, comments, formulas</div></div>
</div>
</div>
<div class="diagram-caption">Koppenhaver's rule: same brand, three very different surfaces, so which one you reach for depends on the shape of the task.</div>
</div>

### The claude.ai Drive Connector Reads But Cannot Update

Koppenhaver tested the web connector directly. It exposes read, search, create-new-file, and download tools, and nothing that updates an existing doc.

A request to edit a doc returns edited text in the chat for you to paste back. Ask it to change a single cell in [Google Sheets](https://sheets.google.com) and there is no option behind it at all.

It reads [Google Slides](https://slides.google.com) as text per slide without editing them, and exposes no comments at all.

One write operation does work. The connector can create a new file, so his workaround is a fresh doc holding the proposed changes that you merge back yourself.

### What Held Up In Testing: Tables, Comments, And Formulas

His end-to-end tests ran on Claude Code driving [Google's own Workspace CLI](https://www.npmjs.com/package/@googleworkspace/cli), a command-line tool Google ships rather than an Anthropic integration.

Tables held up. He replaced a cell and added a row across two tables, and column widths stayed intact, the new row inherited the table styling, and surrounding paragraphs were untouched.

Comments worked across all three operations he tried: create, list with authors, and reply. In Sheets, formulas evaluate on Google's side, so you read back calculated values rather than formula text.

### Five Limits To Plan Around Before You Edit In Place

Koppenhaver closes with the spots where his own workflow got into trouble.

- **Real-time collaboration.** Ask Claude to take a pass, then review it yourself, rather than both editing at once.
- **Complex formatting.** Page breaks, headers, footers, images, and custom fonts are awkward to instruct. Stick to text and table edits.
- **Permissions and sharing.** Claude reaches any doc you already have access to and cannot grant access to anyone else.
- **Very long docs.** For a 50-page doc, ask for section-by-section work instead of *edit the whole thing*.
- **Visual judgment.** *Make this doc look more polished* is a question Cowork answers better, because Cowork sees what you see.

[Google Docs](https://docs.google.com) tabs add one more trap. Tabs read as separate sections, so a generic insert instruction can hit every tab. Name the tab in the instruction instead, so the edit lands only where you meant it.

### Try This In Cowork

**Goal:** run one real Workspace edit and learn where your surface stops.

**Steps:**

1. Pick a low-stakes doc you own. Duplicate it first so the original survives a bad edit.

2. Start read-only. Ask Claude to summarize it and extract the action items.

3. Ask for one text edit in place, such as tightening the intro paragraph.

4. Open the doc in Google and confirm the change landed in the file rather than in the chat.

5. Ask it to add a row to a table in the doc, then check column widths and styling survived.

6. Ask it to summarize the open comments and say which still need answers.

**Expected result:** a doc changed in place, with tables and comments intact, and a clear answer on which of those steps your surface supports.

### Get Started Today

Koppenhaver quotes short request fragments rather than full prompts. This assembles his patterns into one brief.

```
## Role
You are an editor working directly inside my Google Workspace files.
You change the file itself. You do not return text for me to paste.

## Task
{{the-edit-i-want}}

Work on the file named {{exact-document-title}}.

## Context
**Tab to edit:** {{tab-name-or-single-tab-doc}}
**Sections in scope:** {{which-sections-to-touch}}
**Sections to leave alone:** {{what-must-not-change}}
**Tables in this doc:** {{describe-them-or-say-none}}
**Audience for the finished doc:** {{who-reads-it}}
**Tone rules:** {{your-voice-constraints}}

Confirm you can write to this file before you start. If your connection
only reads, say so and stop.

Stick to text and table edits. Do not attempt page breaks, headers,
footers, or font changes.

If the document runs past {{page-count}} pages, work one section at a
time and stop for my approval between sections.

## Output

### Change Log
Every edit you made, quoted before and after, section by section.

### Untouched
What you deliberately left alone, and why.

### Open Comments
Existing comments on the doc, who wrote them, and which still need an
answer from me.

### Blocked
Anything I asked for that this surface cannot do, with the manual step
I need to take instead.
```

**Personalize it further.** Run the same brief on a copy first and diff the two files. Once the change log matches what you actually wanted twice in a row, run it on the live doc.

---

## 2.4 How To Define Your ICP, Personas, And Messaging

Katie Miserany, chief communications officer and SVP for marketing at [SurveyMonkey](https://www.surveymonkey.com/), watched her team chase a trend without a written foundation for who they sell to and lost, in [her case for marketing foundations](https://marketingagainstthegrain.com/articles/surveymonkey-svp-on-marketing-foundations).

They surveyed people about the TikTok ban and got ready to launch the findings. TikTok released its own study first, and the media covered TikTok's.

Her prescription: set your foundation, understand your customers' needs, then have the discipline and discernment to only build from that foundation instead of chasing shiny things.

Miserany is describing marketing discipline. She names no AI tool anywhere, so the move from her foundation to a Claude skill is ours rather than hers.

### Build Three Skills Before You Build Any Agent

A skill is a saved set of instructions Claude loads when the matching task comes up.

Elaine Zelby, co-founder of [Tofu](https://www.tofuhq.com), told [MKT1](https://newsletter.mkt1.co/p/real-marketers-claude-code-builds) to create three skills immediately, before building any kind of agent: "Number one, ICP. Number two, personas. Number three, messaging."

Three, in her own count, in that order. The ICP describes the accounts, personas describe the people inside them, and messaging describes what you say.

<div class="diagram-card">
<div class="flow-diagram">
<div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-title">ICP</div><div class="flow-step-sub">Which accounts you sell to</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-title">Personas</div><div class="flow-step-sub">The people inside those accounts</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-title">Messaging</div><div class="flow-step-sub">What you say to them</div></div>
</div>
<div class="diagram-caption">Zelby's rule: build these three skills, in this order, before you build any agent.</div>
</div>

Emily Kramer, who writes MKT1, names a fourth in her own prose. She says Zelby created reusable skills for ICP, personas, messaging, and product information first.

The count of three is Zelby's. The fourth belongs to Kramer.

### Write The Exact Words Down So Your Channels Repeat Them

Miserany's team at Sheryl Sandberg's Foundation built a document they called the well. It set out exactly how they were supposed to talk about everything.

If something was called stunning in the well, you could not call it gorgeous. You stuck to the script, and you had to make a real case for deviating from it.

Her reason for that strictness is reach. The repetition of this exact language is really important for breaking through, and she wants all of her channels doing the same exact thing.

A messaging skill holds the same decisions for Claude. Word choice you settle once gets reused instead of reinvented per draft.

### Test Each Foundation Against Work You Have Already Done

Kramer's advice for any new skill is to iterate on real examples rather than hypotheticals.

Run it on actual companies, copy, or deals. Compare the output to what you would have done manually, tell Claude exactly what is missing, then update the skill.

Her own list of foundations differs from Zelby's. Kramer names voice, positioning, and GTM motion as the things to write down first.

Neither source publishes the contents of these skills. The template below is our reconstruction of the shape, not Zelby's file.

### Try This In Cowork

**Goal:** three foundation documents Claude can load into any later marketing task.

**Steps:**

1. Create a folder for the foundations and add it to a Cowork session.

2. Drop in your evidence. Closed-won deal notes, call transcripts, win and loss reasons, your current homepage copy.

3. Paste the prompt below and let Claude read the folder before it drafts.

4. Read the ICP section first. Cut every attribute you cannot verify from the evidence you supplied.

5. Save each of the three sections as its own file in the folder.

6. Run one real task against them, such as a cold email to a named account, and correct what the foundations got wrong.

**Expected result:** three files, each short enough to read in a minute, that a teammate could apply without asking you a question.

### Get Started Today

```
## Role
You are a product marketing lead. You write the reference documents a
marketing team works from, using only evidence the team supplies.

## Task
Read the files in this folder and draft three foundation documents:
an ICP, a set of personas, and a messaging document.

Build each one from the evidence in the folder. Where the evidence is
thin, say so in that section instead of filling the gap.

## Context
**What we sell:** {{product-in-one-sentence}}
**Who has bought so far:** {{named-customers-or-segments}}
**Evidence in this folder:** {{deal-notes-transcripts-win-loss-site-copy}}
**Deals we lost and why:** {{lost-reasons}}
**Words we never use:** {{banned-terms}}

## Output

### ICP
The account-level definition. Firmographics, the trigger that makes them
start looking, the systems they already run, and three disqualifiers that
rule an account out. Cite which file each attribute came from.

### Personas
One block per buying role. For each: their title, what they own, the
problem in their own words as it appears in the evidence, what they fear
getting wrong, and the objection they raise first.

### Messaging
Our one-line description, three claims we can prove, the proof for each
claim, and the exact phrasing to use for each claim. Add a short list of
near-synonyms that are banned so the language stays identical everywhere.

### Evidence Gaps
List every claim above that the folder does not support, so I know what
to go and confirm before anyone uses these.
```

**Personalize it further.** Rerun this each quarter against your newest closed-won deals. When the ICP section stops changing, the foundation is stable enough to build agents on top of.


---


## 2.5 How To Build A Weekly Lookalike Outbound Agent

Elaine Zelby, co-founder of [Tofu](https://www.tofuhq.com), wanted a system that turns her closed-won deals into tailored outreach on a repeating basis, since a won deal already carries the pain points, the ROI story, and the attributes of the right accounts and contacts, context [MKT1's roundup of marketer builds](https://newsletter.mkt1.co/p/real-marketers-claude-code-builds) says teams rarely operationalize.

She built it in Claude Cowork and invokes it as `/customer-lookalike-outbound`. Emily Kramer puts the word agent in scare quotes when she describes it. In Claude, an agent usually means a skill, a plugin, an app, or some combination.

### Add The Connectors Before You Write The Workflow

Zelby added [HubSpot](https://www.hubspot.com), [Clay](https://www.clay.com), [Slack](https://slack.com), and email to Cowork.

<div class="diagram-card">
<div class="node-diagram">
<div class="node-hub">Lookalike Outbound Agent</div>
<div class="node-connector"></div>
<div class="node-spokes">
<div class="node-spoke"><div class="node-spoke-title">HubSpot</div><div class="node-spoke-sub">Closed-won deals and call transcripts</div></div>
<div class="node-spoke"><div class="node-spoke-title">Clay</div><div class="node-spoke-sub">Finds contacts at lookalike companies</div></div>
<div class="node-spoke"><div class="node-spoke-title">Slack</div><div class="node-spoke-sub">Delivers drafts for team review</div></div>
<div class="node-spoke"><div class="node-spoke-title">Email</div><div class="node-spoke-sub">Where sequences eventually send</div></div>
</div>
</div>
<div class="diagram-caption">Zelby wired official connectors in before writing the workflow, so the weekly run has API access instead of just browser access.</div>
</div>

She used the official [Claude Connectors](https://claude.ai/settings/connectors), so the workflow has API access and not just browser access. Her stated reason is reliability during a run she does not watch.

Call transcripts reach the workflow through HubSpot, recorded originally in [Sybill](https://www.sybill.ai). Sybill already fills in structured CRM fields, so Claude reads richer context and the drafts come out close to sendable each time.

### The Weekly Run Ends With Drafts In Slack

Each run looks at deals that moved to Closed-Won in HubSpot in the last 7 days. From there it:

- identifies 10 lookalike companies based on the ICP definition
- finds 3 to 5 contacts per company using Clay
- drafts a 4-email sequence plus LinkedIn DMs for each contact
- sends the drafts into Slack for the team to review

MKT1 reports no reply rate, no meetings booked, and no pipeline figure for this build. Close to sendable is the only outcome language in the source.

How the ICP definition reaches the lookalike step is also undescribed. Whether you paste it, keep it as a skill, or point the workflow at a document is your decision to make.

### Build It Piece By Piece And Keep A Human On The Send

Zelby went in order. She confirmed the HubSpot read first, then prompted the skill to find lookalike accounts and contacts in Clay, then scheduled it to share drafts in Slack.

Because she built in Cowork, she could schedule the weekly run without an external scheduler.

The output started as a file she downloaded by hand. She moved it into Slack so the GTM team sees it inside their normal workflow.

She has not automated sending, and keeps a human in the loop on purpose.

Her advice when things break is to keep talking to Claude. If a file is not where it should be, have Claude walk you through fixing it.

### Try This In Cowork

**Goal:** one weekly draft pack in Slack, built from last week's closed-won deals.

**Steps:**

1. Connect your CRM, your contact data tool, and Slack through the official connectors, not through browser access.

2. Ask Cowork to list the deals that moved to Closed-Won in the last 7 days and stop there. Confirm the list is right before you add anything.

3. Add the lookalike step. Give it your ICP document and ask for 10 companies, each with the reason it matched.

4. Add the contact step, then the draft step, one at a time. Check the output after each addition.

5. Point the final output at a Slack channel your GTM team already reads.

6. Schedule it weekly once a manual run produces drafts you would send.

**Expected result:** a Slack post each week with 10 companies, 3 to 5 contacts each, and a draft sequence per contact that needs editing rather than rewriting.

### Get Started Today

Zelby's own prompt text is not published anywhere in the source. This spec is ours, written from the behavior MKT1 describes.

```
## Role
You are an outbound researcher and copywriter. You work from closed-won
evidence, never from generic industry assumptions.

## Task
Run this every week.

1. Pull deals that moved to Closed-Won in {{crm}} in the last 7 days.
2. Read the call transcripts and structured fields on each deal.
3. Identify {{company-count}} lookalike companies using the attributes of
   those deals and the ICP document at {{icp-location}}.
4. Find {{contacts-per-company}} contacts at each company in {{data-tool}}.
5. Draft a {{email-count}}-email sequence plus a LinkedIn DM per contact.
6. Post the drafts to {{slack-channel}} for review. Send nothing.

## Context
**What we sell:** {{product-in-one-sentence}}
**ICP document:** {{icp-location}}
**Messaging document:** {{messaging-location}}
**Personas:** {{persona-location}}
**Sequences that have worked:** {{paste-two-real-sequences}}
**Never claim:** {{unsupported-claims}}

## Output

### Matched Companies
One row per company: name, the closed-won deal it resembles, and the two
attributes that drove the match. Say which deal each attribute came from.

### Contacts
Per company, each contact with name, title, and the persona they map to.

### Sequences
Per contact, the full email sequence and the LinkedIn DM. Each email gets
a subject line and a one-line note on which closed-won pain point it uses.

### Skipped
Companies and contacts you rejected, with the reason. I want to see what
the ICP filtered out, so I can tell whether the filter is too tight.
```

**Personalize it further.** Run it manually for a few weeks and mark the drafts you actually sent. Feed those back in as the examples, then move to a schedule.


---


## 2.6 How To Schedule Recurring Marketing Tasks

Keanan Koppenhaver, creator of Claude Code for Marketers, turns the nagging thought *I should check those old posts* into a scheduled task instead: a prompt that runs on a cadence you set, without you opening anything, that arrives as a report telling you exactly what changed. He frames the change in [his post on stale blog content](https://claudecodeformarketers.com/blog/keep-articles-up-to-date-with-claude-code/).

He also puts the manual run first. Once you have seen how the workflow behaves by hand, you set it up to run on a schedule.

<div class="diagram-card">
<div class="flow-diagram">
<div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-title">Run It By Hand</div><div class="flow-step-sub">See how the prompt behaves once</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-title">Fix The Prompt</div><div class="flow-step-sub">Correct what it got wrong</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-title">Set The Schedule</div><div class="flow-step-sub">Daily news, monthly or quarterly checks</div></div>
</div>
<div class="diagram-caption">Koppenhaver's rule for any recurring task: prove the prompt works by hand before you let it run unattended on a cadence.</div>
</div>

### Barbara Runs A Daily News Task, One Per Client Area

[Barbara Jovanovic](https://www.startupcookie.com/about/) runs StartupCookie, a six-figure content agency, with zero employees. She walked through her stack [on Marketing Against the Grain](https://marketingagainstthegrain.com/articles/how-i-run-a-0-employee-marketing-agency-with-ai-tools).

She uses a feature called Tasks. She has a task every morning to get the latest news, and because her clients are in fintech and health tech she has one for each.

The benefit she names is personal rather than operational. She felt she had to be on X every day because it was her job, and it was low-key ruining her mental health.

Read this one as she tells it. She never names the product behind Tasks, the surrounding walkthrough is about ChatGPT Projects, and she does not connect the workflow to Claude.

Cowork has scheduled tasks of its own, so a daily news brief per client area is buildable there. That transfer is ours, not Barbara's.

### Koppenhaver Runs A Monthly Fact-Check On His Best Posts

His `/fact-check` skill takes an article URL, pulls out every verifiable claim, researches each claim group in parallel, and returns a report in four buckets. Needs Update, New Information to Add, Consider Removing, and Still Accurate.

One run against his Cowork comparison post extracted 22 claims. 17 checked out fine, 2 needed corrections, and 3 new developments went in as additions.

It caught him writing that Cowork has hundreds of connectors when the real number is closer to 50.

That run was manual. He describes scheduling as something you can set up, and reports no results from a schedule he has running.

### Pick A Cadence By How Fast The Content Goes Stale

His recommendation is monthly checks for comparison and pricing content, because those go stale fastest, and quarterly for everything else.

He caps the scope as well. Do not audit the entire archive at once, and start with the posts that drive the most traffic.

In Cowork you set this up through built-in scheduled tasks from the GUI, with no terminal required.

The run notifies you, and a person still decides what to fix.

### Try This In Cowork

**Goal:** one scheduled task that delivers a report you would have wanted anyway.

**Steps:**

1. Pick the check you keep postponing. News for one client area, or facts on your five highest-traffic posts.

2. Run it manually first with the prompt below. Read the output and fix what the prompt asked for wrongly.

3. Cut the scope until the report fits on one screen.

4. Open scheduled tasks in Cowork and save the corrected prompt on a cadence. Daily for news, monthly for pricing and comparison pages, quarterly for everything else.

5. Name the delivery location in the prompt so the report lands where you already look.

6. After three runs, delete any section of the report you have never acted on.

**Expected result:** a report on your chosen cadence where every line either needs an action from you or confirms nothing changed.

### Get Started Today

This prompt is ours. Neither source publishes the text behind their scheduled task.

```
## Role
You are a marketing analyst on a standing brief. You report changes, not
background, and you say when nothing changed.

## Task
Run on {{cadence}}. Cover only what changed since your last run.

Pick the variant that matches this task:
- Daily news watch: {{industry-or-client-area}}
- Monthly fact-check: the pages listed at {{page-list}}
- Quarterly refresh: everything else at {{page-list}}

## Context
**Who this is for:** {{me-or-my-client}}
**Why they care:** {{the-decision-this-informs}}
**Sources to trust:** {{named-publications-or-sites}}
**Sources to ignore:** {{low-signal-sources}}
**Deliver to:** {{channel-doc-or-inbox}}
**Length ceiling:** {{word-count}}

## Output

### What Changed
One line per item: the change, the date, and the source URL. Sort by how
much it affects the decision named above.

### What It Means For Us
One line per item, and only where an action follows. Skip the ones where
nothing follows.

### Confidence
Mark each item high, medium, or low, and give the URL so I can check it
myself.

### Nothing To Report
If nothing changed, say so in one line and stop. Do not pad the report.
```

**Personalize it further.** Keep a note of which items you acted on. After a month, tighten the trusted-source list to the ones that produced those items.

---

## 2.7 How To Map Your Marketing Process To Find Wasted Hours

Jamie Hill, lead program manager for HubSpot's Product Marketing team, put a workflow on paper to find where a launch cycle lost hours nobody could account for, and is one of the architects of a process map that [saved one team 800 hours of labor](https://marketingagainstthegrain.com/articles/mapping-chaos-the-exercise-that-saved-us-800-hours). The article gives that figure with no timeframe, no headcount, and no measurement method.

The pressure came from Spotlight, a twice-annual launch of over 200 product updates and more than 750 marketing assets. His team was drowning in Slack threads and spreadsheets. Lay the work out, he says, and you see problems you ignore while you do it. The map is his pair of 3D glasses: he follows the movie without them, but misses the details.

### Start At The Trigger, End At The Result, Mark Every Handoff

Begin the map at whatever turns the key, like a customer form or a co-worker's ticket. Then name the end: the video publishes, or the budget is set.

Between those points, include any task with a date, any major decision, and any pivot where ownership shifts. Stop before you map each person's day, which Hill calls irrelevant and ridiculous.

Then hunt friction at the handoffs, which he calls the easiest places to spot problems. His test: is the right team getting the right information at the right time?

### Prioritize Fixes By Impact And How Easy They Are To Undo

Set priorities by comparing the time a fix takes against the outcome it buys. In his illustration, a problem that bothers one person ranks low, while removing 30 hours from a team of 40 justifies a big investment. He gives no period for those hours.

He decides with a matrix of reversibility against negative impact. Is this easy to reverse, and what happens if it goes wrong?

<div class="diagram-card">
<div class="matrix-wrap">
<div class="matrix-yaxis">High Impact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Low Impact</div>
<div class="matrix-main">
<div class="matrix-grid">
<div class="matrix-cell"><span><strong>Consult Experts</strong>Keep a human reviewing output.</span></div>
<div class="matrix-cell"><span><strong>A Human Owns This</strong>The decision and the outcome.</span></div>
<div class="matrix-cell highlight"><span><strong>Decide And Move On</strong>Your best entry point for AI.</span></div>
<div class="matrix-cell"><span><strong>Use Your Judgment</strong>Commit, then follow up.</span></div>
</div>
<div class="matrix-xaxis"><span>Easy To Reverse</span><span>Hard To Reverse</span></div>
</div>
</div>
<div class="diagram-caption">Hill's rule for deciding what to fix first: weigh how bad it would be against how easy it is to undo.</div>
</div>

He admits one mistake: an early version was hyper-specific to the work in front of him, so the next slightly different cycle broke his automations.

### Put A Bot On Intake So Work Arrives With Its Fields Filled

Hill's first fix was information integrity at the start. One unified intake form, and a bot that watches it for gaps.

He built it in [Asana](https://asana.com), and the AI doing the scanning is Asana's own. Use whatever project tool you already run.

When a team creates new work, the tool scans for missing critical information, especially the custom fields that trigger rules, and prompts the right person until it is complete.

Effectiveness scales only with the quality of your data, he says.

### Try This In Cowork

**Goal:** a map of one recurring marketing process, with every handoff marked and every pain point sorted into a quadrant.

**Steps:**

1. Pick one process you run at least quarterly, and block 30 minutes to an hour. Hill says a first session needs no more than that.

2. Write the trigger in one line and the finished result in one line.

3. Give Cowork the folder from your last run of that process. Briefs, trackers, timelines, status docs.

4. Paste the prompt below and let it draft the map from those files.

5. Read the handoff list first. Check each handoff against right team, right information, right time, right way.

6. Correct the map where it guessed wrong, ask it to rerank the friction points, then take only the low risk quadrant into your project tool this cycle.

**Expected result:** a step-by-step map of one process, a ranked list of friction points, and each point placed in one of the four quadrants.

### Get Started Today

The prompt below is ours. Hill's source contains no prompts of any kind.

```
## Role
You are a program manager who maps marketing workflows. You find
handoffs, delays, and repeated manual work by reading the artifacts a
process leaves behind.

## Task
Reconstruct one recurring marketing process from the files I gave you,
then find where the time goes.

Map from the trigger to the finished result. Include every task with a
date, every major decision, and every point where ownership changes.
Do not map anyone's individual day-to-day.

## Context
**The process:** {{campaign-launch-newsletter-event-etc}}
**What starts it:** {{form-ticket-request-calendar-date}}
**What finishing looks like:** {{published-shipped-approved}}
**Teams involved:** {{teams-and-who-owns-what}}
**How often we run it:** {{cadence}}
**What always goes wrong:** {{the-fires-you-already-know-about}}

Use only what the files show. Where a step is missing from the files,
list it as a gap and ask me rather than inventing it.

## Output

### The Map
Number each step from trigger to result. For each step give the owner,
the input it needs, the output it produces, and the elapsed time the
files show.

### Handoffs
List every point where work changes hands. For each one, answer whether
the right team got the right information at the right time in the right
way, and quote the file evidence.

### Friction Points
Rank the delays and manual fixes by cost. For each one, estimate the
hours it consumes per cycle and say which evidence you based that on.

### Decision Matrix
Place every friction point in one quadrant of reversibility against
negative impact:
- Easy to reverse, low impact: automate freely
- Easy to reverse, high impact: automate with human review
- Hard to reverse, low impact: decide, commit, follow up
- Hard to reverse, high impact: a human owns this

### Intake Fields
List the fields a request must carry so no downstream step ever stalls
for missing information.

### Gaps
Everything you could not determine from the files, as questions for me.
```

**Personalize it further.** Rerun this after your next cycle and ask what changed. Keep notes on decisions and rationale where the next owner will find them.


---


## 2.8 How To Build A Reviewer For Each Recurring Deliverable

Hilary Gridley, head of core product and AI at [Whoop](https://www.whoop.com/), builds a reviewer for each recurring deliverable rather than one tool that knows everything: a reviewer is a saved set of instructions that reads one kind of draft and reports what fails against a fixed list of checks, and her advice is to skip the tool that captures everything you know and build a dozen tiny hyper-specific ones instead.

Her instruction is [in her anti-slop playbook](https://marketingagainstthegrain.com/articles/29-07-2026): one for exec emails, one for A/B test design, one for problem statements. She has made dozens of them, each scoped to one exact use case. The more specific the tool, the more useful and accurate the feedback.

<div class="diagram-card">
<div class="node-diagram">
<div class="node-hub">Gridley's Reviewers</div>
<div class="node-connector"></div>
<div class="node-spokes">
<div class="node-spoke"><div class="node-spoke-title">Exec Emails</div><div class="node-spoke-sub">Checks scoped to one deliverable</div></div>
<div class="node-spoke"><div class="node-spoke-title">A/B Test Design</div><div class="node-spoke-sub">Checks scoped to one deliverable</div></div>
<div class="node-spoke"><div class="node-spoke-title">Problem Statements</div><div class="node-spoke-sub">Checks scoped to one deliverable</div></div>
</div>
</div>
<div class="diagram-caption">Gridley's rule: skip the tool that captures everything you know, and build a dozen hyper-specific reviewers instead.</div>
</div>

That is the whole of what the source says here. It never names the platform she built them in, never shows one, and never quotes the feedback one returned, so take the claim at its stated size.

### Scope Each Reviewer To One Deliverable You Ship On A Schedule

Look at the three examples she names. Exec emails, A/B test design, problem statements.

Each one is a thing your team produces on a schedule, rather than a topic, a channel, or a job title.

That reading is ours rather than hers, because the source describes the result and not the method. It says each tool is scoped to one exact use case, and it stops there.

We also chose the word reviewer. Gridley's word is tool, and what hers return is feedback.

### Slot The Reviewer Into Draft, Then Feedback, Then Improve

Gridley frames the whole AI workflow in three beats. Draft, then feedback, then improve.

A single-purpose reviewer lives at the feedback beat. It reads the draft and reports, and the person who wrote the draft still owns the fix.

### Write The Checks So A Stranger Can Answer Them

The template below is ours, since Gridley's source shows none of her tools.

Four things go into a reviewer. What the deliverable is, who receives it, the checks it must pass, and the format the feedback comes back in.

Checks beat advice, for the same reason that [criteria pulled from your own past edits](module-1.md#15-how-to-build-an-edit-rubric-from-your-own-past-edits) beat a note about clarity. A reader who has never met you can answer a check.

### Try This In Cowork

**Goal:** one working reviewer for the deliverable you check most often.

**Steps:**

1. List the things you personally review every week. Pick the one you review most.

2. Collect three past examples you approved and two you sent back.

3. Put those five files in one folder and point Cowork at it.

4. Paste the prompt below into Cowork, filled in for your deliverable.

5. Give it a fresh draft and read the feedback before you read the draft.

6. Where the feedback misses something you would have caught, add that as a new check.

**Expected result:** a reviewer that returns a pass or fail line per check on any draft of that one deliverable, plus the specific edit to make.

### Get Started Today

```
## Role
You review exactly one thing: {{the-deliverable}}. You never write it,
rewrite it, or comment on any other kind of document.

## Task
Read the draft I give you and report against the checks below.

Give a verdict of pass or fail per check. For every fail, quote the
offending line and give the specific fix.

## Context
**The deliverable:** {{weekly-exec-update-ab-test-plan-problem-statement}}
**Who produces it:** {{roles}}
**Who receives it:** {{audience-and-what-they-do-with-it}}
**What a good one achieves:** {{decision-approval-alignment}}
**What a bad one costs us:** {{rework-delay-lost-trust}}
**Examples I approved:** {{attached}}
**Examples I sent back, and why:** {{attached-plus-reason}}

## Checks
Each check is answerable yes or no by someone who has never met me.
- {{check-1}}
- {{check-2}}
- {{check-3}}
- {{check-4}}
- {{check-5}}

## Output

### Verdict
Pass or fail overall, in one line.

### Check Results
One line per check: the check, pass or fail, and the quoted evidence.

### Fixes
For each failed check, the exact rewrite of the offending line. Give the
replacement text, not a description of it.

### Out Of Scope
Anything you noticed that no check covers. List it here so I can decide
whether it becomes a check, and do not act on it.
```

**Personalize it further.** Add a check each time the reviewer misses something you caught yourself. Build the next reviewer for the next deliverable on your list rather than widening this one.


---


## 2.9 How To Build An Interactive Lead Magnet That Captures Emails

Sabrina Ramonov built a lead magnet that gives the visitor a result about their own situation, instead of a PDF that only proves an email address exists: a small app that acquires traffic and routes it to your main product, focused on one small use case related to what you sell.

She walked through the build [on Marketing Against the Grain](https://marketingagainstthegrain.com/articles/the-ai-system-that-built-a-1.4m-audience). Her evidence is a directory of AI agents and automations that she vibe-coded in [Lovable](https://lovable.dev) in a few hours. That directory took 37,000 visitors in its most recent 90 days, and she estimates closer to 70,000 since it launched about six months earlier. Traffic reaches her own site through subtle in-context links.

<div class="diagram-card">
<div class="value-bars">
<div class="value-bar-row"><div class="value-bar-top"><span>Since Launch (~6 Months)</span><span>~70,000</span></div><div class="value-bar-track"><div class="value-bar-fill" style="width:100%"></div></div></div>
<div class="value-bar-row"><div class="value-bar-top"><span>Most Recent 90 Days</span><span>37,000</span></div><div class="value-bar-track"><div class="value-bar-fill" style="width:53%"></div></div></div>
</div>
<div class="diagram-caption">Over half the directory's estimated lifetime traffic landed in just its most recent 90 days.</div>
</div>

She volunteers the weakness too. The bounce rate is really high, because a single-page directory gives people one thing to do.

### Define The Artifact, Topic, And Email Capture Before You Build

She picked Lovable because it handles the database and authentication for you, and she built her calculator live in a single prompt.

What she asked for, narrated while she typed, had seven parts:

- the tool, Lovable
- the artifact, an interactive lead magnet quiz with a calculator
- the topic, AI readiness and ROI
- the payoff, showing clients the time and money they could save with AI
- the question count, 15
- the output, a personalized report
- the capture, their email

Five minutes later she had a quiz that asks 15 questions, scores readiness, estimates annual savings, and recommends next steps.

Lovable flags exposed keys along the way, which she calls a common vibe-coding mistake.

The episode reports no traffic, no capture rate, and no revenue for that calculator, so five minutes is a build time and not a result.

### Spend Your Real Time On The Last 30 Percent Of The Build

People are surprised how far they get on attempt one, Ramonov says, maybe 70 percent. The last 30 percent that makes the product unique takes most of the time.

The work is to encode your expertise into the app so it delivers a real before-and-after.

The scoring model is the part the episode never shows. No weights, no savings formula, none of the 15 questions.

The people who succeed start simple, add one thing at a time, and push back at what the AI does.

She names her own advantage when asked: computer science and physics at Berkeley, though she adds that non-technical members of her builder community vibe-code at this scale.

### Draft The Questions And The Scoring In Cowork First

Claude does not appear anywhere in Ramonov's episode, and Lovable is the tool she uses. The bridge below is ours.

The part she calls hardest is writing rather than coding. The 15 questions, the weights behind the score, the savings formula, and the words in the report.

Cowork can draft all four from files you already have. Pricing, case studies, onboarding notes, past client results.

### Watch Sabrina Ramonov Build The Calculator In One Prompt

The episode includes the full screen share, from typing the prompt to reading the finished quiz.

[![The AI System That Built a 1.4M Audience](https://img.youtube.com/vi/m6DQBiNajW0/maxresdefault.jpg)](https://www.youtube.com/watch?v=m6DQBiNajW0)

*Marketing Against the Grain, "The AI System That Built a 1.4M Audience" (26k views)*

### Try This In Cowork

**Goal:** a complete spec for one interactive lead magnet, ready to paste into a builder.

**Steps:**

1. Pick the one question your prospects ask before they buy. Readiness, cost, size, risk.

2. Give Cowork your pricing page, two case studies, and any onboarding or audit notes you keep.

3. Paste the prompt below and let it draft the questions, the scoring, and the report copy.

4. Check the savings formula by hand against one real client you already know the numbers for.

5. Cut the question list until every remaining question changes the result.

6. Paste the finished spec into your builder as the first prompt, then customize what comes back.

**Expected result:** a numbered question list, a scoring model with stated weights, report copy for each result band, and the email capture point named.

### Get Started Today

```
## Role
You are a product strategist who designs interactive assessments. You
turn a company's existing knowledge into a scored quiz that gives the
taker a real answer about their own situation.

## Task
Write the complete spec for an interactive lead magnet I will build in a
vibe-coding tool.

Design the questions, the scoring, the result bands, and the report. Use
my files as the source of the expertise, not general advice.

## Context
**What I sell:** {{product-or-service}}
**Who takes this quiz:** {{visitor-and-their-role}}
**The question they ask before buying:** {{readiness-cost-risk-fit}}
**The payoff I promise them:** {{what-they-learn-about-themselves}}
**Number of questions:** {{10-20}}
**Files attached:** {{pricing-case-studies-audit-notes}}
**Where I want them to go next:** {{demo-call-trial-guide}}

Every question must change the result. Cut any question that does not
move a score.

## Output

### Questions
Number each question. For each one give the answer options, the score
each option carries, and one line on why this question changes the
outcome.

### Scoring Model
The formula, with the weight on each question stated. Show the maths for
one worked example so I can check it by hand.

### Savings Or Value Estimate
The calculation behind any number the report shows, with every
assumption named and sourced to one of my files.

### Result Bands
Three to five bands. For each band, the score range, what it means, and
the recommended next step.

### Report Copy
The words the taker reads for each band. Written to them, about their
own answers.

### Capture Point
Where in the flow the email is requested, what the person gets in
exchange, and what the form says.

### Build Prompt
The whole spec compressed into one prompt I can paste into a
vibe-coding tool as the first instruction.
```

**Personalize it further.** After 50 people take it, give Cowork the answer data and ask which question splits your best leads from the rest. Rebuild the scoring around that question.

---

## 2.10 How To Build An Internal Marketing Tool From Your Tab List

Lazar Jovanovic, GTM engineer at [Lovable](https://lovable.dev), builds the tools that Lovable's sales and marketing team use, starting from a spec built out of his own browser tabs rather than a plain description written cold: "Monitor the number of tabs you always have open when you plan an event. That's how I knew which bits and pieces I wanted to pull into my app."

He gave his method in [three tips for building your own event management tool](https://marketingagainstthegrain.com/articles/31-08-2026), and shortens it to four words: "Basically just document your day."

The article fills in what shows up on such a list: your email client, your form builder, everything you use to manage the event. It also supplies the formulation, that the tab list becomes your spec when you build your tool. That line belongs to the write-up rather than to Jovanovic.

<div class="diagram-card">
<div class="flow-diagram">
<div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-title">Match The Format</div><div class="flow-step-sub">To how customers actually buy</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-title">Describe The Ideal Flow</div><div class="flow-step-sub">Have the app tick every box</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-title">Log The Tabs</div><div class="flow-step-sub">The tab list becomes your spec</div></div>
</div>
<div class="diagram-caption">Jovanovic's method for building an internal tool: document your day, then turn the pattern into the build.</div>
</div>

### Match The Event Format To How Customers Actually Buy

His first tip decides what the tool is for. Match the event format to how your customers actually buy.

Adoption of Lovable runs bottom up, where "somebody discovers it in the company and then it spreads like wildfire." So he reaches for a meetup rather than an executive dinner, to "get that intro to the exec."

His own worked example for testing, later in the same article, is an executive dinner. The article does not reconcile the two.

### Describe The Ideal Flow And Have The App Tick The Boxes

He tests before production rather than in it. He walks the app through the flow in words: "Hey, create a user, sign them up, put them on the wait list, send them an email."

"I will describe the ideal flow and have the app tick all the boxes for me," he says.

Then he checks what the tool exposes, because an attendee list is personal data. He asks for "admin guardrails, role-based access controls, stuff like that, where you're asking the tool to build things in such a way that they are accessible only by the people that they should be accessible by."

The article headers that tip as a warning. AI will let you build fast and wrong.

### Turn The Tab Log Into A Build Prompt

The article never names the tool Jovanovic built his app in, and it never mentions Claude. He works at Lovable and builds internal tools there, and that is as far as the source goes.

The spec step is where Claude comes in, and this bridge is ours. Hand Cowork a raw log of your tabs and it sorts them into features, flags the ones holding personal data, and writes the build prompt you take to whatever builder you use.

### Try This In Cowork

**Goal:** turn one week of your own browser tabs into a build-ready spec for a single internal tool.

**Steps:**

1. Pick one recurring marketing task you own end to end. An event, a launch, a monthly report.

2. Run that task once as normal. Each time you open a tab for it, add the tab name and what you did there to a running note.

3. At the end, list every tab that appeared more than once. Ignore the one-offs.

4. Paste that list into Cowork with the prompt below.

5. Read the feature list it returns and cut anything you would not use every single cycle.

6. Write out the ideal flow in one paragraph, the way Jovanovic describes it, and keep it for testing whatever you build.

**Expected result:** a spec naming the handful of tools you actually live in, a short must-have feature list, and an access rule for every field that holds someone's personal data.

### Get Started Today

```
## Role
You are an internal tools analyst. You turn a marketer's observed
workflow into a buildable spec for one small internal tool.

## Task
Below is a log of the browser tabs I keep open while I run one
recurring marketing task. Turn it into a spec.

Work only from the tabs I actually listed. Do not add features
because they are standard. A tab that appears once is not a
requirement.

## Context
**The task:** {{event-launch-report-etc}}
**How often I run it:** {{cadence}}
**Who else touches it:** {{teammates-vendors-agencies}}
**My tab log:** {{paste-the-list-with-what-you-did-in-each}}
**Personal data involved:** {{attendee-names-emails-phone-etc}}
**Who is allowed to see that data:** {{roles}}

## Output

### Tab Audit
Group my tabs into jobs the tool would have to do. Name each job in
one line and list the tabs it would replace.

### Must Have
The features without which I would keep the tab open anyway. Five
maximum. For each one, name the tab it retires.

### Later
Features the log supports but that I could add on a second pass.

### Not This Tool
Anything in my log that should stay a separate tool, and one line
on why.

### The Build Prompt
Write the prompt I would paste into a builder to get version one.
Describe the data it stores, the screens it needs, and nothing else.

### Flow Test Script
Write the ideal user flow as a single instruction I can hand the
built app to check, in the form "create a user, sign them up, put
them on the wait list, send them an email."

### Access Rules
For each field holding personal data, state which role can read it
and which can edit it. Flag anything that would sit on a public URL.
```

**Personalize it further.** Run the tab log again after you ship version one. The tabs that survive are the features you missed.


---


## 2.11 How To Personalize Your Website For Different Visitor Segments

Pam Vaughan, a member of HubSpot's web strategy team who has optimized the core pages on HubSpot.com for eight years, stopped showing returning visitors the offer they had already taken: personalization shows one segment of visitors different content on the same page, and HubSpot's core pages carry two calls to action by default, one that starts you on the free version of the software and one that books a demo of the premium editions.

She wrote up one of those experiments in [the simple website personalization that increased conversions by 560%](https://marketingagainstthegrain.com/articles/the-simple-website-personalization-that-increased-conversions-by-560). "It was pretty silly to show free sign-up CTAs to contacts who are already free users," she says. A free user back on the page is still shopping, in her reading, and might want the premium editions.

### Swap Every Module The Segment Sees

She picked one of HubSpot's highest trafficked pages, a product page about the free CRM and other free tools. For contacts already identified as free users, the free sign-up call to action became a demo call to action.

The screenshots show the swap running wider than the button. The eyebrow, headline, body copy, button, and *no credit card required* microcopy all changed between the two versions.

<div class="diagram-card">
<div class="compare-wrap">
<div class="compare-col before">
<div class="compare-col-label">Default Page</div>
<div class="compare-steps">
<div class="compare-step"><span class="compare-step-num">1</span>Eyebrow and headline pitch the free CRM</div>
<div class="compare-step"><span class="compare-step-num">2</span>Button reads Sign Up Free</div>
<div class="compare-step"><span class="compare-step-num">3</span>Microcopy: no credit card required</div>
</div>
</div>
<div class="compare-arrow">→</div>
<div class="compare-col after">
<div class="compare-col-label">Personalized For Free Users</div>
<div class="compare-steps">
<div class="compare-step"><span class="compare-step-num">1</span>Eyebrow, headline, and body copy swap to premium</div>
<div class="compare-step"><span class="compare-step-num">2</span>Button reads Request A Demo</div>
<div class="compare-step"><span class="compare-step-num">3</span>Microcopy changes to match the demo CTA</div>
</div>
</div>
</div>
<div class="diagram-caption">Vaughan swapped every module the segment saw, not just the button, once she knew the visitor was already a free user.</div>
</div>

In her own account, the smart rules changed copy and calls to action.

*[Diagram: the source's side-by-side screenshots of the default content and the smart content version of the Free HubSpot CRM page, showing the eyebrow, headline, body, button, and microcopy differences.]*

### Why The 560% Headline Number Is Misleading

Demo conversion rate on that page rose 560%. Demo requests from the same page went from 38 a month to 258 a month.

Those two figures measure different things. The 560% is a change in rate, and 38 to 258 is a change in volume, which works out slightly larger at a 579% increase.

She names the test design herself, and it was a lookback test rather than an A/B test. She made the change for 100% of visitors, then compared a period before against a period after.

The source never says how long either period was. A comparison run at full traffic carries whatever else changed in those weeks, and her claim of no harm to free sign-ups carries no number.

### Build A Self-Updating List To Power The Rule

[HubSpot smart content](https://knowledge.hubspot.com/website-pages/create-and-manage-smart-content-rules) can segment by device type, country, referral source, language, and more. She based hers on contact list membership.

Her list holds every contact who is a free user, and it updates itself as new ones arrive. It carries a readable name: `On-Site | Global | Web Strategy | Free Users [Do Not Edit]`.

Then she set a smart rule for each module she wanted to personalize. Setup took a few minutes, and the feature requires Professional or Enterprise Marketing Hub or Content Hub.

A visitor who matches several rules sees the content in the rule that comes first, so rule order decides the outcome.

*[Diagram: the source's "Manage smart rules" dialog screenshot, showing "Show different content based on" set to Contact list membership and the named free-user list.]*

She advises segmenting on business size and buying stage, starting small, and watching the return. Her workflow uses no AI, so the prompt below is ours.

### Try This In Cowork

**Goal:** one page, one segment, and a rewritten module set you can put behind a rule this week.

**Steps:**

1. List the pages that get your most traffic. Pick the one whose main call to action asks for something part of your audience already did.

2. Name that segment in a sentence. Free users, existing customers, people who already booked a call.

3. Check that you can actually identify them. Personalization by list membership only reaches known contacts, never anonymous visitors.

4. Screenshot the page and paste it into Cowork with the prompt below.

5. Take the rewritten modules it returns and build one rule per module, not one rule for the page.

6. Write down today's conversion number for that page before you publish, so your before period exists.

**Expected result:** a rewritten eyebrow, headline, body, and button for one segment, plus the metric and the window you will judge it on.

### Get Started Today

```
## Role
You are a conversion strategist who specializes in page
personalization for known, identified visitors.

## Task
Help me personalize one page for one segment. Rewrite every module
on the page that should change for that segment, and leave the rest
alone.

Assume this segment already took the default action on this page.
The rewritten page should offer them the next step instead.

## Context
**Page and its job:** {{url-and-what-it-asks-visitors-to-do}}
**Default headline, body, and CTA:** {{paste-current-copy}}
**The segment:** {{who-they-are-and-what-they-already-did}}
**How I identify them:** {{list-membership-login-cookie-crm-field}}
**The next step I want from them:** {{demo-upgrade-quote-etc}}
**What they already know about us:** {{what-the-product-does}}
**Monthly conversions on this page today:** {{number}}

## Output

### Segment Read
In three lines, what this visitor already believes about us, what
the default page gets wrong for them, and what they came back for.

### Module Rewrites
A table with one row per module: module name, current copy, and
personalized copy. Cover eyebrow, headline, body, button label, and
any microcopy under the button.

### Leave Alone
The modules that should stay default for everyone, and one line on
why changing them would add maintenance without adding conversion.

### Rule Order
If I later add rules for other segments, the order they should fire
in, since a visitor matching several rules sees only the first.

### Measurement Plan
The one metric to judge this on, the length of the before window and
the after window, and the counter-metric that tells me the default
audience got worse.

### Kill Criteria
The result at which I should remove this personalization and go back
to one version of the page.
```

**Personalize it further.** Run it again for a second segment on the same page. Where the two rewrites come back near-identical, the segments are one segment.

By this point you should have:

- One strategic answer pulled from a folder you had never read end to end
- A deck built straight out of that analysis, charts included
- A tested sense of which Google Workspace edits Claude can make in place and which it cannot
- ICP, persona, and messaging skills that every later build reads from
- An outbound agent that drafts weekly and waits in Slack for your approval
- A recurring task that runs on a schedule instead of on your memory
- A process map with the handoffs drawn and the automation candidates ranked
- A reviewer scoped to one deliverable, returning pass or fail rather than advice
- An interactive lead magnet that captures emails while it scores the visitor
- An internal tool built from the tabs you keep open
- A personalization rule that shows returning visitors a different page

Claude now works against your real files, your real tools, and a clock. It still works inside an interface somebody else designed.

The next module hands you the terminal. Claude Code reads your repository, runs commands, keeps skills on disk, and chains the workflows above into systems that improve themselves.
