import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function CountUp({ to, suffix = "", duration = 1.6 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${Math.round(v).toLocaleString()}${suffix}`);
  useEffect(() => {
    if (inView) {
      const c = animate(mv, to, { duration, ease: [0.22, 1, 0.36, 1] });
      return c.stop;
    }
  }, [inView, mv, to, duration]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const items = [
  { value: 16, suffix: "+", label: "Years in Markets", sub: "Cycles, crashes, recoveries" },
  { value: 2400, suffix: "+", label: "Trades Documented", sub: "Every entry, exit, lesson" },
  { value: 98, suffix: "%", label: "Hedged Exposure", sub: "Defined risk on every leg" },
  { value: 0, suffix: "", label: "Signals Sold", sub: "Education only — never tips" },
];

export function TrustIndicators() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Built on evidence</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight max-w-2xl">
              Numbers we stand behind, <span className="serif-italic text-muted-foreground">always.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Transparency isn't a marketing line. It's the foundation of every trade, every lesson, every promise.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-border">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background p-6 sm:p-8 group hover:bg-surface transition-colors"
            >
              <div className="text-4xl sm:text-5xl font-medium tracking-tight">
                <CountUp to={it.value} suffix={it.suffix} />
              </div>
              <div className="mt-3 text-sm font-medium">{it.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{it.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
