"use client";

export default function FinalCTA() {
  return (
    <section id="cta" className="py-32 md:py-48 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-accent/[0.06] blur-[150px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="reveal">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent-light mb-8">
            Ready?
          </p>
        </div>

        <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-tight mb-8">
          Stop Forcing Your Business
          <br />
          <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
            Into Someone Else&apos;s Box.
          </span>
        </h2>

        <p className="reveal reveal-delay-1 text-lg md:text-xl text-text-secondary mb-14">
          Let&apos;s build something that fits.
        </p>

        <div className="reveal reveal-delay-2">
          <a
            href="#"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 md:px-12 md:py-6 rounded-full bg-accent text-white font-semibold text-base md:text-lg whitespace-nowrap transition-all duration-300 hover:bg-accent-light hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5 animate-pulse-glow"
          >
            Book Your Custom Build Call
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        <p className="reveal reveal-delay-3 text-xs text-text-muted mt-8">
          Free strategy call. No commitments. Just clarity.
        </p>
      </div>
    </section>
  );
}
