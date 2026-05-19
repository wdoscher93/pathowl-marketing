# PathOwl
## Strategic Foundation and V1 Scope
*Last locked: May 18, 2026*

---

## Page 1 — Strategic Foundation

### What PathOwl is
PathOwl is an agentic adjuster — an AI system that performs the work of an independent claims adjuster, starting with select high-value automation and expanding toward full end-to-end claim resolution under licensed adjuster oversight.

PathOwl is not a workflow tool, not an analytics dashboard, and not an AI feature bolted onto existing software. It is a new operating model for claims handling, where AI performs the routine 70-80% of claim work autonomously and human adjusters supervise exceptions, complex cases, and high-stakes decisions. The analytics layer PathOwl has already built becomes the trust, observability, and supervisory surface that makes the agent's autonomy safe to deploy.

### Who it's for
The primary V1 customer is independent adjuster (IA) firms handling 5,000-50,000 auto claims annually, with concentration in non-standard auto carriers, regional auto carriers, and MGA programs. The buyer is the IA firm owner, president, or VP of operations — a decision-maker with purchasing authority who is structurally incentivized to find leverage on adjuster labor cost and cycle time.

Secondary V1 targets (post-design-partner): small TPAs handling auto programs, and specialty auto MGAs. Explicitly excluded from V1: top-10 personal auto carriers, captive agency networks, public adjusters, body shops, and commercial-only IA firms without a meaningful auto book.

### The problem PathOwl solves
The auto claims industry is being squeezed from both ends. Simple drivable repairables are increasingly handled by DRP shops writing their own initial estimates (45%+ of DRP work in 2024) and photo-AI channels (25.6% of CCC initial estimates in 2024). What remains in the IA channel is harder, more concentrated work: total losses (record 22.8% frequency in 2025), supplements (63% of DRP repairs generate at least one supplement; average value >$1,060), liability investigations, calibrations (35.6% of DRP appraisals), and non-driveable claims.

The single biggest operational pain inside the IA channel today is supplement cycle time. When a body shop submits a supplement request, the IA adjuster typically takes 3-5 days to review and resubmit to the carrier. The work is repetitive, judgment-heavy, and high-volume. It bottlenecks the adjuster's queue, drags total claim cycle time well past carrier SLA expectations, and consumes a disproportionate share of adjuster hours.

Carriers measure IA firm performance on cycle time, supplement rate, re-inspection variance, and CSAT — and reallocate assignment volume to firms that perform best. Supplement performance is therefore not a marginal concern for IA firm owners; it is a direct driver of book retention and growth.

### How PathOwl is different
Existing claims AI products fall into three categories: photo-based damage estimating (Tractable, CCC IX, Mitchell Intelligent Estimating), workflow tooling on top of legacy claims systems (Snapsheet, Hi Marley, Five Sigma), and analytics or decision-support layers. None of them perform the end-to-end work of an adjuster on a defined slice of the claim lifecycle. They make humans faster; they don't replace the unit of work.

PathOwl's "agentic adjuster" framing is a category position, not a feature claim. The agent ingests the claim file, reasons through it, and produces a structured recommendation ready for one-click human approval. Over time, with carrier-by-carrier accuracy data, the agent's authority expands from "recommend only" to "auto-approve under thresholds with adjuster review on exceptions." The destination is most routine adjuster work happening autonomously, with licensed adjusters supervising and handling exceptions.

The buyers we sell to compare PathOwl against the status quo (manual adjuster handling of every supplement) and hiring more adjusters (capacity expansion through headcount). Both alternatives become structurally worse over the next 18 months as adjuster supply tightens (BLS projects 5% employment decline 2024-2034), carrier SLAs compress, and supplement volumes grow.

### The product principle
PathOwl is agent-first, not workflow-first. Every architectural decision favors the agent doing the work autonomously while preserving the trust infrastructure that lets humans expand its authority over time. Three commitments follow:

1. **Decomposed reasoning with structured outputs.** The agent runs 8-12 atomic reasoning steps per supplement, each producing validated JSON. Claude does judgment work; code orchestrates and validates.
2. **Graduated authority.** The agent ships in recommend-only mode and earns autonomy through measured accuracy against human decisions over time. Customers configure the authority envelope per carrier, per claim type, per dollar threshold.
3. **Trust infrastructure as a first-class feature.** Every agent decision is logged, replayable, auditable, and explainable to a regulator. The analytics layer is the supervisory surface, not a separate product.

### Competitive position
No direct competitor is building agentic supplement triage for the IA channel as a focused product today. Closest competitors are Snapsheet (carrier-focused virtual claims handling, pre-agentic architecture), Tractable (photo-AI for damage estimating, not supplement decisioning), and Five Sigma (broader claims platform, earlier stage). Primary platform risk is CCC and Mitchell adding "good enough" supplement intelligence as native features (likely 18-36 months out). Primary unknown risk is stealth seed-stage agentic claims startups. PathOwl's defensible position comes from deep auto-claims domain expertise, existing PathOwl data foundation, and the trust infrastructure built through the analytics layer. Speed to demo-ready and first-customer is the strategic priority for the next 13 months.

### Team
Founder is a domain expert in auto claims and an enterprise software consultant in financial services and insurance, with background in AI product ownership at scale. Sales motion supported by partner with active enterprise AE experience in B2B SaaS. This combination provides domain credibility, demo craft, technical execution, and B2B sales methodology from day one — closing the gaps that typically constrain solo technical founders in vertical AI. Hiring plan: stay lean through V1 demo (August 2026) and first design partner (Q4 2026); evaluate first technical hire after first paid customer (~Q3 2027) and first dedicated sales/customer success hire after $1M ARR.

---

## Page 2 — V1 Scope and Execution

### V1 product scope
**In scope:**

- Supplement triage and pre-approval logic for auto physical damage claims
- Three supplement types: teardown supplements (hidden damage discovered during repair), calibration supplements (ADAS calibration requirements missed on original), and parts pricing/operations supplements (disputes on covered scope or amount)
- Agent recommendation output: approve as submitted, approve with modifications, request additional information, escalate to senior adjuster, or decline with reasoning
- Adjuster review interface: queue, side-by-side review, one-click approve/modify/escalate
- Audit logging and explainability for every agent decision
- Confidence scoring with thresholds that route low-confidence supplements to human review

**Out of scope:**

- Voice intake and voice handling
- Total loss decisioning and handling (V2)
- Subrogation identification (V3)
- Third-party liability investigation (V3)
- BI, PIP, and medical claims
- Glass-only claims
- Litigation files
- Payment issuance
- Commercial lines and contractor auto
- Body-shop-facing product or workflows

### V1 integration scope
**Demo phase (build target by August 10, 2026):**

- Estimate ingestion via PDF only (CCC ONE and Mitchell PDFs accepted)
- Supplement request and photo ingestion via PDF and image upload
- Hosted demo at demo.pathowl.io on Vercel
- No live CMS or carrier portal integration required for demo

**Trial phase (post-design-partner):**

- Direct integration with FileTrac Evolve or VCA Software (whichever the design partner uses)
- CCC ONE estimate import via EMS file format
- Email parsing for supplement intake
- Carrier portal automation for output submission

**Production phase (post-first-customer):**

- CCC ONE direct API integration via partner program
- Mitchell Cloud Estimating integration
- Multiple CMS integrations
- Carrier-specific output adapters

### Web architecture
PathOwl is positioned externally as the agentic adjuster, with three URL surfaces: pathowl.io (public marketing landing page, no authentication required, agent-first positioning), demo.pathowl.io (hosted agent demo, public for demo viewing), and app.pathowl.io (existing BI/analytics tool, authentication-gated, kept for internal use and as the eventual supervisory layer for the agent, not promoted externally). The BI tool's strategic role is as the trust and observability infrastructure for the agent, not as a standalone product. External messaging is agent-first and single-minded; the BI work serves the agent narrative rather than competing with it.

### Sales motion (V1)
Outreach and sales pipeline managed in partnership with founder's spouse, experienced enterprise AE at MuleSoft, providing methodology, cadence design, discovery framework, and pipeline discipline. Initial outreach begins approximately 60 days pre-demo (June 2026) targeting design partner conversations to land in the two weeks following August 10 demo-ready milestone. First design partner targeted by Q4 2026. Discovery-to-close motion modeled on enterprise B2B SaaS, with sub-90-day cycles given mid-market buyer profile. Discovery framework adapted from Celonis (process-intelligence-flavored: workflow mapping, friction quantification, automation value modeling). Outreach cadence adapted from MuleSoft AE practice. Pricing conversations anchored to value delivered (adjuster labor, cycle time, supplement quality) rather than feature comparison.

### Pricing model (V1)
Design partners run on outcomes-based pricing (~30% of measured adjuster hours saved, floor $2,000/month) for 90-day pilots converting to standard pricing. Paying customers: $1,000/month platform fee plus $12 per supplement processed (with volume discounts at 1,000/month and 2,500/month). Mid-size IA firm contract value: ~$10,500/month. Pricing index is value-delivered (adjuster labor displaced + cycle-time gains), not cost-plus. Monthly billing only in V1; annual contracts considered after 12 months of retention data.

### Unit economics
Per-supplement LLM cost is estimated at $0.10-0.18 with prompt caching, depending on supplement complexity. At 263 supplements/month for a mid-size IA firm (5,000 auto claims/year, 63% supplement rate), monthly LLM COGS is approximately $30. At $3,000/month subscription, that yields 99% gross margin on the LLM line. All-in COGS including infrastructure is estimated at 5-15% of revenue. Pricing strategy indexes to value delivered (adjuster labor displaced, cycle time reduced) rather than to LLM cost.

### The trajectory beyond V1

- **V2** (months 6-12 post-V1): Add total loss decisioning and handling
- **V3** (months 12-18 post-V1): Add subrogation identification and third-party liability investigation
- **V4** (months 18-24 post-V1): Add text-based FNOL ingestion and initial scope-of-loss analysis
- **V5+**: Broader claims operations, multi-line expansion, deeper carrier integration

### Success criteria for V1
**Demo phase (target: August 10, 2026):**

- Working agent processes a supplement end-to-end on representative PDF inputs in under 3 minutes
- 8-12 prepared supplement scenarios spanning teardown, calibration, and parts/operations types
- Hosted web demo at demo.pathowl.io showing queue, review, and recommendation surfaces
- "Where this goes next" narrative ready for design partner conversations
- Agent's reasoning is convincing enough that a working IA adjuster would nod, not wince

**Design partner phase (target: Q4 2026):**

- 1 IA firm signed as design partner with data-access agreement
- Real supplement data flowing through agent in shadow mode
- Eval set expanded from synthetic to 200+ real supplement scenarios

**Trial phase (target: Q1-Q2 2027):**

- 70%+ recommendation accuracy against adjuster decisions on the design partner's book
- Live deployment with adjuster review-and-submit workflow
- Measurable cycle-time reduction on agent-processed supplements

**Paying customer phase (target: H2 2027):**

- First $5K-15K/month paid contract signed
- 2-3 active design partner conversations beyond the first
- Agent processing auto-approvable supplements under threshold without per-claim adjuster review

### Non-goals for the next 18 months
To preserve focus and resist scope creep, PathOwl explicitly will not:

- Build a claims management system of record
- Handle commercial lines, including commercial auto for contractors
- Sell to top-10 personal auto carriers in V1
- Build a body-shop-facing product
- Process payments or hold carrier funds
- Replace licensed adjusters as the licensed party of record
- Expand into property, workers comp, BI, PIP, or non-auto lines
- Raise venture capital before demo-ready V1 ships and a design partner is signed
- Pursue public association of PathOwl with the founder's primary employer until founder transition decision is triggered by revenue milestone

### What this document is for
This document is the North Star for every product, engineering, sales, and capital decision PathOwl makes over the next 12-18 months. Before any decision that affects scope, target customer, integration priorities, or product direction, the question to ask is: "Does this advance V1 as defined here, or does it expand scope?" Scope expansion requires deliberate reconsideration of this document, not a casual override.
