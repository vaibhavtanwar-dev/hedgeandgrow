import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

// Split words for stagger reveal
const line1 = ["Trading", "isn't", "about"];
const line2 = ["winning", "more."];
const line3 = ["It's", "about", "losing", "less."];

function Word({ children, i, italic = false }: { children: React.ReactNode; i: number; italic?: boolean }) {
  return (
    <span className="inline-block overflow-hidden align-bottom pb-[0.12em] mr-[0.22em]">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.05, ease, delay: 0.15 + i * 0.06 }}
        className={`inline-block ${italic ? "serif-italic text-gradient-brand" : ""}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  let idx = 0;

  return (
    <section id="home" ref={ref} className="relative min-h-dvh flex flex-col justify-between pt-36 pb-10 overflow-hidden">
      {/* ambient — single soft glow */}
      <div className="pointer-events-none absolute inset-0 ring-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{ duration: 2, ease }}
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[720px] w-[720px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(13,139,255,0.22), transparent 60%)" }}
      />

      <motion.div style={{ y, opacity }} className="container-page relative flex-1 flex flex-col justify-center">
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground"
        >
          <span className="h-px w-8 bg-border" />
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand-green/70 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-green" />
          </span>
          Risk-First Trading Education
          <span className="h-px w-8 bg-border" />
        </motion.div>

        {/* headline */}
        <h1 className="mt-10 text-center font-medium tracking-[-0.04em] leading-[0.98] text-[44px] sm:text-7xl lg:text-[104px]">
          <div>{line1.map((w) => <Word key={w} i={idx++}>{w}</Word>)}</div>
          <div>{line2.map((w) => <Word key={w} i={idx++}>{w}</Word>)}</div>
          <div className="mt-2">{line3.map((w) => <Word key={w} i={idx++} italic>{w}</Word>)}</div>
        </h1>

        {/* sub */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 1.05 }}
          className="mx-auto mt-10 max-w-xl text-center text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          A risk-first education ecosystem for hedging, capital protection, and disciplined process — so you survive long enough to compound.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#framework" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium transition hover:bg-foreground/90">
            Discover the Framework
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="#trades" className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground transition">
            View live trades →
          </a>
        </motion.div>
      </motion.div>

      {/* bottom marquee ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="relative mt-16 border-y border-border/60 py-4 overflow-hidden"
      >
        <Ticker />
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        style={{ opacity }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-muted-foreground"
      >
        Scroll
        <span className="h-8 w-px bg-gradient-to-b from-border to-transparent" />
      </motion.div>
    </section>
  );
}

const tickerItems = [
  { k: "NIFTY", v: "24,612", d: "+0.42%", up: true },
  { k: "BANKNIFTY", v: "52,180", d: "+0.28%", up: true },
  { k: "INDIA VIX", v: "13.24", d: "−1.9%", up: false },
  { k: "MAX DRAWDOWN", v: "−3.8%", d: "12M", up: false },
  { k: "SHARPE", v: "2.31", d: "YTD", up: true },
  { k: "HEDGED EXPOSURE", v: "98%", d: "book", up: true },
  { k: "AVG R", v: "1.8R", d: "per trade", up: true },
];

function Ticker() {
  const row = [...tickerItems, ...tickerItems];
  return (
    <div className="flex whitespace-nowrap">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        className="flex shrink-0 items-center gap-10 pr-10"
      >
        {row.map((it, i) => (
          <div key={i} className="flex items-center gap-3 text-xs">
            <span className="uppercase tracking-[0.16em] text-muted-foreground">{it.k}</span>
            <span className="font-mono text-foreground">{it.v}</span>
            <span className={`font-mono ${it.up ? "text-brand-green" : "text-danger"}`}>{it.d}</span>
            <span className="h-1 w-1 rounded-full bg-border" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
