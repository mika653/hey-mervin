"use client";

const steps = [
  {
    number: "01",
    title: "Audit & Architecture",
    desc: "We map your workflows and identify inefficiencies. Every build starts with understanding how your business actually operates.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Custom Build",
    desc: "We design and develop a system tailored to your exact needs. No off-the-shelf compromises.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Optimization & Scale",
    desc: "We refine, automate, and evolve your system as you grow. Your tools grow with your business.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-elevated/50 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-center mb-20">
          <p className="reveal text-xs font-medium tracking-[0.2em] uppercase text-accent-light mb-5">
            The Process
          </p>
          <h2 className="reveal text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-text-primary leading-tight">
            How It Works
          </h2>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden">
          <div className="flex gap-5 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory -mx-6 px-6">
            {steps.map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((_, i) => (
              <div key={i} className="w-8 h-1 rounded-full bg-border" />
            ))}
          </div>
        </div>

        {/* Desktop: grid with connector lines */}
        <div className="hidden md:grid md:grid-cols-3 gap-7 lg:gap-9">
          {steps.map((step, i) => (
            <div key={step.number} className={`reveal reveal-delay-${i + 1} relative`}>
              <StepCardDesktop step={step} isLast={i === steps.length - 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
}: {
  step: (typeof steps)[number];
}) {
  return (
    <div className="min-w-[300px] max-w-[320px] snap-center flex-shrink-0">
      <div className="h-full p-8 rounded-xl border border-border-subtle bg-bg-card/60 relative overflow-hidden">
        <div className="absolute top-5 right-5 text-5xl font-black text-text-primary/[0.04]">
          {step.number}
        </div>
        <div className="w-13 h-13 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light mb-6">
          {step.icon}
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-4">
          {step.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          {step.desc}
        </p>
      </div>
    </div>
  );
}

function StepCardDesktop({
  step,
  isLast,
}: {
  step: (typeof steps)[number];
  isLast: boolean;
}) {
  return (
    <div className="group h-full p-8 md:p-9 rounded-xl border border-border-subtle bg-bg-card/40 hover:border-accent/25 hover:bg-accent-glow transition-all duration-500 relative overflow-hidden">
      <div className="absolute top-6 right-6 text-6xl font-black text-text-primary/[0.04] group-hover:text-accent/[0.06] transition-colors duration-500">
        {step.number}
      </div>
      <div className="w-13 h-13 rounded-lg bg-surface flex items-center justify-center text-text-muted group-hover:text-accent-light group-hover:bg-accent/10 transition-all duration-300 mb-6">
        {step.icon}
      </div>
      <h3 className="text-xl font-bold text-text-primary mb-4">
        {step.title}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed">
        {step.desc}
      </p>
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-5 lg:-right-6 w-10 lg:w-12 h-[1px] bg-border-subtle" />
      )}
    </div>
  );
}
