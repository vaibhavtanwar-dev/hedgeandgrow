import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-surface">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Get in touch</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              Let's talk <span className="serif-italic text-gradient-brand">process.</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground max-w-sm">
              Questions about the framework, the curriculum, or how we work? We answer every serious enquiry personally.
            </p>

            <div className="mt-10 space-y-3">
              <a href="mailto:hello@hedgeandgrow.in" className="flex items-center gap-3 glass rounded-xl p-4 hover:bg-white/[0.05] transition">
                <Mail className="h-4 w-4 text-brand-blue" />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Email</div>
                  <div className="text-sm font-medium">hello@hedgeandgrow.in</div>
                </div>
              </a>
              <a href="tel:+910000000000" className="flex items-center gap-3 glass rounded-xl p-4 hover:bg-white/[0.05] transition">
                <Phone className="h-4 w-4 text-brand-green" />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Phone</div>
                  <div className="text-sm font-medium">+91 · By appointment</div>
                </div>
              </a>
            </div>
          </div>

          <motion.form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl glass-strong p-6 sm:p-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Name" id="name" placeholder="Your name" />
              <Field label="Email" id="email" type="email" placeholder="you@domain.com" />
            </div>
            <div className="mt-4">
              <Field label="Subject" id="subject" placeholder="What's this about?" />
            </div>
            <div className="mt-4">
              <label className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground" htmlFor="msg">Message</label>
              <textarea
                id="msg"
                rows={5}
                placeholder="Tell us about your trading background and what you're looking to learn."
                className="mt-2 w-full rounded-xl bg-white/[0.02] border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/40 resize-none"
              />
            </div>
            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">We reply within two business days.</p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                {sent ? "Message sent" : "Send message"} <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text", placeholder }: { label: string; id: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-white/[0.02] border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}
