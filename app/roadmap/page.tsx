"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AankaMark } from "@/components/AankaMark";

const SANS = "var(--font-sans)";
const SERIF = "var(--font-serif)";

const INK = "#1B1A22";
const CREAM = "#FAF7F2";
const PLUM = "oklch(0.52 0.13 330)";
const PLUM_SOFT = "oklch(0.97 0.015 330)";
const GOLD = "oklch(0.78 0.14 70)";
const GROWTH = "oklch(0.55 0.12 165)";
const MUTE = "#8A8076";
const BODY = "#57524B";
const MONO = "ui-monospace, SFMono-Regular, Menlo, monospace";

/* ------------------------------------------------------------------ */
/*  Roadmap data — the dev journey. You build; Claude Code only helps  */
/*  when you're stuck. Each task tells you what, why, what to learn,   */
/*  where to read, and a prompt to use if you hit a wall.              */
/*                                                                     */
/*  Guiding architecture: Aanka stands alone. Its spine is its OWN     */
/*  Supabase model. SalonOS (via the central-db) is just ONE optional  */
/*  connector. A salon with no software is a first-class citizen.      */
/* ------------------------------------------------------------------ */

type Doc = { label: string; href: string };
type Task = {
  id: string;
  title: string;
  what: string;
  why: string;
  learn: string[];
  docs: Doc[];
  stuck: string;
};
type Phase = {
  id: string;
  num: string;
  weeks: string;
  title: string;
  goal: string;
  accent: string;
  tasks: Task[];
};

const PHASES: Phase[] = [
  {
    id: "p0",
    num: "00",
    weeks: "Before Sprint 1",
    title: "Foundations — Aanka's spine",
    goal: "aanka-api runs, Aanka's OWN data model exists in Supabase, and the service is reachable. No data source yet — just the independent backbone that every connector will feed.",
    accent: PLUM,
    tasks: [
      {
        id: "p0-api",
        title: "Get aanka-api running with a /health route",
        what: "You already have ~/dev/aanka-api. Install fastapi + uvicorn and serve a `GET /health` returning `{\"ok\": true}`.",
        why: "This service is Aanka's spine — it owns all the logic and is independent of SalonOS. Everything hangs off it. One live route proves the environment before any real work.",
        learn: ["virtualenvs (uv)", "ASGI / uvicorn", "FastAPI route basics"],
        docs: [
          { label: "FastAPI — First Steps", href: "https://fastapi.tiangolo.com/tutorial/first-steps/" },
          { label: "uv (package/venv manager)", href: "https://docs.astral.sh/uv/" },
        ],
        stuck: "Ask me: \"My uvicorn server won't start — here's the error. Explain what's wrong before suggesting a fix.\"",
      },
      {
        id: "p0-env",
        title: "Handle secrets with a .env file",
        what: "Add `python-dotenv`, create `.env` (git-ignored) with placeholders for Twilio, Supabase, Anthropic, and (later) the central-db read-only user. Load at startup; never hard-code a key.",
        why: "You'll juggle several keys across two databases. Doing secrets right on day one avoids leaking one into git later.",
        learn: ["environment variables", ".gitignore", "12-factor config"],
        docs: [
          { label: "python-dotenv", href: "https://github.com/theskumar/python-dotenv" },
          { label: "Pydantic Settings", href: "https://docs.pydantic.dev/latest/concepts/pydantic_settings/" },
        ],
        stuck: "Ask me: \"Explain dotenv loading order and why my env var is None.\"",
      },
      {
        id: "p0-model",
        title: "Build Aanka's own data model in Supabase",
        what: "Create Aanka's Supabase project and two core tables: `salons` (salon_id, owner_phone, tier, data_source, central_store_id) and `daily_metrics` (salon_id, date, revenue_paise, bills_count, source). This is the unified shape every connector fills.",
        why: "This is what keeps Aanka independent. The report and chatbot read ONLY these tables — so they never depend on whether a salon has SalonOS. `data_source` is the routing switch; `central_store_id = NULL` means 'standalone Aanka customer'.",
        learn: ["schema design", "the routing column pattern", "money as integer paise"],
        docs: [
          { label: "Supabase — Tables", href: "https://supabase.com/docs/guides/database/tables" },
          { label: "Postgres data types", href: "https://www.postgresql.org/docs/current/datatype.html" },
        ],
        stuck: "Ask me: \"Review my salons + daily_metrics schema — does it cleanly support BOTH a manual salon and a SalonOS salon with no changes to the report code?\"",
      },
      {
        id: "p0-ngrok",
        title: "Expose localhost with ngrok",
        what: "Run ngrok to get a public HTTPS URL that tunnels to your local FastAPI. Hit `/health` from the public URL on your phone.",
        why: "Twilio's WhatsApp webhook must reach your machine during dev. ngrok is the standard way without deploying.",
        learn: ["webhooks", "HTTP tunneling", "public vs local URLs"],
        docs: [{ label: "ngrok — Getting started", href: "https://ngrok.com/docs/getting-started/" }],
        stuck: "Ask me: \"Explain what ngrok does and why Twilio can't reach localhost directly.\"",
      },
    ],
  },
  {
    id: "p1",
    num: "01",
    weeks: "Sprint 1 · wk 1–2",
    title: "Standalone Aanka — manual in, Monday report out",
    goal: "A salon with ZERO software texts its daily numbers and gets a real Monday report. This whole path touches no SalonOS, no central-db, no VPS — proving Aanka stands on its own. This is what you sell first.",
    accent: GROWTH,
    tasks: [
      {
        id: "p1-twilio",
        title: "Twilio WhatsApp Sandbox — send your first message",
        what: "Create a Twilio account, activate the WhatsApp Sandbox, join from your phone, and send yourself a 'Hello from Aanka' from a Python script.",
        why: "The Sandbox tests the full WhatsApp flow today, before the BYON +91 number and Meta verification.",
        learn: ["Twilio Messaging API", "WhatsApp Sandbox join code", "sending in Python"],
        docs: [
          { label: "Twilio WhatsApp Quickstart (Python)", href: "https://www.twilio.com/docs/whatsapp/quickstart/python" },
          { label: "WhatsApp Sandbox", href: "https://www.twilio.com/docs/whatsapp/sandbox" },
        ],
        stuck: "Ask me: \"My Twilio message returns error code 63007 — explain what it means.\"",
      },
      {
        id: "p1-webhook",
        title: "Receive an inbound message (webhook)",
        what: "Add a `POST /whatsapp` route. Point the Twilio Sandbox 'when a message comes in' webhook at your ngrok URL. Log whatever the owner texts.",
        why: "Two-way is why WhatsApp works for Aanka. Receiving is the foundation for both the manual connector and the chatbot.",
        learn: ["form-encoded webhook payloads", "Twilio request signature", "TwiML reply"],
        docs: [
          { label: "Twilio — receiving WhatsApp", href: "https://www.twilio.com/docs/whatsapp/tutorial/requesting-and-accepting-a-whatsapp-invitation" },
          { label: "FastAPI — Request Forms", href: "https://fastapi.tiangolo.com/tutorial/request-forms/" },
        ],
        stuck: "Ask me: \"Twilio says my webhook returned 500 — here's my route and the log. Help me read it.\"",
      },
      {
        id: "p1-manual",
        title: "The manual connector — parse text → daily_metrics",
        what: "Parse a message like 'aaj 8200 hua, 14 customers' into structured fields and upsert a `daily_metrics` row with `source='manual'`. Simple parsing first; Claude-assisted parsing comes later.",
        why: "This is the manual connector — the adapter that lets ANY salon use Aanka with no software. It's the wedge to all 8M salons, and it writes the SAME table SalonOS will later fill.",
        learn: ["parsing free text", "Pydantic validation", "upsert on (salon_id, date)"],
        docs: [
          { label: "Pydantic models", href: "https://docs.pydantic.dev/latest/concepts/models/" },
          { label: "Supabase — Upsert", href: "https://supabase.com/docs/reference/python/upsert" },
          { label: "Postgres ON CONFLICT", href: "https://www.postgresql.org/docs/current/sql-insert.html#SQL-ON-CONFLICT" },
        ],
        stuck: "Ask me: \"Owner typed an ambiguous amount — how should Aanka confirm before saving? Show the conversation design.\"",
      },
      {
        id: "p1-agg",
        title: "Aggregation layer — read the week from daily_metrics",
        what: "Functions that read `daily_metrics` for one salon: weekly revenue, vs prior week, best day. Reads Aanka's own table only — source-agnostic.",
        why: "Because it reads the unified table, this exact code works later for SalonOS salons too. Write the aggregation once; never branch on data source.",
        learn: ["SQL aggregates", "week boundaries", "IST (Asia/Kolkata) timezone"],
        docs: [
          { label: "Postgres aggregate functions", href: "https://www.postgresql.org/docs/current/functions-aggregate.html" },
          { label: "Postgres date/time functions", href: "https://www.postgresql.org/docs/current/functions-datetime.html" },
        ],
        stuck: "Ask me: \"My weekly-revenue query is off by a day at week boundaries — explain the timezone bug.\"",
      },
      {
        id: "p1-template",
        title: "Compose the Monday report (template string)",
        what: "Turn the weekly metrics into the exact Monday-report format from the Source of Truth (revenue, vs last week, best day, one tip). Pure Python f-string — no AI yet.",
        why: "Proving the format with a template first means Phase 2 is just 'swap the string-builder for Claude' — a safe, tiny change.",
        learn: ["f-strings", "formatting ₹ from paise", "WhatsApp message limits"],
        docs: [{ label: "Python f-strings", href: "https://docs.python.org/3/reference/lexical_analysis.html#f-strings" }],
        stuck: "Ask me: \"Review my report template against the Source of Truth format — what's missing?\"",
      },
      {
        id: "p1-cron",
        title: "Schedule the Monday 9am push",
        what: "Use APScheduler to run aggregate→template→send every Monday morning, for every salon, to its owner's number.",
        why: "Automation is the product. A report you trigger by hand isn't the Monday habit you're selling.",
        learn: ["cron expressions", "scheduled jobs", "scheduling in IST"],
        docs: [
          { label: "APScheduler", href: "https://apscheduler.readthedocs.io/en/3.x/" },
          { label: "crontab.guru", href: "https://crontab.guru/" },
        ],
        stuck: "Ask me: \"My APScheduler job fires at the wrong hour — explain how it handles timezones.\"",
      },
    ],
  },
  {
    id: "p2",
    num: "02",
    weeks: "Sprint 2 · wk 3–4",
    title: "Claude writes the report",
    goal: "The Monday report is generated by Claude in warm Hinglish, and the owner can reply to ask a basic follow-up. Still 100% the standalone manual path — sellable today.",
    accent: PLUM,
    tasks: [
      {
        id: "p2-key",
        title: "Call Claude from Python",
        what: "Get an Anthropic API key, install the SDK, send a Messages API call, print the response.",
        why: "This is the reasoning + bilingual engine. One successful call proves the integration before wiring it into the pipeline.",
        learn: ["Messages API", "system vs user messages", "the Anthropic Python SDK"],
        docs: [
          { label: "Claude API — Get started", href: "https://docs.anthropic.com/en/docs/get-started" },
          { label: "anthropic-sdk-python", href: "https://github.com/anthropics/anthropic-sdk-python" },
        ],
        stuck: "Ask me: \"Explain the difference between the system prompt and a user message for my report use-case.\" (Also: confirm the current best model id for this — don't assume.)",
      },
      {
        id: "p2-summary",
        title: "Replace the template with Claude",
        what: "Pass the weekly metrics to Claude with a prompt describing Aanka's voice (number first, one insight, one action). Let Claude write the report.",
        why: "Claude turns flat numbers into the insight + recommendation that makes the report feel like an analyst, not a spreadsheet.",
        learn: ["prompt engineering", "passing structured data into a prompt", "controlling tone/length"],
        docs: [{ label: "Prompt engineering overview", href: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" }],
        stuck: "Ask me: \"My report prompt rambles and ignores the 'one action' rule — help me tighten the system prompt.\"",
      },
      {
        id: "p2-lang",
        title: "Bilingual: Hindi / English / Hinglish",
        what: "Match the brand voice — warm Hinglish like the Source-of-Truth examples ('Maine aapka hafta aanka…'). Test it reads naturally to a Hindi-first owner.",
        why: "Language fit is the moat against English-first tools. The Hinglish voice IS the brand.",
        learn: ["multilingual prompting", "code-switching (Hinglish)", "few-shot examples"],
        docs: [{ label: "Use examples (multishot)", href: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/multishot-prompting" }],
        stuck: "Ask me: \"My Hinglish sounds robotic — give me 3 example messages in Aanka's voice to use as few-shot.\"",
      },
      {
        id: "p2-reply",
        title: "Reply-to-report with context",
        what: "When the owner replies to the Monday report, pass that report + their question back to Claude so the answer has context.",
        why: "First taste of the chatbot. Context-aware replies make the report feel alive, not one-way.",
        learn: ["conversation history", "passing prior messages", "context windows"],
        docs: [{ label: "Messages API — multi-turn", href: "https://docs.anthropic.com/en/api/messages" }],
        stuck: "Ask me: \"How should I store and pass the last report so a follow-up reply has context?\"",
      },
    ],
  },
  {
    id: "p3",
    num: "03",
    weeks: "Parallel track · your own salons",
    title: "The SalonOS connector (optional, deeper data)",
    goal: "Plug your own SalonOS salons in by reading the central-db analytics warehouse. It fills the SAME daily_metrics table — so a manual salon 'upgrades' with one field flip and the report code never changes. Aanka already sells without this; it's the depth upsell.",
    accent: GOLD,
    tasks: [
      {
        id: "p3-reader",
        title: "Create a read-only user on central-db",
        what: "On the central Postgres (Hetzner VPS), create a scoped read-only role for Aanka — mirror the existing `metabase_reader`, but grant SELECT on `analytics.*` plus `public.store_daily_metrics` and `public.customers`.",
        why: "Aanka reads central-db like a second Metabase. Read-only + scoped means an experimental customer-facing bot can never harm live salon operations.",
        learn: ["Postgres roles & GRANT", "least privilege", "schemas"],
        docs: [
          { label: "Postgres — GRANT", href: "https://www.postgresql.org/docs/current/sql-grant.html" },
          { label: "Postgres — Database roles", href: "https://www.postgresql.org/docs/current/user-manag.html" },
        ],
        stuck: "Ask me: \"Help me write the GRANT statements for a read-only Aanka user scoped to the analytics schema + two public tables.\"",
      },
      {
        id: "p3-net",
        title: "Give aanka-api network access to central-db",
        what: "central-db is NOT internet-exposed (Docker-internal only). For dev, SSH-tunnel via your `efs-central-ssh` key. For prod, add aanka-api as a service in the central `docker-compose.yml` so it reaches `postgres` on the internal network and reuses Caddy for the webhook's TLS.",
        why: "It's the only correct way to reach a DB that's locked to the Docker network. Co-locating also gives the WhatsApp webhook free HTTPS via your existing Caddy.",
        learn: ["Docker networks", "docker-compose services", "SSH tunneling", "Caddy reverse proxy"],
        docs: [
          { label: "Docker Compose", href: "https://docs.docker.com/compose/" },
          { label: "Caddy docs", href: "https://caddyserver.com/docs/" },
          { label: "SSH tunneling", href: "https://www.ssh.com/academy/ssh/tunneling/example" },
        ],
        stuck: "Ask me: \"Explain how to add aanka-api to an existing docker-compose so it can reach the postgres service on the internal network.\"",
      },
      {
        id: "p3-connector",
        title: "The SalonOS connector — analytics → daily_metrics",
        what: "A job that reads `analytics.daily_revenue` from central-db and upserts the SAME `daily_metrics` shape with `source='salonos'`, mapping `central_store_id` → `salon_id`. Money is already integer paise.",
        why: "The second adapter. It fills the same table as the manual connector, so the report and chat code don't change one line. That's the separation, proven.",
        learn: ["ETL basics", "mapping store_id → salon_id", "idempotent upsert", "scheduling after the 22:10 restore"],
        docs: [
          { label: "psycopg 3", href: "https://www.psycopg.org/psycopg3/docs/" },
          { label: "Postgres materialized views", href: "https://www.postgresql.org/docs/current/rules-materializedviews.html" },
        ],
        stuck: "Ask me: \"How do I schedule the SalonOS connector to run AFTER central's 22:10 restore completes, not before?\"",
      },
      {
        id: "p3-upgrade",
        title: "The upgrade path — flip a salon manual → salonos",
        what: "Change `salons.data_source` from 'manual' to 'salonos' and set `central_store_id`. Confirm the report now pulls deeper data with ZERO changes to report code.",
        why: "This is your upsell, mechanically. A one-field switch deepens insights — the Source of Truth's '6 weeks of reports → they want the deep version', made real.",
        learn: ["config-driven routing", "backfilling history", "avoiding double-counting"],
        docs: [{ label: "Supabase — Update", href: "https://supabase.com/docs/reference/python/update" }],
        stuck: "Ask me: \"After flipping a salon to salonos, both connectors might write the same day — how do I prevent double-counting?\"",
      },
      {
        id: "p3-today",
        title: "Live 'today' — read store_daily_metrics",
        what: "For 'aaj kitna hua?', read `public.store_daily_metrics` (pushed every 5 min + after each bill) instead of the nightly views.",
        why: "Solves freshness — the chatbot answers 'today' without waiting for the 22:10 restore. Two sources, two freshness needs, both already exist in central.",
        learn: ["choosing source per question", "near-real-time vs nightly", "as_of timestamps"],
        docs: [{ label: "Postgres — SELECT", href: "https://www.postgresql.org/docs/current/sql-select.html" }],
        stuck: "Ask me: \"When should Aanka read store_daily_metrics vs analytics.daily_revenue? Help me write the rule.\"",
      },
      {
        id: "p3-views",
        title: "(Central-side) finish staff_performance + a top-services view",
        what: "On central, complete the stubbed `analytics.staff_performance` view and add a services/bill_items view, so the report can name a top service and a staff MVP.",
        why: "Revenue and best-day work today; 'top service' and 'staff MVP' need these cross-store views finished. This is central-side work — not an Aanka dependency.",
        learn: ["joins: bill_items → services → staff", "materialized views", "REFRESH CONCURRENTLY"],
        docs: [
          { label: "Postgres — Materialized views", href: "https://www.postgresql.org/docs/current/rules-materializedviews.html" },
          { label: "Postgres — Joins", href: "https://www.postgresql.org/docs/current/tutorial-join.html" },
        ],
        stuck: "Ask me: \"Here's my store bill_items + services schema — help me design the staff_performance join path.\"",
      },
    ],
  },
  {
    id: "p4",
    num: "04",
    weeks: "Sprint 3 · wk 5–6",
    title: "The conversational analyst",
    goal: "Owner asks anything, anytime — 'aaj kitna hua?', 'Priya vs Ritu?' — and Aanka answers, remembers, and handles questions it can't answer in a way that nudges the owner up a tier.",
    accent: PLUM,
    tasks: [
      {
        id: "p4-intent",
        title: "Intent detection",
        what: "Classify each inbound message: a data question, a manual data entry, or smalltalk — and route accordingly (manual entries go to the Phase 1 connector).",
        why: "Without routing, every message hits one prompt and the bot gets confused. Intent is what makes it feel deliberate.",
        learn: ["LLM classification", "routing logic", "tool use / structured output"],
        docs: [{ label: "Tool use (function calling)", href: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use" }],
        stuck: "Ask me: \"Should I detect intent with a classifier prompt or with tool use? Explain the tradeoff for Aanka.\"",
      },
      {
        id: "p4-memory",
        title: "Session memory per owner",
        what: "Store recent turns per phone number in Supabase so 'usse compare karo' resolves against the previous question.",
        why: "Memory separates a chatbot from a search box. It's where the '24/7 analyst' feeling comes from.",
        learn: ["per-user state", "storing conversations", "trimming history to fit context"],
        docs: [{ label: "Supabase — Insert/select", href: "https://supabase.com/docs/reference/python/select" }],
        stuck: "Ask me: \"Design a simple table to store conversation history keyed by phone number — explain the columns.\"",
      },
      {
        id: "p4-unknown",
        title: "Graceful unknowns — the tier-aware adoption nudge",
        what: "When data is missing, answer honestly and nudge up a tier. A manual (Tier 1) salon asking staff performance hears: 'log sales in SalonOS and I can break it down by staff' — a different nudge than a Tier 2 salon gets.",
        why: "Turns the gap into the upsell. The honest 'I can't yet because…' is what pulls owners toward deeper data — and it's tier-aware because the missing piece differs per tier.",
        learn: ["graceful degradation", "honest UX copy", "turning limits into upsell"],
        docs: [{ label: "Reduce hallucinations", href: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/reduce-hallucinations" }],
        stuck: "Ask me: \"Help me write the tier-aware 'I can't answer that yet because…' messages so each nudges toward the next tier.\"",
      },
    ],
  },
  {
    id: "p5",
    num: "05",
    weeks: "Sprint 4 · wk 7–8",
    title: "Proactive alerts + ship",
    goal: "Aanka surfaces things before the owner asks — slow days, lapsed regulars — each configurable. And you get paying salons, because runway is the real deadline.",
    accent: GROWTH,
    tasks: [
      {
        id: "p5-anomaly",
        title: "Anomaly detection (slow day / revenue drop)",
        what: "A scheduled check: if today's revenue is well below the same weekday's recent average, draft a flash-offer suggestion. Works off daily_metrics, so it fires for manual and SalonOS salons alike.",
        why: "Catching a slow day in time to act is the 'irreplaceable' moment — value the owner could never compute themselves.",
        learn: ["baselines & thresholds", "comparing to historical averages", "avoiding false alarms"],
        docs: [{ label: "Postgres window functions", href: "https://www.postgresql.org/docs/current/tutorial-window.html" }],
        stuck: "Ask me: \"What's a sensible threshold for 'unusually slow' that won't spam the owner? Explain the stats simply.\"",
      },
      {
        id: "p5-return",
        title: "Customer-return alerts",
        what: "Detect regulars whose gap since last visit exceeds their usual cycle, and offer to draft a reminder. Needs visit history — so this is richest for SalonOS (Tier 3) salons via central's customer data.",
        why: "Retention nudges turn Aanka from reporting into revenue generation — the clearest ROI story for a paying owner.",
        learn: ["per-customer cadence", "gap detection", "Tier-3 appointment/customer data"],
        docs: [{ label: "Postgres date/time functions", href: "https://www.postgresql.org/docs/current/functions-datetime.html" }],
        stuck: "Ask me: \"How do I compute each customer's 'usual cycle' from visit history? Walk through the query.\"",
      },
      {
        id: "p5-config",
        title: "Per-owner alert configuration",
        what: "Let each owner toggle alert types and set quiet hours. Store config per salon in Supabase; respect it in every scheduled job.",
        why: "Different owners tolerate different noise. Config keeps alerts a feature, not the annoyance that churns them.",
        learn: ["settings storage", "feature flags per salon", "respecting quiet hours"],
        docs: [{ label: "Supabase — Update", href: "https://supabase.com/docs/reference/python/update" }],
        stuck: "Ask me: \"Design the per-salon alert-config and how each cron job should read it.\"",
      },
      {
        id: "p5-ship",
        title: "Ship & sell (the real finish line)",
        what: "Per the 90-day plan: get 5 paying salons at the founding price, in person. Talk to them weekly. The metric that matters: do they pay month 2 unprompted?",
        why: "Runway is under 3 months. Charging from day one and selling while building — not perfecting features — is what makes Aanka a business. Most first customers are Tier 1 (manual), which is exactly what you built first.",
        learn: ["the first-pitch script", "ideal-customer scoring", "retention as north star"],
        docs: [{ label: "Source of Truth — §8 GTM & §10 90-Day Plan", href: "https://github.com/angelxlakra/aanka/blob/main/resources/Aanka_Source_of_Truth.md" }],
        stuck: "Ask me: \"Role-play a skeptical salon owner so I can practice the ₹499 founding-trial pitch.\"",
      },
    ],
  },
];

const ALL_TASK_IDS = PHASES.flatMap((p) => p.tasks.map((t) => t.id));
const STORAGE_KEY = "aanka-roadmap-v2";

export default function RoadmapPage() {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(JSON.parse(raw));
    } catch {
      /* ignore corrupt storage */
    }
    setLoaded(true);

    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
  }, [done, loaded]);

  const toggle = (id: string) => setDone((d) => ({ ...d, [id]: !d[id] }));

  const completed = useMemo(() => ALL_TASK_IDS.filter((id) => done[id]).length, [done]);
  const pct = Math.round((completed / ALL_TASK_IDS.length) * 100);

  return (
    <div
      className="theme-identity"
      style={{
        minHeight: "100vh",
        background: CREAM,
        color: INK,
        fontFamily: SANS,
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* ============ HERO ============ */}
      <div style={{ background: INK, color: CREAM, padding: isMobile ? "40px 20px 48px" : "72px 56px 64px" }}>
        <div style={{ maxWidth: 940, margin: "0 auto", padding: isMobile ? "0 8px" : "0" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 11,
              marginBottom: 44,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "oklch(0.78 0.1 330)",
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "oklch(0.62 0.16 330)", display: "inline-block" }} />
            THE BUILD JOURNEY · v2
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 12 : 20, marginBottom: 32, flexWrap: "wrap" }}>
            <AankaMark size={isMobile ? 40 : 56} stroke="oklch(0.7 0.16 330)" dot={GOLD} />
            <div style={{ fontWeight: 600, fontSize: isMobile ? 36 : 58, letterSpacing: "-0.035em", lineHeight: 0.9 }}>
              Aanka<span style={{ color: GOLD }}>.</span>
            </div>
          </div>
          <h1
            style={{
              fontFamily: SERIF,
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: isMobile ? 24 : 38,
              lineHeight: 1.15,
              margin: "0 0 20px",
              color: CREAM,
              maxWidth: "22ch",
            }}
          >
            Build it yourself. Ship in eight weeks.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(250,247,242,0.72)", maxWidth: "62ch", margin: 0 }}>
            Your roadmap from empty repo to a WhatsApp AI analyst with paying salons. You write every
            line — Claude Code is your tutor, not your autopilot. The spine of the plan:{" "}
            <strong style={{ color: GOLD }}>Aanka stands alone</strong>, and SalonOS is just an
            optional connector you bolt on later.
          </p>

          {/* progress */}
          <div style={{ marginTop: 40 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
              <span style={{ fontSize: 13, color: "rgba(250,247,242,0.6)", letterSpacing: "0.04em" }}>
                {completed} of {ALL_TASK_IDS.length} steps done
              </span>
              <span style={{ fontSize: 22, fontWeight: 700, color: GOLD }}>{pct}%</span>
            </div>
            <div style={{ height: 10, borderRadius: 999, background: "rgba(250,247,242,0.12)", overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  width: `${pct}%`,
                  background: `linear-gradient(90deg, ${PLUM}, ${GOLD})`,
                  borderRadius: 999,
                  transition: "width 0.4s ease",
                }}
              />
            </div>
            <div style={{ fontSize: 11.5, color: "rgba(250,247,242,0.4)", marginTop: 8 }}>
              Progress is saved in your browser — tick a box and it stays.
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 940, margin: "0 auto", padding: isMobile ? "32px 16px 60px" : "56px 56px 110px" }}>
        {/* ============ HOW TO USE — learning mode ============ */}
        <Card accent={GOLD} eyebrow="HOW TO USE THIS — LEARNING MODE" isMobile={isMobile}>
          <h2 style={h2Style}>Claude Code is the tutor. You hold the keyboard.</h2>
          <p style={pStyle}>
            The rule for this whole journey:{" "}
            <strong style={{ color: INK }}>you write the code, you make the design calls.</strong>{" "}
            When you&apos;re stuck, ask Claude Code to <em>explain</em>, not to <em>do</em>.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16, marginTop: 6 }}>
            <MiniBox tone="good" title="Ask like this">
              &ldquo;Explain how Twilio signs webhook requests so I can verify them — don&apos;t write
              the code, I want to try first.&rdquo;
            </MiniBox>
            <MiniBox tone="bad" title="Not like this">
              &ldquo;Write the whole webhook handler for me.&rdquo; — you learn nothing and can&apos;t
              debug it later.
            </MiniBox>
          </div>
          <p style={{ ...pStyle, marginTop: 18, marginBottom: 0 }}>
            Good moments to call Claude Code: <strong style={{ color: INK }}>(1)</strong> stuck 20+
            minutes, <strong style={{ color: INK }}>(2)</strong> an error makes no sense,{" "}
            <strong style={{ color: INK }}>(3)</strong> you want a concept explained, or{" "}
            <strong style={{ color: INK }}>(4)</strong> you want your own code reviewed. Every step
            has a ready-made &ldquo;if stuck&rdquo; prompt in that spirit.
          </p>
        </Card>

        {/* ============ THE SEPARATION PRINCIPLE ============ */}
        <Card accent={GROWTH} eyebrow="FOUNDING PRINCIPLE — AANKA STANDS ALONE" isMobile={isMobile}>
          <h2 style={h2Style}>SalonOS is an optional connector, never a requirement.</h2>
          <p style={pStyle}>
            Your market is 8M salons — and most will never run software. So Aanka&apos;s spine is its{" "}
            <strong style={{ color: INK }}>own database</strong>, with its own normalized model. Data
            arrives through <strong style={{ color: INK }}>connectors</strong>. A salon with no
            software is a first-class citizen; SalonOS is just one connector that fills the same
            tables with deeper data. The report and chatbot read only Aanka&apos;s model and never
            know where a number came from.
          </p>
          <ConnectorFlow isMobile={isMobile} />
          <p style={{ ...pStyle, margin: "20px 0 14px" }}>
            <strong style={{ color: INK }}>Two databases, clear roles:</strong>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16, marginBottom: 20 }}>
            <RepoBox
              name="Supabase"
              tag="Aanka's own data · read+write"
              points={["salons (the routing table)", "daily_metrics (unified shape)", "conversation memory", "manual entries, alert config"]}
              accent={GROWTH}
            />
            <RepoBox
              name="central-db (Hetzner VPS)"
              tag="SalonOS truth · READ-ONLY"
              points={["analytics.* (cross-store views)", "store_daily_metrics (live 'today')", "customers (canonical)", "Aanka reads like a 2nd Metabase"]}
              accent={GOLD}
            />
          </div>
          <p style={{ ...pStyle, margin: "0 0 12px" }}>
            The one field that links a salon to SalonOS is <code style={codeStyle}>salons.central_store_id</code>.{" "}
            <code style={codeStyle}>NULL</code> = a standalone Aanka customer with no software. Most of
            your customers will be exactly that.
          </p>
          <RoutingTable isMobile={isMobile} />
        </Card>

        {/* ============ REPO + DEPLOY ============ */}
        <Card accent={PLUM} eyebrow="REPOS & DEPLOY — WHERE THE CODE LIVES" isMobile={isMobile}>
          <h2 style={h2Style}>Two repos. aanka-api deploys onto the VPS.</h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16, margin: "8px 0 18px" }}>
            <RepoBox
              name="aanka  (this repo)"
              tag="Next.js · brand + this roadmap"
              points={["Brand identity pages", "This roadmap", "Future: landing, pitch site", "Deploys to Vercel"]}
              accent={PLUM}
            />
            <RepoBox
              name="aanka-api  (already exists)"
              tag="Python · the product"
              points={["FastAPI + WhatsApp webhooks", "Manual + SalonOS connectors", "Claude calls + report logic", "Deploys ON the Hetzner VPS"]}
              accent={GROWTH}
            />
          </div>
          <p style={{ ...pStyle, marginBottom: 8 }}>
            <strong style={{ color: INK }}>Why deploy aanka-api on the VPS?</strong> central-db is
            locked to the Docker network (not internet-exposed) — correctly so. Running aanka-api as
            another service in the central <code style={codeStyle}>docker-compose.yml</code> lets it
            read central-db over the internal network and reuse your existing{" "}
            <strong style={{ color: INK }}>Caddy</strong> for the WhatsApp webhook&apos;s TLS. It
            still talks to Supabase over the internet for its own data.
          </p>
          <p style={{ ...pStyle, marginBottom: 0 }}>
            <strong style={{ color: INK }}>Only the SalonOS connector needs the VPS.</strong> The
            entire manual path — i.e. most of your customers — has zero dependency on the VPS, B2, or
            SalonOS. Aanka stands alone, even at the infrastructure level.
          </p>
        </Card>

        {/* ============ PHASES ============ */}
        {PHASES.map((phase) => {
          const phaseDone = phase.tasks.filter((t) => done[t.id]).length;
          return (
            <section key={phase.id} style={{ marginTop: 56 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: isMobile ? 12 : 20, marginBottom: 8, flexWrap: "wrap" }}>
                <div style={{ fontFamily: SERIF, fontSize: isMobile ? 36 : 52, lineHeight: 1, color: phase.accent, fontStyle: "italic", minWidth: isMobile ? 48 : 64 }}>
                  {phase.num}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", color: MUTE, marginBottom: 4 }}>
                    {phase.weeks.toUpperCase()}
                  </div>
                  <h2 style={{ fontWeight: 600, fontSize: 27, letterSpacing: "-0.02em", margin: "0 0 8px" }}>{phase.title}</h2>
                  <p style={{ fontSize: 15, lineHeight: 1.55, color: BODY, margin: 0, maxWidth: "70ch" }}>{phase.goal}</p>
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: phase.accent, whiteSpace: "nowrap", paddingTop: 4 }}>
                  {phaseDone}/{phase.tasks.length}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 22 }}>
                {phase.tasks.map((task) => (
                  <TaskRow key={task.id} task={task} accent={phase.accent} checked={!!done[task.id]} onToggle={() => toggle(task.id)} />
                ))}
              </div>
            </section>
          );
        })}

        {/* ============ FOOTER ============ */}
        <div
          style={{
            marginTop: 64,
            paddingTop: 28,
            borderTop: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ fontSize: 14, color: MUTE, maxWidth: "54ch", lineHeight: 1.5 }}>
            Build rule from the Source of Truth:{" "}
            <strong style={{ color: BODY }}>ship the standalone manual report, get a paying customer, then add the SalonOS connector.</strong>{" "}
            Real feedback beats any upfront plan.
          </div>
          <Link href="/" style={{ color: PLUM, textDecoration: "none", fontWeight: 600, fontSize: 14, whiteSpace: "nowrap" }}>
            ← Brand identity
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared styles                                                     */
/* ------------------------------------------------------------------ */

const h2Style: React.CSSProperties = {
  fontFamily: SERIF,
  fontWeight: 400,
  fontSize: 28,
  margin: "0 0 12px",
  letterSpacing: "-0.01em",
};
const pStyle: React.CSSProperties = {
  fontSize: 15.5,
  lineHeight: 1.6,
  color: BODY,
  margin: "0 0 14px",
  maxWidth: "70ch",
};
const codeStyle: React.CSSProperties = {
  fontFamily: MONO,
  fontSize: "0.86em",
  background: "rgba(0,0,0,0.06)",
  padding: "1px 6px",
  borderRadius: 6,
};

/* ------------------------------------------------------------------ */
/*  Components                                                         */
/* ------------------------------------------------------------------ */

function Card({ accent, eyebrow, children, isMobile }: { accent: string; eyebrow: string; children: React.ReactNode; isMobile: boolean }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.07)",
        borderRadius: 20,
        padding: isMobile ? "24px 18px" : "32px 36px",
        marginBottom: 20,
        borderTop: `3px solid ${accent}`,
      }}
    >
      <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.16em", color: accent, marginBottom: 12 }}>{eyebrow}</div>
      {children}
    </div>
  );
}

/** The connector model: two sources → Aanka's model → outputs. */
function ConnectorFlow({ isMobile }: { isMobile: boolean }) {
  const Box = ({ bg, border, label, sub, color = INK }: { bg: string; border: string; label: string; sub: string; color?: string }) => (
    <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 12, padding: "12px 14px", width: "100%" }}>
      <div style={{ fontSize: 13.5, fontWeight: 600, color }}>{label}</div>
      <div style={{ fontSize: 11.5, color: color === INK ? MUTE : "rgba(255,255,255,0.75)", marginTop: 2 }}>{sub}</div>
    </div>
  );

  const Arrow = () => (
    <div style={{ color: MUTE, fontSize: 20, padding: "0 4px", display: "flex", alignItems: "center", justifyContent: "center" }}>→</div>
  );

  return (
    <div
      style={{
        background: "oklch(0.98 0.005 320)",
        border: "1px solid rgba(0,0,0,0.07)",
        borderRadius: 16,
        padding: isMobile ? "16px 12px" : "22px 20px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? 8 : 10,
        alignItems: "center",
        margin: "4px 0 4px",
      }}
    >
      {/* sources */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Box bg="#fff" border="rgba(0,0,0,0.1)" label="Manual connector" sub="WhatsApp text → parse" />
        <Box bg="#fff" border="rgba(0,0,0,0.1)" label="SalonOS connector" sub="central-db analytics → ETL" />
      </div>
      <Arrow />
      {/* aanka model */}
      <div style={{ background: INK, borderRadius: 12, padding: "16px 16px", color: CREAM }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: GOLD, letterSpacing: "0.04em" }}>AANKA&apos;S MODEL</div>
        <div style={{ fontSize: 12.5, color: "rgba(250,247,242,0.85)", marginTop: 6, fontFamily: MONO }}>
          salons
          <br />
          daily_metrics
        </div>
        <div style={{ fontSize: 11, color: "rgba(250,247,242,0.55)", marginTop: 6 }}>one unified shape</div>
      </div>
      <Arrow />
      {/* outputs */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Box bg="oklch(0.96 0.04 165)" border="oklch(0.85 0.06 165)" label="Monday report" sub="reads model only" />
        <Box bg="oklch(0.96 0.04 165)" border="oklch(0.85 0.06 165)" label="Chatbot" sub="source-agnostic" />
      </div>
    </div>
  );
}

/** The salons routing table. */
function RoutingTable({ isMobile }: { isMobile: boolean }) {
  const rows = [
    ["data_source", "manual", "salonos"],
    ["central_store_id", "NULL", "andheri / bandra"],
    ["fills daily_metrics via", "WhatsApp text", "central-db ETL"],
    ["insight depth", "Tier 1 — revenue", "Tier 2/3 — staff, services, retention"],
  ];
  return (
    <div style={{ overflow: "hidden", borderRadius: 12, border: "1px solid rgba(0,0,0,0.09)" }}>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr 1.3fr", background: "oklch(0.97 0.01 320)", fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: "0.06em", color: MUTE }}>
        <div style={{ padding: "10px 14px" }}>SALONS COLUMN</div>
        <div style={{ padding: "10px 14px", color: GROWTH }}>STANDALONE</div>
        <div style={{ padding: "10px 14px", color: GOLD }}>WITH SALONOS</div>
      </div>
      {rows.map((r, i) => (
        <div
          key={r[0]}
          style={{
            display: isMobile ? "block" : "grid",
            gridTemplateColumns: "1.1fr 1fr 1.3fr",
            fontSize: isMobile ? 12 : 13,
            borderTop: "1px solid rgba(0,0,0,0.06)",
            background: i % 2 ? "#fff" : "oklch(0.99 0.003 320)",
            padding: isMobile ? "12px 14px" : "0",
          }}
        >
          <div style={{ padding: isMobile ? "0 0 8px 0" : "10px 14px", fontFamily: MONO, fontSize: 12, color: INK, fontWeight: isMobile ? 600 : 400 }}>{r[0]}</div>
          <div style={{ padding: isMobile ? "0 0 4px 0" : "10px 14px", color: BODY }}>
            {isMobile && <span style={{ fontWeight: 600, marginRight: 4 }}>Standalone:</span>}
            {r[1]}
          </div>
          <div style={{ padding: isMobile ? "0" : "10px 14px", color: BODY, marginTop: isMobile ? 4 : 0 }}>
            {isMobile && <span style={{ fontWeight: 600, marginRight: 4 }}>SalonOS:</span>}
            {r[2]}
          </div>
        </div>
      ))}
    </div>
  );
}

function MiniBox({ tone, title, children }: { tone: "good" | "bad"; title: string; children: React.ReactNode }) {
  const good = tone === "good";
  return (
    <div
      style={{
        background: good ? "oklch(0.96 0.04 165)" : "oklch(0.96 0.03 25)",
        border: `1px solid ${good ? "oklch(0.85 0.06 165)" : "oklch(0.88 0.05 25)"}`,
        borderRadius: 14,
        padding: "16px 18px",
      }}
    >
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: good ? "oklch(0.42 0.1 165)" : "oklch(0.5 0.13 25)", marginBottom: 8 }}>
        {good ? "✓ " : "✕ "}
        {title.toUpperCase()}
      </div>
      <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "#3D3A35" }}>{children}</div>
    </div>
  );
}

function RepoBox({ name, tag, points, accent }: { name: string; tag: string; points: string[]; accent: string }) {
  return (
    <div style={{ background: "oklch(0.98 0.005 320)", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 14, padding: "18px 20px" }}>
      <div style={{ fontFamily: MONO, fontSize: 14, fontWeight: 600, color: INK, marginBottom: 4 }}>{name}</div>
      <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.06em", color: accent, marginBottom: 12 }}>{tag.toUpperCase()}</div>
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 5 }}>
        {points.map((p) => (
          <li key={p} style={{ fontSize: 13, color: BODY, display: "flex", gap: 8 }}>
            <span style={{ color: accent }}>·</span>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TaskRow({ task, accent, checked, onToggle }: { task: Task; accent: string; checked: boolean; onToggle: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: checked ? "oklch(0.98 0.01 165)" : "#fff",
        border: `1px solid ${checked ? "oklch(0.88 0.04 165)" : "rgba(0,0,0,0.08)"}`,
        borderRadius: 16,
        overflow: "hidden",
        transition: "background 0.2s ease, border-color 0.2s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "18px 20px" }}>
        <button
          onClick={onToggle}
          aria-pressed={checked}
          aria-label={checked ? "Mark incomplete" : "Mark complete"}
          style={{
            flexShrink: 0,
            width: 24,
            height: 24,
            marginTop: 1,
            borderRadius: 7,
            cursor: "pointer",
            border: checked ? "none" : "2px solid rgba(0,0,0,0.22)",
            background: checked ? GROWTH : "transparent",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: 700,
            transition: "all 0.15s ease",
          }}
        >
          {checked ? "✓" : ""}
        </button>

        <button
          onClick={() => setOpen((o) => !o)}
          style={{
            flex: 1,
            textAlign: "left",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 14,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: INK,
                letterSpacing: "-0.01em",
                textDecoration: checked ? "line-through" : "none",
                textDecorationColor: "rgba(0,0,0,0.25)",
                opacity: checked ? 0.6 : 1,
              }}
            >
              {task.title}
            </div>
            {!open && (
              <div style={{ fontSize: 13.5, color: BODY, marginTop: 4, lineHeight: 1.5, opacity: checked ? 0.6 : 1 }}>{task.what}</div>
            )}
          </div>
          <span style={{ fontSize: 12, fontWeight: 600, color: accent, whiteSpace: "nowrap", paddingTop: 3 }}>
            {open ? "Hide −" : "Details +"}
          </span>
        </button>
      </div>

      {open && (
        <div style={{ padding: "0 20px 22px 58px", display: "flex", flexDirection: "column", gap: 16 }}>
          <Detail label="WHAT" body={task.what} accent={accent} />
          <Detail label="WHY IT MATTERS" body={task.why} accent={accent} />

          <div>
            <DetailLabel accent={accent}>CONCEPTS TO LEARN</DetailLabel>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 8 }}>
              {task.learn.map((c) => (
                <span key={c} style={{ fontSize: 12.5, color: "#3D3A35", background: "rgba(0,0,0,0.05)", padding: "5px 11px", borderRadius: 999 }}>
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div>
            <DetailLabel accent={accent}>DOCS &amp; REFERENCES</DetailLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
              {task.docs.map((d) => {
                const external = d.href.startsWith("http");
                return (
                  <a
                    key={d.href}
                    href={d.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    style={{ fontSize: 14, color: PLUM, textDecoration: "none", fontWeight: 500, display: "flex", alignItems: "center", gap: 7 }}
                  >
                    <span style={{ color: accent }}>↗</span>
                    {d.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div style={{ background: PLUM_SOFT, border: "1px solid oklch(0.9 0.03 330)", borderRadius: 12, padding: "14px 16px" }}>
            <DetailLabel accent={PLUM}>IF YOU GET STUCK — ASK CLAUDE CODE</DetailLabel>
            <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 16, lineHeight: 1.4, color: "oklch(0.38 0.1 330)", marginTop: 8 }}>
              {task.stuck}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DetailLabel({ accent, children }: { accent: string; children: React.ReactNode }) {
  return <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: accent }}>{children}</div>;
}

function Detail({ label, body, accent }: { label: string; body: string; accent: string }) {
  return (
    <div>
      <DetailLabel accent={accent}>{label}</DetailLabel>
      <p style={{ fontSize: 14.5, lineHeight: 1.6, color: BODY, margin: "7px 0 0" }}>{body}</p>
    </div>
  );
}
