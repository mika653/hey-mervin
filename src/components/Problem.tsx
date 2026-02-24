"use client";

const problems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "Paying for features you don't use",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    text: "Missing features you actually need",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.181 1.414-5.994L2 7.82l6.112-.53L11.42 2l3.307 5.29L20.84 7.82l-5.45 4.537 1.414 5.994z" />
      </svg>
    ),
    text: "Workarounds instead of workflows",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    text: "Teams adapting to software instead of software adapting to them",
  },
];

export default function Problem() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="relative max-w-4xl mx-auto px-5">
        <div className="text-center mb-16">
          <p className="reveal text-xs font-medium tracking-[0.2em] uppercase text-accent-light mb-4">
            The Problem
          </p>
          <h2 className="reveal text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-text-primary leading-tight">
            Most Businesses Are Using
            <br />
            <span className="text-text-muted">Tools That Don&apos;t Fit</span>
          </h2>
        </div>

        <div className="grid gap-4 md:gap-5 max-w-2xl mx-auto">
          {problems.map((problem, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group flex items-center gap-5 p-5 md:p-6 rounded-xl border border-border-subtle bg-bg-card/50 hover:border-accent/20 hover:bg-accent-glow transition-all duration-500`}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-text-muted group-hover:text-accent-light group-hover:bg-accent/10 transition-all duration-300">
                {problem.icon}
              </div>
              <p className="text-base md:text-lg text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                {problem.text}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 text-center">
          <div className="inline-block">
            <p className="text-lg md:text-xl font-medium text-text-primary">
              Generic tools create friction.
            </p>
            <p className="text-lg md:text-xl font-medium bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent mt-1">
              Custom systems create leverage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
