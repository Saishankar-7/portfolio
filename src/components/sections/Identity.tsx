import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";
import profileImg from "../../assets/images/sai.png";
import { SectionTitle } from "../ui/SectionTitle";

const Identity = () => {
    return (
        <section
            id="about"
            className="relative py-24 md:py-32 overflow-hidden border-t border-white/[0.04]"
        >
            {/* Background Light */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/[0.03] blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6">
                <SectionTitle
                    eyebrow="About Me"
                    title="Engineered for impact,"
                    highlight="driven by curiosity."
                    description="I combine rigorous software engineering principles with intelligent machine learning to solve real-world problems."
                />

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* ── Left Column: Profile Card ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 space-y-6"
                    >
                        <div className="glass-card relative rounded-3xl p-3 overflow-hidden group">
                            {/* Inner image container */}
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface-card border border-white/10">
                                <img
                                    src={profileImg}
                                    alt="Sai Sankar Tumpala"
                                    className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#090d14]/90 via-transparent to-transparent" />

                                {/* Bottom card overlay */}
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-100">Sai Sankar Tumpala</p>
                                        <p className="text-xs text-slate-400 font-mono">Software Developer</p>
                                    </div>
                                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-medium text-emerald-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        Open for Work
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Facts List */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="glass-card p-4 rounded-2xl space-y-1">
                                <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
                                    <MapPin size={13} />
                                    <span>Location</span>
                                </div>
                                <p className="text-xs font-medium text-slate-200">Visakhapatnam, India</p>
                            </div>
                            <div className="glass-card p-4 rounded-2xl space-y-1">
                                <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
                                    <Briefcase size={13} />
                                    <span>Focus</span>
                                </div>
                                <p className="text-xs font-medium text-slate-200">Full Stack & AI</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Right Column: Story & Competencies ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="lg:col-span-7 space-y-8"
                    >
                        {/* Bio Text */}
                        <div className="space-y-4 text-slate-300 leading-relaxed text-base md:text-lg font-normal">
                            <p>
                                I am an enthusiastic developer with a deep passion for building practical, end-to-end digital solutions. Whether designing intuitive web interfaces or architecting scalable backend APIs, my goal is always to deliver software that is <strong className="text-slate-100 font-semibold">fast, maintainable, and user-centric</strong>.
                            </p>
                            <p className="text-sm md:text-base text-slate-400">
                                With a background in Artificial Intelligence & Machine Learning, I enjoy bridging the gap between cutting-edge computational models and elegant web applications that people interact with every day.
                            </p>
                        </div>

                        {/* Education Highlight Card */}
                        <div className="glass-card p-5 rounded-2xl border-l-4 border-l-cyan-400 flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                                <GraduationCap size={22} />
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-sm font-semibold text-slate-100 font-heading">
                                        B.Tech in Artificial Intelligence & Machine Learning
                                    </h3>
                                </div>
                                <p className="text-xs text-cyan-300 font-mono">
                                    Gayatri Vidya Parishad College of Engineering (GVPCE)
                                </p>
                                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                                    Focused on data structures, algorithms, neural networks, computer vision, and distributed software engineering.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export { Identity };
