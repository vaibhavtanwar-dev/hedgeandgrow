import { motion } from "framer-motion";
import { Flame, Repeat, ShieldOff, Gauge, GitBranch } from "lucide-react";

const items = [
  { icon: Flame, title: "Emotional Trading", body: "Decisions made by adrenaline don't survive contact with the tape. Process beats impulse, every session." },
  { icon: Repeat, title: "Overtrading", body: "More trades rarely mean more edge. They almost always mean more cost, more error, more drift." },
  { icon: ShieldOff, title: "No Hedging", body: "Unprotected directional bets are the fastest way to give back months of careful work in a single afternoon." },
  { icon: Gauge, title: "Mismanaged Risk", body: "Without sizing rules and defined loss, even a great thesis is a bet — not an investment in process." },
  { icon: GitBranch, title: "No Process", body: "A repeatable framework is what separates a trader from a gambler. Discipline compounds. Luck doesn't." },
];

export function WhyTradersLose() {
  return (
    <section className="relative py-24 sm:py-32 bg-surface">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">The hard truth</div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
            90% of traders lose. <span className="serif-italic text-muted-foreground">Here's why.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Markets don't punish ignorance — they punish the absence of process. Each of these is fixable, and we teach the fix.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.article
                key={it.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl border border-border bg-card/40 p-6 hover:bg-card transition-colors overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "radial-gradient(600px circle at var(--mx,50%) var(--my,0%), rgba(13,139,255,0.07), transparent 40%)" }} />
                <div className="relative">
                  <div className="h-10 w-10 rounded-lg bg-white/[0.04] ring-1 ring-white/10 grid place-items-center">
                    <Icon className="h-4.5 w-4.5 text-brand-blue" />
                  </div>
                  <h3 className="mt-5 text-lg font-medium tracking-tight">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
