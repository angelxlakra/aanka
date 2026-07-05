"use client";

import { useState } from "react";
import Link from "next/link";

const SANS = "var(--font-sans)";
const SERIF = "var(--font-serif)";

type KurukhId = "biri" | "chando" | "singi";

const KURUKH: Record<
  KurukhId,
  {
    name: string;
    pron: string;
    deva: string;
    meaning: string;
    idea: string;
    note: string;
    tagline: string;
    watch: string;
    msg: string;
  }
> = {
  biri: {
    name: "Biri",
    pron: "/ˈbɪ.ɾi/",
    deva: "बिरी",
    meaning: "“the sun”",
    idea: "In Kurukh, Biri is the sun — the light your people turn to at dawn. A business analyst that rises every Monday and throws light on your numbers is, quite literally, a Biri. Short, warm, two syllables, and drawn from your own roots without trying.",
    note: "The most personal of the three — your language, your sun.",
    tagline: "“Biri. Roz subah, aapke numbers pe roshni.”",
    watch:
      "In Hindi it can be heard as “beedi” — pair it with a strong sun mark to anchor the meaning",
    msg: "Subah ho gayi 🌅 Pichla hafta ₹91,000 — ab tak ka best. Bas ek baat: Wednesday teen baar khaali tha. — Biri",
  },
  chando: {
    name: "Chando",
    pron: "/ˈtʃʌn.do/",
    deva: "चन्दो",
    meaning: "“the moon”",
    idea: "Chando is the Kurukh moon — steady, calm, returning every single night. It reads as the quiet guardian of your books: never loud, always there. The softest and most premium sound of the three, and it glides in English.",
    note: "Calmest option — leans into “steady & trustworthy”.",
    tagline: "“Chando. Quietly keeping watch over your books.”",
    watch: "Sits near ritual language — keep the brand respectful and grounded, never mystical",
    msg: "Mahina poora hua — ₹2.7L, sab settle. Sirf 2 supplier payments pending hain. Yaad dila dun? — Chando",
  },
  singi: {
    name: "Singi",
    pron: "/ˈsɪŋ.ɡi/",
    deva: "सिंगी",
    meaning: "“daylight / sun”",
    idea: "Singi carries the sense of daylight and the sun across Adivasi tongues — it even names the Kurukh journal Singi Dai. Cleanest on the tongue of the three, no homophone traps, and it sounds modern and ownable while staying rooted.",
    note: "Cleanest & safest of the Kurukh set — no collisions.",
    tagline: "“Singi. First light on your business, every Monday.”",
    watch: "Less unmistakably “sun” to a lay ear — the brand teaches the meaning over time",
    msg: "Hafta khula 🌞 ₹88,400 aaya, 9% up. Color services tezi me — ek combo offer banayein? — Singi",
  },
};

const SWITCHES: { id: KurukhId; label: string }[] = [
  { id: "biri", label: "Biri · sun" },
  { id: "chando", label: "Chando · moon" },
  { id: "singi", label: "Singi · daylight" },
];

export default function FinalistsPage() {
  const [sel, setSel] = useState<KurukhId>("biri");
  const k = KURUKH[sel];

  return (
    <div
      className="theme-board"
      style={{
        minHeight: "100vh",
        background: "#FAFAF8",
        color: "#211F1C",
        fontFamily: SANS,
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "64px 28px 110px" }}>
        {/* HERO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 18,
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.18em",
            color: "#A1968A",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#211F1C",
            }}
          />
          THE FINALISTS · BRAND BOARD
        </div>
        <h1
          style={{
            fontFamily: SERIF,
            fontWeight: 400,
            fontSize: 60,
            lineHeight: 1.04,
            letterSpacing: "-0.01em",
            margin: "0 0 24px",
            maxWidth: "18ch",
          }}
        >
          Three names that earned a full identity.
        </h1>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: "#57524B",
            maxWidth: "62ch",
            margin: "0 0 18px",
          }}
        >
          You shortlisted <strong style={{ color: "#211F1C" }}>Aanka</strong> and{" "}
          <strong style={{ color: "#211F1C" }}>Munim</strong> — the ownable coin and the one with a
          built-in story. To those I&apos;ve added <strong style={{ color: "#211F1C" }}>Biri</strong>:
          a name drawn from your own Kurukh, done carefully. Each gets a wordmark, a palette, a voice,
          and a watch-out.
        </p>
        <div style={{ fontSize: 14, color: "#9A8F82", lineHeight: 1.6 }}>
          One type system across all three —{" "}
          <span style={{ color: "#3D3A35", fontWeight: 600 }}>Space Grotesk</span> for the wordmark
          &amp; UI,{" "}
          <span style={{ fontFamily: SERIF, fontSize: 17, color: "#3D3A35" }}>Instrument Serif</span>{" "}
          for editorial lines. Pick a direction; I&apos;ll go deep on the winner.
        </div>

        <div style={{ height: 1, background: "rgba(0,0,0,0.09)", margin: "52px 0" }} />

        {/* ============ AANKA ============ */}
        <section
          style={{
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.07)",
            borderRadius: 24,
            overflow: "hidden",
            marginBottom: 34,
            boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
          }}
        >
          <div
            style={{
              padding: "52px 48px",
              background: "oklch(0.97 0.012 330)",
              display: "flex",
              alignItems: "center",
              gap: 22,
              borderBottom: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <svg width="52" height="52" viewBox="0 0 44 44" fill="none">
              <path
                d="M11 33 L20 12 L29 33"
                stroke="oklch(0.5 0.12 330)"
                strokeWidth="3.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line x1="15" y1="26" x2="25" y2="26" stroke="oklch(0.5 0.12 330)" strokeWidth="3.4" strokeLinecap="round" />
              <circle cx="33.5" cy="14" r="3.6" fill="oklch(0.5 0.12 330)" />
            </svg>
            <div
              style={{
                fontFamily: SANS,
                fontWeight: 600,
                fontSize: 46,
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              Aanka<span style={{ color: "oklch(0.5 0.12 330)" }}>.</span>
            </div>
            <div style={{ marginLeft: "auto", textAlign: "right" }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  color: "oklch(0.5 0.12 330)",
                }}
              >
                THE COINED ONE
              </div>
              <div style={{ fontSize: 13, color: "#9A8F82", marginTop: 4 }}>/ˈaːn.kaː/ · आँका</div>
            </div>
          </div>
          <div
            style={{
              padding: "40px 48px",
              display: "grid",
              gridTemplateColumns: "1.25fr 1fr",
              gap: 48,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  color: "#A1968A",
                  marginBottom: 10,
                }}
              >
                THE IDEA
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D3A35", margin: "0 0 22px" }}>
                Coined from <em>aankda</em> (figures) and <em>aankna</em> (to gauge). It sounds like a
                real word but no one owns it — so it whispers &ldquo;numbers, understood&rdquo; to an
                Indian ear while staying clean and global on a logo.{" "}
                <strong style={{ color: "#211F1C" }}>A blank canvas you get to define.</strong>
              </p>
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: 24,
                  lineHeight: 1.3,
                  color: "#211F1C",
                  marginBottom: 26,
                }}
              >
                &ldquo;Aanka. Your business, figured out.&rdquo;
              </div>
              <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: "#A1968A",
                      marginBottom: 6,
                    }}
                  >
                    WINS ON
                  </div>
                  <div style={{ fontSize: 14, color: "#3D3A35", lineHeight: 1.5 }}>
                    100% trademarkable
                    <br />
                    Domain &amp; handle gettable
                    <br />
                    Globally pronounceable
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: "#A1968A",
                      marginBottom: 6,
                    }}
                  >
                    WATCH-OUT
                  </div>
                  <div style={{ fontSize: 14, color: "#3D3A35", lineHeight: 1.5 }}>
                    Coined words need
                    <br />
                    marketing fuel to
                    <br />
                    teach their meaning
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  color: "#A1968A",
                  marginBottom: 14,
                }}
              >
                PALETTE
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 0,
                  borderRadius: 12,
                  overflow: "hidden",
                  marginBottom: 8,
                  height: 60,
                }}
              >
                <div style={{ flex: 1, background: "oklch(0.5 0.12 330)" }} />
                <div style={{ flex: 1, background: "oklch(0.68 0.13 350)" }} />
                <div style={{ flex: 1, background: "#211F1C" }} />
                <div style={{ flex: 1, background: "#FAFAF8", border: "1px solid rgba(0,0,0,0.08)" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 10.5,
                  color: "#9A8F82",
                  marginBottom: 24,
                }}
              >
                <span>Plum</span>
                <span>Rose</span>
                <span>Ink</span>
                <span>Cream</span>
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  color: "#A1968A",
                  marginBottom: 10,
                }}
              >
                IN THE CHAT
              </div>
              <div
                style={{
                  background: "oklch(0.95 0.05 150)",
                  borderRadius: "14px 14px 14px 4px",
                  padding: "12px 15px",
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  color: "#1f3d2b",
                }}
              >
                Maine aapka mahina aanka — ₹2.4L, margin 38%. Color services se sabse zyada.{" "}
                <span style={{ opacity: 0.6, fontSize: 11 }}>— Aanka</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ MUNIM ============ */}
        <section
          style={{
            background: "#211F1C",
            color: "#FAFAF8",
            border: "1px solid rgba(0,0,0,0.07)",
            borderRadius: 24,
            overflow: "hidden",
            marginBottom: 34,
            boxShadow: "0 14px 44px rgba(33,31,28,0.18)",
          }}
        >
          <div
            style={{
              padding: "52px 48px",
              background: "#1A1815",
              display: "flex",
              alignItems: "center",
              gap: 22,
              borderBottom: "1px solid rgba(250,250,248,0.08)",
            }}
          >
            <svg width="52" height="52" viewBox="0 0 44 44" fill="none">
              <circle cx="22" cy="16" r="7" stroke="oklch(0.82 0.15 92)" strokeWidth="3" />
              <path d="M10 35c0-7 5.4-11 12-11s12 4 12 11" stroke="oklch(0.82 0.15 92)" strokeWidth="3" strokeLinecap="round" />
              <circle cx="22" cy="16" r="2.4" fill="oklch(0.82 0.15 92)" />
            </svg>
            <div
              style={{
                fontFamily: SANS,
                fontWeight: 600,
                fontSize: 46,
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              Munim
            </div>
            <div style={{ marginLeft: "auto", textAlign: "right" }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  color: "oklch(0.82 0.15 92)",
                }}
              >
                THE TRUSTED BOOKKEEPER
              </div>
              <div style={{ fontSize: 13, color: "rgba(250,250,248,0.5)", marginTop: 4 }}>
                /muˈniːm/ · मुनीम
              </div>
            </div>
          </div>
          <div
            style={{
              padding: "40px 48px",
              display: "grid",
              gridTemplateColumns: "1.25fr 1fr",
              gap: 48,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  color: "rgba(250,250,248,0.45)",
                  marginBottom: 10,
                }}
              >
                THE IDEA
              </div>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.6,
                  color: "rgba(250,250,248,0.85)",
                  margin: "0 0 22px",
                }}
              >
                You&apos;re not inventing a metaphor — you&apos;re{" "}
                <em>reviving a role everyone already trusts.</em> Every Indian business had a munim
                who quietly knew where every rupee went.{" "}
                <strong style={{ color: "#FAFAF8" }}>
                  &ldquo;Every great business had one. Now everyone gets one.&rdquo;
                </strong>
              </p>
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: 24,
                  lineHeight: 1.3,
                  color: "#FAFAF8",
                  marginBottom: 26,
                }}
              >
                &ldquo;Munim. The one who minds the shop.&rdquo;
              </div>
              <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: "rgba(250,250,248,0.45)",
                      marginBottom: 6,
                    }}
                  >
                    WINS ON
                  </div>
                  <div style={{ fontSize: 14, color: "rgba(250,250,248,0.82)", lineHeight: 1.5 }}>
                    Story is pre-installed
                    <br />
                    Owns a real role
                    <br />
                    Instantly understood
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: "rgba(250,250,248,0.45)",
                      marginBottom: 6,
                    }}
                  >
                    WATCH-OUT
                  </div>
                  <div style={{ fontSize: 14, color: "rgba(250,250,248,0.82)", lineHeight: 1.5 }}>
                    Male-coded &amp; traditional
                    <br />
                    — lean modern in the
                    <br />
                    identity to balance it
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  color: "rgba(250,250,248,0.45)",
                  marginBottom: 14,
                }}
              >
                PALETTE
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 0,
                  borderRadius: 12,
                  overflow: "hidden",
                  marginBottom: 8,
                  height: 60,
                }}
              >
                <div style={{ flex: 1, background: "#211F1C" }} />
                <div style={{ flex: 1, background: "oklch(0.82 0.15 92)" }} />
                <div style={{ flex: 1, background: "oklch(0.55 0.1 150)" }} />
                <div style={{ flex: 1, background: "#F4EFE6" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 10.5,
                  color: "rgba(250,250,248,0.5)",
                  marginBottom: 24,
                }}
              >
                <span>Ink</span>
                <span>Gold</span>
                <span>Green</span>
                <span>Paper</span>
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  color: "rgba(250,250,248,0.45)",
                  marginBottom: 10,
                }}
              >
                IN THE CHAT
              </div>
              <div
                style={{
                  background: "oklch(0.32 0.04 150)",
                  borderRadius: "14px 14px 14px 4px",
                  padding: "12px 15px",
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  color: "oklch(0.94 0.03 150)",
                }}
              >
                Seth-ji, August band — ₹3.1L, ab tak ka best. Diwali ke liye stock badha dein?{" "}
                <span style={{ opacity: 0.55, fontSize: 11 }}>— Munim</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ BIRI (KURUKH) ============ */}
        <section
          style={{
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.07)",
            borderRadius: 24,
            overflow: "hidden",
            marginBottom: 18,
            boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
          }}
        >
          <div
            style={{
              padding: "52px 48px",
              background: "linear-gradient(180deg, oklch(0.96 0.04 70), oklch(0.97 0.02 60))",
              display: "flex",
              alignItems: "center",
              gap: 24,
              borderBottom: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <svg width="56" height="56" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="25" r="8" fill="oklch(0.72 0.15 65)" />
              <g stroke="oklch(0.72 0.15 65)" strokeWidth="2.6" strokeLinecap="round">
                <line x1="24" y1="6" x2="24" y2="11" />
                <line x1="38.7" y1="10.3" x2="35.2" y2="13.8" />
                <line x1="9.3" y1="10.3" x2="12.8" y2="13.8" />
                <line x1="6" y1="25" x2="11" y2="25" />
                <line x1="42" y1="25" x2="37" y2="25" />
              </g>
              <line x1="7" y1="40" x2="41" y2="40" stroke="oklch(0.45 0.08 45)" strokeWidth="2.8" strokeLinecap="round" />
            </svg>
            <div>
              <div
                style={{
                  fontFamily: SANS,
                  fontWeight: 600,
                  fontSize: 46,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {k.name}
              </div>
              <div style={{ fontSize: 13, color: "oklch(0.45 0.06 50)", marginTop: 6 }}>
                {k.pron} · {k.deva} · Kurukh (Oraon)
              </div>
            </div>
            <div style={{ marginLeft: "auto", textAlign: "right" }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  color: "oklch(0.55 0.13 55)",
                }}
              >
                FROM YOUR OWN LANGUAGE
              </div>
              <div style={{ fontSize: 13, color: "oklch(0.5 0.06 50)", marginTop: 4 }}>
                {k.meaning}
              </div>
            </div>
          </div>

          {/* live name switcher */}
          <div
            style={{
              padding: "18px 48px",
              background: "oklch(0.985 0.01 70)",
              borderBottom: "1px solid rgba(0,0,0,0.05)",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "#A1968A",
              }}
            >
              TRY EACH:
            </span>
            <div style={{ display: "flex", gap: 8 }}>
              {SWITCHES.map(({ id, label }) => {
                const active = sel === id;
                return (
                  <button
                    key={id}
                    onClick={() => setSel(id)}
                    style={{
                      cursor: "pointer",
                      fontFamily: SANS,
                      fontSize: 13,
                      fontWeight: 600,
                      padding: "8px 15px",
                      borderRadius: 999,
                      whiteSpace: "nowrap",
                      border: active
                        ? "1px solid oklch(0.62 0.14 55)"
                        : "1px solid rgba(0,0,0,0.14)",
                      background: active ? "oklch(0.72 0.15 65)" : "transparent",
                      color: active ? "#fff" : "#6B665F",
                      transition: "all 0.18s ease",
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            style={{
              padding: "40px 48px",
              display: "grid",
              gridTemplateColumns: "1.25fr 1fr",
              gap: 48,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  color: "#A1968A",
                  marginBottom: 10,
                }}
              >
                THE IDEA
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "#3D3A35", margin: "0 0 12px" }}>
                {k.idea}
              </p>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "#8A8076",
                  margin: "0 0 22px",
                  fontStyle: "italic",
                }}
              >
                {k.note}
              </p>
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: 24,
                  lineHeight: 1.3,
                  color: "#211F1C",
                  marginBottom: 26,
                }}
              >
                {k.tagline}
              </div>
              <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: "#A1968A",
                      marginBottom: 6,
                    }}
                  >
                    WINS ON
                  </div>
                  <div style={{ fontSize: 14, color: "#3D3A35", lineHeight: 1.5 }}>
                    Personally rooted
                    <br />
                    Warm, premium, calm
                    <br />
                    No one in the space owns it
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: "#A1968A",
                      marginBottom: 6,
                    }}
                  >
                    WATCH-OUT
                  </div>
                  <div style={{ fontSize: 14, color: "#3D3A35", lineHeight: 1.5 }}>{k.watch}</div>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  color: "#A1968A",
                  marginBottom: 14,
                }}
              >
                PALETTE · SUNRISE
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 0,
                  borderRadius: 12,
                  overflow: "hidden",
                  marginBottom: 8,
                  height: 60,
                }}
              >
                <div style={{ flex: 1, background: "oklch(0.72 0.15 65)" }} />
                <div style={{ flex: 1, background: "oklch(0.62 0.14 45)" }} />
                <div style={{ flex: 1, background: "oklch(0.42 0.07 45)" }} />
                <div style={{ flex: 1, background: "#F7F1E8" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 10.5,
                  color: "#9A8F82",
                  marginBottom: 24,
                }}
              >
                <span>Amber</span>
                <span>Clay</span>
                <span>Earth</span>
                <span>Sand</span>
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  color: "#A1968A",
                  marginBottom: 10,
                }}
              >
                IN THE CHAT
              </div>
              <div
                style={{
                  background: "oklch(0.95 0.05 150)",
                  borderRadius: "14px 14px 14px 4px",
                  padding: "12px 15px",
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  color: "#1f3d2b",
                }}
              >
                {k.msg}
              </div>
            </div>
          </div>
        </section>

        {/* cultural note */}
        <div
          style={{
            marginTop: 30,
            padding: "30px 34px",
            borderRadius: 18,
            background: "oklch(0.97 0.02 60)",
            border: "1px solid oklch(0.9 0.03 60)",
          }}
        >
          <div
            style={{
              fontSize: 11.5,
              fontWeight: 600,
              letterSpacing: "0.16em",
              color: "oklch(0.55 0.13 55)",
              marginBottom: 12,
            }}
          >
            ON USING KURUKH WITH CARE
          </div>
          <p
            style={{
              fontSize: 15.5,
              lineHeight: 1.65,
              color: "#5A5247",
              margin: "0 0 12px",
              maxWidth: "78ch",
            }}
          >
            <strong style={{ color: "#3D3A35" }}>Biri</strong> is the Oraon word for the sun — and in
            Sarna tradition it also names the sun as divine. As an Oraon founder naming your own
            company, that&apos;s reclamation, not appropriation — but it carries reverence, so the
            brand should wear it with dignity. Two honest flags: in Hindi-speaking markets{" "}
            <em>Biri</em> can be misheard as <em>beedi</em> (a cheap cigarette), and the celestial
            words sit close to ritual language.
          </p>
          <p
            style={{ fontSize: 15.5, lineHeight: 1.65, color: "#5A5247", margin: 0, maxWidth: "78ch" }}
          >
            <strong style={{ color: "#3D3A35" }}>Chando</strong> (moon) is the calmest and cleanest on
            the tongue; <strong style={{ color: "#3D3A35" }}>Singi</strong> (daylight) avoids the
            beedi collision entirely. Toggle the three above to feel each. My honest read:{" "}
            <strong style={{ color: "#3D3A35" }}>Munim</strong> sells fastest,{" "}
            <strong style={{ color: "#3D3A35" }}>Aanka</strong> is the safest long-term asset, and a
            Kurukh name is the one with soul — pick the trade-off that&apos;s <em>you</em>, and
            I&apos;ll build the winner into a full identity.
          </p>
        </div>

        <div style={{ marginTop: 34, fontSize: 14, color: "#9A8F82" }}>
          <Link
            href="/lookbook"
            style={{ color: "oklch(0.5 0.12 270)", textDecoration: "none", fontWeight: 600 }}
          >
            ← Back to all five directions
          </Link>
        </div>
      </div>
    </div>
  );
}
