"use client";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-40 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-elevated/50 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-5 gap-12 md:gap-20 items-start">
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
            <p className="reveal text-xs font-medium tracking-[0.2em] uppercase text-accent-light mb-5">
              The Builder
            </p>
            <h2 className="reveal text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-8">
              Hey, I&apos;m Mervin!
            </h2>
            <div className="space-y-6">
              <p className="reveal reveal-delay-1 text-base text-text-secondary leading-relaxed">
                I&apos;m a certified HighLevel specialist who gets genuinely
                excited about solving automation puzzles. You know those
                repetitive tasks that eat up your team&apos;s time? Or when your
                tools just won&apos;t talk to each other properly? That&apos;s
                exactly the kind of challenge I enjoy tackling.
              </p>
              <p className="reveal reveal-delay-2 text-base text-text-secondary leading-relaxed mb-2">
                I help business owners who are dealing with:
              </p>
              <ul className="reveal reveal-delay-3 space-y-4">
                {[
                  "Manual processes that feel like they should be automated by now",
                  "Tools that don't play nicely together (even when they're supposed to)",
                  "Workflows that work sometimes, but break when you need them most",
                  "The feeling that technology should be making life easier, not harder",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-base text-text-secondary leading-relaxed">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
