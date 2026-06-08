import logo from "@/assets/hedge-grow-logo.jpg.asset.json";

const cols = [
  { title: "Platform", links: ["Framework", "Performance", "Trades", "Insights"] },
  { title: "Learn", links: ["Hedging", "Risk Management", "Options", "Psychology"] },
  { title: "Company", links: ["About", "Founder", "Contact", "Disclosures"] },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border pt-20 pb-10">
      <div className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={logo.url} alt="Hedge & Grow" className="h-9 w-9 rounded-lg object-contain" />
              <span className="text-base font-semibold tracking-tight">Hedge & Grow</span>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Protect capital first. Grow wealth second. India's risk-first financial education ecosystem.
            </p>
            <p className="mt-6 font-serif italic text-lg text-gradient-brand">Hedge Karo. Mauj Karo.</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{c.title}</div>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-foreground/80 hover:text-foreground transition">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Hedge & Grow. Education only. Not investment advice.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Risk Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
