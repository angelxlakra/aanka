# Aanka — Source of Truth

> **Name:** **Aanka** — /ˈaːn.kaː/ · आँका. A coined name, rooted in *aankda* (figures) and *aankna* (to gauge). It sounds like a word you already know, yet nobody owns it — a clean, global, trademarkable home for everything we build. *(Formerly working-titled "SalonIQ".)*
> **One-liner:** An AI business analyst for Indian salon owners, delivered entirely through WhatsApp.
> **Tagline:** *Your business, figured out.* (alt: *Stop guessing. Start knowing.*)
> **Document purpose:** Single source of truth for partners, collaborators, and AI coding agents (e.g. Claude Code). Read this first before building, pitching, or onboarding.
> **Last updated:** June 2026
> **Maintainer:** Angel Lakra (Founder) — salon owner-operator, full-stack engineer (React/Next.js + Python/FastAPI)
>
> **Note on names:** *Aanka* is the product (the WhatsApp AI analyst). *SalonOS* is the founder's existing salon-management software (POS, appointments, packages) — an unchanged, separate name and the eventual deep data source.

---

## 1. The One-Paragraph Pitch

India has roughly 8 million salons. 95%+ are unorganized — run on paper registers, WhatsApp, and the owner's memory. They have no data layer and no business intelligence. Aanka gives every salon owner an AI analyst on WhatsApp that tells them how their business is doing, why, and what to do next — in Hindi or English. It works whether the salon has full software or just types its daily revenue into a chat. We start with the owner-operator who already thinks about their numbers, prove value with a weekly report, then deepen into an always-on conversational analyst and proactive alerts. The founder owns two salons and built the underlying software (SalonOS), giving domain expertise and a live testbed that outside founders cannot replicate.

---

## ✦ Brand & Identity

The full identity lives as interactive pages in this repo (`/app/page.tsx` = identity, `/app/finalists` + `/app/lookbook` = naming exploration). Summary:

### Name
**Aanka** · /ˈaːn.kaː/ · आँका — coined from *aankda* (figures) and *aankna* (to gauge). Sounds like a real Hindi word ("numbers, understood") but is ownable, trademarkable, and globally pronounceable. A blank canvas we define. *Watch-out:* coined words need marketing fuel to teach their meaning.

### The mark
An **A built as a rising peak** (growth), crossbar tilted upward, with a **dot above the apex** — the moment of clarity, the figure gauged. Reusable React component at `components/AankaMark.tsx`. Works as a standalone glyph or in the `Aanka.` wordmark (the dot is brand-colored).

### Palette
| Token | Value | Role |
|---|---|---|
| Ink | `#1B1A22` | Primary text / dark surfaces |
| Plum | `oklch(0.52 0.13 330)` | Primary brand color |
| Gold | `oklch(0.78 0.14 70)` | Accent — the "figured-out" spark, used sparingly |
| Growth | `oklch(0.62 0.13 165)` | Positive / up / money-in |
| Cream | `#FAF7F2` | Warm background (keeps it human, not fintech) |

Dark enough to read premium, warm enough to feel human.

### Type
- **Space Grotesk** — UI, numbers, buttons, and the wordmark. Geometric but warm; reads as a modern *Indian* product, not a Western clone.
- **Instrument Serif** — editorial only: taglines, hero lines, big moments. One serif line on a screen of sans makes the brand feel considered.

### Voice (in WhatsApp)
Warm Hinglish, never robotic. Three rules:
1. **Number first, always** — open with the figure that matters.
2. **One insight, one action** — notice one thing, suggest one move, make it a yes/no.
3. **Hinglish, like a partner** — the way owners think; never corporate, never a robot reading a report.

> *"Maine aapka mahina aanka — ₹2.4L, margin 38%. Color services se sabse zyada."*
>
> *"Aanka isn't a dashboard you check. It's the partner that already checked."*

---

## 2. The Problem

Salon owners in India operate almost blind:

- **No visibility:** They rarely know exact weekly revenue, which staff perform best, or why a slow week happened.
- **No tooling that fits:** Existing software (Vyapar, Zenoti, Fresha) solves *digitization* — moving from paper to screens. It assumes the owner will learn and operate software. Most won't.
- **The owner IS the operator:** They're also the receptionist, the cashier, the HR manager. They have no time to log into a dashboard and read charts.
- **Language barrier:** Tools are English-first. Many owners think and communicate in Hindi.

**The core insight:** Salon owners don't want software. They want *decisions*. They want someone to tell them "Wednesday was slow, run a mid-week offer" — without learning anything new.

---

## 3. The Market

| Metric | Value |
|---|---|
| Salons in India | ~8 million |
| Share unorganized | 95%+ |
| Typical owner-operated salon revenue | ₹1.5L–5L / month |
| Existing AI-native BI players for this segment | Effectively none |
| Theoretical TAM at ₹1,499/mo full penetration | ~₹12,000 Cr ARR (~$1.4B) |

**Why it's open right now:**
- LLMs only recently became good and cheap enough to do nuanced business reasoning + Hindi understanding at viable unit economics.
- The problem is too small/local/unglamorous for foundation-model and enterprise-AI founders to chase.
- Building it well requires *being* Indian and ideally *being* a salon owner — assumptions a San Francisco founder gets wrong.
- Distribution runs through salon-owner word of mouth and local beauty-supply distributors — relationships, not ad spend.

**The moat is not the idea.** It's: existing customers, accumulated salon data across many businesses, domain knowledge, and local distribution relationships built over the next 12 months.

---

## 4. The Product — Three Layers, One WhatsApp Number

Everything lives inside a single WhatsApp number. Three capability layers, built in sequence.

### Layer 1 — The Monday Report *(entry point, build first)*
Automated weekly summary, pushed every Monday. No interaction required.

> 🗓️ Weekly Summary — [Salon Name]
> Revenue: ₹52,400 (↑12% vs last week)
> Best day: Saturday · Top service: Hair smoothening
> Staff MVP: Priya (23 services)
> 💡 Wednesday was slowest — consider a mid-week offer.

Purpose: builds the habit of reading Aanka's insights. This is what closes the first sale.

### Layer 2 — The Chatbot *(power feature, build second)*
Owner asks anything, anytime, Hindi or English.

> Owner: *"Aaj kitna hua?"*
> Bot: *"Aaj ₹8,200 — 14 appointments. Best Tuesday this month."*
>
> Owner: *"Priya vs Ritu is month?"*
> Bot: *"Priya: 89 services, ₹41,200. Ritu: 67 services, ₹28,900. Priya averages higher-ticket services."*

Purpose: makes the product feel like a 24/7 business analyst on call. This is where stickiness and "magic" live.

### Layer 3 — Proactive Alerts *(retention feature, build third)*
System surfaces things before the owner asks.

> ⚠️ Revenue 34% below last Tuesday at this time — only 3 bookings vs usual 11. Want a flash-offer draft for your regulars?
>
> 👋 Riya hasn't visited in 47 days (usual cycle: 3 weeks). Send a reminder?

Purpose: makes Aanka irreplaceable. The owner stops imagining running the salon without it.

**Build rule:** Ship Layer 1, get a paying customer, *then* build Layer 2. Real customer feedback shapes Layer 2 better than any upfront plan.

---

## 5. Data Architecture — Designed for Messy Reality

The product must work at every level of data completeness. **Design for the lowest tier; delight at the highest.**

| Tier | Data Source | What Owner Does | Insight Depth | Price |
|---|---|---|---|---|
| **1** | Manual | Types daily revenue into WhatsApp | Revenue trends, basic recommendations | ₹499/mo |
| **2** | Partial SalonOS | Logs sales (not appointments) | + service-mix & package analysis, staff revenue attribution | ₹999/mo |
| **3** | Full SalonOS | Logs everything incl. appointments | + peak-hour, staff performance, no-shows, retention insights | ₹1,999/mo |

**Strategic point:** Appointment-level insight is the long-term moat (competitors can't easily copy it once data compounds across hundreds of salons) — but it is **not** required on day one. The AI report itself becomes the tool that *pulls* owners toward proper data logging: when the bot says *"can't tell you staff performance — appointments weren't logged,"* the owner makes staff log them. The AI creates the adoption pressure.

---

## 6. Technical Architecture *(for Claude Code / engineers)*

### High-level flow
```
WhatsApp Business API (Twilio to start, Meta direct at scale)
        │
        ▼
Python backend (FastAPI)
        │
   ┌────┴────┐
   ▼         ▼
SalonOS DB   Manual input
(Supabase/   (WhatsApp message
 Postgres)    parsing)
   └────┬────┘
        ▼
  Data aggregation layer  ──►  weekly/daily metrics
        │
        ▼
  Claude API (Anthropic)  ──►  reasoning + natural language (Hindi/English)
        │
        ▼
  Response back to WhatsApp
```

### Stack
| Concern | Choice | Notes |
|---|---|---|
| Backend | Python + FastAPI | Founder already uses this; ideal for LLM orchestration |
| DB | Supabase (Postgres) | SalonOS already on this stack |
| LLM | Claude API (`claude-sonnet-4-6` class) | Reasoning + bilingual generation |
| Messaging | WhatsApp Business API via Twilio | Start with sandbox, then BYON Indian SIM |
| Scheduling | Cron / scheduled job | For the Monday report push |

### WhatsApp number — key facts (verified June 2026)
- Use **BYON** (Bring Your Own Number): register a fresh **Indian (+91) SIM** as the WhatsApp sender via Twilio. A +91 number builds local trust.
- The SIM **must not already be registered on personal WhatsApp** — buy a dedicated business SIM.
- Use Twilio **Self Sign-up** for a small number of senders (not the bulk Senders API).
- WhatsApp is **fully two-way** in India (unlike SMS, which is outbound-only) — this is *why* the chatbot works on WhatsApp.
- Be aware of India **DLT / TRAI** compliance and Meta business-name verification (PAN, proof of registration). Stricter for SMS, but plan for Meta's review on WhatsApp Business.
- For dev/testing today: use Twilio's **WhatsApp Sandbox** — full flow testable before formal registration.

### Unit economics (per salon / month)
| Item | Cost |
|---|---|
| Claude API | ~₹50–100 |
| WhatsApp API | ~₹50 |
| **Total cost** | **~₹150** |
| Price (Tier 2) | ₹999 |
| **Gross margin** | **~85%** |

### Build sequence (8-week sprint plan)
- **Sprint 1 (wk 1–2):** Twilio WhatsApp setup · connect SalonOS Supabase · data aggregation layer · Monday report (hardcoded format, no AI yet).
- **Sprint 2 (wk 3–4):** Replace hardcoded report with Claude-generated summary · reply-to-report context · basic revenue/staff Q&A · Hindi + English.
- **Sprint 3 (wk 5–6):** Full conversational flow · intent detection · session memory · graceful unknown-question handling.
- **Sprint 4 (wk 7–8):** Anomaly detection (revenue drop / slow day) · customer-return alerts · stock/package alerts · per-owner alert configuration.

---

## 7. Business Model

```
Free trial (2 weeks)
      │
      ▼
₹499/mo   — Tier 1: WhatsApp AI reports, manual data
      │
      ▼
₹999/mo   — Tier 2: + SalonOS sales logging, deeper insights
      │
      ▼
₹1,999/mo — Tier 3: Full SalonOS + AI reports + auto data + alerts
```

SalonOS is positioned as an **upsell**, not a barrier to entry. The Monday report earns the right to sell SalonOS later: once an owner has read 6 weeks of reports, they *want* the deeper, automatic version.

---

## 8. Go-to-Market

### Ideal first customer (the first 5)
Score each prospect 1–3 on every row. Target 11–15. Avoid below 8.

| Criteria | 1 | 2 | 3 |
|---|---|---|---|
| Revenue volume | <₹1L/mo | ₹1–3L/mo | ₹3L+/mo |
| Numbers awareness | None | Some | Active tracker |
| Owner-operated | Manager runs it | Owner sometimes present | Owner daily present |
| Current frustration | Happy w/ status quo | Mild pain | Actively frustrated |
| Openness to feedback | Passive | Somewhat engaged | Asks lots of questions |

**The single best filter question:** *"Aapko pata hai last month aapka exact revenue kya tha?"* — if they know the number even roughly, they're a customer. If they shrug, move on.

### Distribution channels (priority order)
1. **People the founder already knows** — salon owners met personally / via own operations. One phone call. Highest conversion.
2. **Own salon's network** — staff and product suppliers know other owners. Ask suppliers who's the most serious owner.
3. **Local beauty-supply stores** — a distributor visits 20–30 salons/week; one relationship = many warm intros.

### First pitch (in person, on the phone — not a cold WhatsApp)
> *"Bhai, main ek cheez bana raha hoon jo har Monday tumhare salon ki full report WhatsApp pe bhejega — revenue, staff, kahan paise gaye. ₹499/month. Pehle 3 logo ko free trial dunga. Interest hai?"*

No "AI," no "SaaS," no jargon. Just the Monday message.

---

## 9. Current State (as of June 2026)

- **SalonOS:** Built and live in the founder's two salons. Core modules done incl. packages & bundles. Appointments module exists but **not yet actively used** by staff.
- **Immediate internal task:** Drive daily SalonOS adoption in the founder's own salons (diagnose the #1 non-adoption blocker by *watching* staff, fix that one thing, then enforce usage). The founder's own salons are the live proof for external sales — that proof must be real before charging strangers.
- **Runway:** Under 3 months. → **This shapes everything: charge from day one, sell while building, do not wait for perfection.**
- **Founder bandwidth:** ~20 hrs/week (reducing Chain Labs contract work).

---

## 10. 90-Day Plan

**Month 1 — Validate & charge.** Build the "demo that sells" (Monday report on existing data). Get **5 paying salons** (not 50) at ₹499/mo founding price. Pitch in person.

**Month 2 — Retain & expand.** Don't add features. Talk to the 5 customers weekly. The one metric that matters: *do they pay month 2 without being asked?* Target: 5 retained + 5 in pipeline, ₹5–10K MRR.

**Month 3 — Funding conversation.** With ~10 paying salons + 60 days retention, approach early-stage Indian VCs. Pitch: *"I own 2 salons, built the software myself, 10 paying customers at ₹999/mo, 0 churn in 60 days, 8M-salon market with no AI layer."*

### Funding targets (in likely-fit order)
1. **Bootstrap to ~₹10L MRR first** — strongest position; every Indian VC takes the call.
2. **100X.VC** — writes early cheques at exactly this stage; pre-traction OK.
3. **Surge (Peak XV / ex-Sequoia India)** — backs India/SEA founders; receptive to India SMB.
4. **Blume / Venture Highway** — early-stage Indian VCs who understand SMB GTM timelines.
5. **YC** — a *destination*, not a starting point. Apply later from traction, not hope. Reframe narrative from "salon software" to "AI business brain for India's 8M unorganized salons."

---

## 11. Do-Not-Do List (first 90 days)
- ❌ Don't redesign SalonOS.
- ❌ Don't build a marketing website yet.
- ❌ Don't incorporate a company yet.
- ❌ Don't post on LinkedIn about "building something exciting."
- ❌ Don't add features until customers ask.
- ❌ Don't quit the day contract until ~₹50K MRR.
- ❌ Don't chase perfect data — design for Tier 1 (manual) from the start.

---

## 12. Key Decisions Already Made
- **Channel:** WhatsApp-native (not an app, not a dashboard).
- **Wedge:** Monday report first, chatbot second, proactive alerts third.
- **Data philosophy:** Works on messy/manual data; SalonOS is an upsell, not a prerequisite.
- **First-customer strategy:** 5 hand-picked owner-operators who already think in numbers.
- **Messaging infra:** Twilio + BYON Indian SIM to start; revisit Meta-direct at scale.
- **Pricing:** ₹499 / ₹999 / ₹1,999 tiers mapped to data depth.

---

## 13. Open Questions / To Resolve
- What is the #1 reason staff aren't using the SalonOS appointments module? (Diagnose by observation.)
- Co-founder: solo for now, but most accelerators prefer a 2-person team — worth identifying a partner.
- Exact Hindi/Hinglish handling quality at Tier 1 — needs real-world testing.
- Collections/churn risk with Indian SMBs — monitor closely from the first cohort.
- When to migrate Twilio → Meta-direct (cost crossover point, ~50–100 salons).

---

## 14. Glossary
- **SalonOS** — The founder's existing salon management software (POS, appointments, packages/bundles). The eventual deep data source.
- **BYON** — "Bring Your Own Number": registering a non-Twilio phone number as a WhatsApp sender.
- **DLT / TRAI** — India's telecom regulatory framework for business messaging compliance.
- **MRR / ARR** — Monthly / Annual Recurring Revenue.
- **ACV** — Annual Contract Value.
- **Tier 1/2/3** — Aanka's data-completeness levels (manual → partial → full SalonOS).

---

*This is a living document. Update Sections 9, 10, and 13 as reality changes. When sharing with an AI coding agent, point it to Sections 4, 5, and 6 first.*
