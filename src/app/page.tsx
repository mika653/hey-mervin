"use client";

import { useReveal } from "@/lib/useReveal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import WhoIsFor from "@/components/WhoIsFor";
import SocialProof from "@/components/SocialProof";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <WhoIsFor />
        <SocialProof />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
