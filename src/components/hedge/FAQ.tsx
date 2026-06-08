import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const items = [
  { q: "Is Hedge & Grow a signal or tip service?", a: "No. We don't sell calls, signals, or tips. We teach hedging, risk management, and process so you can make your own informed decisions." },
  { q: "Who is this for?", a: "Traders who want to last — from serious learners to active practitioners looking to add structure, hedging, and discipline to their existing process." },
  { q: "Do you guarantee returns?", a: "Never. Markets don't allow guarantees. We guarantee transparency, education, and a process built around capital protection." },
  { q: "What makes the framework different?", a: "Most education starts with how to win. We start with how to survive. Capital protection, defined risk, and consistent execution come before any return target." },
  { q: "Where are trades documented?", a: "Every trade — thesis, entry, exit, risk, lesson — is published in the trade journal. Wins and losses, treated with the same rigour." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-page max-w-3xl">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">FAQ</div>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
          Questions, <span className="serif-italic text-muted-foreground">answered honestly.</span>
        </h2>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="text-base sm:text-lg font-medium tracking-tight">{it.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="shrink-0 text-muted-foreground group-hover:text-foreground">
                    <Plus className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-sm text-muted-foreground leading-relaxed">{it.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
