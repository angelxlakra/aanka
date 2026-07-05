"use client";

import Link from "next/link";
import { AankaMark } from "@/components/AankaMark";
import { useResponsive } from "@/hooks/useResponsive";

const SANS = "var(--font-sans)";
const SERIF = "var(--font-serif)";

export default function BrandIdentityPage() {
  const { isMobile } = useResponsive();
  return (
    <div
      className="theme-identity"
      style={{
        minHeight: "100vh",
        background: "#FAF7F2",
        color: "#1B1A22",
        fontFamily: SANS,
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* ============ HERO ============ */}
      <div style={{ background: "#1B1A22", color: "#FAF7F2", padding: isMobile ? "40px 20px 48px" : "80px 56px 72px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", padding: isMobile ? "0 8px" : "0" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 11,
              marginBottom: 54,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "oklch(0.78 0.1 330)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "oklch(0.62 0.16 330)",
              }}
            />
            BRAND IDENTITY · v1
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 12 : 26, marginBottom: 40, flexWrap: "wrap" }}>
            <AankaMark size={isMobile ? 48 : 76} stroke="oklch(0.7 0.16 330)" dot="oklch(0.8 0.16 80)" />
            <div
              style={{
                fontFamily: SANS,
                fontWeight: 600,
                fontSize: isMobile ? 42 : 84,
                letterSpacing: "-0.035em",
                lineHeight: 0.9,
              }}
            >
              Aanka<span style={{ color: "oklch(0.8 0.16 80)" }}>.</span>
            </div>
          </div>
          <h1
            style={{
              fontFamily: SERIF,
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: isMobile ? 24 : 40,
              lineHeight: 1.15,
              margin: "0 0 22px",
              color: "#FAF7F2",
              maxWidth: "20ch",
            }}
          >
            Your business, figured out.
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "rgba(250,247,242,0.7)",
              maxWidth: "60ch",
              margin: 0,
            }}
          >
            A coined name, rooted in <em>aankda</em> (figures) and <em>aankna</em> (to gauge). It
            sounds like a word you already know, yet nobody owns it. That&apos;s the asset: a clean,
            global, trademarkable home for everything you&apos;ll build.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1040, margin: "0 auto", padding: isMobile ? "32px 16px 60px" : "72px 56px 110px" }}>
        {/* ============ 01 THE MARK ============ */}
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.16em",
            color: "oklch(0.55 0.1 330)",
            marginBottom: 8,
          }}
        >
          01 — THE MARK
        </div>
        <h2
          style={{
            fontFamily: SERIF,
            fontWeight: 400,
            fontSize: 34,
            margin: "0 0 14px",
            letterSpacing: "-0.01em",
          }}
        >
          A peak, and the point you figure it out.
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: "#57524B",
            maxWidth: "64ch",
            margin: "0 0 36px",
          }}
        >
          The mark is an <strong style={{ color: "#1B1A22" }}>A</strong> built as a rising peak —
          growth — with its crossbar tilted upward. The dot above the apex is the moment of clarity:
          the figure, gauged. Used alone it&apos;s a confident, ownable glyph.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: 24,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: 20,
              padding: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 230,
            }}
          >
            <AankaMark size={120} stroke="oklch(0.52 0.13 330)" dot="oklch(0.78 0.14 70)" />
          </div>
          <div
            style={{
              background: "oklch(0.52 0.13 330)",
              borderRadius: 20,
              padding: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 230,
            }}
          >
            <AankaMark size={120} stroke="#fff" dot="oklch(0.85 0.13 80)" />
          </div>
        </div>

        {/* lockups */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)",
            gap: 18,
            marginBottom: 64,
          }}
        >
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: 16,
              padding: 30,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
              <AankaMark size={30} stroke="#1B1A22" dot="oklch(0.78 0.14 70)" strokeWidth={4} dotR={4.4} />
              <span style={{ fontWeight: 600, fontSize: 27, letterSpacing: "-0.03em" }}>
                Aanka<span style={{ color: "oklch(0.52 0.13 330)" }}>.</span>
              </span>
            </div>
            <span style={{ fontSize: 11, color: "#A1968A", letterSpacing: "0.08em" }}>
              PRIMARY · HORIZONTAL
            </span>
          </div>
          <div
            style={{
              background: "#1B1A22",
              borderRadius: 16,
              padding: 30,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
              <AankaMark size={30} stroke="#FAF7F2" dot="oklch(0.8 0.16 80)" strokeWidth={4} dotR={4.4} />
              <span style={{ fontWeight: 600, fontSize: 27, letterSpacing: "-0.03em", color: "#FAF7F2" }}>
                Aanka<span style={{ color: "oklch(0.7 0.16 330)" }}>.</span>
              </span>
            </div>
            <span style={{ fontSize: 11, color: "rgba(250,247,242,0.5)", letterSpacing: "0.08em" }}>
              REVERSED · DARK
            </span>
          </div>
          <div
            style={{
              background: "oklch(0.52 0.13 330)",
              borderRadius: 16,
              padding: 30,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 13,
                background: "rgba(255,255,255,0.14)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AankaMark size={32} stroke="#fff" dot="oklch(0.85 0.13 80)" strokeWidth={4} dotR={4.4} />
            </div>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", letterSpacing: "0.08em" }}>
              APP ICON
            </span>
          </div>
        </div>

        {/* ============ 02 PALETTE ============ */}
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.16em",
            color: "oklch(0.55 0.1 330)",
            marginBottom: 8,
          }}
        >
          02 — PALETTE
        </div>
        <h2
          style={{
            fontFamily: SERIF,
            fontWeight: 400,
            fontSize: 34,
            margin: "0 0 14px",
            letterSpacing: "-0.01em",
          }}
        >
          Warm ink, a confident plum, a spark of gold.
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: "#57524B",
            maxWidth: "64ch",
            margin: "0 0 36px",
          }}
        >
          Dark enough to read premium, warm enough to feel human. Plum carries the brand; gold is the
          accent reserved for the &ldquo;figured-out&rdquo; moment; the cream keeps it from feeling
          like a fintech dashboard.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(5,1fr)",
            gap: 14,
            marginBottom: 64,
          }}
        >
          {[
            { swatch: "#1B1A22", name: "Ink", sub: "#1B1A22" },
            { swatch: "oklch(0.52 0.13 330)", name: "Plum", sub: "Primary" },
            { swatch: "oklch(0.78 0.14 70)", name: "Gold", sub: "Accent" },
            { swatch: "oklch(0.62 0.13 165)", name: "Growth", sub: "Positive" },
            { swatch: "#FAF7F2", name: "Cream", sub: "#FAF7F2" },
          ].map((c) => (
            <div
              key={c.name}
              style={{
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ height: 120, background: c.swatch }} />
              <div style={{ padding: 14 }}>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{c.name}</div>
                <div style={{ fontSize: 11.5, color: "#9A8F82", marginTop: 3 }}>{c.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ============ 03 TYPE ============ */}
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.16em",
            color: "oklch(0.55 0.1 330)",
            marginBottom: 8,
          }}
        >
          03 — TYPE
        </div>
        <h2
          style={{
            fontFamily: SERIF,
            fontWeight: 400,
            fontSize: 34,
            margin: "0 0 36px",
            letterSpacing: "-0.01em",
          }}
        >
          Two voices: a steady worker, an editorial whisper.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: 24,
            marginBottom: 64,
          }}
        >
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: 20,
              padding: 36,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#A1968A",
                marginBottom: 18,
              }}
            >
              SPACE GROTESK · UI &amp; WORDMARK
            </div>
            <div
              style={{
                fontWeight: 600,
                fontSize: 46,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                marginBottom: 6,
              }}
            >
              ₹2.4L
            </div>
            <div style={{ fontWeight: 500, fontSize: 20, marginBottom: 14 }}>
              This month, figured out
            </div>
            <div style={{ fontSize: 14, color: "#57524B", lineHeight: 1.6 }}>
              Numbers, labels, buttons, the chat itself. Geometric but warm — it reads as a modern
              Indian product, not a Western clone.
            </div>
            <div
              style={{
                display: "flex",
                gap: 8,
                marginTop: 18,
                fontSize: 13,
                color: "#9A8F82",
              }}
            >
              <span>400</span>
              <span>·</span>
              <span style={{ fontWeight: 500 }}>500</span>
              <span>·</span>
              <span style={{ fontWeight: 600 }}>600</span>
              <span>·</span>
              <span style={{ fontWeight: 700 }}>700</span>
            </div>
          </div>
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: 20,
              padding: 36,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#A1968A",
                marginBottom: 18,
              }}
            >
              INSTRUMENT SERIF · EDITORIAL
            </div>
            <div style={{ fontFamily: SERIF, fontSize: 42, lineHeight: 1.1, marginBottom: 14 }}>
              Your business, figured out.
            </div>
            <div
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 24,
                color: "#57524B",
                marginBottom: 14,
              }}
            >
              &ldquo;Maine aapka mahina aanka.&rdquo;
            </div>
            <div style={{ fontSize: 14, color: "#57524B", lineHeight: 1.6 }}>
              Reserved for taglines, hero lines, and big moments. One serif line on a screen of sans
              makes the brand feel considered.
            </div>
          </div>
        </div>

        {/* ============ 04 VOICE / PRODUCT ============ */}
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.16em",
            color: "oklch(0.55 0.1 330)",
            marginBottom: 8,
          }}
        >
          04 — VOICE IN CONTEXT
        </div>
        <h2
          style={{
            fontFamily: SERIF,
            fontWeight: 400,
            fontSize: 34,
            margin: "0 0 14px",
            letterSpacing: "-0.01em",
          }}
        >
          Aanka lives in WhatsApp. Here&apos;s how it talks.
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: "#57524B",
            maxWidth: "64ch",
            margin: "0 0 36px",
          }}
        >
          Warm Hinglish, never robotic. It leads with the number, gives one insight, and offers one
          action. Calm, like a partner who already did the maths.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "340px 1fr",
            gap: 40,
            alignItems: "start",
          }}
        >
          {/* phone */}
          <div
            style={{
              background: "#1B1A22",
              borderRadius: 40,
              padding: 12,
              boxShadow: "0 24px 60px rgba(27,26,34,0.28)",
            }}
          >
            <div style={{ background: "oklch(0.93 0.03 150)", borderRadius: 30, overflow: "hidden" }}>
              <div
                style={{
                  background: "oklch(0.42 0.07 165)",
                  color: "#fff",
                  padding: "38px 18px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 11,
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "oklch(0.52 0.13 330)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AankaMark size={20} stroke="#fff" dot="oklch(0.85 0.13 80)" strokeWidth={5} dotR={5} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>Aanka</div>
                  <div style={{ fontSize: 11, opacity: 0.75 }}>online</div>
                </div>
              </div>
              <div
                style={{
                  padding: "18px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  minHeight: 320,
                }}
              >
                <div
                  style={{
                    alignSelf: "flex-start",
                    maxWidth: "80%",
                    background: "#fff",
                    borderRadius: "14px 14px 14px 4px",
                    padding: "11px 13px",
                    fontSize: 13.5,
                    lineHeight: 1.5,
                    color: "#1B1A22",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
                  }}
                >
                  Good morning ☀️ Maine aapka hafta aanka — <strong>₹91,200</strong>, pichle se 12%
                  upar.
                </div>
                <div
                  style={{
                    alignSelf: "flex-start",
                    maxWidth: "80%",
                    background: "#fff",
                    borderRadius: 14,
                    padding: "11px 13px",
                    fontSize: 13.5,
                    lineHeight: 1.5,
                    color: "#1B1A22",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
                  }}
                >
                  Sabse zyada paisa <strong>color services</strong> se aaya. Wednesday teen baar
                  khaali tha.
                </div>
                <div
                  style={{
                    alignSelf: "flex-start",
                    maxWidth: "85%",
                    background: "oklch(0.95 0.06 330)",
                    borderRadius: 14,
                    padding: "11px 13px",
                    fontSize: 13.5,
                    lineHeight: 1.5,
                    color: "oklch(0.3 0.1 330)",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
                  }}
                >
                  Slow-day offer Wednesday ko bhej dun? ~₹6k extra ho sakta hai.
                </div>
                <div
                  style={{
                    alignSelf: "flex-end",
                    maxWidth: "60%",
                    background: "oklch(0.82 0.13 150)",
                    borderRadius: "14px 14px 4px 14px",
                    padding: "11px 13px",
                    fontSize: 13.5,
                    lineHeight: 1.5,
                    color: "#163a26",
                  }}
                >
                  Haan bhejo 👍
                </div>
              </div>
            </div>
          </div>
          {/* voice principles */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              {
                title: "Number first, always",
                body: "Open with the figure that matters. The owner should get value before they finish the first line.",
              },
              {
                title: "One insight, one action",
                body: "Never a wall of stats. Notice one thing, suggest one move, make it a yes/no.",
              },
              {
                title: "Hinglish, like a partner",
                body: "Speaks the way owners think — warm, direct, a little familiar. Never corporate, never a robot reading a report.",
              },
            ].map((p) => (
              <div
                key={p.title}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: 16,
                  padding: "22px 24px",
                }}
              >
                <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 5 }}>{p.title}</div>
                <div style={{ fontSize: 14, color: "#57524B", lineHeight: 1.55 }}>{p.body}</div>
              </div>
            ))}
            <div
              style={{
                background: "oklch(0.97 0.015 330)",
                border: "1px solid oklch(0.9 0.03 330)",
                borderRadius: 16,
                padding: "22px 24px",
              }}
            >
              <div
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 22,
                  color: "oklch(0.4 0.11 330)",
                  lineHeight: 1.3,
                }}
              >
                &ldquo;Aanka isn&apos;t a dashboard you check. It&apos;s the partner that already
                checked.&rdquo;
              </div>
            </div>
          </div>
        </div>

        {/* ============ 05 IN THE WILD ============ */}
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.16em",
            color: "oklch(0.55 0.1 330)",
            margin: "64px 0 8px",
          }}
        >
          05 — IN THE WILD
        </div>
        <h2
          style={{
            fontFamily: SERIF,
            fontWeight: 400,
            fontSize: 34,
            margin: "0 0 36px",
            letterSpacing: "-0.01em",
          }}
        >
          A few places the brand shows up.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr", gap: 18 }}>
          <div
            style={{
              background: "#1B1A22",
              color: "#FAF7F2",
              borderRadius: 20,
              padding: 44,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: 240,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <AankaMark size={26} stroke="#FAF7F2" dot="oklch(0.8 0.16 80)" strokeWidth={4.4} dotR={4.6} />
              <span style={{ fontWeight: 600, fontSize: 22, letterSpacing: "-0.03em" }}>
                Aanka<span style={{ color: "oklch(0.7 0.16 330)" }}>.</span>
              </span>
            </div>
            <div>
              <div
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 34,
                  lineHeight: 1.15,
                  marginBottom: 10,
                }}
              >
                Stop guessing. Start knowing.
              </div>
              <div style={{ fontSize: 14, color: "rgba(250,247,242,0.6)" }}>
                Billboard / hero — the one-line promise.
              </div>
            </div>
          </div>
          <div
            style={{
              background: "oklch(0.52 0.13 330)",
              color: "#fff",
              borderRadius: 20,
              padding: 44,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: 240,
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", opacity: 0.7 }}>
              VISITING CARD
            </span>
            <div>
              <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 2 }}>Riya Sharma</div>
              <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 16 }}>Owner · Glow Studio</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  opacity: 0.9,
                }}
              >
                <AankaMark size={16} stroke="#fff" dot="oklch(0.85 0.13 80)" strokeWidth={5} dotR={5} />
                powered by Aanka
              </div>
            </div>
          </div>
        </div>

        {/* closing */}
        <div
          style={{
            marginTop: 60,
            paddingTop: 30,
            borderTop: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ fontSize: 14, color: "#9A8F82", maxWidth: "52ch", lineHeight: 1.5 }}>
            <strong style={{ color: "#57524B" }}>Next steps I&apos;d suggest:</strong> lock the
            trademark &amp; <em>aanka.app</em> / <em>.in</em> domains, then I can take this into a
            landing page, a pitch-deck cover, or the full onboarding flow.
          </div>
          <Link
            href="/finalists"
            style={{
              color: "oklch(0.52 0.13 330)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 14,
              whiteSpace: "nowrap",
            }}
          >
            ← Back to finalists
          </Link>
        </div>
      </div>
    </div>
  );
}
