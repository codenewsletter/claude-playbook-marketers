# Module 1: Marketing Work You Can Do In A Browser Tab

You already have the ideas. They sit in your call recordings, your old decks, the notes you never turned into anything.

AI-first marketers turn this raw material into finished work in minutes.

A week of social posts from one webinar. Buyer research that reads like you interviewed someone yourself. Brand voice that survives a first draft.

No new skills required. Everything happens in a simple chat window, and the marketers you learn from here are not engineers either.

### Lessons In This Module

- [1.1 How To Start Every AI Task With Real Context](#11-how-to-start-every-ai-task-with-real-context)
- [1.2 How To Give Claude Your Brand Voice And Product Facts Once](#12-how-to-give-claude-your-brand-voice-and-product-facts-once)
- [1.3 How To Turn One Transcript Into A Week Of Social Posts](#13-how-to-turn-one-transcript-into-a-week-of-social-posts)
- [1.4 How To Make AI Writing Sound Like You](#14-how-to-make-ai-writing-sound-like-you)
- [1.5 How To Build An Edit Rubric From Your Own Past Edits](#15-how-to-build-an-edit-rubric-from-your-own-past-edits)
- [1.6 How To Write Social Hooks That Stop The Scroll](#16-how-to-write-social-hooks-that-stop-the-scroll)
- [1.7 How To Run Deep Research That Produces A Reusable Playbook](#17-how-to-run-deep-research-that-produces-a-reusable-playbook)
- [1.8 How To Research Your Buyer By Simulating Them](#18-how-to-research-your-buyer-by-simulating-them)
- [1.9 How To Check If Your Brand Appears In AI Search](#19-how-to-check-if-your-brand-appears-in-ai-search)
- [1.10 How To Turn Marketing Data Into An Executive Summary](#110-how-to-turn-marketing-data-into-an-executive-summary)
- [1.11 How To Generate On-Brand Images With A Modular Prompt Formula](#111-how-to-generate-on-brand-images-with-a-modular-prompt-formula)

---

## 1.1 How To Start Every AI Task With Real Context

[Barbara Jovanovic](https://www.startupcookie.com/about/) runs StartupCookie, a six-figure content agency, with zero employees, and treats a blank prompt as a guaranteed dead end: an AI model can only work with what you give it, so a prompt with nothing of yours in it returns the average of everything ever written on the topic.

She joined Kipp Bodnar, CMO of [HubSpot](https://www.hubspot.com), and Kieran Flanagan, CMO of [Zapier](https://zapier.com), on Marketing Against the Grain. In [an episode on how she runs a six-figure agency with no employees](https://marketingagainstthegrain.com/articles/how-i-run-a-0-employee-marketing-agency-with-ai-tools), she named the rule her whole operation runs on.

"We never start by prompting AI from scratch to do anything," she said. "Even a simple social media post. We always have something to start with."

Before AI, she was head of content at a [Y Combinator](https://www.ycombinator.com/) startup, where freelancers cost $200 to $300 per article and she rewrote 60 to 70% of every draft.

Her first real result came when she stopped asking for articles. She fed a webinar transcript into the model instead, along with the brand guidelines and the writing style. The output beat drafts she used to wait three weeks for.

<div class="diagram-card">
<div class="compare-wrap">
<div class="compare-col before">
<div class="compare-col-label">Before</div>
<div class="compare-steps">
<div class="compare-step"><span class="compare-step-num">$</span>$200-300 per freelance article</div>
<div class="compare-step"><span class="compare-step-num">⏱</span>3-week turnaround per piece</div>
<div class="compare-step"><span class="compare-step-num">✎</span>60-70% of every draft rewritten by hand</div>
</div>
</div>
<div class="compare-arrow">→</div>
<div class="compare-col after">
<div class="compare-col-label">After</div>
<div class="compare-steps">
<div class="compare-step"><span class="compare-step-num">$</span>&lt;$1,000/yr for the entire stack</div>
<div class="compare-step"><span class="compare-step-num">⏱</span>Minutes per piece</div>
<div class="compare-step"><span class="compare-step-num">✎</span>6 roles replaced: writer, SEO, design, video, audio, analyst</div>
</div>
</div>
</div>
<div class="diagram-caption">What changed once Barbara stopped prompting from scratch and started every task from a transcript.</div>
</div>

### Record A Monthly Founder Interview For Raw Material

Clients without a podcast get an hour-long founder interview each month. That single hour produces the raw material for the month, and it captures tone of voice and phrasing along with the topics.

Founders with no budget can record themselves instead. The transcript is what you are after, and an interviewer is only one way to get one.

### Extract The Insights, Then Judge Them

Barbara does not ask for a blog post. Her first prompt asks the model to extract every insightful topic, with timestamps so she can jump back to the audio. She still listens to parts herself, because the model misses the occasional zinger.

One rule governs that step. The model takes information only from the transcript, which protects a founder's features, branding, and phrasing.

Then she reads the list and asks a hard question about each idea. If she saw this on social media or as a blog post, would she read it? Would she click? If the answer is no, it does not get made.

The stack that runs all of it costs Barbara under $1,000 a year, and it replaced a copywriter, an SEO copywriter, a marketing designer, a video editor, an audio editor, and a data analyst.


### Watch Barbara Walk Through Her Actual Prompts

She shares her screen and shows the real prompts, the spreadsheet she keeps them in, and the workflow diagram she built for herself. This is the most-watched episode in the show's history.

[![How I Run A 0-Employee Marketing Agency With AI Tools](https://img.youtube.com/vi/9QbFg4kiNpY/maxresdefault.jpg)](https://www.youtube.com/watch?v=9QbFg4kiNpY)

*Marketing Against the Grain, "How I Run A 0-Employee Marketing Agency With AI Tools" (151k+ views)*

### Try This In Claude Chat

**Goal:** turn one recorded conversation into a ranked list of publishable ideas, with the weak ones already cut.

**Steps:**

1. Pick a recording you already have. A webinar, a podcast episode, a sales call, a customer interview, or a voice note of yourself talking for 20 minutes.

2. Get the transcript. Recording tools usually export one. YouTube auto-captions work too.

3. Open a new chat at [claude.ai](https://claude.ai).

4. Paste the prompt below. Replace every `{{variable}}` with your own details.

5. Paste your transcript where the prompt asks for it.

6. Read the Ranked Shortlist. Apply Barbara's test to each idea. If you would not click it, cut it.

**Expected result:** a list of 5 to 15 ideas with timestamps, ranked by how interesting each one is to your audience. Below it, a discard list that names what the model rejected and why.

### Get Started Today

```
## Role
You are an expert content strategist. You specialize in mining long-form
conversations for publishable ideas that an audience will actually stop for.

## Task
Read the transcript below. Find the ideas inside it that deserve to become
content. Rank them by how interesting they are to the target audience.

Do not summarize the conversation. Surface the specific moments where the
speaker said something original, useful, or counterintuitive.

## Context
The speaker already did the thinking. Your job is to find it, not to add
to it.

Take every fact, feature name, statistic, and phrase from the transcript
only. Never add information from outside the transcript. When a founder
describes their product, their exact features, branding, and phrasing must
survive intact.

**Company:** {{company-name-and-what-it-does}}
**Speaker:** {{speaker-name-and-role}}
**Target audience:** {{who-this-content-is-for}}
**Content formats I publish:** {{blog-posts-linkedin-newsletter-etc}}
**Topics or angles that perform well for me:** {{proven-topics-or-formats}}

**Transcript:**
{{paste-full-transcript-here}}

## Output

### Insight Inventory
List every idea in the transcript that could stand on its own as content.
For each one, give me:
- A working title
- The timestamp or location in the transcript
- A one-line summary of the idea
- The most quotable phrase the speaker actually said, verbatim
- Why this would interest the target audience specifically
- The best format for it, chosen from my published formats above

### Ranked Shortlist
Rank your top five by how likely the target audience is to stop scrolling
for it. Give one line of reasoning per rank. Be decisive about the order.

### Coverage Gaps
Name the insights that are incomplete or underdeveloped in the transcript.
For each one, write the single follow-up question I should ask the speaker
to make it publishable.

### Discard List
List the ideas you considered and rejected. Give one line each on why.
Be harsh here. Reject anything generic, anything already said everywhere
else, and anything that only makes sense with context the audience lacks.
```

**Personalize it further.** Add a line naming the topics your audience is tired of. Add your own definition of what makes a good hook. If your recordings are always the same format, save this prompt so you can reuse it every week.

---

## 1.2 How To Give Claude Your Brand Voice And Product Facts Once

[Barbara Jovanovic](https://www.startupcookie.com/about/), the zero-employee agency owner who runs every task off a transcript, built her agency on Claude Projects: a workspace that loads reference files and standing instructions once, so every new chat inside it starts with the brand voice and product facts already in place, instead of a model that keeps nothing from yesterday.

She walked through it [on Marketing Against the Grain](https://marketingagainstthegrain.com/articles/how-i-run-a-0-employee-marketing-agency-with-ai-tools). She keeps a separate Project for each client, then splits again by what she produces.

"We have a project for each client and for each deliverable," she said. Blog posts get one. Social media gets another. The content differs enough that she prefers to keep them apart.

She remembers how the launch landed with everyone else. People called it a neat feature. Her reaction was different.

"You don't understand," she said. "I can scale my agency because of this."

### Load The Files That Teach Claude How The Client Writes

For one client who publishes weekly blog posts, Barbara fills the Project files with writing style samples for voice and tone.

<div class="diagram-card">
<div class="node-diagram">
<div class="node-hub">Project Knowledge</div>
<div class="node-connector"></div>
<div class="node-spokes">
<div class="node-spoke"><div class="node-spoke-title">Voice Files</div><div class="node-spoke-sub">Writing style samples for tone</div></div>
<div class="node-spoke"><div class="node-spoke-title">Fact Files</div><div class="node-spoke-sub">Company, product, topics covered</div></div>
<div class="node-spoke"><div class="node-spoke-title">Instructions</div><div class="node-spoke-sub">What Claude should do, not just sound like</div></div>
</div>
</div>
<div class="diagram-caption">Barbara splits every client Project into files that teach voice, files that carry facts, and instructions that govern behavior.</div>
</div>

She sourced those samples when she interviewed the founder directly. Who are your favorite writers? What blogs do you read? Whose style do you like?

Every answer went into the Project.

The set grows over time. When her team produces a piece the founder loves, that piece goes in too, so the standard rises with each round.

On top of the style samples sits the factual layer. General information about the company, the product, and the topics already discussed. Barbara describes it as a huge document of everything you need.

### Write Instructions That Control How Claude Behaves

Files teach Claude what the client sounds like. Instructions tell Claude what to do, and Barbara rates the second one higher. She calls the instructions arguably more important than the documents.

She is direct about where the feature falls short. Claude misses the instructions about half the time, and she has to remind it in chat to follow them.

Projects need a paid Claude plan.

### Ask A Founder's Transcripts What He Would Say

Barbara's clients include busy founders who cannot answer every question their team has. Teams message her instead. What do you think he would say about this? What would be his phrasing?

She loads 10 to 20 transcripts from that founder into a Project.

Then she interrogates it. Did he mention this? Did we talk about this topic?

The result behaves like a persona of that person, available on demand. Barbara runs this in both Claude and [ChatGPT](https://chatgpt.com).


### Try This In Claude Chat

**Goal:** build one Project that produces on-brand drafts without you pasting context first.

**Steps:**

1. Open [claude.ai](https://claude.ai) and create a new Project. Name it after one client and one deliverable, such as *Acme, blog posts*.

2. Work through the checklist below. Upload each file to Project knowledge.

3. Paste the instructions template into the Project's custom instructions field. Fill in every `{{variable}}`.

4. Start a new chat inside the Project. Ask it to draft something small, such as one paragraph of a blog intro.

5. Read the draft. When it breaks a rule, fix the rule in the instructions rather than in the chat.

6. Repeat step 4 until the draft holds. Each fix applies to every future chat in that Project.

**Expected result:** a Project that returns first drafts in the client's voice from a one-line request, with no context pasted at the top.

### Copy This Project Knowledge Checklist

```
VOICE FILES
[ ] 3 to 5 published pieces that sound exactly right
[ ] The founder's answers to: favorite writers, blogs they read,
    whose style they like
[ ] Any piece the client has praised, added as you produce them
[ ] A sample of the client's own unedited writing, such as a
    long Slack message or an internal memo

FACT FILES
[ ] What the company does, in the company's own words
[ ] Product names, feature names, and correct capitalization
[ ] Pricing and plan names
[ ] The customer, their job title, and their problem
[ ] Competitors, and how the client positions against them
[ ] Claims legal has approved, and claims legal has rejected

TOPIC FILES
[ ] Topics already covered, so drafts do not repeat them
[ ] Call or interview transcripts with the founder
[ ] Anything the client has publicly said they disagree with
```

### Get Started Today

```
## Role
You are a {{content-type}} writer for {{company-name}}. You write as the
company, in the voice held in this Project's files.

## Before You Write
Read the voice files in Project knowledge first. Match their sentence
length, their vocabulary, and their level of formality.

Take every product name, feature name, statistic, and claim from the fact
files only. When a fact is missing from the files, ask me for it. Never
invent it and never take it from your general knowledge.

## How To Behave
- Ask me clarifying questions one at a time before you draft anything long.
- Give me one draft, not three options, unless I ask for options.
- When I give you feedback, apply it to the whole piece, not just the
  sentence I flagged.
- Flag any claim you are unsure about instead of softening it.

## Format
- Deliverable: {{blog-post-linkedin-newsletter-etc}}
- Length: {{target-length}}
- Structure: {{how-these-pieces-are-usually-built}}
- Always end with: {{standard-cta-or-signoff}}

## Audience
{{who-reads-this-and-what-they-already-know}}

## Never
{{things-this-client-will-not-say-claims-legal-rejected-topics-off-limits}}
```

**Personalize it further.** Add the client's non-negotiables as explicit lines in the Never section. When Claude ignores an instruction, rewrite that line as a single short command rather than a sentence. Start every chat inside the Project with *follow the project instructions*, which is how Barbara handles the misses.

The voice rules go deeper than a file of samples can carry. We cover the specific words and sentence shapes to ban in [the lesson on making AI writing sound like you](#14-how-to-make-ai-writing-sound-like-you).

---

## 1.3 How To Turn One Transcript Into A Week Of Social Posts

[Barbara Jovanovic](https://www.startupcookie.com/about/), who runs the zero-employee agency StartupCookie, used to turn a list of ten good ideas from a transcript into ten social posts at once, and got back ten posts she would not publish: a model spreads its attention across all ten and each one gets a fraction of the effort, with no way to tell which claims came from her material and which the model filled in.

She [solved it](https://marketingagainstthegrain.com/articles/how-i-run-a-0-employee-marketing-agency-with-ai-tools) by going one idea at a time instead.

"If you tell it to take the whole list and make posts, it gets messy," she said. "And it's difficult to figure out what it hallucinated."

So she goes one by one. She picks an idea she likes and tells the model to focus on that idea alone.

<div class="diagram-card">
<div class="compare-wrap">
<div class="compare-col before">
<div class="compare-col-label">Whole List At Once</div>
<div class="compare-steps">
<div class="compare-step"><span class="compare-step-num">1</span>Attention spread across 10 ideas</div>
<div class="compare-step"><span class="compare-step-num">2</span>Each post gets a fraction of the effort</div>
<div class="compare-step"><span class="compare-step-num">3</span>No way to tell what the model hallucinated</div>
</div>
</div>
<div class="compare-arrow">→</div>
<div class="compare-col after">
<div class="compare-col-label">One Idea At A Time</div>
<div class="compare-steps">
<div class="compare-step"><span class="compare-step-num">1</span>One idea gets the model's full focus</div>
<div class="compare-step"><span class="compare-step-num">2</span>Full transcript still attached for connections</div>
<div class="compare-step"><span class="compare-step-num">3</span>Claims trace back to something she can check</div>
</div>
</div>
</div>
<div class="diagram-caption">Barbara stopped batching posts because a model spread across ten ideas at once gets messy and hard to fact-check.</div>
</div>

### Give Claude The Whole Transcript Even For One Post

Her second rule looks like a contradiction. She narrows the task to one idea, then hands over the entire transcript anyway.

The reason is connection. She might return to that topic later in the conversation, and the important points sit somewhere else in the recording.

"Use the full transcript, not just that part," she said. "You want to connect everything."

She credits the model with finding links she would miss. It has better pattern recognition than she does, and it connects points better than she could by listening alone.

### Ask For Punchy Rather Than Concise

Barbara tested her instruction words and settled on a small set that works.

She tells the model to craft a narrative, to follow a social post format, and to be punchy.

"'Punchy' performs better than 'concise,'" she said. She recommends punchy and engaging, because both have worked consistently for her.

### Decide What The Client Should Talk About Online

The angle depends on the client, not on the transcript. Barbara starts from what they want to talk about online and what their persona is.

Her agency helps clients set that first. They work on branding and on the recurring topics each founder returns to.

She also warns against a single expectation. Do not expect the model to deliver a perfect list from one question.


### Try This In Claude Chat

**Goal:** produce one publishable social post from one insight, then repeat until you have a week of them.

**Steps:**

1. Take the Ranked Shortlist you produced from your transcript. Pick the idea at position one.

2. Open a new chat. Paste the prompt below and fill in every `{{variable}}`.

3. Paste the full transcript, not the section the idea came from.

4. Read the draft against your own material. Every fact in it should trace back to something the speaker said.

5. Give feedback in one round. Name the specific line that is wrong and say what it should do instead.

6. Start a fresh chat for idea two. Do not continue in the same thread.

**Expected result:** one post per session, each drawn from a different insight, each carrying facts you can trace back to the recording.

### Get Started Today

```
## Role
You are a social media writer. You turn one idea from a long conversation
into one short post that a specific audience will stop for.

## Task
Write a single post about the ONE idea named below. Ignore every other idea
in the transcript.

Craft a narrative. Follow the post format for the platform named below. Be
punchy.

## Context
The full transcript sits at the bottom of this prompt. Read all of it, even
though you write about one idea. The speaker returns to this topic in other
parts of the conversation, and those parts carry points you need.

Take every fact, product name, statistic, and claim from the transcript
only. When something is missing from the transcript, leave it out and tell
me what you left out. Never fill the gap from general knowledge.

**The one idea:** {{paste-the-single-insight-here}}
**Platform:** {{linkedin-x-instagram-etc}}
**Speaker:** {{name-and-role-of-the-person-in-the-transcript}}
**Audience:** {{who-reads-this-and-what-they-already-know}}
**Topics this person owns:** {{the-recurring-themes-they-return-to}}
**Post format that works for us:** {{hook-structure-length-line-breaks-cta}}

**Transcript:**
{{paste-full-transcript-here}}

## Output

### The Post
The post itself, ready to publish. Nothing above it and nothing below it.

### Source Trace
For each claim in the post, name the part of the transcript it came from.
One line each.

### What I Left Out
Anything the post needed that the transcript did not give you.

### Two Alternative Hooks
The same post with a different opening line, twice. Say in one line what
each hook does differently.
```

**Personalize it further.** Add the words that work on your audience the way punchy works on Barbara's. When one post lands well, paste it back in as the format example for the next one.

---

## 1.4 How To Make AI Writing Sound Like You

[Barbara Jovanovic](https://www.startupcookie.com/about/), the zero-employee agency owner who runs every task off a transcript, treats a model's house style as something to name and ban before drafting starts, not clean up after: a model reaches for the same constructions, connective phrases, and vocabulary every time, because those patterns appear everywhere in what it learned.

So she keeps [a running list of banned words and constructions](https://marketingagainstthegrain.com/articles/how-i-run-a-0-employee-marketing-agency-with-ai-tools) instead of stripping them out afterward.

"If you prompt it upfront, you remove a few steps later," she said.

### Keep A Living List Of Banned Words And Constructions

Barbara's list grows as she catches new tics. Three items she names directly:

- The word *ensure*
- The phrase *in the realm of*
- The question sentence used as a segue

That last one is the tell she watches for most. The model writes *The goal?* and then answers itself in the next line. "We all know that's AI," she said.

<div class="diagram-card">
<div class="node-diagram">
<div class="node-hub">House Style To Ban</div>
<div class="node-connector"></div>
<div class="node-spokes">
<div class="node-spoke"><div class="node-spoke-title">"Ensure"</div><div class="node-spoke-sub">A word the model overuses</div></div>
<div class="node-spoke"><div class="node-spoke-title">"In The Realm Of"</div><div class="node-spoke-sub">Filler phrase, no content</div></div>
<div class="node-spoke"><div class="node-spoke-title">Question As Segue</div><div class="node-spoke-sub">"The goal?" then self-answers</div></div>
</div>
</div>
<div class="diagram-caption">Barbara names the model's tics upfront rather than editing them out after the draft lands.</div>
</div>

She also blocks a category rather than a word list. No metaphors, no catchphrases, no jargon. Her instruction for that is blunt, and she writes it in capitals. DON'T BE CRINGE. DON'T BE CLICHÉ.

### Steal Barbara's Actual Style Block

She uses one instruction block across blog posts and social posts, and adjusts it by deliverable. This is the version she reads out:

"Write in a direct, no-nonsense style. Use clear, simple language. Short sentences. Focus on concrete details. Skip startup buzzwords. Avoid cultural references. Keep it brief. Stay honest. Don't remove parts of the transcript about challenges or personal things. Share specific examples and data points when relevant. Never use questions as transitions between topics. Avoid sentence structures that negate expectations ('This isn't just about…')."

The instruction about challenges and personal details protects the parts a model tends to smooth away. Those are the parts that make a founder sound human.

The final line bans a specific sentence shape. A model loves to deny one thing so it can announce another, and Barbara cuts it at the source.

### Dictate Your Prompts Instead Of Typing Them

Barbara rarely types into a chat window. She speaks, and a transcription tool turns her speech into the prompt.

"The results are infinitely better because I add more context than I would when writing," she said.

The mechanism is ordinary. When you talk, you naturally give more context, and these models perform better the more context they get.

### Move A Repeated Instruction Into Your Saved Instructions

Barbara is honest about the friction. Sometimes she has to instruct it further, and she goes through iterations where she repeats herself.

That is the moment to move the instruction somewhere permanent. A rule you have typed twice belongs in your saved instructions rather than in a chat.

She also admits what she does when the repetition wins. She goes caps lock and lets the frustration out.


### Try This In Claude Chat

**Goal:** build a style block that removes your six most common edits before you ever see them.

**Steps:**

1. Open your last three AI drafts and the edited versions you published.

2. List every change you made more than once. Those repeats are your banned list.

3. Paste the style block below into a new chat. Add your repeats to the Never section.

4. Ask for a draft of something short. Read it only for style violations.

5. Each violation becomes a new line in the Never section. Write it as a command, not a description.

6. Move the finished block into your Project instructions so it applies to every future chat.

**Expected result:** a style block that produces drafts needing edits for substance rather than for the same six tics.

### Get Started Today

```
## Voice
Write in a direct, no-nonsense style. Use clear, simple language. Short
sentences. Focus on concrete details.

Keep it brief. Stay honest. Share specific examples and data points when
relevant.

## Never
- Never use "ensure," "in the realm of," "delve," "leverage," or
  "landscape"
- Never use a question as a transition between topics. Do not write
  "The goal?" and then answer yourself
- Never use a sentence that negates an expectation to set up a claim.
  Do not write "This isn't just about X, it's about Y"
- Never open a sentence with "Most" followed by a claim about a group
- Never use metaphors, catchphrases, or jargon
- Never use startup buzzwords
- Never use cultural references
- DON'T BE CRINGE. DON'T BE CLICHÉ.
- {{your-own-repeat-offenders-go-here}}

## Protect
Keep the parts about challenges, failures, and personal detail. Do not
smooth them into something more professional. Those parts are why the
writing sounds like a person.

Keep {{speaker-name}}'s own phrasing for {{product-names-and-internal-terms}}. Use their words, not a cleaner synonym.

## Calibration
Match the sentence length and vocabulary of the samples in this Project.
When you are unsure whether a phrase fits, choose the plainer word.
```

**Personalize it further.** Add one line to the Never section every time you catch a new tic, and never delete a line. Barbara's list is a running document rather than a finished one. When a rule keeps getting ignored, shorten it to a single command and put it at the top.

---

## 1.5 How To Build An Edit Rubric From Your Own Past Edits

Hilary Gridley, head of core product and AI at [Whoop](https://www.whoop.com/), turns her own edit history into a rubric instead of writing standards from scratch: a rubric written cold produces generic advice about clarity and concision, but her past edits already contain the pattern, since she has made the same correction dozens of times and a model can find the repeats faster than she can.

She described her method in [three fixes for AI slop in your marketing content](https://marketingagainstthegrain.com/articles/29-07-2026).

### Put Originals In Column A And Your Edits In Column B

Her method takes three steps and one spreadsheet.

1. Take 10 to 20 examples of work you have edited.
2. Put the originals in column A and your edits in column B.
3. Upload it and ask it what patterns it notices in the edits you make over and over.

Then convert the answer into criteria. Gridley asks the model to turn those patterns into five pass or fail criteria.

<div class="diagram-card">
<div class="flow-diagram">
<div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-title">10-20 Edited Pairs</div><div class="flow-step-sub">Column A: original<br>Column B: your edit</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-title">Ask What Repeats</div><div class="flow-step-sub">Upload the sheet, ask for the patterns</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-title">5 Pass/Fail Criteria</div><div class="flow-step-sub">One rubric the whole team can run</div></div>
</div>
<div class="diagram-caption">One spreadsheet and three steps turn your own past edits into a rubric anyone can apply.</div>
</div>

Five is the number she names. A rubric that fits in five lines gets used.

### Paste The Rubric Where Your Team Can Reach It

The output is a system prompt. Gridley puts hers into a custom GPT or a Claude project, which means anybody on the team can run it.

The editor keeps control of the standard. The rubric encodes what they look for without handing over the final call on any specific edit.

Writers get the other half of the benefit. A rubric tells them what the editor wants before they submit, rather than after.

### Call The Bad Draft A First Draft

Gridley's second fix changes how you respond when slop lands on your desk.

Do not call it bad. Call it a first draft.

She frames the whole workflow as draft, then feedback, then improve. When obvious AI writing arrives, tell the marketer it sounds AI-generated and ask them to add their own spin before it ships.

The correction stays with the person who submitted it. The rubric gives them something specific to correct against.


### Try This In Claude Chat

**Goal:** turn your own editing history into five criteria anyone on your team can apply.

**Steps:**

1. Open a spreadsheet. Find 10 to 20 pieces you have edited where you still have both versions.

2. Put each original in column A. Put your edited version in column B, on the same row.

3. Export as CSV and upload it to a new chat with the prompt below.

4. Read the patterns it returns. Cross out any that describe a one-off rather than a habit.

5. Ask it to convert the surviving patterns into five pass or fail criteria.

6. Paste those five criteria into your Project instructions so every draft is checked against them.

**Expected result:** five criteria, each answerable yes or no, that describe what you actually change rather than what you believe about good writing.

### Get Started Today

```
## Role
You are an editorial analyst. You reverse-engineer an editor's standards
from the changes they actually make.

## Task
I am giving you {{number}} pairs of text. Column A is the draft I received.
Column B is the version I published after editing.

Find the changes I make over and over. Ignore one-off fixes. I want the
habits, not the corrections.

## Context
**What this content is:** {{blog-posts-emails-ad-copy-etc}}
**Who writes the drafts:** {{freelancers-teammates-ai-me}}
**Who reads the published version:** {{audience}}
**What I already know I dislike:** {{any-rules-you-are-aware-of}}

Do not tell me what good writing looks like in general. Tell me what THIS
editor changes, based only on the evidence in these pairs.

## Output

### Repeated Patterns
List every change that appears in three or more pairs. For each one:
- Name the pattern in one line
- Quote one before and after example from the data
- Say how many pairs it appears in

### One-Offs
List changes that appear only once or twice, so I can confirm they are not
habits. One line each.

### The Five Criteria
Convert the repeated patterns into exactly five pass or fail criteria.

Each criterion must be answerable yes or no by someone who has never met
me. Write them as checks, not as advice. "No sentence opens with a
subordinate clause" passes. "Write with clarity" fails.

### What I Never Change
Name anything consistently present in column A that survived into column B.
These are the things my writers already get right, and I should stop
worrying about them.
```

**Personalize it further.** Rerun this every quarter with your newest edits. When a criterion stops catching anything, replace it with the next pattern on the list.

---

## 1.6 How To Write Social Hooks That Stop The Scroll

Kieran Flanagan, CMO of [Zapier](https://zapier.com), builds a reusable skill for anything he does repeatedly and inconsistently rather than rewriting it from scratch each time: a skill is a saved set of instructions for one type of task, written once, that the model follows whenever that task comes up. Hooks qualified, because every post needs one and the quality swung with his mood.

He built a hook skill live in [a full breakdown of Claude Skills](https://marketingagainstthegrain.com/articles/claude-skills-build-your-own-ai-experts-full-breakdown) and called the launch one of the coolest of the year.

### Ask Claude To Build The Skill For You

You do not write the skill file yourself. You describe the job and Claude produces it.

Flanagan's request was small. He asked for a skill that creates a hook that creates FOMO among readers.

Claude went and looked at proven frameworks from elite writers, then produced the skill. His own note on the prompt is honest: it is very basic, and getting really great at this needs much better prompts.

<div class="diagram-card">
<div class="flow-diagram">
<div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-title">Describe The Job</div><div class="flow-step-sub">Ask for a skill that creates FOMO</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-title">Claude Builds It</div><div class="flow-step-sub">Studies proven hook frameworks first</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-title">Rename &amp; Zip</div><div class="flow-step-sub">File becomes skill.md, zipped</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">4</div><div class="flow-step-title">Upload &amp; Run</div><div class="flow-step-sub">Through capabilities settings</div></div>
</div>
<div class="diagram-caption">You describe the job in one line; Claude researches and writes the skill file itself.</div>
</div>

The setup runs through your capabilities settings. Turn on file creation and skills, then upload the skill Claude produced.

Flanagan flags the fiddly part. Rename the file to `skill.md`, put it in a zip, and upload the zip.

### Read The Formula That Comes Back With Each Hook

Flanagan hands the skill a post and asks for a hook. The output arrives with more than a line of copy.

He gets the exact formula, the hook itself, the specificity, and an explanation of why it works.

The formula travels. You can apply it yourself next time and skip the tool.

### Name Your Skill Precisely Or It Will Not Fire

Flanagan makes a claim early in the episode and corrects it fifteen minutes later on camera.

The claim: "You don't have to tell it which one to use. It can figure that out itself."

The correction, after building a second skill for solving small daily problems: "Sometimes you actually have to coax it to use it, I've found."

He diagnoses his own failure straight away. He named the skill around the word *problem*, which is generic, so a request to solve a problem did not reliably trigger it.

Name your skill after something you would actually say. A skill called *hook* fires when you ask for a hook.


### Watch Kieran Flanagan Build A Skill From Scratch

He writes the prompt, downloads the file, zips it, uploads it, and runs it on a real post. The clip includes the part where a skill fails to fire.

[![Claude Skills: Build Your Own AI Experts (Full Breakdown)](https://img.youtube.com/vi/46zQX7PSHfU/maxresdefault.jpg)](https://www.youtube.com/watch?v=46zQX7PSHfU)

*Marketing Against the Grain, "Claude Skills: Build Your Own AI Experts (Full Breakdown)" (28.7k views)*

### Try This In Claude Chat

**Goal:** build a hook skill that returns hooks plus the formula behind each one.

**Steps:**

1. Open your capabilities settings and turn on file creation and skills.

2. Paste the skill-creation prompt below into a new chat.

3. Download the file Claude produces. Rename it to `skill.md` and put it in a zip.

4. Upload the zip through capabilities.

5. Paste one of your own posts into a new chat and ask for hooks using the skill by name.

6. Read the formula it returns with each hook. Keep the formulas that fit your audience and add them back into the skill.

**Expected result:** three to five hooks for any post you paste, each with the formula it used and a line on why it works.

### Get Started Today

```
## Role
You are a hook writer. You write the first line of a social post, which is
the only line most people read.

## Task
Build me a reusable skill called "hook" that generates opening lines for
social posts.

Study proven hook frameworks from writers with a track record in {{my-industry-or-platform}} before you write the skill. Encode those frameworks
into it.

## Context
**Platform:** {{linkedin-x-instagram-etc}}
**Audience:** {{who-reads-my-posts-and-what-they-care-about}}
**My subject matter:** {{what-i-post-about}}
**Hooks that have worked for me:** {{paste-2-3-of-your-best-opening-lines}}
**Tone I will never use:** {{hype-clickbait-emoji-etc}}

## Output
When I give it a post, the skill returns five hooks. For each hook it gives:
- The hook itself, ready to paste
- The named formula it used
- What makes it specific rather than generic
- One line on why it works for this audience

## Rules To Encode In The Skill
- Never promise something the post does not deliver
- Never open with a question the reader can answer "no" to and leave
- Lead with the most surprising concrete detail in the post
- Use a number only when the number is in the post
- Keep every hook under {{character-limit}} characters

## Naming
Name the skill "hook" and nothing broader. I will trigger it by asking for
a hook, so the name must match the word I use.
```

**Personalize it further.** After each post publishes, tell Claude which hook you used and how it performed. Ask it to update the skill with what it learned. Each use sharpens the next one.

---

## 1.7 How To Run Deep Research That Produces A Reusable Playbook

Kieran Flanagan, CMO of [Zapier](https://zapier.com), treats a research feature as a way to produce the reference material an expert would consult before starting, not just an answer to one question, and produces it once to reuse on every build that follows.

He calls this the first secret of [the landing page workflow he ran on Marketing Against the Grain](https://marketingagainstthegrain.com/articles/we-used-ai-to-build-the-worlds-best-landing-page-in-minutes). Anytime you want to build something, create extensive style guides or templates using deep research first.

His description of the output: it is like an entire book created just for the thing you want to build.

### Tell Claude Exactly What Sections The Report Should Have

Flanagan's landing page research prompt does not ask an open question. It names the sections the report must contain: context that casts the model as a senior UX strategist, objectives that state what to produce, and deliverable requirements that list the report structure.

The deliverable requirements carry the detail. He asks for an executive summary, core principles, copywriting frameworks, visual hierarchy, mobile-first best practices, and a wireframe template. He also names people he considers good at this, so the model learns from them.

What came back ran to roughly 30 pages.

### Structure The Research Prompt Before You Run It

The [companion episode on prompt engineering](https://marketingagainstthegrain.com/articles/use-this-prompt-engineering-tool-to-get-10x-better-responses-on-chatgpt) breaks a deep research prompt into five components: set the context, get clarity on the assignment, set objectives and key metrics, set scope and priorities, and set the deliverable format.

<div class="diagram-card">
<div class="node-diagram">
<div class="node-hub">The Research Prompt</div>
<div class="node-connector"></div>
<div class="node-spokes">
<div class="node-spoke"><div class="node-spoke-title">Context</div><div class="node-spoke-sub">Cast the model as a senior strategist</div></div>
<div class="node-spoke"><div class="node-spoke-title">Clarity</div><div class="node-spoke-sub">On the assignment itself</div></div>
<div class="node-spoke"><div class="node-spoke-title">Objectives</div><div class="node-spoke-sub">And key metrics to judge it by</div></div>
<div class="node-spoke"><div class="node-spoke-title">Scope</div><div class="node-spoke-sub">And priorities inside it</div></div>
<div class="node-spoke"><div class="node-spoke-title">Deliverable Format</div><div class="node-spoke-sub">The step most people skip</div></div>
</div>
</div>
<div class="diagram-caption">Flanagan spends most of the companion episode on the fifth component, because it is the one people leave out.</div>
</div>

Flanagan spends most of that episode on the fifth, because it is the part people skip. The common mistake is to run research, get information, then paste it into a different tool with a different prompt. Tell deep research instead that the output must feed the prompt you plan to run next.

Underneath sits a four-part structure from Greg Brockman, co-founder of [OpenAI](https://openai.com). A clear goal, a return format, warnings, and context. Brockman's example warning checks that a trail name is correct and that the trail exists.

Flanagan adds his own, asking the model to cite the exact place it got each claim. On context his position is blunt. People treat it as a sentence, and what he supplied was a 30-page style guide.

### Swap The Deliverable And Reuse Everything Else

The research engine stays the same when the output changes. Flanagan built a version that produces a YouTube video outline with timings mapped across 30 minutes, from transcripts of videos that had already worked. The same swap gives you a blog outline or a thread outline.

He ran the landing page build across [Gemini](https://gemini.google.com), ChatGPT, and Claude, and called Claude the real move, with copy strong enough to ship from a one-shot draft.


### Watch The Full Landing Page Build

Flanagan and Kipp Bodnar run the whole sequence on camera, from the research prompt to a page they say they would ship.

[![We Used AI to Build the World's Best Landing Page—in Minutes](https://img.youtube.com/vi/_b53o1fHMOg/maxresdefault.jpg)](https://www.youtube.com/watch?v=_b53o1fHMOg)

*Marketing Against the Grain, "We Used AI to Build the World's Best Landing Page—in Minutes" (89.6k views)*

### Try This In Claude Chat

**Goal:** produce a reusable playbook on one marketing topic, then use it to make something.

**Steps:**

1. Pick one thing you build repeatedly. Landing pages, cold emails, webinar decks, ad creative.

2. Run the research prompt below. Name three to five people whose work on this topic you respect.

3. Read what comes back. It should read like reference material, not like an answer.

4. Save it. This is the artifact you reuse, so put it somewhere permanent.

5. Start a new chat. Paste the playbook, then ask for the actual thing you need.

6. Compare that output against what you get from the same request with no playbook attached.

**Expected result:** a long structured reference document on your topic, plus a first draft noticeably better than the one you get without it.

### Get Started Today

The sources describe this prompt in detail and never print it. The version below is built from the five components and the deliverable structure they specify.

```
## Role
You are a senior {{discipline}} strategist with deep expertise in
{{specific-topic}}. You have shipped this work for {{type-of-company}}
and you know which conventions hold and which are cargo cult.

## Task
Produce a reference playbook on {{specific-topic}}.

Do not answer my question and do not produce the deliverable itself. Produce
the document a practitioner would read before they start, and would keep
open while they work.

Write for depth over brevity. This is reference material.

## Context
**My company:** {{what-we-do}}
**My role:** {{your-role}}
**Audience for the work:** {{who-this-is-aimed-at}}
**Where this will run:** {{channel-platform-or-medium}}
**Constraints I cannot change:** {{brand-legal-technical-budget}}
**Practitioners whose work on this I respect:** {{3-5-names}}
Study how these people approach it and reflect their thinking.

## Objectives And Key Metrics
The work this playbook informs will be judged on {{primary-metric}}.
Secondary: {{secondary-metrics}}. Weight your guidance accordingly.

## Scope And Priorities
In scope: {{what-to-cover}}
Out of scope: {{what-to-ignore}}
Go deepest on: {{the-part-you-are-least-sure-about}}

## Warnings
- Verify every named tool, company, statistic, and framework exists before
  you include it
- Cite the source and the exact place you got each claim
- When evidence is thin or contested, say so rather than presenting one
  view as settled
- Do not include tactics that were standard three years ago and are not now

## Output
Structure the playbook exactly like this:

### Executive Summary
The ten things that matter most, ranked.

### Core Principles
The rules that hold across situations, with the reasoning behind each.

### Frameworks
Named, reusable structures I can apply, with a worked example of each.

### Anti-Patterns
Common approaches that fail, and the failure mode of each.

### Decision Points
The choices I will face, with the tradeoff on each side and your
recommendation.

### Checklist
A pass or fail list I can run against finished work.

### Template
A fill-in-the-blank starting structure for the actual deliverable.

Format this so I can paste it directly into a follow-up prompt as context.
Use plain headings and avoid formatting that will not survive a copy.
```

**Personalize it further.** Save the finished playbook in a Project so every future chat inherits it. When a piece performs well, add it to the playbook as a worked example and rerun.

---

## 1.8 How To Research Your Buyer By Simulating Them

Matt Swulinski, Head of Growth at Viktor, previously Head of Growth at Wispr Flow and before that on growth at Superhuman, watched an audience hit its edge at scale: the people who wanted your product have already seen you, and more budget just buys you the same people again. Superhuman flattened for exactly this reason. The core buyer was founders, and the early-adopter tech founder is not an infinite audience. Open up the layers of the onion or you hit a ceiling.

Asked on [20VC](https://www.thetwentyminutevc.com/) whether you keep spending through fatigue or declare the channel finished, his answer was neither. "You want to unlock the next audience, right?"

### Launch Broad, Then Take One Segment At A Time

At Viktor, Swulinski started from a wide claim rather than a buyer definition. They launched with the tagline *the AI employee for everyone*, and the vagueness was the point. They did it to see who came in the door.

Three segments showed up first. Agencies, ecommerce brands, and small businesses.

Harry Stebbings, an investor in the company, pushed back on the tagline. He said "the AI video editor" or "the AI copywriter" would land better. Swulinski concedes the line is confusing, and defends the sequence rather than the clarity. Once enough use cases exist, the framing inverts into a specific story about hiring Viktor and what it did.

<div class="diagram-card">
<div class="flow-diagram">
<div class="flow-step"><div class="flow-step-num">1</div><div class="flow-step-title">Can We Acquire Them?</div><div class="flow-step-sub">Agencies, first segment tested</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">2</div><div class="flow-step-title">Funnel?</div><div class="flow-step-sub">What it looks like for this segment</div></div>
<div class="flow-arrow">→</div>
<div class="flow-step"><div class="flow-step-num">3</div><div class="flow-step-title">Creative?</div><div class="flow-step-sub">What it looks like for this segment</div></div>
</div>
<div class="diagram-caption">Only once one segment clears all three questions with a repeatable process does the next audience open up.</div>
</div>

Then the team worked the segments in order. Evergreen campaigns kept running, and they picked agencies first, asking three questions about that one segment.

- Can we acquire them?
- What does the funnel look like?
- What does the creative look like?

The gate is economic. Only once one audience works, and a repeatable process exists to refine it, does the next audience begin.

### Simulate The Buyer In A Prompt Before You Build For Them

"Marketing now is very ICP specific," Swulinski said. He runs a prompt that simulates the person: what they read, and what they think about when they make a decision. He calls the result the richest ICP research you can have, and his phrasing allows for any tool that can run it.

Then you build for that person specifically. A landing experience, an onboarding, and a product experience, each made for one audience rather than everyone.

Two questions judge what you build. If I read nothing else but your headline, do I know what you do? And does the page tell a user who has not moved their thumb that they want to try this?

He applies both to the creative and the copy as well, as a frame he takes through the whole funnel.


### Watch The Audience Fatigue Exchange

The relevant section runs from 37 minutes, where Stebbings asks what to do when a channel saturates. The tagline argument follows straight after.

[![How to Build a $100M Growth Engine: Lessons from Wispr Flow & Superhuman](https://img.youtube.com/vi/bm8rMM4Bxz8/maxresdefault.jpg)](https://www.youtube.com/watch?v=bm8rMM4Bxz8)

*20VC with Harry Stebbings, "How to Build a $100M Growth Engine: Lessons from Wispr Flow & Superhuman | Matt Swulinski" (29k views)*

### Try This In Claude Chat

**Goal:** produce a research-grade profile of one narrow buyer segment, then the messaging that segment needs.

**Steps:**

1. Pick one segment that already buys from you. Use a real group from your customer list rather than a persona you invented.

2. Run the simulation prompt below for that segment alone.

3. Read the output against three real customers in that segment. Mark every claim you know to be wrong.

4. Feed those corrections back and rerun. The corrections are the part that makes this research rather than guessing.

5. Ask for the headline and the landing page opening for that segment.

6. Apply the headline test. If the headline alone does not say what you do, start again.

**Expected result:** a buyer profile specific enough to write copy from, plus a headline you can put in front of that segment this week.

### Get Started Today

Swulinski describes this prompt in three clauses and never writes it out. The version below builds his three asks into a full brief.

```
## Role
You are {{job-title}} at {{type-of-company}}, {{company-size}}, in
{{industry}}. Answer as that person, in the first person, using the
vocabulary they would actually use.

## Task
I am researching this role before I write marketing aimed at it. Answer my
questions as this person would, not as a marketer describing them.

Where you are uncertain about this role, say so and mark it as a gap I
should verify with a real customer.

## Context About This Person
**Their day:** {{what-their-week-actually-looks-like}}
**What they are measured on:** {{their-kpis-or-how-their-boss-judges-them}}
**Budget authority:** {{can-they-buy-or-do-they-need-approval}}
**Team size:** {{who-they-manage-if-anyone}}
**Tools they already use:** {{current-stack}}
**What I sell:** {{your-product-and-what-it-does}}

## Output

### What I Read
The publications, newsletters, podcasts, communities, and individuals this
person follows. Name specific ones. Say which are for work and which are
habit.

### What I Think About
The problems on this person's mind, ranked by how often they surface. For
each, say whether it is urgent, chronic, or background.

### How I Decide
Walk through how this person evaluates a tool like mine:
- What triggers the search in the first place
- Where they look first
- Who else has to say yes
- What kills a deal at the last minute
- What they need to tell their boss to get approval

### What Would Stop Me
The objections this person raises, in the words they would raise them in.
Include the ones they would not say out loud.

### What Would Make Me Move
The specific thing that turns interest into a signup or a call.

### Where This Simulation Is Weakest
Name the parts you are least confident about, and write the exact question
I should ask a real customer to verify each one.
```

**Personalize it further.** Run this once per segment rather than once for your whole market. When you correct the simulation with something a real customer said, paste the correction into your Project so every future run inherits it.

---

## 1.9 How To Check If Your Brand Appears In AI Search

Matthew Prince, CEO of [Cloudflare](https://www.cloudflare.com/), measured how the exchange behind search has changed: search used to work as a trade, where a crawler took your content and sent readers back, and he tracks that trade by the ratio of pages scraped per visitor returned.

He covered the shift in [an episode on the collapse of organic marketing](https://marketingagainstthegrain.com/articles/the-collapse-of-organic-marketing-and-whats-next).

Google's ratio moved from 2 pages scraped per visit ten years ago, to 6 to 1 six months before the talk, to 18 to 1 at the time of it. He attributes the last jump to AI Overviews.

<div class="diagram-card snapshot-card">
<div class="donut-row">
<div class="donut">
<svg width="118" height="118" viewBox="0 0 120 120">
<circle cx="60" cy="60" r="50" fill="none" style="stroke:var(--line)" stroke-width="14"/>
<circle cx="60" cy="60" r="50" fill="none" style="stroke:var(--orange)" stroke-width="14" stroke-dasharray="235.6 314.2" stroke-linecap="round" transform="rotate(-90 60 60)"/>
</svg>
<div class="donut-value">75%</div>
</div>
<div class="donut-label">of Google queries already get answered with <strong>no click</strong> to any website — he expects that to reach 90%.</div>
</div>
<div class="value-bars">
<div class="value-bar-row"><div class="value-bar-top"><span>Search Visitor</span><span>1x value</span></div><div class="value-bar-track"><div class="value-bar-fill" style="width:25%"></div></div></div>
<div class="value-bar-row"><div class="value-bar-top"><span>LLM Visitor</span><span>4x value</span></div><div class="value-bar-track"><div class="value-bar-fill" style="width:100%"></div></div></div>
</div>
<div class="diagram-caption">Fewer visits are reaching your site, but each one that arrives from an AI assistant is worth roughly four times as much.</div>
</div>

Around 75% of queries were already answered on Google without a click, and he expects that to reach 90%.

Google carries 63% to 67% of all referral traffic, so the shift reaches every site.

### An LLM Visitor Is Worth 4x A Search Visitor

Fewer visits can still carry more value. Aja Frost, who works at HubSpot, ran the numbers on the other side of that trade in [an episode on ranking first in ChatGPT results](https://marketingagainstthegrain.com/articles/how-to-rank-1-in-chatgpt-results-ai-seo-strategy).

Her team expected LLM traffic to be smaller and worth more. [SEMrush](https://www.semrush.com) puts the multiple at more than four times.

The reason is where the journey happens. A search visitor could be anywhere in the buying process. Someone who asks an assistant to explain a category gets that explanation immediately, so by the time they reach your site they want to talk to sales.

Frost hears it in recorded calls, where people say ChatGPT told them HubSpot was the CRM they should use. Roughly 80% of the B2B buying journey used to start with Google. She expects 95% to start with an LLM, and buyers often never leave.

### Ask The Question Your Customer Would Type

The first check takes minutes and needs no tool. Open an AI assistant and ask the question your customer would actually type. [HubSpot's guidance](https://marketingagainstthegrain.com/articles/15-07-2026) adds the part people get wrong: it is not your brand name.

The second check separates two problems. When a visibility score comes back low, look at sentiment first. A low score with decent sentiment is a presence problem rather than a reputation one.

### Build For Specificity Rather Than Volume

Decide your posture first. From a standing start, Frost would go all-in on LLMs. With existing search traffic, protect it while you build in parallel, because AI SEO and traditional SEO compound rather than compete.

Change what you measure. HubSpot shifted toward visibility inside LLMs: share of voice, impressions, and recommendations. Frost's team tracks that with [XFunnel](https://xfunnel.ai), and no tool is perfect yet.

Then the content. Buyers ask for the best CRM for a manufacturing company in New Jersey with plateaued growth, which demands hundreds of ultra-specific pages. Use your own customer data, and start at the bottom of the funnel.

Off-page, the currency changed. Mentions matter more than backlinks, and you want repeated co-citations tying your brand to your category. LLMs cite third-party aggregators rather than vendor sites, and an analysis Frost cites found brand websites cited only 9% of the time. Reddit and Quora appear constantly, because user-generated content reads as lower risk. Matt Swulinski reaches the same conclusion from the growth side, and tells founders to invest in good YouTube reviews early.


### Watch The Full AI Search Playbook

Frost walks through the citation data, the four-times value multiple, and the shift from visits to visibility.

[![How to Rank #1 in ChatGPT Results (AI SEO Strategy)](https://img.youtube.com/vi/gPKqvn-QS50/maxresdefault.jpg)](https://www.youtube.com/watch?v=gPKqvn-QS50)

*Marketing Against the Grain, "How to Rank #1 in ChatGPT Results (AI SEO Strategy)" (28k views)*

### Try This In Claude Chat

**Goal:** find out whether you appear in AI answers for the questions your buyers ask, and get the list of pages that would fix it.

**Steps:**

1. Write down ten questions your buyers ask before they buy. Use their words, and do not include your brand name in any of them.

2. Run the audit prompt below with those questions.

3. Note which brands appear instead of you, and which sources get cited.

4. Check sentiment where you do appear. Low visibility with fair sentiment is a different problem from bad sentiment.

5. Take the page list it returns and write the three most specific ones first.

6. Rerun the same ten questions in a month and compare.

**Expected result:** a scored list of ten buying questions showing where you appear, who appears instead, which sources get cited, and the specific pages that would close the gap.

### Get Started Today

```
## Role
You are an answer engine optimization analyst. You assess whether a brand
appears in AI-generated answers, and diagnose why when it does not.

## Task
I will give you ten questions my buyers ask. For each one, answer it the way
you would answer a real user who asked it cold, then analyze your own answer.

Answer first. Analyze second. Do not let the analysis change the answer.

## Context
**My brand:** {{brand-name}}
**What we sell:** {{product-and-category}}
**Our buyer:** {{who-they-are-and-what-they-do}}
**Our competitors:** {{3-5-names}}
**What makes us different:** {{your-actual-differentiator}}
**Markets we serve:** {{geography-industry-company-size}}

**The ten questions:**
{{paste-ten-buying-questions-in-your-customers-words}}

## Output

### Visibility Table
One row per question:
| Question | Do I appear? | Position in answer | Who appears instead | Sources cited |

### Sentiment
For every question where I do appear, quote what was said about my brand and
mark it positive, neutral, or negative. Separate a presence problem from a
reputation problem and say which one I have.

### Citation Analysis
Across all ten answers, list the sources cited most often. Mark which are
third-party aggregators, which are user-generated communities, and which are
vendor sites. Name the specific pages I would need to appear on.

### Specificity Gaps
Rewrite each of my ten questions the way a real buyer would ask it, with
their industry, company size, and situation attached. These narrower
questions are what I should target.

### Page Plan
List the pages I should publish to appear in these answers. For each:
- The exact question it answers
- The specific buyer situation it addresses
- The original data or proof it needs to carry
- Whether it is bottom-of-funnel or educational

Rank the list. Put bottom-of-funnel and highest-specificity first.

### Where I Would Not Believe This
Name the parts of your analysis that are least reliable, and say how I
should verify them.
```

**Personalize it further.** Run the same ten questions across several assistants, since each cites differently. Save the output and rerun monthly, because the answer to a question changes as the sources change.

---

## 1.10 How To Turn Marketing Data Into An Executive Summary

Katherine Riddick, Director of Growth Marketing at [OneDigital](https://www.onedigital.com/), a B2B company that builds employee benefits packages, builds her leadership updates as an argument from her numbers rather than a list of them: whether the engine works, which way it moves, and what she wants leadership to do about it, short enough to hold in a meeting.

She works out [which numbers carry that argument](https://marketingagainstthegrain.com/articles/29-06-2026).

### Stop Measuring This Year With Last Year's Playbook

She leads demand generation there, and her opening position is that the top-line number lies.

"Volume may look like it is down historically for B2B buyers right now, but our pipeline is progressing faster and better than in previous years," she said.

She traces the cause to how buyers arrive. With LLMs, a buyer already holds a list with four of your competitors, so the contest becomes who responds fastest.

Attribution went dark at the same time. People remember a LinkedIn ad from six months ago, and that visit shows up today as organic or direct traffic.

<div class="diagram-card">
<div class="compare-wrap">
<div class="compare-col before">
<div class="compare-col-label">2025's Playbook</div>
<div class="compare-steps">
<div class="compare-step"><span class="compare-step-num">1</span>Judge the engine on volume</div>
<div class="compare-step"><span class="compare-step-num">2</span>Trust last-touch attribution</div>
</div>
</div>
<div class="compare-arrow">→</div>
<div class="compare-col after">
<div class="compare-col-label">2026's Playbook</div>
<div class="compare-steps">
<div class="compare-step"><span class="compare-step-num">1</span>Judge the engine on pipeline progression</div>
<div class="compare-step"><span class="compare-step-num">2</span>Expect touches to surface as organic or direct later</div>
</div>
</div>
</div>
<div class="diagram-caption">Riddick's opening argument: volume looks down, but the old playbook is measuring the wrong thing now.</div>
</div>

"We're running into that inflection moment of taking a step back and stop trying to measure 2026 impact using 2025's playbook, because it's not the same anymore."

### Tie Every Metric To Pipeline Progression

When Riddick sits with leadership, she anchors on progression rather than volume. She names five questions.

- Are we bringing in better quality?
- Are they moving faster?
- Are they closing more?
- What does deal velocity look like?
- What does LTV to CAC look like over time?

She then uses AI to take that data and craft a two to three paragraph executive summary tailored to her company's leadership. The instruction she gives it is to tell a tight story about marketing impact, pipeline progression, and revenue.

### Check Your Benchmarks Before You Kill A Campaign

Riddick's second lesson protects the campaigns your summary reports on.

AI speeds up decisions past what ad algorithms can absorb. Her team almost changed things too fast, because the algorithms still need time to learn and find the audience. Buyers need to see the ads eight to 10 times before they act.

A campaign that looks weak against a 2024 benchmark may not be weak. The gate she puts before any cut is one question.

Before you kill a campaign, ask yourself whether you measure it against benchmarks that no longer apply.

### Three Questions Your Attribution Report Should Answer

Multi-touch attribution feeds those five answers. Riddick is candid that it stays a set of open questions rather than a solved system.

She wants it to tell her three things:

- Was the ad the first touch point?
- Did they do additional research six months later?
- Was organic the last touch, because branded recall is higher?

Her summary has to hold that uncertainty without hiding it. She reports progression she can evidence, and she does not claim precision the data cannot support.


### Try This In Claude Chat

**Goal:** turn one CRM export into a two to three paragraph summary your leadership will read to the end.

**Steps:**

1. Export this period's numbers from your CRM or analytics tool. Include the previous period in the same file.

2. Write down your targets for each metric. The summary needs them, and no export contains them.

3. Paste the prompt below into a new chat, fill in every `{{variable}}`, and attach the export.

4. Read the draft against what you know. Anything you cannot defend in the meeting comes out.

5. Check the story it tells. If the summary buries a decline your leadership already knows about, put it back in.

6. Save the filled-in prompt. Next month you change the export and the numbers, not the structure.

**Expected result:** two to three paragraphs naming what moved, what it means for pipeline, and the single decision you want from leadership.

### Get Started Today

```
## Role
You are a growth marketing director briefing your company's leadership. You
argue from numbers. You do not list them.

## Task
Write a two to three paragraph executive summary of last period's marketing
performance, using the attached data.

Tell a tight story about marketing impact, pipeline progression, and
revenue. Lead with the claim, then support it.

## Context
**Company:** {{what-we-do-and-who-we-sell-to}}
**Audience for this summary:** {{ceo-board-exec-team}}
**What they care about most:** {{their-actual-priority-this-quarter}}
**What they already believe about marketing:** {{the-assumption-you-are-working-against}}
**Reporting period:** {{this-period}} vs {{last-period}}
**Sales cycle length:** {{weeks-or-months}}

**My targets for this period:**
{{metric: target, one per line}}

**Known context the numbers do not show:**
{{launches-outages-seasonality-budget-changes-competitor-moves}}

## How To Read The Data
Compare every metric two ways. Against last period, which shows direction.
Against target, which shows whether direction is enough.

Judge performance on pipeline progression rather than volume. Specifically:
- Are we bringing in better quality?
- Are they moving faster?
- Are they closing more?
- What does deal velocity look like?
- What does LTV to CAC look like over time?

Volume can fall while the engine improves. When that is what the data shows,
say so plainly and show the progression evidence.

Attribution is imperfect here. First touches may sit months earlier and
surface later as organic or direct. Do not claim precision the data does
not support.

## Output

### The Summary
Two to three paragraphs. No headings, no bullets, no preamble. This is the
part that gets read aloud.

### The Numbers Behind It
A table of every metric: this period, last period, target, and direction.

### What I Should Expect To Be Asked
The three hardest questions this summary invites, with a one-line answer to
each drawn only from the data.

### What The Data Cannot Tell Us
Name every claim in the summary that attribution cannot fully support, and
say how confident I should sound about each.

### The Ask
One sentence naming the decision or resource I want from this audience.
```

**Personalize it further.** Keep your targets and your known-context notes in a file you update monthly, so each run starts from the same reference. When leadership asks a question you did not anticipate, add it to the prompt so next month's draft answers it first.

---

## 1.11 How To Generate On-Brand Images With A Modular Prompt Formula

Rory Flynn, founder of Systematiq AI, who teaches AI workflows to marketing and creative teams, built his method on one fact: an image model decides everything about an image — camera angle, light source, color, mood, lens — and fills in every variable you do not name yourself.

He set out the method in [an episode on replacing a creative agency](https://marketingagainstthegrain.com/articles/ai-tools-to-replace-your-10k-creative-agency).

"These are what I call the non-negotiables," he said. "In AI, if you don't prompt for them, they're still going to be filled in. So if you want control, these are the core elements you need to think about."

### Prompt Flynn's Eight Blocks Every Time

Flynn lists eight elements that appear in every image whether you specify them or not. This is his order and his wording.

1. **Shot type or photo type.** Perspective and distance. A close-up versus a drone shot tells a different story.
2. **Subject and action.** Who is in it and what they are doing.
3. **Environment.** Where it takes place.
4. **Color scheme.** Every image has color, even black and white.
5. **Cameras and lenses.** The difference between an iPhone photo and a Polaroid is massive. Flynn calls this the block where his team hit results early.
6. **Film stock.**
7. **Mood and emotion.** The vibe.
8. **Lighting.** No lighting means a black image.

<div class="diagram-card">
<div class="node-diagram">
<div class="node-hub">Every AI Image</div>
<div class="node-connector"></div>
<div class="node-spokes">
<div class="node-spoke"><div class="node-spoke-title">Shot Type</div><div class="node-spoke-sub">Close-up vs. drone tells a different story</div></div>
<div class="node-spoke"><div class="node-spoke-title">Subject &amp; Action</div><div class="node-spoke-sub">Who's in it, what they're doing</div></div>
<div class="node-spoke"><div class="node-spoke-title">Camera &amp; Lens</div><div class="node-spoke-sub">iPhone photo vs. Polaroid, massive difference</div></div>
<div class="node-spoke"><div class="node-spoke-title">Mood</div><div class="node-spoke-sub">The vibe of the image</div></div>
<div class="node-spoke"><div class="node-spoke-title">Lighting</div><div class="node-spoke-sub">No lighting means a black image</div></div>
</div>
</div>
<div class="diagram-caption">Flynn names eight blocks in total; leave any one unprompted and the model still fills it in — just not the way you'd choose.</div>
</div>

Flynn came to this from graphic design rather than photography, and did not know what focal length was before AI. The vocabulary arrived through the work.

### Read Flynn's Nine-Fragment Red Bull Prompt

This is the only complete prompt Flynn reads out on the episode.

```
Motorsport photography, Red Bull F1 car, racetrack, warm tones, 35mm,
shallow depth of field, sunset backlighting, center framing, motion blur.
```

"It sounds like random words. But the output listens," he said. You get the racetrack, the warm tones, and the blur on the tires.

One discipline runs against instinct. "Don't start with giant five-paragraph prompts," he said. "Start condensed." One word is easier to troubleshoot than three paragraphs, which is the logic behind the modular structure. When the lighting is wrong, he knows where to fix it.

Flynn adds a brand layer on top of the blocks, and describes it in one sentence. Dump 20 images into an LLM, extract a style guide, and enforce it via system prompts.

### Where AI Images Still Fall Short

It does not replace photographers. "This doesn't replace photographers. It supplements them. It's for testing, exploration, iteration."

It does not save work. "We've created more work for ourselves. AI doesn't remove work, it increases optionality."

The speed figure carries a setup cost. What used to take a year now takes 20 minutes, after three weeks of building the system.

And polish stops paying in B2B. "For B2B, worse images often perform better," he said. He once put a client on a Game of Thrones throne and sold clients for months.

Asked whether he built an agent to rank outputs, he called it the next problem. "At that point, the work becomes curation, not creation."


### Watch Flynn Break Down The Building Blocks

He walks through the slide the whole method came from, then reads the Red Bull prompt and explains what each fragment controls.

[![AI Tools to Replace Your $10k+ Creative Agency](https://img.youtube.com/vi/jBcL-XrHqzY/maxresdefault.jpg)](https://www.youtube.com/watch?v=jBcL-XrHqzY)

*Marketing Against the Grain, "AI Tools to Replace Your $10k+ Creative Agency," episode 368*

### Try This In Claude Chat

**Goal:** produce a repeatable prompt formula in your brand, then generate variations from it.

**Steps:**

1. Collect 20 images that represent your brand. Product shots, lifestyle images, and past ads all count.

2. Open a new chat and run the brand profile prompt below. Save the style guide it returns.

3. Fill in the eight-block template with one image you need. Keep every value short.

4. Generate the image in your image tool. Change exactly one block, then generate again.

5. Compare the two. You now know what that block controls in your brand.

6. When one output is right, ask Claude for 50 variations that hold your brand blocks constant and vary only subject and environment.

**Expected result:** a filled-in eight-block prompt that produces on-brand images, plus a style guide you paste into every future image prompt.

### Get Started Today

Flynn calls his formula *Mad Libs for AI* and points at it on screen, but he never reads it out. The template below reconstructs it from the eight blocks in his order. His Red Bull prompt is the only complete example he gives.

```
{{shot-type}}, {{subject-and-action}}, {{environment}}, {{color-scheme}},
{{camera-or-lens}}, {{film-stock}}, {{mood}}, {{lighting}}

FILLED EXAMPLE (Flynn's, verbatim):
Motorsport photography, Red Bull F1 car, racetrack, warm tones, 35mm,
shallow depth of field, sunset backlighting, center framing, motion blur

YOUR BLOCKS
shot type        {{close-up-wide-drone-overhead-product-on-white}}
subject + action {{who-or-what-and-what-it-is-doing}}
environment      {{where-this-takes-place}}
color scheme    {{your-brand-hex-codes-or-named-palette}}
camera or lens   {{35mm-85mm-iphone-polaroid-medium-format}}
film stock       {{kodak-portra-fuji-superia-or-leave-blank}}
mood             {{the-feeling-in-three-words}}
lighting         {{golden-hour-softbox-harsh-noon-backlit}}

Keep every value short. When the output is wrong, change one block and
generate again.
```

### Get Started Today

```
## Role
You are an art director. You reverse-engineer the visual system behind a
set of images so it can be reproduced by someone who has never seen them.

## Task
I am attaching {{number}} images that represent {{brand-name}}. Study them
as a set and extract the style guide that produced them.

Describe what is actually in these images. Do not describe what you think a
brand like this should look like.

## Context
**Brand:** {{brand-name-and-what-it-sells}}
**Where these images run:** {{ads-website-email-packaging-social}}
**Images included:** {{product-shots-lifestyle-ads-or-a-mix}}
**Anything already fixed:** {{brand-hex-codes-fonts-required-elements}}

## Output

### Style Guide
Cover each of these, in this order:
- Shot type: the framing and distance this brand uses, and what it avoids
- Subject treatment: how people and products are positioned
- Environment: the settings that recur
- Color: the palette, as hex codes, plus which color dominates
- Camera and lens: focal length and depth of field the images suggest
- Film or finish: grain, saturation, contrast
- Mood: the feeling, in three words
- Lighting: direction, hardness, and time of day

### Prompt Fragments
For each element above, write the exact phrase I should paste into an image
prompt to reproduce it. These are the fragments I will reuse.

### The Reusable Block
Assemble the fragments into one paste-ready block I can put at the end of
every image prompt for this brand.

### Outliers
Name any image in the set that breaks the pattern. Say what it does
differently and whether the pattern or the outlier is the stronger direction.
```

**Personalize it further.** Paste the reusable block into your Project instructions so every image prompt inherits it. When you find a fragment that consistently works, add it to the block and never retype it.

By this point you should have:

- A ranked list of publishable ideas pulled from a recording you already had
- A Project that drafts in your brand voice without you pasting context first
- A week of platform-specific social posts, each traceable back to your source material
- A style block that removes your most common edits before you see them
- Five pass or fail criteria your team can apply to any draft
- A hook skill that returns openings plus the formula behind each one
- A reusable playbook on the thing you build most often
- A buyer profile specific enough to write copy from
- A visibility audit showing where you appear in AI answers and which pages would close the gap
- An executive summary that argues from your numbers rather than listing them
- An eight-block image prompt and a style guide extracted from your own brand

Everything above runs in a browser tab, which is also its ceiling. Claude reads what you paste and forgets it when the chat ends.

The next module removes that limit. Claude gets access to your files, your tools, and a schedule, so the work happens against your real data instead of an export you pasted.
