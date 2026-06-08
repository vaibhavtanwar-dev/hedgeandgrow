import { motion } from "framer-motion";

const quotes = [
  {
    q: "I stopped chasing setups and started respecting structure. That shift alone changed everything about how I show up to the market.",
    by: "Aarav M.", role: "Independent trader · 3 yrs",
  },
  {
    q: "The transparency is what hooked me. Every trade — wins and losses — is documented with the thesis intact. I learned more in a month than in two years of YouTube.",
    by: "Priya K.", role: "Options learner · 1 yr",
  },
  {
    q: "Hedging finally clicked. Not as a cost, but as the thing that lets me actually hold conviction without praying overnight.",
    by: "Rohan S.", role: "Equity & derivatives · 5 yrs",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 bg-surface">
      <div className="container-page">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">From the community</div>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight max-w-3xl">
          Not income claims. <span className="serif-italic text-muted-foreground">Understanding.</span>
        </h2>

        <div className="mt-16 space-y-20 sm:space-y-28 max-w-4xl">
          {quotes.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="text-2xl sm:text-3xl lg:text-[36px] leading-[1.3] tracking-tight font-medium">
                <span className="serif-italic text-gradient-brand">"</span>
                {t.q}
                <span className="serif-italic text-gradient-brand">"</span>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 text-sm">
                <span className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-blue/60 to-brand-green/60" />
                <span className="font-medium">{t.by}</span>
                <span className="text-muted-foreground">· {t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
