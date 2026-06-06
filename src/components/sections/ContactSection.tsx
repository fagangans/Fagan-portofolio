"use client";

import { useState, useRef, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, Check, AlertCircle } from "lucide-react";
import { socials, email, phone, whatsappNumber, location } from "@/data/portfolio";
import { getIcon } from "@/lib/icons";
import SectionHeading from "@/components/ui/SectionHeading";

const fields = [
  { name: "name",    label: "Name",    type: "text"  },
  { name: "email",   label: "Email",   type: "email" },
  { name: "subject", label: "Subject", type: "text"  },
] as const;

type Status = "idle" | "loading" | "done" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? "Something went wrong.");
      }

      setStatus("done");
      formRef.current?.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to send. Please try again.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section-pad relative bg-charcoal/30">
      <SectionHeading
        eyebrow="Let's Talk"
        title="Get In"
        highlight="Touch"
        className="mb-20"
      />

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-serif text-3xl text-white">
            Let&apos;s build something{" "}
            <span className="text-gold-gradient">extraordinary</span>.
          </h3>
          <p className="mt-4 max-w-md leading-relaxed text-silver">
            Have a project in mind or just want to say hello? My inbox is always
            open and I&apos;d love to hear from you.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: Mail,   label: email,    href: `mailto:${email}` },
              { icon: Phone,  label: phone,    href: `https://wa.me/${whatsappNumber || phone.replace(/\D/g, "")}` },
              { icon: MapPin, label: location, href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 text-silver transition-colors hover:text-white"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 border border-gold/30">
                  <item.icon className="h-5 w-5 text-gold" />
                </span>
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-10 flex gap-4">
            {socials.map((s) => {
              const Icon = getIcon(s.icon);
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-silver transition-all hover:border-gold hover:text-gold"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6 rounded-3xl border border-white/10 bg-black/40 p-8"
        >
          {fields.map((f) => (
            <div key={f.name} className="group relative">
              <input
                required
                type={f.type}
                name={f.name}
                placeholder={f.label}
                disabled={status === "loading"}
                className="peer w-full border-b border-white/15 bg-transparent py-3 text-white placeholder-silver/60 outline-none transition-colors focus:border-transparent disabled:opacity-50"
              />
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold-light to-gold-dark transition-all duration-500 peer-focus:w-full" />
            </div>
          ))}

          <div className="group relative">
            <textarea
              required
              name="message"
              rows={4}
              placeholder="Your message"
              disabled={status === "loading"}
              className="peer w-full resize-none border-b border-white/15 bg-transparent py-3 text-white placeholder-silver/60 outline-none transition-colors focus:border-transparent disabled:opacity-50"
            />
            <span className="absolute bottom-1 left-0 h-px w-0 bg-gradient-to-r from-gold-light to-gold-dark transition-all duration-500 peer-focus:w-full" />
          </div>

          <AnimatePresence mode="wait">
            {status === "error" && (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-sm text-red-400"
              >
                <AlertCircle className="h-4 w-4 shrink-0" />
                {errorMsg}
              </motion.p>
            )}
            {status === "done" && (
              <motion.p
                key="done"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-sm text-emerald-400"
              >
                <Check className="h-4 w-4 shrink-0" />
                Message sent — I&apos;ll be in touch soon.
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={status === "loading" || status === "done"}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02] disabled:opacity-70"
          >
            {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
            {status === "done"    && <Check   className="h-4 w-4" />}
            {(status === "idle" || status === "error") && <Send className="h-4 w-4" />}
            {status === "loading" ? "Sending…"
              : status === "done" ? "Message Sent"
              : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
