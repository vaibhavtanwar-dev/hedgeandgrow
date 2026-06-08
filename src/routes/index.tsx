import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/hedge/Navbar";
import { ScrollProgress } from "@/components/hedge/ScrollProgress";
import { Hero } from "@/components/hedge/Hero";
import { TrustIndicators } from "@/components/hedge/TrustIndicators";
import { WhyTradersLose } from "@/components/hedge/WhyTradersLose";
import { Framework } from "@/components/hedge/Framework";
import { PerformanceDashboard } from "@/components/hedge/PerformanceDashboard";
import { TradeTransparency } from "@/components/hedge/TradeTransparency";
import { Education } from "@/components/hedge/Education";
import { Founder } from "@/components/hedge/Founder";
import { Testimonials } from "@/components/hedge/Testimonials";
import { FAQ } from "@/components/hedge/FAQ";
import { Contact } from "@/components/hedge/Contact";
import { Footer } from "@/components/hedge/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hedge & Grow — Risk-First Trading Education" },
      { name: "description", content: "Protect capital first. Grow wealth second. India's premium financial education ecosystem for hedging, risk management, and disciplined trading." },
      { property: "og:title", content: "Hedge & Grow — Hedge Karo. Mauj Karo." },
      { property: "og:description", content: "Risk-first trading education. Capital protection, hedging, and disciplined process." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-dvh bg-background text-foreground antialiased overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <TrustIndicators />
      <WhyTradersLose />
      <Framework />
      <PerformanceDashboard />
      <TradeTransparency />
      <Education />
      <Founder />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
