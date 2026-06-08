import { motion } from "framer-motion";

export function Founder() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">The founder</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              16 years in the market. <span className="serif-italic text-muted-foreground">One philosophy.</span>
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              Hedge & Grow was built from a simple, unfashionable conviction: the traders who last are not the ones who win the most — they're the ones who lose the least.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Across cycles, crashes, and recoveries, one process has held: protect capital first, manage risk before reward, and let consistency compound the rest.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden max-w-md">
              {[
                { k: "Started Trading", v: "2008" },
                { k: "Specialisation", v: "Hedged equity" },
                { k: "Approach", v: "Process-first" },
                { k: "Mentored", v: "1,200+ traders" },
              ].map((s) => (
                <div key={s.k} className="bg-background p-5">
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{s.k}</dt>
                  <dd className="mt-1 text-sm font-medium">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-3xl glass-strong p-8 sm:p-12 overflow-hidden">
              <div className="absolute inset-0 ring-grid opacity-30" />
              <blockquote className="relative">
                <p className="text-2xl sm:text-3xl lg:text-[34px] leading-[1.25] tracking-tight font-medium">
                  <span className="serif-italic text-gradient-brand">"</span>
                  Most traders ask the wrong question — how do I make more? The right question is how do I lose less, more reliably, for longer. Everything else follows from there.
                  <span className="serif-italic text-gradient-brand">"</span>
                </p>
                <figcaption className="mt-8 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-green" />
                  <div>
                    <div className="text-sm font-medium">Founder</div>
                    <div className="text-xs text-muted-foreground">Hedge & Grow</div>
                  </div>
                </figcaption>
              </blockquote>
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
