# PathOwl Design Language
## Official Brand Identity and Design System
*Last locked: May 18, 2026*

---

## A. Executive Summary
Bottom line: PathOwl uses a Stripe/Anthropic-grade light canvas with a deep-ink primary, a distinctive forest-green accent, and a single typeface system — Inter for everything (free), with Source Serif 4 as an occasional editorial voice. This is the design language that signals "legitimate, validated enterprise vendor" to 45-65-year-old IA firm owners and claims executives — exactly the audience comparing PathOwl mentally to CCC, Mitchell, Guidewire, and Snapsheet.

The research underpinning this system is clear. The established insurance-tech incumbents PathOwl's buyers already trust (CCC, Guidewire, Duck Creek, Mitchell/Enlyte, Sapiens, EvolutionIQ, Hi Marley, Tractable's current site) overwhelmingly use light/white-dominant heroes with sans-serif type and a single saturated accent color over a navy base — that is the "established enterprise insurance vendor" visual contract. Companies that break this contract with dark/midnight backgrounds (Sierra, Decagon, Solera's recent rebrand, Snapsheet) are either AI-native consumer brands or are leaning into deliberate differentiation that reads "lab" or "modern startup" — not what PathOwl's traditional buyers expect.

The differentiation play is not the background — it is the accent color. The category is drowning in blue: nine of fifteen analyzed vendors lead with some variant of corporate blue or deep navy, with Tractable owning electric blue and Stripe-derivatives owning indigo. Going forest green gives PathOwl a memorable, trustworthy signal that reads "established but not generic" — the same move EvolutionIQ made with its mint accent on a navy base, and the move Anthropic made with terracotta against cream. Combined with Inter (Söhne's 90%-similar free twin), Source Serif 4 for editorial accents, and an owl mark used at restrained scale, this system carries PathOwl through demo, first customer, and Series A.

---

## B. The Design System

### Primary Font: Inter
Inter (Rasmus Andersson, SIL OFL-1.1, free via Google Fonts).

The closest free analog to Söhne (the Klim Type Foundry typeface Stripe licenses), measured at 90% visual similarity. Used in production by Notion, Linear, Shopify, and dozens of category-leading SaaS sites. Inter was accessed 414 billion times in the year ending May 2025 per Google Fonts analytics — a 57% YoY increase — making it the de facto SaaS workhorse. Carries no "developer-tool" stigma. Reads as institutional at body sizes. Supports tabular figures for numeric content. Has a full optical-size axis. Free, OFL-1.1, commercial use permitted without royalty.

Backup if Inter ever feels too ubiquitous: Geist Sans (Vercel, OFL) or IBM Plex Sans (IBM, OFL). IBM Plex specifically reads "enterprise / regulated industry" and is the reserve choice if PathOwl ever feels Inter is too generic.

### Secondary / Pairing Font: Source Serif 4
Source Serif 4 (Adobe, SIL OFL-1.1, free).

A transitional serif designed by Frank Grießhammer at Adobe and released under the SIL Open Font License. Pairs cleanly with Inter. Evokes the "considered enterprise journal" tone that Anthropic (Tiempos) and Harvey (Styrene + Galaxie Copernicus) use. Signals craft without screaming AI lab.

Use sparingly — pull quotes, testimonial attribution, occasional editorial section headers, the eventual case study byline. Do not use it as a body or H1 font.

Backup: Newsreader (Production Type, OFL) or Fraunces (Undercase, OFL). Source Serif 4 is the most enterprise-feeling of the three.

### Primary Brand Color: Midnight Ink — #0B1F3A
A near-black deep navy, not the saturated royal blue of Guidewire (#00739D) or Sapiens (#00B1EF). This becomes the body text color, the color of dark dashboard mockups, and the fill of the eventual "featured" pricing tier — exactly Stripe's role for #0A2540 ("Downriver"). At this depth, the color reads as ink and authority rather than as "fintech blue."

### Accent / Brand Color: PathOwl Forest — #1F4D3A
A deep hunter green, the single most defensible differentiation move for PathOwl. The insurance-tech category is dominated by blue (Guidewire, Sapiens, CCC, Insurity, Tractable, Five Sigma) — going blue means going invisible. Going forest green ties to the PathOwl name (owl in forest), signals stability and growth without slipping into healthcare-mint or fintech-aqua, and reads to a 55-year-old claims executive as "premium, considered, established" rather than "trendy startup." EvolutionIQ's vivid mint #00D08E against navy proves a green accent works in this exact audience; Duck Creek's #7AC143 proves green can mean enterprise insurance.

Use sparingly: one CTA button per band, link emphasis, a single accent rule per section. Not as a background.

### Supporting Colors

- **Canvas** (page background): #F8F7F4 — warm off-white (Anthropic-influenced parchment, not stark FFFFFF). Reads softer and more considered than pure white; ages better.
- **Surface** (cards, mockup fills): #FFFFFF pure white on top of canvas for elevation.
- **Border / Hairline**: #E6E4DE — warm taupe-gray that pairs with the canvas.
- **Body text**: #0B1F3A (Midnight Ink) at 100% for primary; #4A5568 slate for secondary copy.
- **Muted text**: #6B7280.
- **Success / positive metric**: PathOwl Forest #1F4D3A.
- **Error / risk flag** (product UI only): #B91C1C — never used in marketing.

### Background Treatment: Light canvas with one dark inversion band

- **Default**: Warm off-white #F8F7F4 canvas. Generous whitespace. No gradients in the hero.
- **Dark inversion band**: Use Midnight Ink #0B1F3A as a full-bleed section background for one mid-page band — typically the product dashboard mockup section or the "How agentic claims work" diagram. This is the Stripe pattern (light marketing canvas, dark dashboard track for the polarity-flipped product UI) and gives PathOwl the chance to show a serious-looking product surface without inheriting the "developer tool" connotation of a fully dark site.
- No textures, no abstract 3D, no gradient meshes in the hero. Those signal AI lab or design-tool startup — not insurance vendor. If you want surface interest, use the warm canvas plus a single thin hairline rule.

### Typography Hierarchy

| Role | Font | Size (desktop) | Weight | Line height | Letter spacing |
|---|---|---|---|---|---|
| H1 (hero) | Inter | 56px (3.5rem) | 600 | 1.05 | -0.025em |
| H2 (section) | Inter | 40px (2.5rem) | 600 | 1.15 | -0.02em |
| H3 (sub) | Inter | 24px (1.5rem) | 600 | 1.3 | -0.015em |
| H4 / eyebrow | Inter | 14px | 600, uppercase | 1.4 | 0.08em |
| Body large (lead) | Inter | 20px | 400 | 1.55 | -0.005em |
| Body | Inter | 17px | 400 | 1.65 | 0 |
| Body small | Inter | 15px | 400 | 1.55 | 0 |
| Caption / meta | Inter | 13px | 500 | 1.4 | 0.01em |
| Numeric / tabular | Inter | inherit | 500 | inherit | font-variant-numeric: tabular-nums |
| Pull quote / testimonial body | Source Serif 4 | 24px | 400 | 1.5 | 0 |

On mobile, scale H1 to 36-40px, H2 to 28-32px, body stays at 17px. Set `font-feature-settings: "cv11", "ss01", "ss03"` on the Inter root rule — this turns on the single-story a and disambiguated digits, the closest visual approximation to Söhne's stylistic signature.

### Logo Treatment

- Lock up the existing owl mark + "PathOwl" wordmark. Do not redesign the logo for pre-launch.
- Size: 28-32px tall in the top-left nav (small — the more confident the brand, the smaller the logo, per Stripe/Anthropic/Harvey). Never use the logo at the giant centered-hero size that the placeholder version used — that pattern reads as YC pre-launch teaser, not enterprise vendor.
- Color: Render the wordmark in Midnight Ink #0B1F3A on the light canvas. Render the owl mark in Midnight Ink with the optional forest accent only inside the eye or as a single internal detail (do not recolor the entire owl green).
- Dark inversion: When the logo sits on the Midnight Ink section band, render it in #F8F7F4 (canvas tone), not pure white.

### Reference Companies (in order of emulation priority)

1. **Stripe** (stripe.com) — Light canvas + ink body (#0A2540) + indigo accent (#635BFF) + Söhne thin display + dark dashboard inversion band. PathOwl clones the system, swaps indigo for forest green, swaps Söhne for Inter. The master pattern.
2. **Anthropic** (anthropic.com) — Warm off-white canvas, terracotta accent (#D97757), generous whitespace, serif moments. The "considered, academic, trustworthy" positioning PathOwl borrows.
3. **EvolutionIQ** (evolutioniq.com) — Direct adjacent competitor; light canvas, indigo navy base, mint-green accent (#00D08E). Proof that "navy + green accent on light" works for this exact buyer.
4. **Harvey** (harvey.ai) — Vertical AI selling to regulated, traditional professional services. Restrained, typographic, trust-led — the design language of "AI for professionals who are not technical and need to feel safe."
5. **Mitchell / Enlyte** (enlyte.com) — Direct claims-tech incumbent that PathOwl buyers know. Light + dark navy + lime-green accent. Validates the palette for the exact category.

PathOwl deliberately differentiates from Snapsheet (dark-on-dark, reads as B2C consumer claims app rather than enterprise vendor) and from Sierra/Decagon (cream + serif + dark inversion reads as "AI concierge for premium consumer brands" — wrong category signal).

---

## C. Evidence Base

### Vertical AI / industry-specific AI companies analyzed

**Harvey AI** (legal). Restrained typographic system, generous whitespace, near-black ink rather than full black, light canvas dominant. Public design philosophy explicit: "polish is synonymous with credibility." Closest reference for what PathOwl is trying to be.

**EvenUp** (legal/personal injury claims). Light canvas with deep blue primary, sans-serif, screenshot-heavy product proof, customer testimonials with named attorneys. Logos of law firms above the fold. Numeric proof points: "15x more cases in the same amount of time," "Cut 9+ hours of manual work per case." $150M Series E at $2B+ valuation. Enterprise vertical SaaS. PathOwl clones the numeric proof-point pattern.

**Abridge** (healthcare AI). Pentagram-designed identity with custom display typeface "Abridge Display" and positioning anchor "Taken care of." Refuses the "co-pilot/assistant" tropes. The takeaway for PathOwl is not the custom typeface (cost-prohibitive) but the positioning move: refuse to describe yourself as an AI tool, anchor on the outcome.

**Sierra AI / Decagon** (enterprise AI agents). Serif/serif-feel display type with dark backgrounds. Warm terracotta on cream (Sierra) or deeper purple/midnight gradient (Decagon). Customer rosters: premium consumer brands. Wrong category for PathOwl.

**Glean** (enterprise search). 2024 rebrand with Kallan & Co. Polysans typeface, bright dynamic palette with multiple tertiary accents. B2B enterprise trending consumer-friendly. For PathOwl's older, more conservative audience, Inter is more institutional.

**Hippocratic AI** (healthcare). Light canvas, conventional B2B SaaS layout, customer outcomes lead the hero. Enterprise SaaS playbook.

**Tractable** (insurance AI — direct competitor). Pentagram-designed identity. Vibrant electric blue palette with bespoke Pantone ink mix titled "Tractable Blue." Proprietary "Damage Signature" generative visual system. Closest competitive design reference. Tractable's electric blue is owned territory — PathOwl going forest green is partly a deliberate non-collision.

**Snapsheet** (claims AI — direct competitor). Near-black hero with bright orange CTA. Developer-tool / consumer-app crossover. Reads more like a fintech-mobile-app marketing site than an enterprise vendor.

**Five Sigma** (claims AI). Deep navy hero with bright cyan accent, conventional B2B SaaS layout. Quoted customer outcomes (35% claim-cost reduction, 60% cycle-time reduction).

**Hi Marley** (insurance communication). Light canvas, bright red logo accent. Customer quotes from carrier executives. Enterprise insurance vendor — light, friendly, conventional.

**Shift Technology** (insurance fraud). Deep indigo navy #24246E with persimmon orange accent #FF7353. Demonstrates navy + warm orange as a viable accent strategy.

**CLARA Analytics** (workers comp AI). Light canvas, sans-serif, conventional. Partnerships with Guidewire and Origami Risk. Enterprise B2B insurance.

**EvolutionIQ** (disability claims). Light canvas with deep indigo navy primary (#0D1179 / #050E49) and vivid mint/teal-green accent (#00D08E). Adopted by 70% of the top 15 U.S. disability carriers per public announcements. Acquired by CCC. The single closest brand reference for PathOwl. Same buyer, same positioning, proven palette of navy + saturated green accent on a light canvas.

### Established insurance / claims tech incumbents

| Vendor | Primary color | Headline font | Hero treatment |
|---|---|---|---|
| CCC Intelligent Solutions | Corporate blue | Sans-serif | Light/white |
| Guidewire | #00739D deep teal-blue | Sans-serif | Light/white |
| Duck Creek | #7AC143 lime green | Sans-serif | Light/white |
| Mitchell / Enlyte | Dark teal-navy + lime accent | Sans-serif humanist | Light hero, dark footer |
| Solera / Audatex | #180A48 midnight violet + #FFB132 | Sans-serif | Dark (recent rebrand) |
| Sapiens | #00B1EF cerulean | Sans-serif | Light/white |
| Insurity | #BBCEFF periwinkle + dark navy | Sans-serif | Dark navy |
| Snapsheet | Near-black + orange CTA | Sans-serif | Dark near-black |
| One Inc. | Blue | Sans-serif | Light/white |

Design conventions to borrow: Light canvas. Sans-serif. Generous whitespace. Customer outcome statistics above the fold. Carrier and TPA logos in a single grayscale strip. Numbered "How it works" diagram. Named-executive case-study attribution. A single dark inversion band for product UI.

Design conventions to deliberately differentiate from: Generic royal blue (everyone uses it). Stock illustrations of dashboards. Hero photography of people in suits shaking hands. Gradient meshes (reads AI startup). Custom paid display fonts (cost-prohibitive and not necessary at this stage).

### Color palette research conclusion
Of fifteen incumbents and adjacent AI companies analyzed, nine use a blue/navy primary, four use orange or coral accent, three use green, two use purple, one uses red. The single most-used primary color is some variant of corporate blue or deep navy. Going blue means going invisible.

Insurance trust colors (research-supported): Deep navy/indigo (trust, stability), forest/hunter green (growth, stability — Duck Creek, Mitchell accent), burgundy/oxblood (legal/financial heritage), charcoal (premium restraint).

AI category colors that PathOwl rejects: Electric blue (Stripe, Tractable), gradient violet/purple (Decagon, Sierra-adjacent), hot pink/magenta. These read "AI startup" — wrong category signal.

### Font research conclusion
Top 3 free font recommendations:

1. **Inter** — The universal recommendation. 90% visual similarity to Söhne. Used by Notion, Linear, Shopify. Variable font, tabular figures, stylistic sets. Reads institutional, not developer-tool.
2. **Geist Sans** — Slightly wider proportions, marginally better at very small sizes, but its association with Vercel / dev tools is a reputation risk. Backup only.
3. **IBM Plex Sans** — Reads "enterprise / regulated industry" more strongly than Inter. Slightly less modern. Reserve choice if PathOwl's audience research later suggests Inter feels "too startup."

Other evaluated: Source Sans 3 (reliable enterprise pairing, slightly sterile vs. Inter), DM Sans/Manrope/Sora/Plus Jakarta Sans (trend-leaning geometric, will age less well), Public Sans (excellent accessibility, slightly cold), Söhne/GT America (paid, $200-$800+, defer until Series A).

Single-font system: Inter as primary, Source Serif 4 only for occasional pull quotes and testimonial bylines. Do not introduce a third typeface.

---

## D. Pre-launch Implementation Guide
Replace the current deep-navy single-page with this layout. Code-ready specs:

**Tailwind config additions (`tailwind.config.ts`):**
```ts
theme: {
  extend: {
    colors: {
      ink: '#0B1F3A',
      canvas: '#F8F7F4',
      surface: '#FFFFFF',
      forest: '#1F4D3A',
      'forest-deep': '#163A2C',
      hairline: '#E6E4DE',
      slate: '#4A5568',
      muted: '#6B7280',
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      serif: ['Source Serif 4', 'ui-serif', 'Georgia', 'serif'],
    },
    fontSize: {
      'display': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '600' }],
      'h2': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
      'h3': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.015em', fontWeight: '600' }],
      'eyebrow': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '600' }],
      'lead': ['1.25rem', { lineHeight: '1.55', letterSpacing: '-0.005em' }],
      'body': ['1.0625rem', { lineHeight: '1.65' }],
      'small': ['0.9375rem', { lineHeight: '1.55' }],
      'caption': ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '500' }],
    },
  },
},
```

**Load fonts (`app/layout.tsx`):**
```tsx
import { Inter, Source_Serif_4 } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const serif = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif', display: 'swap' });
```

**Global CSS additions (`globals.css`):**
```css
html { font-feature-settings: "cv11", "ss01", "ss03"; }
.tabular { font-variant-numeric: tabular-nums; }
body { background: #F8F7F4; color: #0B1F3A; -webkit-font-smoothing: antialiased; }
```

**Pre-launch page structure:**
```
[Sticky nav, 64px tall, canvas BG, hairline border-bottom]
  - Left: owl mark + "PathOwl" wordmark @ 28px tall, ink color
  - Right: "Sign in" text link → app.pathowl.io

[Hero, ~80vh, generous padding (py-32 desktop / py-20 mobile)]
  - Eyebrow (forest, uppercase, tracking): "AGENTIC ADJUSTER FOR AUTO CLAIMS"
  - H1 (Inter 600, 56px, ink): "Close auto claims with the speed of AI
                                and the judgment of your best adjuster."
  - Lead (Inter 400, 20px, slate): One sentence naming IA firms, regional 
                                    carriers, TPAs.
  - Single CTA: "Request early access" → forest button (filled, optional 
                pill radius, 14px 24px padding, white text)
  - Secondary text link: "or email will@pathowl.io"

[Hairline divider]

[3-bullet "Built for" block, py-24]
  - "Independent adjuster firms"
  - "Regional auto carriers"
  - "TPAs handling auto claims"
  - Each with a 1-sentence benefit, Inter 17px slate

[Credibility line, py-16, center-aligned]
  - "Currently in private development with input from [N] independent 
    adjuster firms."
  - Use forest color only on the "private development" phrase

[Footer, ink BG, canvas text, py-16]
  - Copyright, "Privacy," "Terms" (gated for now), will@pathowl.io
```

This single page is shippable in 1-2 days. It signals legitimate, considered enterprise vendor immediately — the design contract PathOwl's buyers expect.

---

## E. Post-launch Evolution Roadmap

**Milestone 1 — Demo ready (August 10, 2026):**
- Add a /product page with a recorded 60-90 second walkthrough video
- Add a 3-step "How it works" diagram on the home page using hairline color for connectors and forest as the active-step accent
- Introduce one dark inversion band on the home page with a real product screenshot framed in bg-ink with text-canvas
- Add a /security page with SOC 2 status (even if pending), encryption details, audit logging, and data residency story

**Milestone 2 — First paying customer:**
- Replace the credibility line with a named customer logo above-the-fold and a single named-executive testimonial below
- Add a /customers page with one full case study: title + company of the executive, one hero metric, 2 short paragraphs, Source Serif 4 pull quote
- Add a 5-8 logo strip directly below the hero, grayscale, labeled "Trusted by"
- Begin a small Insights section — at minimum a quarterly post

**Milestone 3 — Multi-customer / Series A:**
- Introduce a "Solutions" mega-menu segmented by buyer (IA firms / Regional carriers / TPAs)
- Add a /pricing page gating pricing behind "Talk to sales" but listing feature tiers (Starter / Growth / Enterprise)
- Add a resources hub: webinars, whitepapers, ROI calculator
- Consider introducing a single second accent color (burnished copper #A26B3A) for "premium" tier framing or featured-customer call-outs

**Milestone 4 — Scale (Series B+ / $10M+ ARR):**
- Consider licensing a paid display typeface (Söhne, GT America, or commissioned custom) for the headline tier only — but only if Inter has clearly become a liability rather than a neutral baseline
- Engage a brand studio (Pentagram, Basement, Geist Studio, or Athletics) for a comprehensive rebrand if the buyer audience has evolved upmarket
- Maintain restraint as the design discipline — at scale, the brands that look most credible to traditional buyers are the ones that did less, not more

---

## F. Caveats and Reversibility
The forest green accent is the single most reversible choice in this system. If A/B testing post-launch shows the green accent is hurting conversion vs. a more conventional navy-blue accent, switching costs are low (one Tailwind theme token change). The light canvas, ink type color, Inter typography, and overall layout discipline are higher-conviction calls and should not be reversed without strong evidence.

All recommended fonts (Inter, Source Serif 4, Geist, IBM Plex) are SIL OFL-1.1 and cleared for commercial web and app use without royalty.

This document supersedes any prior PathOwl design decisions. Before any visual decision that contradicts this system, the question to ask is: "Does this advance the locked design language, or does it expand scope?" Expansion requires deliberate reconsideration of this document, not a casual override.
