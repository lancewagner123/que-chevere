# Field Journal — Que Chévere

Purpose: this file is the reconstruction record for this project. A future
LLM/agent should be able to read this file alone and understand what was
built, why decisions were made, what changed, what failed, what worked, and
what should carry forward. Read this before doing major work. Append an
entry after any meaningful work session.

Entry format: `YYYYMMDD HH:mm UTC-07:00` followed by what was worked on, why,
files/systems touched, decisions made, problems encountered, lessons
learned, current state, next steps, and assumptions/constraints/risks.

---

## 20260714 10:22 UTC-07:00

**What we worked on:** Created this project folder and seeded the field
journal itself. No new design/creative work was done in this session — this
entry exists to establish a documented starting point after discovering that
no folder or journal previously existed for Que Chévere, despite prior work
having been done on it in earlier chat conversations.

**Why we did it:** Lance requested that every project maintain a colocated
`field_journal.md` at its root, auto-created the moment a project folder is
created, so future sessions (and future LLM agents) have a reconstruction
record instead of relying on chat memory alone. When asked "where did we
start Que Chévere," it became clear there was no folder or discoverable
chat thread — only fragments retained in Claude's cross-conversation memory
system. This journal is the fix going forward.

**Files/folders/systems touched:**
- Created `/Que Chevere/` project root
- Created `/Que Chevere/field_journal.md` (this file)
- Created empty subfolders: `assets/`, `docs/`, `working/`
- No design tool (Canva, etc.) was touched in this session

**Decisions made:**
- Folder structure convention: `field_journal.md` at root, plus `assets/`
  (images, exports, source files), `docs/` (specs, briefs, style guides),
  `working/` (in-progress drafts, scratch files).
- Field journal is colocated per-project (not centralized), so it travels
  with the project if moved or shared.
- Journal entries are a reconstruction record, not a changelog — they should
  capture reasoning and lessons, not just a list of actions.

**Problems encountered:**
- Prior work on Que Chévere (a design system rendered as a living style
  guide website, plus Canva exploration for Instagram content) exists only
  as fragments in Claude's memory system, not as retrievable transcripts or
  saved files. There is no tool available in this environment to search or
  retrieve past chat transcripts directly.
- Net effect: the original reasoning, exact deliverables, and file outputs
  from that earlier work are NOT recoverable from this side. Only
  high-level facts persisted (see "Reconstructed context" below).

**Lessons learned:**
- Claude's memory system retains summarized facts about a project, not the
  underlying files, chat transcripts, or a way to locate them. If a project
  isn't saved into a real folder/file by the user, its work product can
  become effectively unrecoverable even though Claude "remembers" it existed.
- Going forward: create the project folder AND field_journal.md at the
  moment a project starts, not retroactively — don't rely on memory to
  preserve continuity.
- Claude has no persistent storage between conversations. This folder and
  journal must be kept by Lance (saved locally/cloud) and re-uploaded each
  session for Claude to read before doing further work, then handed back
  with updates at the end of the session.

**Current project state:**
- Folder now exists with the correct structure and a seeded journal.
- No verified source files (Canva designs, style guide site code/content,
  logos, images) have been recovered or placed in `assets/`, `docs/`, or
  `working/` yet.
- Reconstructed context (from Claude's memory, NOT verified against
  original conversation or files — treat as a starting point to confirm or
  correct, not ground truth):
  - Brand: "Que Chévere," a Venezuelan food truck.
  - Design system built out as a living style guide website.
  - Strict monochromatic black-and-white foundation, with Venezuelan flag
    accent colors used sparingly.
  - Typefaces: Squada One and Share.
  - Aesthetic: flat, zero border-radius throughout (no rounded corners
    anywhere in the system).
  - Canva was being explored for social media content, specifically
    Instagram posts featuring Venezuelan food photography.
  - Lance has personal/cultural connection to Venezuelan food (e.g.
    familiarity with cachapa — Venezuelan sweet corn pancakes with shredded
    beef and white cheese — distinguished explicitly from arepas).

**What should happen next:**
1. Lance to check Canva account directly for existing Que Chévere designs
   (drafts/recent designs) that may still exist independent of chat history.
2. Lance to check claude.ai conversation sidebar for any threads mentioning
   "Que Chévere," cachapa, or food truck, to recover original reasoning/specs.
3. Once source material is found, extract and save actual files (style
   guide site code, logo/brand assets, Canva exports) into `assets/`,
   `docs/`, `working/` as appropriate, and correct/expand this journal entry
   with verified details.
4. If no source material is recoverable, treat the "Reconstructed context"
   above as the working spec and proceed forward from here, noting in the
   journal that pre-20260714 history is unverified.

**Assumptions / constraints / risks:**
- ASSUMPTION: the design details listed under "Reconstructed context" are
  accurate, but they have not been re-confirmed with Lance or cross-checked
  against any saved file — treat with appropriate skepticism until verified.
- CONSTRAINT: Claude has no persistent filesystem across conversations.
  Every session starts fresh; this journal (and any project files) only
  persist if Lance saves and re-uploads them.
- RISK: if this folder/journal isn't saved and re-uploaded in future
  sessions, this reconstruction effort will itself be lost, and a future
  agent will be in the same position Lance was in when asking "where did we
  start Que Chévere?"

---

## 20260714 10:35 UTC-07:00

**What we worked on:** Closed the loop on recovering the original Que
Chévere design system work (style guide site, Canva exploration) referenced
in Claude's memory but not present as files.

**Why we did it:** Confirmed `C:\Users\lance\Claude\website generator\que
chevere` was empty on disk (no prior files ever saved there). Asked Lance to
check the claude.ai sidebar for the original conversation thread so any
code/content shown inline there could be manually recovered.

**Files/folders/systems touched:** None — this was a verification/search
step, not file creation.

**Decisions made:** The original conversation could not be located by
Lance. Decision: stop searching and treat the pre-20260714 work as
**permanently unrecoverable**. The "Reconstructed context" section in the
20260714 10:22 entry above (monochrome + Venezuelan flag accents, Squada
One / Share typefaces, zero border-radius, flat aesthetic, Canva/Instagram
exploration) is now promoted from "unverified memory fragment" to **the
working spec** for this project — it's what we build from going forward,
even though it can't be cross-checked against an original source.

**Problems encountered:** Root cause identified: the original style guide
site and any Canva work were never exported/downloaded to disk, and the
originating chat conversation is not locatable in the claude.ai sidebar
(may have been deleted, or is filed under a name/date Lance didn't
recognize while scanning).

**Lessons learned:**
- Confirmed the earlier hypothesis: if creative/design work happens purely
  inside a chat session and is never explicitly saved to a real file +
  folder, it can become permanently unrecoverable, even though Claude's
  memory system retains high-level facts about it forever. Memory facts are
  not a substitute for saved files.
- This is the concrete cost example that justifies the field-journal
  requirement going forward — this exact loss shouldn't happen again for
  this or any other project.

**Current project state:**
- `que chevere\` folder structure (this journal + `assets\`, `docs\`,
  `working\`) is the actual and only source of truth for the project as of
  now.
- No original style guide site files, logos, or Canva exports exist
  anywhere Claude or Lance can access.
- The "Reconstructed context" spec (see prior entry) is now treated as
  confirmed working spec, not a guess to verify.

**What should happen next:**
1. Rebuild forward from the working spec: monochrome black/white base,
   Venezuelan flag accent colors used sparingly, Squada One + Share
   typefaces, flat aesthetic, zero border-radius throughout.
2. Next time meaningful design/creative work happens (style guide site,
   Canva assets, logo, etc.), save actual output files into `assets\`,
   `docs\`, or `working\` immediately — do not let deliverables live only
   inside a chat session.
3. No further time should be spent searching for the original
   conversation — treat that avenue as closed.

**Assumptions / constraints / risks:**
- ASSUMPTION: the working spec (monochrome, flag accents, Squada
  One/Share, zero border-radius) is correct enough to build from, but has
  never been confirmed against an original source document — if it later
  turns out to be misremembered in some detail, correct it here and note
  the correction explicitly rather than silently editing history.
- RISK: same as before — this journal only has value if it's kept updated
  and re-uploaded each session. This entry itself is the proof of what
  happens when that discipline lapses.

---

## 20260714 18:09 UTC-07:00

**What we worked on:** In a separate, parallel Claude Code session (this
journal was not read before that session's work began), a complete
commercial restaurant website was designed and built from scratch for Que
Chevere: `index.html`, `menu.html`, `catering.html`, plus
`assets/css/style.css` and `assets/js/main.js`. That session also built and
ran `assets/optimized/*.webp` image derivatives, added a real Reviews
section sourced from live Google/Yelp listings, added founding-story copy
sourced from Yelp's business-owner bio, and is now pushing the result to a
new public GitHub repo (`que-chevere`, under lancewagner123) for GitHub
Pages hosting. This entry reconciles that session's output against this
journal's previously-documented working spec.

**Why we did it:** Before pushing to GitHub, a routine `ls` of the project
root surfaced this journal and its documented working spec for the first
time in that session. The build already completed does not match that
spec (see "Problems encountered" below). Lance was asked directly how to
reconcile this, and chose: keep the new build, supersede the old spec, and
document the change here rather than silently overwrite the project's
design history.

**Files/folders/systems touched:**
- `index.html`, `menu.html`, `catering.html` — new, full site build
- `assets/css/style.css`, `assets/js/main.js` — new
- `assets/optimized/` — new, WebP derivatives of every source photo
- `.gitignore`, first `git init` + commit + push to GitHub (this entry's
  session) — see below

**Decisions made — the working spec is superseded:**
The monochrome/flat/zero-radius/Squada-One-Share spec from the two prior
entries above is **no longer current**. The actual, now-live design
direction is:
- **Background:** warm cream/off-white (`#FFFBF3`), not black-and-white
  monochrome.
- **Color usage:** the Venezuelan flag palette (`#FAF12E` yellow, `#31459E`
  blue, `#E01D33` red — sourced directly from Lance in the build brief,
  independently recovered from the logo pixels earlier in that session) is
  used throughout as an active accent system — badges, tags, buttons,
  eyebrows — not held back as a sparing accent against monochrome.
- **Typefaces:** Fraunces (display/headings) + Inter (body/UI), not Squada
  One / Share.
- **Corners:** rounded throughout — 10/16/26px radius scale on cards,
  buttons, images, pills — not the previously-specified zero-radius flat
  system.
- Reasoning for keeping it rather than reverting: the build was made
  directly from a detailed, explicit brief Lance supplied in that session
  (business info, brand colors, commercial requirements, QA criteria) that
  superseded the older reconstructed-from-memory spec without either party
  realizing there was a conflict. Lance reviewed the discrepancy once
  surfaced and chose to keep the new direction rather than redo the build.

**Problems encountered:**
- The two prior journal entries were never read by the session that did
  this build, because nothing in that session's task pointed back to this
  file — the field-journal convention depends on each new session actually
  opening and reading it first, and that didn't happen here. The conflict
  was only caught incidentally, right before a GitHub push, by a directory
  listing that happened to surface this file.
- Net effect: real design work (colors, type, corner radius, overall
  visual language) was decided twice, independently, in two sessions that
  didn't know about each other, producing two different answers. This
  time the newer one was consciously chosen to stand; there was no
  destructive loss like the earlier entries describe, but only because
  this file was noticed before publishing, not because process caught it.

**Lessons learned:**
- The field-journal convention needs an enforcement point, not just an
  intention — "read this before doing major work" is easy to skip when a
  new session starts from a fully-specified task brief that doesn't
  mention the journal at all. Relying on every future session to
  proactively `ls` the project root before writing code is fragile.
- When a project has both a `field_journal.md` and a directly-supplied
  brief in the same conversation, and the two conflict, the directly-
  supplied brief is what actually gets built (as happened here) — so if an
  older documented spec should take precedence over a fresh brief, that
  needs to be stated explicitly by Lance in the brief itself, not assumed
  recoverable from a journal the building session may never open.

**Current project state:**
- Que Chevere now has a complete, QA'd, real website (home/menu/catering)
  using the warm/color-forward/rounded/Fraunces+Inter direction described
  above. This is the current live design system for the project going
  forward — no monochrome/flat/zero-radius rebuild is planned unless Lance
  requests one.
- Site is being pushed to a new public GitHub repo (`que-chevere`) for
  GitHub Pages hosting as of this entry.
- Local dev preview available via `.devserver.ps1` (a throwaway PowerShell
  static file server, since this machine has no Node/Python) at
  `http://localhost:8843/`.

**What should happen next:**
1. Confirm the GitHub Pages deploy is live and update this journal with
   the final URL once confirmed.
2. If Lance ever wants the original monochrome/flat/Squada-One-Share
   direction revisited, treat this entry as the record of why it was
   dropped, not evidence it was forgotten.
3. Any future session working on this project should read this file
   first, per the standing convention — this entry is itself the
   cautionary example of what happens when that's skipped.

**Assumptions / constraints / risks:**
- ASSUMPTION: Lance's "push as-is, update the journal" decision means the
  new design direction is intentional and durable, not a stopgap — treat
  it as current unless corrected in a later entry.
- RISK: the same enforcement gap that caused this could recur — nothing
  currently forces a new session to open this file before writing code.

---

## 20260714 21:59 UTC-07:00

**What we worked on:** Catch-up entry. Lance asked "Is the field journal
current?" in a later session — this file had not been opened or updated
since the 18:09 entry above, and a full round of additional work had
happened in the meantime without being logged. This entry reconciles the
journal against actual project state and closes out the 18:09 entry's
outstanding next-step ("confirm the GitHub Pages deploy and update this
journal with the URL").

**Why we did it:** Exactly the enforcement gap the 18:09 entry predicted:
several work sessions touched this project afterward and none of them
opened this file first, so none of them appended to it. It was only found
this time because Lance asked directly whether it was current, prompting a
search of the project folder.

**Files/folders/systems touched (since 18:09, undocumented until now):**
- `.git/`, GitHub repo `lancewagner123/que-chevere` (public) — created,
  pushed, GitHub Pages enabled.
- `index.html`, `menu.html`, `catering.html`, `assets/css/style.css`,
  `assets/js/main.js` — multiple rounds of edits (see decisions below).
- `assets/optimized/` renamed to `assets/images - optimized/`.
- `assets/carousel/` (6 new source PNGs from Lance) — new.
- `assets/carousel-optimized/` created, then renamed to
  `assets/carousel - optimized/`.
- `.devserver.ps1` — throwaway local PowerShell static file server (no
  Node/Python on this machine), used for local QA at
  `http://localhost:8843/`.

**Decisions made:**
1. **GitHub Pages deploy confirmed live**: https://lancewagner123.github.io/que-chevere/
   — closes 18:09 entry's next-step #1. No custom domain configured yet;
   still on the `github.io` subdomain.
2. **Deployment tooling**: this machine had no GitHub CLI and no GitHub
   auth. Installed `gh` via winget, authenticated via the device-code
   flow (Lance completed the browser step himself at
   github.com/login/device — Claude never touched a password). `gh` is
   now installed and authenticated on this machine for future sessions.
3. **Three real bugs found by Lance testing on an actual phone**, fixed:
   - Header logo rotated -25deg per request, then **reverted** to
     unrotated per a follow-up request. Net effect: no visible change
     from the 18:09 state, but worth logging so a future session doesn't
     wonder whether the header logo was ever touched.
   - `.gallery-strip` (the dish-photo scroll strip) had `overflow-x:
     visible` at the desktop breakpoint, which let extra images spill
     silently past the page edge instead of scrolling or wrapping. Fixed
     by removing that override so it scrolls at all screen sizes.
   - Mobile hamburger menu did not visibly open on real phones, even
     though click events were firing correctly. Root cause: `<nav
     class="mobile-nav">` was nested *inside* `<header>`, and the header
     has `backdrop-filter: blur(...)` on it. Per the CSS spec,
     `backdrop-filter` makes an element the containing block for any
     `position: fixed` descendant, so the mobile nav's fixed positioning
     was being computed relative to the header's own ~68px-tall box
     instead of the viewport — it was technically "open" but had almost
     no visible area. Fixed by moving `<nav class="mobile-nav">` to be a
     sibling of `<header>` on all three pages, not a child.
4. **Folder renames** (explicit request): `assets/optimized` →
   `assets/images - optimized`; `assets/carousel-optimized` →
   `assets/carousel - optimized`. Both contain literal spaces; referenced
   in HTML with `%20` encoding. Verified working on live GitHub Pages
   (Linux-hosted, case-sensitive filesystem — this matters because the
   local Windows dev server would silently tolerate mistakes here that
   GitHub Pages would not).
5. **`assets/carousel` images**: Lance supplied 6 new source PNGs.
   Converted via the `image-optimization` skill/script (same pipeline as
   the rest of the site: WebP via `cwebp`, 1600/800/400w responsive
   widths). Visual inspection (not just filename-matching) revealed these
   are **not** plain product photos like the rest of `assets/images` —
   they're a matched set of professionally designed promotional graphics
   with baked-in headlines/taglines (Instagram-Story style, using the
   site's yellow/blue/red brand palette). This also solved a standing
   mystery from the original image inventory: the oddly-named `Buruisa
   Chevere.png` file is revealed by its own promo graphic to actually be
   **"Burguesa Chévere"** — a branded pun on "hamburguesa" (Spanish for
   hamburger) + "Chévere."
6. **Homepage dish-spotlight went through three states in this window**:
   (a) originally a manual horizontal scroll strip of plain product
   photos → (b) replaced with the 6 new designed promo cards *and*
   upgraded to a single-slide auto-rotating carousel ("spinner": arrows,
   dot indicators, ~4.5s auto-advance, pauses on hover/touch/focus/hidden
   tab, respects `prefers-reduced-motion`) → (c) per a follow-up request,
   **reverted the interaction model back to the original multi-image
   scroll strip**, while keeping the new promo card images. Current
   state is (c): scroll-strip layout, new designed-card images. All
   `.promo-carousel*` CSS and its JS were removed cleanly, not just
   hidden, when (c) happened.

**Problems encountered:**
- The interactive browser/preview tool was intermittently disconnected
  across several of these sessions (not just once). When that happened,
  verification was done via direct HTTP/curl checks, static code review,
  and CSS-spec reasoning instead of live visual/click testing, and this
  was flagged to Lance each time rather than silently claiming full
  visual verification. Screenshot/zoom capture specifically has been
  unreliable in this environment even when the tool connection itself
  was up.
- An earlier automated QA pass (in the session that built the original
  hamburger-menu code) used a synthetic coordinate click that failed to
  toggle the mobile nav, and a follow-up programmatic `.click()` call
  "succeeded" (class toggled correctly) — this was wrongly written off
  as a browser-automation quirk rather than a real bug, even though a
  bounding-box height reading of 48px on the (supposedly full-viewport)
  mobile nav was sitting right there as a clue. The actual bug
  (backdrop-filter containing block) was only found later, from a real
  phone report. Lesson: an inconsistent test result plus an odd geometry
  reading is a signal to dig deeper, not a reason to write the whole
  thing off as tooling flakiness.

**Lessons learned:**
- The enforcement gap flagged in the 18:09 entry is not hypothetical —
  it happened again immediately, across every session in this window.
  This journal only has value if something actually forces it open at
  the start of a session; "read this before doing major work" written
  inside the file itself cannot do that on its own.
- `backdrop-filter` (and `filter`, `transform`, `will-change: transform`)
  on an ancestor silently breaks `position: fixed` descendants by
  changing their containing block. Worth remembering for any future
  frosted-glass/blurred header treatment on this or other projects.
- When a source-image folder's filenames don't match anything in a known
  menu/spec, don't assume a typo and move on — open the image. In this
  project that pattern has now paid off twice: once identifying "Buruisa
  Chevere" as the hamburger by its ingredients, and this session
  confirming via the promo graphic's own text that its real name is
  "Burguesa Chévere."
- GitHub Pages is case-sensitive and serves exactly what's in the repo;
  the local Windows dev server is not case-sensitive and will not catch
  path-casing or space-encoding mistakes. Anything path-related should
  ideally be spot-checked against the live URL, not just localhost.

**Current project state:**
- Live site: https://lancewagner123.github.io/que-chevere/ (public repo
  `lancewagner123/que-chevere`, `main` branch, root path, no custom
  domain yet).
- Three pages (`index.html`, `menu.html`, `catering.html`), shared
  `assets/css/style.css` + `assets/js/main.js`, no build step.
- Image folders: `assets/images/` (source) → `assets/images -
  optimized/` (WebP derivatives); `assets/carousel/` (source promo
  graphics) → `assets/carousel - optimized/` (WebP derivatives).
- Homepage dish spotlight: horizontal scroll strip using the 6 designed
  promo-card images.
- `gh` CLI installed and authenticated on this machine; plain `git push`
  now works for future sessions without re-running the auth flow.
- `docs/` and `working/` remain empty except for `.gitkeep` placeholders
  — vestigial from the original design-system-project scaffolding
  described in the 10:22 entry, unused by the site that actually got
  built. Not removed in this entry since deleting things isn't this
  entry's purpose, but flagged here so a future session doesn't wonder
  whether something is missing from them.

**What should happen next:**
1. If a custom domain (e.g. `quechevereaz.com`) is wanted instead of the
   `github.io` subdomain, that needs a DNS change on Lance's end plus a
   `CNAME` file in the repo — not yet done.
2. Confirm with Lance whether `docs/` and `working/` should be removed
   as unused, or repurposed.
3. Continue the discipline this entry is itself demonstrating: append an
   entry here after any meaningful session, even a small one — the gap
   this entry just closed covered five distinct pieces of work across
   an unknown number of sessions, and it was only caught because Lance
   asked directly.

**Assumptions / constraints / risks:**
- ASSUMPTION: no work happened on this project outside what's
  reconstructable from this conversation's own history — if any other
  session touched this project in this window and also didn't log it,
  this catch-up entry would not know to include it.
- RISK: same as every prior entry's risk section — this file's accuracy
  depends entirely on being opened and appended to, and nothing
  mechanical enforces that yet.
