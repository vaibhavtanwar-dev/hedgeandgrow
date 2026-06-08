import { motion } from "framer-motion";
import { Shield, Scale, Crosshair, Infinity as InfinityIcon } from "lucide-react";

const steps = [
  { n: "01", icon: Shield, title: "Protect Capital", body: "Define the maximum acceptable loss before considering entry. Capital is the only thing you cannot replace." },
  { n: "02", icon: Scale, title: "Manage Risk", body: "Position sizing, hedges, and structured trades turn unknown downside into bounded outcomes." },
  { n: "03", icon: Crosshair, title: "Execute With Discipline", body: "Follow the plan. Document the trade. Let the process — not the P&L — judge the decision." },
  { n: "04", icon: InfinityIcon, title: "Compound Consistently", body: "Survive long enough and modest, repeatable edge becomes generational compounding." },
];

export function Framework() {
  return (
    <section id="framework" className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">The framework</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight max-w-2xl">
              Four principles. <span className="serif-italic text-gradient-brand">One discipline.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Every trade we take, document, and teach is filtered through these four gates — in this exact order.
          </p>
        </div>

        <div className="relative">
          {/* connecting rail */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="relative h-12 w-12 rounded-full glass-strong grid place-items-center mb-6">
                    <Icon className="h-5 w-5 text-brand-blue" />
                    <span className="absolute -top-1 -right-1 text-[10px] font-mono text-muted-foreground bg-background border border-border rounded-full px-1.5 py-0.5">{s.n}</span>
                  </div>
                  <h3 className="text-xl font-medium tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
