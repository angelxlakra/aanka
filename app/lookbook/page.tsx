"use client";

import { useState, type ReactNode } from "react";

const SANS = "var(--font-sans)";
const SERIF = "var(--font-serif)";

type NameId = "lekha" | "munim" | "disha" | "sahi" | "aanka";

function Mark({ id, accent }: { id: NameId; accent: string }) {
  const common = { width: 44, height: 44, viewBox: "0 0 44 44", fill: "none", style: { marginBottom: 18 } } as const;
  switch (id) {
    case "lekha":
      return (
        <svg {...common}>
          <line x1="9" y1="14" x2="30" y2="14" stroke={accent} strokeWidth="3" strokeLinecap="round" />
          <line x1="9" y1="22" x2="35" y2="22" stroke={accent} strokeWidth="3" strokeLinecap="round" />
          <line x1="9" y1="30" x2="22" y2="30" stroke={accent} strokeWidth="3" strokeLinecap="round" />
          <circle cx="33" cy="30" r="3.4" fill={accent} />
        </svg>
      );
    case "munim":
      return (
        <svg {...common}>
          <circle cx="22" cy="16" r="7" stroke={accent} strokeWidth="3" />
          <path d="M10 35c0-7 5.4-11 12-11s12 4 12 11" stroke={accent} strokeWidth="3" strokeLinecap="round" />
          <circle cx="22" cy="16" r="2.4" fill={accent} />
        </svg>
      );
    case "disha":
      return (
        <svg {...common}>
          <circle cx="22" cy="22" r="14" stroke={accent} strokeWidth="3" />
          <path d="M22 22 L29 15 L25 24 L16 28 Z" fill={accent} />
        </svg>
      );
    case "sahi":
      return (
        <svg {...common}>
          <circle cx="22" cy="22" r="14" stroke={accent} strokeWidth="3" />
          <path d="M15 22.5 L20 27.5 L30 16.5" stroke={accent} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "aanka":
      return (
        <svg {...common}>
          <path d="M12 32 L20 14 L28 32" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="15.5" y1="25" x2="24.5" y2="25" stroke={accent} strokeWidth="3" strokeLinecap="round" />
          <circle cx="32" cy="16" r="3.4" fill={accent} />
        </svg>
      );
  }
}

type Section = {
  id: NameId;
  num: string;
  eyebrow: string;
  accent: string; // section number + mark color
  markAccent: string; // some marks differ from the number accent
  btnAccent: string;
  dark?: boolean;
  badge?: string;
  shortlistBadge: { bg: string; color: string };
  name: string;
  pron: string;
  blurb: ReactNode;
  para: ReactNode;
  tags: string[];
  tagBg: string;
  tagColor: string;
  tagline: string;
  chat: { bg: string; color: string; body: ReactNode };
  watchout: ReactNode;
  marginBottom: number;
};

const SECTIONS: Section[] = [
  {
    id: "lekha",
    num: "01",
    eyebrow: "THE THINKING LEDGER",
    accent: "oklch(0.52 0.13 272)",
    markAccent: "oklch(0.52 0.13 272)",
    btnAccent: "oklch(0.52 0.13 272)",
    shortlistBadge: { bg: "oklch(0.52 0.13 272)", color: "#fff" },
    name: "Lekha",
    pron: "/ˈleɪ.kʰaː/ · लेखा",
    blurb: (
      <>
        <strong style={{ color: "#211F1C", fontWeight: 600 }}>
          Means &ldquo;the account, the reckoning.&rdquo;
        </strong>{" "}
        Also a real given name — so the product feels like a person who keeps your books, not
        software.
      </>
    ),
    para: (
      <>
        Every owner already has a fuzzy ledger in their head. <em>Lekha</em> is that ledger made
        calm, accurate and able to talk back. The word is ancient and trusted, the spelling is clean,
        and it scales far past salons — any business keeps a <em>lekha</em>.
      </>
    ),
    tags: ["Persona + tool", "2 syllables", "Category-free"],
    tagBg: "oklch(0.96 0.02 272)",
    tagColor: "oklch(0.42 0.11 272)",
    tagline: "“Lekha. Your business, finally in plain numbers.”",
    chat: {
      bg: "oklch(0.95 0.05 150)",
      color: "#1f3d2b",
      body: (
        <>
          Monday, 9 AM. Pichle hafte ₹84,200 aaya — 12% up. Tuesday slow tha; ek offer bhej dunga?{" "}
          <span style={{ opacity: 0.6, fontSize: 11 }}>— Lekha</span>
        </>
      ),
    },
    watchout: (
      <>
        <strong style={{ color: "#6B665F" }}>Watch-out:</strong> a popular first name — check it reads
        as a brand in your market.
      </>
    ),
    marginBottom: 30,
  },
  {
    id: "munim",
    num: "02",
    eyebrow: "THE TRUSTED BOOKKEEPER",
    accent: "oklch(0.82 0.15 92)",
    markAccent: "oklch(0.82 0.15 92)",
    btnAccent: "oklch(0.62 0.13 150)",
    dark: true,
    badge: "★ My pick to beat",
    shortlistBadge: { bg: "oklch(0.84 0.13 150)", color: "#211F1C" },
    name: "Munim",
    pron: "/muˈniːm/ · मुनीम",
    blurb: (
      <>
        <strong style={{ color: "#FAFAF8", fontWeight: 600 }}>The trusted bookkeeper</strong> every
        Indian business has leaned on for centuries — the one who quietly knows where every rupee
        went.
      </>
    ),
    para: (
      <>
        This is the sticky one. You&apos;re not inventing a metaphor — you&apos;re{" "}
        <em>reviving a role everyone already trusts</em>. The pitch writes itself: &ldquo;Every great
        Indian business had a munim. Yours now fits in your phone.&rdquo; Deeply rooted, instantly
        understood, and premium because it implies <em>someone is minding the shop.</em>
      </>
    ),
    tags: ["Built-in story", "Owns a real role", "Salon-free"],
    tagBg: "rgba(250,250,248,0.1)",
    tagColor: "oklch(0.86 0.13 92)",
    tagline: "“Munim. Every business deserves one. Now everyone gets one.”",
    chat: {
      bg: "oklch(0.32 0.04 150)",
      color: "oklch(0.94 0.03 150)",
      body: (
        <>
          Seth-ji, August band ho gaya. ₹3.1L — abhi tak ka best month. Diwali ke liye stock badha
          dein? <span style={{ opacity: 0.55, fontSize: 11 }}>— Munim</span>
        </>
      ),
    },
    watchout: (
      <>
        <strong style={{ color: "rgba(250,250,248,0.72)" }}>Watch-out:</strong> male-coded &amp;
        traditional — lean modern in the visual identity to balance it.
      </>
    ),
    marginBottom: 30,
  },
  {
    id: "disha",
    num: "03",
    eyebrow: "THE ONE WHO KNOWS THE WAY",
    accent: "oklch(0.58 0.13 45)",
    markAccent: "oklch(0.58 0.13 45)",
    btnAccent: "oklch(0.58 0.13 45)",
    shortlistBadge: { bg: "oklch(0.58 0.13 45)", color: "#fff" },
    name: "Disha",
    pron: "/ˈdɪ.ʃaː/ · दिशा",
    blurb: (
      <>
        <strong style={{ color: "#211F1C", fontWeight: 600 }}>Means &ldquo;direction.&rdquo;</strong>{" "}
        Not just numbers — the <em>which-way-now</em>. Positions you as a guide, not a dashboard.
      </>
    ),
    para: (
      <>
        Owners don&apos;t lie awake wanting data — they want to know <em>what to do next.</em>{" "}
        <em>Disha</em> sells the outcome: direction. It&apos;s aspirational and calm, reads cleanly in
        English, and works for any business steering by feel today. The compass mark practically draws
        itself.
      </>
    ),
    tags: ["Sells the outcome", "Advisor energy", "Strong mark"],
    tagBg: "oklch(0.96 0.025 45)",
    tagColor: "oklch(0.46 0.12 45)",
    tagline: "“Disha. Less guessing. More knowing which way.”",
    chat: {
      bg: "oklch(0.95 0.05 150)",
      color: "#1f3d2b",
      body: (
        <>
          Weekends pe aapki kamai 60% hai. Agar Tuesday ko ek slow-day offer chalayein, toh ₹18k/month
          extra. Karein? <span style={{ opacity: 0.6, fontSize: 11 }}>— Disha</span>
        </>
      ),
    },
    watchout: (
      <>
        <strong style={{ color: "#6B665F" }}>Watch-out:</strong> used by some edu/NGO brands — verify
        the domain &amp; handle are gettable.
      </>
    ),
    marginBottom: 30,
  },
  {
    id: "sahi",
    num: "04",
    eyebrow: "THE REASSURANCE",
    accent: "oklch(0.52 0.1 200)",
    markAccent: "oklch(0.52 0.1 200)",
    btnAccent: "oklch(0.52 0.1 200)",
    shortlistBadge: { bg: "oklch(0.52 0.1 200)", color: "#fff" },
    name: "Sahi",
    pron: "/ˈsə.hiː/ · सही",
    blurb: (
      <>
        <strong style={{ color: "#211F1C", fontWeight: 600 }}>
          Means &ldquo;right / correct.&rdquo;
        </strong>{" "}
        The word you say when something checks out. The tick mark, in language.
      </>
    ),
    para: (
      <>
        The punchiest of the set. One syllable-and-a-half, impossible to mispronounce, and it carries
        pure reassurance — <em>&ldquo;sahi hai.&rdquo;</em> It IS the checkmark. Confident, modern, and
        it never boxes you into an industry. The risk is it&apos;s a common word; the brand has to
        earn the meaning.
      </>
    ),
    tags: ["Shortest", "Verb-able", "Tick = logo"],
    tagBg: "oklch(0.96 0.02 200)",
    tagColor: "oklch(0.42 0.09 200)",
    tagline: "“Sahi. Pata chal jaata hai. Sahi waqt pe.”",
    chat: {
      bg: "oklch(0.95 0.05 150)",
      color: "#1f3d2b",
      body: (
        <>
          Aapka cash flow sahi hai ✓ Lekin 3 regulars 5 hafte se nahi aaye — ek reminder bhej dun?{" "}
          <span style={{ opacity: 0.6, fontSize: 11 }}>— Sahi</span>
        </>
      ),
    },
    watchout: (
      <>
        <strong style={{ color: "#6B665F" }}>Watch-out:</strong> very common word — trademarking the
        bare term is hard; pair with a strong mark.
      </>
    ),
    marginBottom: 30,
  },
  {
    id: "aanka",
    num: "05",
    eyebrow: "THE COINED ONE",
    accent: "oklch(0.5 0.12 330)",
    markAccent: "oklch(0.5 0.12 330)",
    btnAccent: "oklch(0.5 0.12 330)",
    shortlistBadge: { bg: "oklch(0.5 0.12 330)", color: "#fff" },
    name: "Aanka",
    pron: "/ˈaːn.kaː/ · आँका",
    blurb: (
      <>
        <strong style={{ color: "#211F1C", fontWeight: 600 }}>
          From <em>aankda</em> — &ldquo;figures.&rdquo;
        </strong>{" "}
        Coined to mean <em>figured out, gauged, sized up.</em> Most ownable of the five.
      </>
    ),
    para: (
      <>
        If you want a name no one else can claim, this is it. <em>Aanka</em> sounds like a word but
        isn&apos;t taken — rooted in <em>aankda</em> (figures) and <em>aankna</em> (to gauge), so it
        whispers &ldquo;numbers, understood&rdquo; to an Indian ear while staying clean and global on
        a logo. A blank canvas you get to define.
      </>
    ),
    tags: ["Trademarkable", "Domain-friendly", "Globally clean"],
    tagBg: "oklch(0.96 0.025 330)",
    tagColor: "oklch(0.42 0.11 330)",
    tagline: "“Aanka. Your business, figured out.”",
    chat: {
      bg: "oklch(0.95 0.05 150)",
      color: "#1f3d2b",
      body: (
        <>
          Maine aapka mahina aanka — ₹2.4L, margin 38%. Sabse zyada paisa color services se aa raha
          hai. <span style={{ opacity: 0.6, fontSize: 11 }}>— Aanka</span>
        </>
      ),
    },
    watchout: (
      <>
        <strong style={{ color: "#6B665F" }}>Watch-out:</strong> coined words need more marketing fuel
        to teach meaning — but you own 100% of it.
      </>
    ),
    marginBottom: 14,
  },
];

export default function LookbookPage() {
  const [liked, setLiked] = useState<Record<NameId, boolean>>({
    lekha: false,
    munim: false,
    disha: false,
    sahi: false,
    aanka: false,
  });

  const count = SECTIONS.filter((s) => liked[s.id]).length;
  const shortlistLabel = `${count} shortlisted`;

  const toggle = (id: NameId) => setLiked((prev) => ({ ...prev, [id]: !prev[id] }));

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
      {/* sticky bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 28px",
          background: "rgba(250,250,248,0.82)",
          backdropFilter: "saturate(140%) blur(10px)",
          WebkitBackdropFilter: "saturate(140%) blur(10px)",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 13,
            letterSpacing: "0.03em",
            color: "#6B665F",
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
          <span style={{ fontWeight: 600, color: "#211F1C" }}>Brand exploration</span>
          <span style={{ opacity: 0.45 }}>/</span>
          <span>5 directions, fully branded</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 13,
            fontWeight: 600,
            padding: "7px 15px",
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: 999,
            background: "#fff",
          }}
        >
          <span style={{ color: "oklch(0.6 0.16 18)" }}>♥</span>
          <span>{shortlistLabel}</span>
        </div>
      </div>

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "60px 28px 110px" }}>
        {/* HERO */}
        <div
          style={{
            marginBottom: 16,
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.18em",
            color: "#A1968A",
          }}
        >
          THE NAMING PROCESS
        </div>
        <h1
          style={{
            fontFamily: SERIF,
            fontWeight: 400,
            fontSize: 60,
            lineHeight: 1.04,
            letterSpacing: "-0.01em",
            margin: "0 0 26px",
            maxWidth: "17ch",
          }}
        >
          Five names worthy of the thing you&apos;re actually building.
        </h1>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: "#57524B",
            maxWidth: "60ch",
            margin: "0 0 32px",
          }}
        >
          Not a list of words — five formed directions. Each is premium and calm, sits between a
          person and a tool, drops &ldquo;salon&rdquo; so it can grow, and carries an Indian soul
          without wearing a costume. Read each one&apos;s case, then shortlist what sticks.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 9, marginBottom: 30 }}>
          {[
            "Premium & aspirational",
            "Calm & trustworthy",
            "A guide that just tells you",
            "Indian soul, no costume",
          ].map((t) => (
            <span
              key={t}
              style={{
                fontSize: 12.5,
                padding: "7px 14px",
                borderRadius: 999,
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.09)",
                color: "#3D3A35",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            padding: "12px 18px",
            borderRadius: 12,
            background: "#F1EFEA",
            fontSize: 14,
            color: "#6B665F",
          }}
        >
          <span
            style={{
              textDecoration: "line-through",
              textDecorationColor: "#C7402F",
              textDecorationThickness: 2,
            }}
          >
            SalonOS · SalonIQ
          </span>
          <span style={{ fontWeight: 500, color: "#3D3A35" }}>retired. the NPC names. 🪦</span>
        </div>

        <div style={{ height: 1, background: "rgba(0,0,0,0.09)", margin: "54px 0" }} />

        {/* name sections */}
        {SECTIONS.map((s) => {
          const on = liked[s.id];
          return (
            <section
              key={s.id}
              style={{
                position: "relative",
                background: s.dark ? "#211F1C" : "#fff",
                color: s.dark ? "#FAFAF8" : undefined,
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: 20,
                padding: 38,
                marginBottom: s.marginBottom,
                boxShadow: s.dark
                  ? "0 14px 40px rgba(33,31,28,0.18)"
                  : "0 1px 2px rgba(0,0,0,0.03)",
                display: "grid",
                gridTemplateColumns: "300px 1fr",
                gap: 42,
              }}
            >
              {s.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: -11,
                    left: 26,
                    fontSize: 11.5,
                    fontWeight: 600,
                    letterSpacing: "0.03em",
                    color: "#211F1C",
                    background: "oklch(0.82 0.15 92)",
                    padding: "5px 13px",
                    borderRadius: 999,
                  }}
                >
                  {s.badge}
                </div>
              )}
              {on && (
                <div
                  style={{
                    position: "absolute",
                    top: -11,
                    right: 26,
                    fontSize: 11.5,
                    fontWeight: 600,
                    letterSpacing: "0.03em",
                    color: s.shortlistBadge.color,
                    background: s.shortlistBadge.bg,
                    padding: "5px 13px",
                    borderRadius: 999,
                  }}
                >
                  ♥ Shortlisted
                </div>
              )}

              {/* left column */}
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 24 }}>
                  <span style={{ fontFamily: SERIF, fontSize: 28, color: s.accent }}>{s.num}</span>
                  <span
                    style={{
                      fontSize: 11.5,
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      color: s.dark ? "rgba(250,250,248,0.5)" : "#A1968A",
                    }}
                  >
                    {s.eyebrow}
                  </span>
                </div>
                <Mark id={s.id} accent={s.markAccent} />
                <div
                  style={{
                    fontFamily: SANS,
                    fontWeight: 500,
                    fontSize: 48,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    marginBottom: 10,
                  }}
                >
                  {s.name}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: s.dark ? "rgba(250,250,248,0.5)" : "#9A8F82",
                    marginBottom: 18,
                  }}
                >
                  {s.pron}
                </div>
                <p
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.55,
                    color: s.dark ? "rgba(250,250,248,0.78)" : "#57524B",
                    margin: 0,
                  }}
                >
                  {s.blurb}
                </p>
              </div>

              {/* right column */}
              <div>
                <p
                  style={{
                    fontSize: 16.5,
                    lineHeight: 1.6,
                    color: s.dark ? "rgba(250,250,248,0.85)" : "#3D3A35",
                    margin: "0 0 22px",
                  }}
                >
                  {s.para}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 12.5,
                        padding: "6px 12px",
                        borderRadius: 8,
                        background: s.tagBg,
                        color: s.tagColor,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    fontFamily: SERIF,
                    fontSize: 23,
                    lineHeight: 1.3,
                    color: s.dark ? "#FAFAF8" : "#211F1C",
                    marginBottom: 26,
                  }}
                >
                  {s.tagline}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 10,
                    marginBottom: 22,
                  }}
                >
                  <div
                    style={{
                      maxWidth: 300,
                      background: s.chat.bg,
                      borderRadius: "14px 14px 14px 4px",
                      padding: "11px 14px",
                      fontSize: 14,
                      lineHeight: 1.5,
                      color: s.chat.color,
                    }}
                  >
                    {s.chat.body}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    paddingTop: 18,
                    borderTop: s.dark
                      ? "1px solid rgba(250,250,248,0.12)"
                      : "1px solid rgba(0,0,0,0.07)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      color: s.dark ? "rgba(250,250,248,0.5)" : "#9A8F82",
                    }}
                  >
                    {s.watchout}
                  </div>
                  <button
                    onClick={() => toggle(s.id)}
                    style={{
                      cursor: "pointer",
                      flexShrink: 0,
                      whiteSpace: "nowrap",
                      fontFamily: SANS,
                      fontSize: 13.5,
                      fontWeight: 600,
                      padding: "9px 18px",
                      borderRadius: 999,
                      border: on ? `1px solid ${s.btnAccent}` : "1px solid rgba(0,0,0,0.16)",
                      background: on ? s.btnAccent : "transparent",
                      color: on ? "#fff" : "#3D3A35",
                      transition: "all 0.18s ease",
                    }}
                  >
                    {on ? "♥ Shortlisted" : "♡ Shortlist"}
                  </button>
                </div>
              </div>
            </section>
          );
        })}

        {/* closing note */}
        <div
          style={{
            marginTop: 48,
            padding: "30px 34px",
            borderRadius: 18,
            background: "#211F1C",
            color: "#FAFAF8",
          }}
        >
          <div
            style={{
              fontSize: 11.5,
              fontWeight: 600,
              letterSpacing: "0.16em",
              color: "oklch(0.82 0.15 92)",
              marginBottom: 14,
            }}
          >
            A NOTE ON ROOTS
          </div>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: "rgba(250,250,248,0.82)",
              margin: "0 0 14px",
              maxWidth: "72ch",
            }}
          >
            You mentioned the Oraon / Kurukh heritage — and that you <em>don&apos;t</em> want a name
            that tries too hard to wear it. I kept these pan-Indian on purpose: warm and rooted, but
            never costume. The heritage is better carried in the <em>story</em> and the{" "}
            <em>craft</em> of the identity than spelled into the name.
          </p>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: "rgba(250,250,248,0.82)",
              margin: 0,
              maxWidth: "72ch",
            }}
          >
            If you want, I&apos;ll develop a sixth direction drawn carefully from Kurukh — done
            respectfully, with a real word, not a guess. Just say the word. Otherwise:{" "}
            <strong style={{ color: "#FAFAF8" }}>shortlist your favourites above</strong> and
            I&apos;ll take the top one into a full mini brand board — logo, type, colour, the works.
          </p>
        </div>
      </div>
    </div>
  );
}
