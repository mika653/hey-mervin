"use client";

const testimonials = [
  {
    quote:
      "Mervin didn't just build us a tool — he built us a system that actually matches how we work. We cut our onboarding time by 60%.",
    name: "Sarah K.",
    role: "Agency Founder",
  },
  {
    quote:
      "We went from 4 different platforms to one custom dashboard. The clarity alone was worth it. The time saved? That's where the ROI really hit.",
    name: "James R.",
    role: "Operations Director",
  },
  {
    quote:
      "I was skeptical about custom builds. Then Mervin showed me what was possible. Now I can't imagine going back to off-the-shelf.",
    name: "Maria L.",
    role: "Founder & CEO",
  },
];

const tools = [
  "HighLevel",
  "Custom APIs",
  "AI Tools",
  "n8n",
  "Make",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Supabase",
];

export default function SocialProof() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <p className="reveal text-xs font-medium tracking-[0.2em] uppercase text-accent-light mb-4">
            Proof
          </p>
          <h2 className="reveal text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-text-primary leading-tight">
            Built for Businesses That Don&apos;t Settle
            <br />
            <span className="text-text-muted">for &quot;Good Enough&quot;</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-16">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${i + 1} p-6 md:p-7 rounded-xl border border-border-subtle bg-bg-card/40 flex flex-col`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-accent-light"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-5">
                &quot;{t.quote}&quot;
              </p>

              <div>
                <p className="text-sm font-semibold text-text-primary">
                  {t.name}
                </p>
                <p className="text-xs text-text-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tools marquee */}
        <div className="reveal">
          <p className="text-center text-xs font-medium tracking-[0.2em] uppercase text-text-muted mb-6">
            Tools & Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full text-xs font-medium text-text-secondary border border-border-subtle bg-bg-card/40 hover:border-accent/20 hover:text-accent-light transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
