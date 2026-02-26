/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Users,
  Cpu,
  LayoutDashboard,
  Workflow,
  Database,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform cursor-pointer">
            <span className="text-white font-display font-bold text-xl">m!</span>
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-brand-primary">hey mervin!</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors">The Struggle</a>
          <a href="#solution" className="text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors">The Fix</a>
          <a href="#how-it-works" className="text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors">How We Do It</a>
          <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors">Me</a>
          <button className="bg-brand-coral text-white px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-all shadow-lg shadow-brand-coral/25">
            Let's Chat
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl"
        >
          <a href="#problem" onClick={() => setIsOpen(false)} className="text-lg font-medium py-2">The Problem</a>
          <a href="#solution" onClick={() => setIsOpen(false)} className="text-lg font-medium py-2">Solution</a>
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-lg font-medium py-2">Process</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-medium py-2">About</a>
          <button className="bg-black text-white w-full py-4 rounded-xl font-bold text-lg mt-2">
            Book a Strategy Call
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const rotatingQuestions = [
  "can you build me a custom web app?",
  "can you help me automate my business?",
  "can you build me a CRM that actually works?",
  "can you connect all my tools together?",
  "can you build me a client portal?",
  "can you set up AI for my workflow?",
];

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const id = setInterval(() => setShowCursor((p) => !p), 530);
    return () => clearInterval(id);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let idx = 0;
    let charPos = 0;
    let deleting = false;

    const tick = () => {
      const question = rotatingQuestions[idx];

      if (!deleting) {
        charPos++;
        setDisplayText(question.slice(0, charPos));

        if (charPos === question.length) {
          deleting = true;
          timeout = setTimeout(tick, 2000);
          return;
        }
        timeout = setTimeout(tick, 50 + Math.random() * 30);
      } else {
        charPos--;
        setDisplayText(question.slice(0, charPos));

        if (charPos === 0) {
          deleting = false;
          idx = (idx + 1) % rotatingQuestions.length;
          timeout = setTimeout(tick, 400);
          return;
        }
        timeout = setTimeout(tick, 25);
      }
    };

    timeout = setTimeout(tick, 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-8">
            <Zap size={14} className="fill-amber-500" />
            Custom Apps & Automation Builder
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-4 text-slate-900">
            Hey Mervin,
          </h1>

          <div className="min-h-[4.5rem] md:min-h-[5.5rem] mb-4">
            <p className="text-3xl md:text-5xl font-display font-medium leading-tight text-slate-500">
              {displayText}
              <span
                className={`inline-block w-[3px] h-[1em] bg-brand-coral ml-1 align-middle rounded-full transition-opacity ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              />
            </p>
          </div>

          <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 bg-gradient-to-r from-brand-primary via-brand-violet to-brand-coral bg-clip-text text-transparent">
            I gotchu!
          </h2>

          <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
            Custom apps, automations, and internal tools — built exactly for how your business runs. No templates, no compromises.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-200 group">
              Let&apos;s make it happen
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-slate-700 border-2 border-slate-100 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              See the magic
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-brand-accent/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-[250px] h-[250px] bg-brand-coral/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-brand-violet/10 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};

const Problem = () => {
  const problems = [
    "Paying for features you'll never touch",
    "Missing the one button you actually need",
    "Duct-taping tools together with 'hope'",
    "Your team working for the software (it should be the other way around!)"
  ];

  return (
    <section id="problem" className="py-24 bg-brand-coral/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-slate-900">
            Is your software making your life harder?
          </h2>
          <div className="space-y-6 mb-12">
            {problems.map((problem, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 p-1 bg-brand-coral/15 rounded-lg">
                  <X size={16} className="text-brand-coral" />
                </div>
                <p className="text-xl text-slate-700 font-medium">{problem}</p>
              </motion.div>
            ))}
          </div>
          <div className="p-8 bg-white rounded-3xl border border-brand-violet/20 shadow-sm inline-block rotate-1">
            <p className="text-2xl font-display font-bold text-brand-violet">
              "Generic tools create friction. Custom systems create leverage."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  const services = [
    { icon: <LayoutDashboard className="text-brand-primary" />, title: "Custom CRMs", desc: "Manage your leads exactly how you sell. No more, no less.", bg: "bg-brand-primary/10", topBorder: "border-t-brand-primary" },
    { icon: <Workflow className="text-brand-accent" />, title: "Magic Automations", desc: "Connect your apps and let the robots do the boring stuff.", bg: "bg-brand-accent/10", topBorder: "border-t-brand-accent" },
    { icon: <Database className="text-brand-violet" />, title: "Internal Hubs", desc: "See everything that matters in one beautiful place.", bg: "bg-brand-violet/10", topBorder: "border-t-brand-violet" },
    { icon: <Users className="text-brand-coral" />, title: "Client Portals", desc: "Wow your clients with a space built just for them.", bg: "bg-brand-coral/10", topBorder: "border-t-brand-coral" },
    { icon: <Cpu className="text-brand-mint" />, title: "AI Sidekicks", desc: "Smart tools that help your team think and work faster.", bg: "bg-brand-mint/10", topBorder: "border-t-brand-mint" },
    { icon: <Shield className="text-brand-primary" />, title: "Ops Backbones", desc: "The digital glue that keeps your whole business together.", bg: "bg-brand-primary/10", topBorder: "border-t-brand-primary" }
  ];

  return (
    <section id="solution" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-slate-900">
            Custom Tools. <br /> Built for Your Team.
          </h2>
          <p className="text-xl text-slate-600">
            Every build starts with a conversation about how you actually work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? 1 : -1 }}
              className={`p-8 rounded-[2rem] bg-white border border-slate-100 border-t-4 ${service.topBorder} shadow-sm hover:shadow-xl transition-all`}
            >
              <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      step: "01",
      title: "Audit & Architecture",
      desc: "We map your workflows and identify inefficiencies. We don't just build; we strategize the most efficient path forward.",
      numColor: "text-brand-coral",
      dotColor: "bg-brand-coral"
    },
    {
      step: "02",
      title: "Custom Build",
      desc: "We design and develop a system tailored to your exact needs. You get regular updates and a transparent development cycle.",
      numColor: "text-brand-violet",
      dotColor: "bg-brand-violet"
    },
    {
      step: "03",
      title: "Optimization & Scale",
      desc: "We refine, automate, and evolve your system as you grow. Our partnership doesn't end at launch; we ensure it scales.",
      numColor: "text-brand-mint",
      dotColor: "bg-brand-mint"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">How It Works</h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            A simple, transparent framework to take you from chaos to clarity.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 relative">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 relative z-10">
              <div className={`w-3 h-3 rounded-full ${step.dotColor} mb-4`} />
              <div className={`text-6xl font-display font-black ${step.numColor} mb-6`}>{step.step}</div>
              <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-white/20">
                  <ChevronRight size={32} />
                </div>
              )}
            </div>
          ))}
          {/* Background Gradients */}
          <div className="absolute top-1/2 left-0 w-1/3 h-full bg-brand-coral/15 blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/3 w-1/3 h-full bg-brand-violet/15 blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-1/3 h-full bg-brand-mint/15 blur-[120px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

const WhoItIsFor = () => {
  const targets = [
    { text: "Founders scaling past spreadsheets", color: "text-brand-primary", border: "border-l-brand-primary" },
    { text: "Agencies tired of duct-taping tools", color: "text-brand-coral", border: "border-l-brand-coral" },
    { text: "Service businesses needing automation", color: "text-brand-violet", border: "border-l-brand-violet" },
    { text: "Businesses that want control and ownership", color: "text-brand-mint", border: "border-l-brand-mint" }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-slate-900">Who This Is For</h2>
          <div className="space-y-4 mb-10">
            {targets.map((target, i) => (
              <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 border-l-4 ${target.border} shadow-sm`}>
                <CheckCircle2 className={target.color} size={24} />
                <span className="text-lg font-medium text-slate-800">{target.text}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">
            This is not for hobbyists. This is for builders.
          </p>
        </div>
        <div className="bg-gradient-to-br from-brand-primary to-brand-coral rounded-[2.5rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="relative z-10">
            <h3 className="text-3xl font-display font-bold mb-6">Ready to scale, friend?</h3>
            <p className="text-violet-100 mb-8 leading-relaxed text-lg">
              If your team is spending more time managing tools than doing the work, it's time for a custom solution. Let's fix it together.
            </p>
            <button className="w-full bg-brand-accent text-slate-900 py-4 rounded-2xl font-bold text-lg hover:bg-amber-400 transition-all shadow-lg">
              Check my availability
            </button>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-coral/20 blur-3xl rounded-full" />
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-mint/15 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const tools = ["HighLevel", "Make.com", "Claude", "OpenAI", "Zapier", "Airtable", "Stripe", "Custom APIs", "HubSpot", "Slack", "Firebase"];
  
  return (
    <section className="py-24 bg-brand-violet/5 border-y border-brand-violet/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand-violet font-bold uppercase tracking-widest text-sm mb-4">Credibility</p>
          <h2 className="text-3xl font-display font-bold text-slate-900">Built for businesses that don&apos;t settle for &ldquo;good enough.&rdquo;</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-[2rem] border border-brand-mint/20 shadow-sm">
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map(i => <Zap key={i} size={16} className="fill-brand-accent text-brand-accent" />)}
            </div>
            <p className="text-lg text-slate-700 italic mb-6">
              "Mervin transformed our messy spreadsheet-based operation into a sleek, automated machine. We've saved at least 20 hours a week in manual data entry."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-full" />
              <div>
                <p className="font-bold text-slate-900">Sarah Jenkins</p>
                <p className="text-sm text-slate-500">CEO, GrowthScale Agency</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-brand-coral/20 shadow-sm">
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map(i => <Zap key={i} size={16} className="fill-brand-coral text-brand-coral" />)}
            </div>
            <p className="text-lg text-slate-700 italic mb-6">
              "The custom CRM Mervin built for us is exactly what we needed. No bloat, just the features we use every single day. It's paid for itself in two months."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-full" />
              <div>
                <p className="font-bold text-slate-900">David Chen</p>
                <p className="text-sm text-slate-500">Founder, Nexus Real Estate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="relative flex overflow-x-hidden py-4">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...tools, ...tools].map((tool, i) => (
            <span 
              key={i} 
              className="mx-8 text-2xl md:text-3xl font-display font-bold text-slate-300 hover:text-brand-primary transition-colors cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-mint/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand-violet/20 rounded-full blur-2xl pointer-events-none" />
          <div className="aspect-[4/5] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2">
            <img 
              src="https://picsum.photos/seed/mervin/800/1000" 
              alt="Mervin De Castro" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-blue-50 max-w-[240px] -rotate-2">
            <p className="text-sm font-bold text-brand-primary">"I don't just build apps; I build the leverage your business needs to win."</p>
          </div>
        </div>
        <div>
          <p className="text-brand-coral font-bold uppercase tracking-widest text-sm mb-4">The Builder</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-slate-900">Hey, I'm Mervin!</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            I'm an automation strategist and custom systems builder who loves helping businesses move from chaos to clarity.
          </p>
          <p className="text-lg text-slate-500 leading-relaxed mb-10">
            Think of me as your technical partner. I bridge the gap between complex technology and practical business results. I believe that software should serve you, not the other way around.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-4xl font-display font-bold mb-1 text-brand-violet">50+</p>
              <p className="text-slate-500 font-medium">Custom Builds</p>
            </div>
            <div>
              <p className="text-4xl font-display font-bold mb-1 text-brand-mint">10k+</p>
              <p className="text-slate-500 font-medium">Hours Automated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-primary via-brand-violet to-brand-coral text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 max-w-4xl mx-auto leading-tight">
          Stop Forcing Your Business Into Someone Else's Box.
        </h2>
        <p className="text-2xl text-blue-100 mb-12">Let's build something that actually fits.</p>
        <button className="bg-brand-accent text-slate-900 px-12 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-amber-500/20 flex items-center justify-center gap-3 mx-auto group">
          Let's Chat About Your Build
          <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent blur-[160px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-violet blur-[160px] rounded-full" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-brand-coral blur-[140px] rounded-full" />
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-blue-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center rotate-3">
            <span className="text-white font-display font-bold text-sm">m!</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-brand-primary">hey mervin!</span>
        </div>
        <div className="flex gap-8 text-sm text-slate-500 font-bold">
          <a href="#" className="hover:text-brand-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-brand-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Email</a>
        </div>
        <p className="text-sm text-slate-400 font-medium">© 2024 hey mervin! All rights reserved.</p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Process />
        <WhoItIsFor />
        <SocialProof />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

