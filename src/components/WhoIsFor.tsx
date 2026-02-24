"use client";

const audiences = [
  {
    title: "Founders scaling past spreadsheets",
    desc: "You've outgrown manual processes and need systems that match your ambition.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    title: "Agencies tired of duct-taping tools",
    desc: "Stop cobbling together 10 platforms. Get one system that does exactly what you need.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Service businesses needing automation",
    desc: "Automate the repetitive work so you can focus on delivering for your clients.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    ),
  },
  {
    title: "Businesses that want control and ownership",
    desc: "Own your tools. No vendor lock-in. No per-seat pricing that bleeds you dry.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function WhoIsFor() {
  return (
    <section className="py-28 md:py-40 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-center mb-20">
          <p className="reveal text-xs font-medium tracking-[0.2em] uppercase text-accent-light mb-5">
            Who This Is For
          </p>
          <h2 className="reveal text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-text-primary leading-tight">
            Built for Businesses
            <br />
            <span className="text-text-muted">That Mean Business</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {audiences.map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${(i % 4) + 1} group flex gap-6 p-7 md:p-9 rounded-xl border border-border-subtle bg-bg-card/40 hover:border-accent/25 hover:bg-accent-glow transition-all duration-500`}
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-surface flex items-center justify-center text-text-muted group-hover:text-accent-light group-hover:bg-accent/10 transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-text-primary mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-20 text-center">
          <div className="inline-block px-8 py-4 rounded-full border border-border-subtle bg-bg-card/40">
            <p className="text-sm md:text-base text-text-secondary">
              This is not for hobbyists.{" "}
              <span className="text-text-primary font-medium">
                This is for builders.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
