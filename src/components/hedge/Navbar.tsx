import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/hedge-grow-logo.jpg.asset.json";

const links = [
  { label: "Home", href: "#home" },
  { label: "Framework", href: "#framework" },
  { label: "Performance", href: "#performance" },
  { label: "Trades", href: "#trades" },
  { label: "Insights", href: "#insights" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-3 sm:top-5 z-50 flex justify-center px-3"
      >
        <motion.nav
          animate={{
            width: scrolled ? "min(880px, 96%)" : "min(1080px, 100%)",
            paddingTop: scrolled ? 8 : 12,
            paddingBottom: scrolled ? 8 : 12,
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="glass-strong flex items-center justify-between rounded-full px-3 sm:px-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
        >
          <a href="#home" className="flex items-center gap-2.5 pl-1.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 overflow-hidden">
              <img src={logo.url} alt="Hedge & Grow" className="h-8 w-8 object-contain" />
            </span>
            <span className="text-[15px] font-semibold tracking-tight">Hedge<span className="text-muted-foreground"> & </span>Grow</span>
          </a>

          <ul className="hidden lg:flex items-center gap-1 text-[13.5px] text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3.5 py-2 transition-colors hover:text-foreground hover:bg-white/[0.04]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#trades"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-[13px] font-medium transition hover:bg-foreground/90"
            >
              Explore Trades
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10"
            >
              <Menu className="h-4.5 w-4.5" />
            </button>
          </div>
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm glass-strong p-6 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Menu</span>
                <button aria-label="Close" onClick={() => setOpen(false)} className="h-9 w-9 grid place-items-center rounded-full bg-white/5">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <ul className="mt-10 space-y-1">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <a
                      onClick={() => setOpen(false)}
                      href={l.href}
                      className="block py-3 text-2xl font-medium tracking-tight border-b border-border/60"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#trades"
                onClick={() => setOpen(false)}
                className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium"
              >
                Explore Trades <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
