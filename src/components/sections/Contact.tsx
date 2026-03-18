import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ── Reusable field wrapper ── */
const Field = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-2">
    <label
      className="text-[0.58rem] font-bold tracking-[0.28em] uppercase px-1"
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        color: "rgba(255,255,255,0.28)",
      }}
    >
      {label}
    </label>
    {children}
  </div>
);

const inputClass =
  "w-full rounded-xl px-5 py-3.5 text-[0.9rem] text-white outline-none transition-all duration-300 " +
  "bg-white/[0.03] border border-white/[0.07] " +
  "placeholder:text-white/[0.12] " +
  "focus:border-[#00ffe5]/40 focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(0,255,229,0.06)]";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/tumpalasaisankar@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("idle");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden bg-[#060a0f]"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');
        textarea { font-family: inherit; }
      `}</style>

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#00ffe5]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-[#7c3aed]/5 blur-[110px]" />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,255,229,0.15), transparent)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-16 xl:gap-24 items-start">

          {/* ══════════════════════════════
              LEFT — Info
          ══════════════════════════════ */}
          <motion.div {...fadeUp(0)} className="flex flex-col gap-10">

            {/* Heading */}
            <div>
              <span
                className="text-[0.6rem] font-bold tracking-[0.3em] uppercase block mb-4"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  color: "#00ffe5",
                }}
              >
                ◈ Connect
              </span>
              <h2 className="text-[clamp(2.4rem,5vw,3.4rem)] font-extrabold tracking-tight text-white leading-[1.08] mb-5">
                Start a <br />
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #00ffe5 0%, #38bdf8 55%, #a78bfa 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Conversation
                </span>
              </h2>
              <p
                className="text-[0.95rem] leading-relaxed max-w-sm"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Have a project in mind or just want to explore possibilities?
                I'm always open to new challenges and meaningful collabs.
              </p>
            </div>

            {/* Contact cards */}
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: Mail,
                  accent: "#00ffe5",
                  label: "Direct Endpoint",
                  value: "tumpalasaisankar@gmail.com",
                  href: "mailto:tumpalasaisankar@gmail.com",
                },
                {
                  icon: MapPin,
                  accent: "#38bdf8",
                  label: "Location Base",
                  value: "Visakhapatnam, India",
                  href: null,
                },
              ].map(({ icon: Icon, accent, label, value, href }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    className="p-3 rounded-xl shrink-0"
                    style={{ background: `${accent}12` }}
                  >
                    <Icon size={20} style={{ color: accent }} />
                  </div>
                  <div>
                    <p
                      className="text-[0.55rem] font-bold tracking-[0.22em] uppercase mb-1"
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        color: "rgba(255,255,255,0.22)",
                      }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-[0.9rem] font-bold text-white hover:text-[#00ffe5] transition-colors duration-200"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[0.9rem] font-bold text-white">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative footer */}
            <div className="hidden lg:block">
              <div
                className="w-20 h-px mb-4"
                style={{ background: "linear-gradient(90deg, #00ffe5, transparent)" }}
              />
              <p
                className="text-[0.55rem] font-medium tracking-[0.45em] uppercase"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  color: "rgba(255,255,255,0.13)",
                }}
              >
                Protocol: secure-access
              </p>
            </div>
          </motion.div>

          {/* ══════════════════════════════
              RIGHT — Form
          ══════════════════════════════ */}
          <motion.div
            {...fadeUp(0.15)}
            className="relative rounded-3xl p-8 md:p-10"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(0,255,229,0.1)",
              backdropFilter: "blur(12px)",
              boxShadow: "inset 0 0 60px rgba(0,255,229,0.015)",
            }}
          >
            {/* Corner accent dots */}
            {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map(
              (pos) => (
                <span
                  key={pos}
                  className={`absolute ${pos} w-1 h-1 rounded-full`}
                  style={{ background: "rgba(0,255,229,0.25)" }}
                />
              )
            )}

            <AnimatePresence mode="wait">
              {status === "sent" ? (
                /* ── Success state ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center gap-6 py-16 text-center"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background: "rgba(0,255,229,0.08)",
                      border: "1px solid rgba(0,255,229,0.2)",
                      boxShadow: "0 0 40px rgba(0,255,229,0.1)",
                    }}
                  >
                    <CheckCircle2 size={30} style={{ color: "#00ffe5" }} />
                  </div>
                  <div>
                    <p className="text-white text-xl font-bold mb-2">Message Transmitted</p>
                    <p
                      className="text-[0.82rem]"
                      style={{ color: "rgba(255,255,255,0.38)" }}
                    >
                      Thanks for reaching out — I'll get back to you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-[0.65rem] font-bold tracking-[0.2em] uppercase transition-colors duration-200 hover:text-white"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      color: "rgba(255,255,255,0.3)",
                    }}
                  >
                    Send another →
                  </button>
                </motion.div>
              ) : (
                /* ── Form ── */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="relative z-10 flex flex-col gap-6"
                >
                  <input type="hidden" name="_subject" value="New message from portfolio!" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Identifier">
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Full Name"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Electronic Mail">
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="email@example.com"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <Field label="Subject">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Project idea, collab, freelance..."
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Message Payload">
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project or inquiry..."
                      className={`${inputClass} resize-none`}
                    />
                  </Field>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-2 flex items-center justify-center gap-3 w-full py-4 rounded-xl text-[#060a0f] font-bold text-[0.72rem] tracking-[0.22em] uppercase transition-all duration-300 disabled:opacity-70"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      background: status === "sending" ? "rgba(0,255,229,0.6)" : "#00ffe5",
                      boxShadow: "0 10px 32px -10px rgba(0,255,229,0.35)",
                    }}
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Transmit Message
                        <Send size={14} />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { Contact };
