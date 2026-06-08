import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight, ArrowDownRight } from "lucide-react";

const trades = [
  {
    sym: "NIFTY", dir: "Long Hedge", entry: "24,180", exit: "24,640", risk: "0.8R", outcome: "+2.1R",
    thesis: "Range breakout with declining IV. Bought ATM call, financed with deep OTM short to cap theta bleed.",
    lesson: "Hedge structures let directional theses survive overnight gap risk without slashing position size.",
    win: true,
  },
  {
    sym: "RELIANCE", dir: "Protective Put", entry: "2,945", exit: "2,902", risk: "0.5R", outcome: "−0.4R",
    thesis: "Earnings event with elevated implied vol. Held core long, bought 28-DTE put for binary protection.",
    lesson: "Defined-risk losses compound 10× slower than uncapped losses. The portfolio drawdown stayed under 1%.",
    win: false,
  },
  {
    sym: "BANKNIFTY", dir: "Iron Condor", entry: "52,100", exit: "Expiry", risk: "1R", outcome: "+1.6R",
    thesis: "Post-RBI consolidation. Sold 51,500P / 52,700C with 200pt wings to define max loss.",
    lesson: "Range trades pay when you respect the structure and refuse to adjust into a directional move.",
    win: true,
  },
];

export function TradeTransparency() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="trades" className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Trade journal</div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
            Every trade. <span className="serif-italic text-muted-foreground">Documented.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Entries. Exits. Risk. Thesis. Outcome. Lessons. Wins and losses, published with the same clarity.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {trades.map((t, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-card/40 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-white/[0.02] transition"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className={`h-10 w-10 rounded-lg grid place-items-center ${t.win ? "bg-brand-green/15 text-brand-green" : "bg-danger/15 text-danger"}`}>
                      {t.win ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-sm font-medium">{t.sym}</span>
                        <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground border border-border rounded-full px-2 py-0.5">{t.dir}</span>
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">Entry {t.entry} → Exit {t.exit} · Risk {t.risk}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className={`text-sm font-semibold ${t.win ? "text-brand-green" : "text-danger"}`}>{t.outcome}</span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden border-t border-border"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 sm:p-6">
                        <div>
                          <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Thesis</div>
                          <p className="mt-2 text-sm text-foreground/90 leading-relaxed">{t.thesis}</p>
                        </div>
                        <div>
                          <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Lesson</div>
                          <p className="mt-2 text-sm text-foreground/90 leading-relaxed">{t.lesson}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
