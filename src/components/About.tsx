"use client";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-elevated/50 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-5">
        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-center">
          {/* Photo placeholder */}
          <div className="reveal md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-accent/20 to-gradient-end/10 border border-border-subtle overflow-hidden flex items-center justify-center">
                {/* Placeholder - Replace with actual photo */}
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-surface mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-10 h-10 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="text-xs text-text-muted">Photo</p>
                </div>
              </div>
              <div className="absolute -inset-3 bg-accent/5 rounded-3xl blur-xl -z-10" />
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-3">
            <p className="reveal text-xs font-medium tracking-[0.2em] uppercase text-accent-light mb-4">
              The Builder
            </p>
            <h2 className="reveal text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-6">
              Built by Mervin De Castro
            </h2>
            <div className="space-y-4">
              <p className="reveal reveal-delay-1 text-base text-text-secondary leading-relaxed">
                Automation strategist and custom systems builder helping
                businesses move from chaos to clarity.
              </p>
              <p className="reveal reveal-delay-2 text-base text-text-secondary leading-relaxed">
                I work with founders, agencies, and growing teams to replace
                fragmented tools and manual processes with streamlined, custom-built
                systems that actually fit how they operate.
              </p>
              <p className="reveal reveal-delay-3 text-base text-text-secondary leading-relaxed">
                Every project starts with one question:{" "}
                <span className="text-text-primary font-medium italic">
                  &quot;What does your business actually need?&quot;
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
