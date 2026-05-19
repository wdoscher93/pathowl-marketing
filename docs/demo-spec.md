# PathOwl V1 Demo Specification
*Build target: August 10, 2026*
*Hosted at: demo.pathowl.io*
*Last locked: May 18, 2026*

---

## What the demo shows
A working agent that processes an auto physical damage supplement end-to-end on representative PDF inputs and produces a structured recommendation, in a web interface a prospective design partner can navigate live during a Zoom screen-share.

The demo's only job is to make the prospective design partner say "yes, I want to be the one whose real data this gets built around." It is not a production product. It is not connected to real carrier systems. It is not accurate above 70-75% on real-world supplements. It is tuned for demo scenarios that demonstrate range and credibility.

## The demo flow

1. Demo opens at demo.pathowl.io, showing a queue of 8-12 prepared supplement scenarios. Queue displays: claim number, insured name, shop name, supplement amount, supplement type, agent recommendation (color-coded), confidence score, time since received.
2. Viewer clicks a scenario — for example, a teardown supplement for a rear-end collision on a 2022 Honda Civic. Review screen opens.
3. Review screen shows side-by-side:
   - Left pane: the agent's recommendation, structured reasoning, per-line-item analysis, risk flags, confidence score
   - Right pane: the original estimate PDF, the supplement PDF, supplement photos, loss facts summary
4. Viewer reads the agent's reasoning — phrased in adjuster-credible language. Example: "I recommend approving the inner left fender replacement on line 4 because the supplement photos show clear structural-rail damage consistent with the reported impact. Labor time of 0.5 hours on item 6 is below the published guideline of 0.8 hours and should be adjusted."
5. Viewer can click Approve, Modify, Escalate, or Request Info. Each action produces a confirmation screen showing what would happen next.
6. Viewer returns to queue and selects a different supplement type to see range — calibration scenario, parts pricing scenario.
7. At end of walkthrough, the "where this goes next" surface shows trajectory: V2 total loss, V3 subrogation, V4+ end-to-end agentic adjuster.

## What the agent does under the hood
12 reasoning steps per supplement, decomposed:

1. **Ingest and normalize** (PDF parsing, structured extraction against canonical registry) — code
2. **Classify supplement type** (teardown / calibration / parts-pricing / other) — Claude Haiku
3. **Loss-facts alignment check** (does the damage match the reported loss?) — Claude Sonnet with vision
4. **Operations necessity check** (are the requested operations justified?) — Claude Sonnet
5. **Parts pricing validation** (are part costs reasonable against benchmarks?) — code with LLM fallback
6. **Duplication and prior-payment check** (is anything double-billed?) — code
7. **Carrier guideline application** (does this meet the carrier's supplement rules?) — code with LLM for interpretation
8. **Confidence scoring** (aggregate confidence across all steps) — code
9. **Decision and reasoning generation** (final structured recommendation with justification) — Claude Sonnet
10. **Adjuster-facing summary** (clean explanation in adjuster-credible language) — Claude Haiku
11. **Carrier-ready submission language** (formatted for hypothetical carrier output) — Claude Haiku
12. **Audit log entry** (everything logged for replay) — code

For demo, steps 5, 6, and 7 use simplified mock implementations since real carrier guideline databases and parts price benchmarks are not yet integrated. The agent's reasoning is still convincing because the LLM steps carry most of the demonstrative weight.

## What the user interface includes

**Queue page:**
- Sortable, filterable list of supplement scenarios
- Color-coded status indicators (green = high-confidence approve, yellow = approve-with-modifications, red = escalate)
- Click any row to enter review

**Review page:**
- Split-screen layout: agent analysis left, source documents right
- PDF viewers for estimate and supplement
- Photo carousel for supplement images
- Agent's structured reasoning rendered as readable cards
- Action buttons: Approve, Modify, Escalate, Request Info, Decline
- Override modal: enter reason if modifying or rejecting

**Confirmation surface:**
- Shows what would happen next (carrier submission package preview, file note generation, status update)

**Trajectory page:**
- One-page visual of V1 → V5 roadmap
- Specific capabilities at each milestone
- "Designed for" callout on IA firms and the eventual carrier sale

## Demo data preparation
12 representative supplement scenarios, distributed across three types:

**4 teardown supplements:**
- Rear-end collision with hidden rail damage
- Front impact with hidden radiator support damage
- Side impact with B-pillar reinforcement
- Minor frontal with airbag deployment discovered

**4 calibration supplements:**
- Front camera calibration after bumper replacement
- Blind spot module replacement after quarter panel
- ACC sensor recalibration after grille replacement
- 360° camera system after multiple panel work

**4 parts pricing / operations supplements:**
- OEM vs LKQ dispute on hood
- Refinish blend time disagreement
- Sublet calibration cost dispute
- Pre-scan / post-scan operation justification

Each scenario includes:
- A realistic original estimate PDF (constructed from CCC training materials and industry-standard formats)
- A realistic supplement request PDF
- 3-8 supplement photos (sourced from public collision photography or constructed)
- Loss facts summary (typed narrative)
- Carrier guideline context (which fictional carrier, what supplement rules apply)

## Technical architecture for demo

- **Frontend:** Next.js + TypeScript, deployed to Vercel under demo.pathowl.io
- **Backend:** FastAPI Python service (extends existing PathOwl backend on Render)
- **Reasoning:** Anthropic API direct calls, structured tool-use outputs for each step
- **Orchestration for demo:** Simple async Python chaining; full Inngest/Trigger.dev for trial phase
- **Storage:** Existing Supabase Postgres for scenario data and agent decision logs
- **PDF parsing:** PyPDF or pdfplumber for text extraction; Claude vision for layout/photo interpretation
- **Authentication:** None for demo (single-user demo URL with simple access gate)
- **Visual identity:** Inherits PathOwl design language — light canvas, Midnight Ink, PathOwl Forest accent, Inter typography. The dark inversion band pattern applies to the agent product UI itself, framing the dashboard surface in #0B1F3A per the design system

## Success criteria — when demo is "ready"
The demo is ready when:

- All 12 scenarios run end-to-end successfully on demo.pathowl.io with no manual intervention
- Each scenario produces an agent recommendation in under 3 minutes
- Agent recommendations are reviewed by founder (as the domain expert) and judged "credible adjuster reasoning" on at least 10 of 12 scenarios
- The review interface loads in under 2 seconds and handles all 4 action buttons cleanly
- The trajectory page tells the V1 → V5 story clearly
- Founder can walk through a full demo end-to-end in under 15 minutes from queue to wrap-up
- The hosted URL is stable and survives a screen-share without errors
- Visual identity matches the locked PathOwl design language (light canvas marketing surface, dark inversion band for product UI, Inter typography, Midnight Ink and PathOwl Forest palette)

## What the demo is NOT

- Not production-ready code (can have rough edges and hard-coded paths)
- Not connected to real CCC ONE, FileTrac, or carrier systems
- Not accurate above 70-75% on real-world supplements (it's tuned for demo scenarios)
- Not multi-tenant or scaled for multiple concurrent users
- Not auditable to compliance standard (logging exists but isn't regulator-grade)

All of those become required for the trial phase. None of them are required to get a design partner to say "yes, I want to be the one whose real data this gets built around."

## Build timeline
Working solo, with focus, on top of the existing PathOwl foundation (data layer, canonical registry, mapping infrastructure already built):

**Weeks 1-2 (May 18 - May 31):** Lock the demo scope and design the agent reasoning chain. Decide the exact supplement types in scope for demo. Design the agent's reasoning steps with structured output schemas. Construct first supplement scenario as the development target.

**Weeks 3-6 (June 1 - June 28):** Build the agent core. Implement the reasoning chain with Claude API. Build orchestration. Get a single supplement scenario flowing end-to-end. Iterate prompts until the agent's output is convincing on that first scenario.

**Weeks 7-9 (June 29 - July 19):** Build the demo interface. Simple web app with queue, review screen, recommendation display. Connect to agent backend. Apply the PathOwl design language. Add the ability to trigger different supplement scenarios.

**Weeks 10-12 (July 20 - August 9):** Build the remaining 11 demo scenarios. Run each through the system. Refine prompts until outputs are sharp. Rehearse the demo end-to-end. Build the "where this goes next" narrative. Final polish and deployment hardening.

**Week 13 (August 10):** Demo-ready milestone.

**Intermediate checkpoints:**

- **End of Week 4 (June 14):** Agent reasoning chain processes one scenario end-to-end via script. If not hit, timeline is at risk and scope needs to be cut.
- **End of Week 8 (July 12):** All 12 scenarios run end-to-end via script. Web UI exists in rough form. Major risk point — if scenario quality is poor here, more time needed on prompts, not UI.
- **End of Week 12 (August 9):** Hosted demo at demo.pathowl.io is functional. Final week is polish and rehearsal.
