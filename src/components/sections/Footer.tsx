import { ArrowUp, Github, Linkedin, Mail,Instagram } from "lucide-react";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative py-12 overflow-hidden border-t border-white/[0.06] bg-[#070a10]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
                        <span className="text-base font-bold font-heading text-slate-100">
                            Sai Sankar Tumpala
                        </span>
                        <p className="text-xs text-slate-400">
                            Full Stack Developer & AI Engineer
                        </p>
                    </div>

                    {/* Social Links & Back to Top */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <a
                                href="https://github.com/Saishankar-7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.06] transition-all"
                                aria-label="GitHub profile"
                            >
                                <Github size={16} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/saishankar7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.06] transition-all"
                                aria-label="LinkedIn profile"
                            >
                                <Linkedin size={16} />
                            </a>
                            <a
                                href="mailto:tumpalasaisankar@gmail.com"
                                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.06] transition-all"
                                aria-label="Email address"
                            >
                                <Mail size={16} />
                            </a>
                            <a
                                href="https://www.instagram.com/saishankar__7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.06] transition-all"
                                aria-label="Instagram profile"
                            >
                                <Instagram size={16} />
                            </a>
                        </div>

                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-cyan-300 text-xs font-mono font-medium border border-white/[0.06] transition-all cursor-pointer"
                            aria-label="Back to top"
                        >
                            <span>Top</span>
                            <ArrowUp size={13} />
                        </button>
                    </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
                    <p>© {new Date().getFullYear()} Sai Sankar Tumpala. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Built with React, TypeScript & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
