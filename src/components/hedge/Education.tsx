import { motion } from "framer-motion";
import { Shield, Scale, Layers, Brain, LineChart, Briefcase, ArrowUpRight } from "lucide-react";

const cats = [
  { icon: Shield, title: "Hedging", body: "Construct defined-risk structures that let you stay in the market when conviction is high and uncertainty is higher." },
  { icon: Scale, title: "Risk Management", body: "Sizing models, stop discipline, and portfolio heat — the unsexy work that compounds careers." },
  { icon: Layers, title: "Options", body: "Vol, theta, structure. Use them as tools of precision, not lottery tickets." },
  { icon: Brain, title: "Trading Psychology", body: "The behavioural loops that destroy P&Ls — and the systems that quietly fix them." },
  { icon: LineChart, title: "Market Analysis", body: "Read flow, structure, and context. Frameworks for objective decision-making in any regime." },
  { icon: Briefcase, title: "Portfolio Protection", body: "Diversification, correlation, tail-risk hedges. Build a book that can survive the year you didn't see coming." },
];

export function Education() {
  return (
    <section id="insights" className="relative py-24 sm:py-32 bg-surface">
      <div className="container-page">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Educational ecosystem</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight max-w-2xl">
              A library built for <span className="serif-italic text-gradient-brand">survival.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Deep, structured, evergreen. Built to be read once and referenced for years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {cats.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.title}
                href="#"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group bg-background p-7 sm:p-8 hover:bg-elevated transition-colors relative overflow-hidden"
              >
                <div className="flex items-start justify-between">
                  <div className="h-10 w-10 rounded-lg bg-white/[0.04] ring-1 ring-white/10 grid place-items-center">
                    <Icon className="h-4.5 w-4.5 text-brand-blue" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="mt-6 text-xl font-medium tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                <div className="mt-6 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">12 essays · 4 case studies</div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
