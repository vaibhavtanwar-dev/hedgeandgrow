import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUp, Activity } from "lucide-react";

const ranges = ["1M", "3M", "6M", "YTD", "1Y"] as const;
type R = typeof ranges[number];

const series: Record<R, number[]> = {
  "1M": [100, 101, 100.4, 102, 101.8, 103, 104, 103.6, 105, 106, 105.4, 107],
  "3M": [100, 102, 101, 104, 103, 105, 107, 106, 109, 110, 111, 113],
  "6M": [100, 103, 101, 105, 108, 107, 110, 113, 112, 116, 119, 121],
  "YTD": [100, 102, 105, 103, 107, 110, 113, 111, 116, 119, 122, 124.6],
  "1Y": [100, 104, 108, 106, 112, 115, 120, 118, 125, 128, 132, 136],
};

export function PerformanceDashboard() {
  const [range, setRange] = useState<R>("YTD");
  const data = series[range];
  const w = 800, h = 240;
  const min = Math.min(...data), max = Math.max(...data);
  const step = w / (data.length - 1);
  const d = data.map((p, i) => `${i === 0 ? "M" : "L"}${i * step},${h - ((p - min) / (max - min)) * (h - 20) - 10}`).join(" ");

  const change = ((data[data.length - 1] - data[0]) / data[0]) * 100;

  return (
    <section id="performance" className="relative py-24 sm:py-32 bg-surface">
      <div className="container-page">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Performance terminal</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight max-w-2xl">
              Transparent results. <span className="serif-italic text-muted-foreground">No filters.</span>
            </h2>
          </div>
          <div className="flex items-center gap-1 glass rounded-full p-1">
            {ranges.map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={`px-3 py-1.5 text-xs rounded-full transition ${range === r ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main chart */}
          <div className="lg:col-span-2 rounded-2xl glass-strong p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Equity curve</div>
                <div className="mt-1 flex items-baseline gap-3">
                  <span className="text-4xl font-semibold tracking-tight">{change.toFixed(1)}%</span>
                  <span className={`inline-flex items-center gap-1 text-xs ${change >= 0 ? "text-brand-green" : "text-danger"}`}>
                    {change >= 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />} vs benchmark
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Activity className="h-3.5 w-3.5" /> Hedged equity book
              </div>
            </div>

            <div className="mt-6 relative">
              <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-[240px]" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="pa" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#0D8BFF" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#0D8BFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* horizontal grid */}
                {[0.25, 0.5, 0.75].map((p) => (
                  <line key={p} x1="0" y1={h * p} x2={w} y2={h * p} stroke="rgba(255,255,255,0.05)" />
                ))}
                <AnimatePresence mode="wait">
                  <motion.g key={range}>
                    <motion.path
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      d={`${d} L${w},${h} L0,${h} Z`}
                      fill="url(#pa)"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.1, ease: "easeOut" }}
                      d={d}
                      fill="none"
                      stroke="#0D8BFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </motion.g>
                </AnimatePresence>
              </svg>
            </div>
          </div>

          {/* Metrics column */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {[
              { k: "Win Rate", v: "62%", sub: "286 of 460 trades" },
              { k: "Risk : Reward", v: "1 : 2.4", sub: "Avg per setup" },
              { k: "Max Drawdown", v: "−3.8%", sub: "Hedged exposure" },
              { k: "Sharpe", v: "2.31", sub: "Rolling 12m" },
            ].map((m) => (
              <div key={m.k} className="rounded-2xl glass-strong p-5">
                <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{m.k}</div>
                <div className="mt-2 text-3xl font-semibold tracking-tight">{m.v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* monthly bars */}
        <div className="mt-4 rounded-2xl glass-strong p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Monthly returns</div>
            <div className="text-xs text-muted-foreground">12-month rolling</div>
          </div>
          <div className="grid grid-cols-12 gap-2 items-end h-32">
            {[2.1, -0.4, 3.2, 1.6, 4.1, -1.2, 3.6, 2.4, 1.1, 4.8, 2.0, 1.7].map((v, i) => (
              <motion.div
                key={i}
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: `${Math.min(Math.abs(v) * 22, 100)}%`, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                className={`rounded-md ${v >= 0 ? "bg-brand-blue/70" : "bg-danger/70"}`}
                title={`${v}%`}
              />
            ))}
          </div>
          <div className="mt-3 grid grid-cols-12 gap-2 text-[10px] text-muted-foreground text-center">
            {["J","F","M","A","M","J","J","A","S","O","N","D"].map((m, i) => <span key={i}>{m}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
