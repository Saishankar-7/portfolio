import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, Loader2, Github, Linkedin,Instagram, Copy, Check } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";

const Contact = () => {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [copied, setCopied] = useState(false);

    const emailAddress = "tumpalasaisankar@gmail.com";

    const copyEmail = () => {
        navigator.clipboard.writeText(emailAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");
        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const res = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
                method: "POST",
                headers: { Accept: "application/json" },
                body: data,
            });
            if (res.ok) {
                setStatus("sent");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section
            id="contact"
            className="relative py-24 md:py-32 overflow-hidden border-t border-white/[0.04]"
        >
            {/* Ambient Background Light */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/[0.03] blur-[140px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6">
                <SectionTitle
                    eyebrow="Get In Touch"
                    title="Let's build something"
                    highlight="remarkable together."
                    description="Have a question, collaboration idea, or an open role? Reach out directly or send a message below."
                />

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* ── Left Column: Contact Channels ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 space-y-6"
                    >
                        {/* Direct Email Card */}
                        <div className="glass-card p-6 rounded-2xl space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Direct Email</p>
                                        <a
                                            href={`mailto:${emailAddress}`}
                                            className="text-sm sm:text-base font-semibold text-slate-100 hover:text-cyan-300 transition-colors"
                                        >
                                            {emailAddress}
                                        </a>
                                    </div>
                                </div>
                                <button
                                    onClick={copyEmail}
                                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-slate-100 transition-colors border border-white/[0.06] cursor-pointer"
                                    title="Copy email address"
                                    aria-label="Copy email address"
                                >
                                    {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                                </button>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="glass-card p-6 rounded-2xl flex items-center gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-white/[0.04] text-cyan-400 flex items-center justify-center border border-white/10">
                                <MapPin size={18} />
                            </div>
                            <div>
                                <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Location Base</p>
                                <p className="text-sm font-semibold text-slate-200">Visakhapatnam, Andhra Pradesh, India</p>
                            </div>
                        </div>

                        {/* Social Channels */}
                        <div className="glass-card p-6 rounded-2xl space-y-3">
                            <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Online Profiles</p>
                            <div className="flex flex-wrap gap-2.5">
                                <a
                                    href="https://github.com/Saishankar-7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-slate-300 hover:text-white transition-all"
                                >
                                    <Github size={15} />
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/saishankar7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-slate-300 hover:text-white transition-all"
                                >
                                    <Linkedin size={15} />
                                    <span>LinkedIn</span>
                                </a>
                                 <a
                                    href="https://www.instagram.com/saishankar__7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-slate-300 hover:text-white transition-all"
                                >
                                    <Instagram size={15} />
                                    <span>Instagram</span>
                                </a>
                            </div>
                        </div>

                        {/* Availability Note */}
                        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                            <span>Available for full-time software engineering roles and freelance contracts.</span>
                        </div>
                    </motion.div>

                    {/* ── Right Column: Interactive Form ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="lg:col-span-7"
                    >
                        <div className="glass-card p-6 sm:p-8 rounded-3xl">
                            <AnimatePresence mode="wait">
                                {status === "sent" ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                                            <CheckCircle2 size={28} />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-xl font-bold font-heading text-slate-100">Message Delivered</h3>
                                            <p className="text-sm text-slate-400 max-w-sm">
                                                Thank you for reaching out! I've received your message and will respond promptly.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="pt-2 text-xs font-mono text-cyan-400 hover:underline cursor-pointer"
                                        >
                                            Send another message →
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
                                        <input type="hidden" name="_captcha" value="false" />

                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    placeholder="Alex Rivers"
                                                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-cyan-500/50 focus:bg-white/[0.06] text-sm text-slate-100 placeholder:text-slate-600 outline-none transition-all"
                                                />
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                                                    Your Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    placeholder="alex@company.com"
                                                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-cyan-500/50 focus:bg-white/[0.06] text-sm text-slate-100 placeholder:text-slate-600 outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                required
                                                placeholder="Project Collaboration / Job Opportunity"
                                                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-cyan-500/50 focus:bg-white/[0.06] text-sm text-slate-100 placeholder:text-slate-600 outline-none transition-all"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                                                Message
                                            </label>
                                            <textarea
                                                name="message"
                                                required
                                                rows={4}
                                                placeholder="Tell me about your project, timeline, or requirements..."
                                                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-cyan-500/50 focus:bg-white/[0.06] text-sm text-slate-100 placeholder:text-slate-600 outline-none transition-all resize-none"
                                            />
                                        </div>

                                        {status === "error" && (
                                            <p className="text-xs text-rose-400">
                                                There was an issue sending your message. Please email me directly at {emailAddress}.
                                            </p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === "sending"}
                                            className="w-full py-3.5 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm tracking-wide shadow-[0_0_20px_-3px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 active:scale-[0.99]"
                                        >
                                            {status === "sending" ? (
                                                <>
                                                    <Loader2 size={16} className="animate-spin" />
                                                    <span>Sending Message...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Send Message</span>
                                                    <Send size={15} />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export { Contact };
