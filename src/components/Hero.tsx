"use client";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-end/5 blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(240,240,245,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(240,240,245,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in-up">
              <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent-light mb-6 px-3 py-1.5 rounded-full border border-accent/20 bg-accent-glow">
                Custom Systems Builder
              </span>
            </div>

            <h1
              className="animate-fade-in-up text-[2.25rem] leading-[1.1] md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-text-primary mb-6"
              style={{ animationDelay: "0.15s" }}
            >
              Why buy something built for everyone
              <br />
              <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent animate-gradient">
                when you can get something built for you?
              </span>
            </h1>

            <p
              className="animate-fade-in-up text-base md:text-lg text-text-secondary max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              style={{ animationDelay: "0.3s" }}
            >
              I design and build custom apps, automations, and internal tools
              tailored exactly to how your business operates — no templates, no
              compromises.
            </p>

            <div
              className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              style={{ animationDelay: "0.45s" }}
            >
              <a
                href="#cta"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-accent text-white font-medium text-base whitespace-nowrap transition-all duration-300 hover:bg-accent-light hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5 animate-pulse-glow"
              >
                Book a Strategy Call
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-border text-text-secondary font-medium text-base whitespace-nowrap transition-all duration-300 hover:border-accent/40 hover:text-text-primary hover:bg-accent-glow"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Animated dashboard mockup */}
          <div
            className="animate-fade-in-up hidden lg:block"
            style={{ animationDelay: "0.5s" }}
          >
            <DashboardMockup />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <div className="w-5 h-8 rounded-full border-2 border-text-muted/40 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-text-muted/60 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative animate-float">
      <div className="relative rounded-2xl border border-border bg-bg-card/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/30">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 text-center text-xs text-text-muted">
            custom-dashboard.app
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-5 space-y-4">
          {/* Top metrics row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Revenue", value: "$48.2K", change: "+12.5%" },
              { label: "Clients", value: "284", change: "+8.3%" },
              { label: "Automations", value: "47", change: "Active" },
            ].map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg bg-surface/60 border border-border-subtle p-3"
              >
                <p className="text-[10px] text-text-muted uppercase tracking-wider">
                  {metric.label}
                </p>
                <p className="text-lg font-semibold text-text-primary mt-0.5">
                  {metric.value}
                </p>
                <p className="text-[10px] text-green-400 mt-0.5">
                  {metric.change}
                </p>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="rounded-lg bg-surface/60 border border-border-subtle p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-text-muted">Pipeline Overview</p>
              <p className="text-[10px] text-accent-light">This month</p>
            </div>
            <div className="flex items-end gap-1.5 h-20">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                (h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-accent/40 to-accent-light/60 transition-all duration-500"
                    style={{
                      height: `${h}%`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                )
              )}
            </div>
          </div>

          {/* Activity rows */}
          <div className="space-y-2">
            {[
              { action: "New lead captured", time: "2m ago", dot: "bg-green-400" },
              { action: "Invoice auto-sent", time: "15m ago", dot: "bg-accent-light" },
              { action: "Workflow triggered", time: "1h ago", dot: "bg-yellow-400" },
            ].map((item) => (
              <div
                key={item.action}
                className="flex items-center gap-3 rounded-lg bg-surface/40 border border-border-subtle px-3 py-2"
              >
                <div className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
                <p className="text-xs text-text-secondary flex-1">
                  {item.action}
                </p>
                <p className="text-[10px] text-text-muted">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glow behind card */}
      <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl -z-10" />
    </div>
  );
}
