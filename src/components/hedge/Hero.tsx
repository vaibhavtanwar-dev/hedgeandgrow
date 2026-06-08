import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, TrendingUp, Activity, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="home" className="relative min-h-dvh pt-32 pb-20 overflow-hidden">
      {/* ambient layers */}
      <div className="pointer-events-none absolute inset-0 ring-grid opacity-[0.55] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[640px] w-[1100px] rounded-full opacity-60"
        style={{ background: "radial-gradient(ellipse at center, rgba(13,139,255,0.25), transparent 60%)" }} />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[480px] w-[700px] opacity-40"
        style={{ background: "radial-gradient(ellipse at bottom right, rgba(54,214,92,0.18), transparent 60%)" }} />

      <div className="container-page relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.05 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-green/70 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
              </span>
              16+ years of risk-first market experience
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.85, ease, delay: 0.15 }}
              className="mt-6 text-[44px] leading-[1.02] sm:text-6xl lg:text-[78px] font-medium tracking-[-0.035em]"
            >
              Trading isn't about
              <br />
              winning more.
              <br />
              <span className="serif-italic text-gradient-brand">It's about losing less.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.28 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              Hedge & Grow is a risk-first education ecosystem teaching hedging, capital protection, and disciplined process — so you survive long enough to compound.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.38 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#trades"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium transition hover:bg-foreground/90"
              >
                Explore Trades
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#framework"
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:bg-white/[0.06] transition"
              >
                Discover Framework
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { k: "Capital", v: "Protected First" },
                { k: "Process", v: "Over Prediction" },
                { k: "Transparency", v: "Every Trade" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{s.k}</div>
                  <div className="mt-1 text-sm font-medium">{s.v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dashboard visual */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            <DashboardCard />
            <FloatingMetric
              className="absolute -left-4 sm:-left-10 top-10"
              icon={<ShieldCheck className="h-4 w-4 text-brand-blue" />}
              label="Max Drawdown"
              value="−3.8%"
              delay={0.9}
            />
            <FloatingMetric
              className="absolute -right-4 sm:-right-8 bottom-12"
              icon={<TrendingUp className="h-4 w-4 text-brand-green" />}
              label="Risk : Reward"
              value="1 : 2.4"
              delay={1.1}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DashboardCard() {
  // SVG sparkline path data
  const points = [10, 22, 18, 30, 26, 38, 34, 46, 42, 52, 48, 60, 56, 68];
  const w = 360;
  const h = 110;
  const max = Math.max(...points);
  const step = w / (points.length - 1);
  const d = points.map((p, i) => `${i === 0 ? "M" : "L"}${i * step},${h - (p / max) * (h - 10) - 5}`).join(" ");

  return (
    <div className="relative rounded-2xl glass-strong p-5 sm:p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-brand-blue/15 ring-1 ring-brand-blue/30 grid place-items-center">
            <Activity className="h-3.5 w-3.5 text-brand-blue" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Portfolio</div>
            <div className="text-sm font-medium">Hedged Equity Book</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-green" /> Live
        </div>
      </div>

      <div className="mt-5 flex items-end justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Equity Curve · YTD</div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-4xl font-semibold tracking-tight">+24.6%</span>
            <span className="text-xs text-brand-green flex items-center gap-1"><TrendingUp className="h-3 w-3" /> +1.2% wk</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Sharpe</div>
          <div className="text-lg font-semibold">2.31</div>
        </div>
      </div>

      <div className="mt-4 relative h-[110px]">
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gA" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#0D8BFF" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0D8BFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${d} L${w},${h} L0,${h} Z`} fill="url(#gA)" />
          <motion.path
            d={d}
            fill="none"
            stroke="#0D8BFF"
            strokeWidth="1.75"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.6 }}
          />
        </svg>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4">
        {[
          { k: "Win Rate", v: "62%" },
          { k: "Avg R", v: "1.8R" },
          { k: "Vol Target", v: "12%" },
        ].map((m) => (
          <div key={m.k}>
            <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{m.k}</div>
            <div className="mt-0.5 text-sm font-semibold">{m.v}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-lg bg-white/[0.03] px-3 py-2 text-[12px] text-muted-foreground">
        <Sparkles className="h-3.5 w-3.5 text-brand-green" />
        Hedge active: NIFTY 24500 PE protecting downside · 21 DTE
      </div>
    </div>
  );
}

function FloatingMetric({ className = "", icon, label, value, delay = 0 }: {
  className?: string; icon: React.ReactNode; label: string; value: string; delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease, delay }}
      className={`glass-strong rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-2xl ${className}`}
    >
      <div className="h-7 w-7 rounded-md bg-white/5 ring-1 ring-white/10 grid place-items-center">{icon}</div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{label}</div>
        <div className="text-sm font-semibold">{value}</div>
      </div>
    </motion.div>
  );
}
