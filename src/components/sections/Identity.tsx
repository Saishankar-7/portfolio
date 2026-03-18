import { motion } from "framer-motion";
import { Cpu, Globe, Zap, Layout, GraduationCap } from "lucide-react";
import profileImg from "../../assets/images/sai.png";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const Identity = () => {
    const objectives = [
        { icon: Layout, title: "UI/UX Design", desc: "Human-centred interfaces" },
        { icon: Cpu, title: "AI Integration", desc: "Embedding intelligence" },
        { icon: Globe, title: "Design Systems", desc: "Scalable component libs" },
        { icon: Zap, title: "Performance", desc: "Optimised experiences" },
    ];

    return (
        <section
            id="identity"
            className="relative py-28 overflow-hidden bg-cyber-black font-sans"
        >

            {/* Background glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-8%]  w-[420px] h-[420px] rounded-full bg-[#00ffe5]/6  blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-6%] w-[380px] h-[380px] rounded-full bg-[#7c3aed]/6 blur-[110px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-[0.85fr_1.15fr] gap-16 items-center">

                {/* ── LEFT: Portrait ── */}
                <motion.div {...fadeUp(0)} className="mx-auto md:mx-0 w-full max-w-[340px]">
                    <div className="relative group">
                        {/* Glow behind card */}
                        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#00ffe5]/20 to-[#7c3aed]/10 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                        {/* Image card */}
                        <div
                            className="relative rounded-2xl overflow-hidden aspect-[3/4]"
                            style={{ border: "1px solid rgba(0,255,229,0.15)" }}
                        >
                            <img
                                src={profileImg}
                                alt="Sai Sankar Tumpala"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            />

                            {/* Dark gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#060a0f]/80 via-transparent to-transparent" />

                            {/* Bottom info strip */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">

                                <span
                                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.55rem] font-bold tracking-[0.18em] uppercase"
                                    style={{
                                        fontFamily: "'IBM Plex Mono', monospace",
                                        background: "rgba(0,255,229,0.08)",
                                        border: "1px solid rgba(0,255,229,0.25)",
                                        color: "#00ffe5",
                                    }}
                                >
                                    <span
                                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                                        style={{ background: "#00ffe5", boxShadow: "0 0 6px #00ffe5" }}
                                    />
                                    Open to work
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ── RIGHT: Content ── */}
                <div className="flex flex-col gap-8">

                    {/* Section label */}
                    <motion.div {...fadeUp(0.1)}>
                        <span
                            className="text-[0.6rem] font-bold tracking-[0.3em] uppercase"
                            style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#00ffe5" }}
                        >
                            ◈ Identity
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2 {...fadeUp(0.18)} className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-[1.05] tracking-tight text-white -mt-4">
                        Hello, I'm <br />
                        <span
                            style={{
                                backgroundImage: "linear-gradient(90deg, #00ffe5 0%, #38bdf8 60%, #a78bfa 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Sai Sankar Tumpala
                        </span>
                    </motion.h2>

                    <motion.p
                        {...fadeUp(0.26)}
                        className="text-[0.92rem] leading-relaxed -mt-2"
                        style={{ color: "rgba(255,255,255,0.42)" }}
                    >
                        A{" "}
                        <span style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>
                            Full Stack Developer
                        </span>{" "}
                        who builds{" "}
                        <span style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>
                            impactful digital products
                        </span>.
                        I combine thoughtful design with robust development to deliver experiences that are{" "}
                        <span style={{ color: "#00ffe5", fontWeight: 600 }}>
                            simple, scalable, and effective
                        </span>.
                    </motion.p>

                    {/* Education card */}
                    <motion.div
                        {...fadeUp(0.34)}
                        className="flex items-start gap-4 p-5 rounded-2xl"
                        style={{
                            background: "rgba(255,255,255,0.025)",
                            border: "1px solid rgba(0,255,229,0.12)",
                            borderLeft: "3px solid #00ffe5",
                        }}
                    >
                        <div
                            className="p-2.5 rounded-xl shrink-0"
                            style={{ background: "rgba(0,255,229,0.08)" }}
                        >
                            <GraduationCap size={20} style={{ color: "#00ffe5" }} />
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm mb-1">Education</p>
                            <p
                                className="text-[0.82rem] leading-relaxed"
                                style={{ color: "rgba(255,255,255,0.38)" }}
                            >
                                B.Tech in{" "}
                                <span style={{ color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                                    Artificial Intelligence & Machine Learning
                                </span>{" "}
                                — Gayatri Vidya Parishad College of Engineering.
                                Building a strong foundation in programming, problem-solving, and modern technologies.
                            </p>
                        </div>
                    </motion.div>

                    {/* Core Objectives */}
                    <motion.div {...fadeUp(0.42)}>
                        <p
                            className="text-[0.58rem] font-bold tracking-[0.32em] uppercase mb-5"
                            style={{ fontFamily: "'IBM Plex Mono', monospace", color: "rgba(255,255,255,0.28)" }}
                        >
                            Core Objectives
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {objectives.map((obj, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="flex items-center gap-3 p-3 rounded-xl cursor-default group"
                                    style={{
                                        background: "rgba(255,255,255,0.02)",
                                        border: "1px solid rgba(255,255,255,0.05)",
                                    }}
                                >
                                    <div
                                        className="p-2 rounded-lg shrink-0 group-hover:bg-[rgba(0,255,229,0.12)] transition-colors duration-300"
                                        style={{ background: "rgba(0,255,229,0.06)" }}
                                    >
                                        <obj.icon size={15} style={{ color: "#00ffe5" }} />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-[0.8rem] leading-tight">{obj.title}</p>
                                        <p
                                            className="text-[0.7rem] mt-0.5"
                                            style={{ fontFamily: "'IBM Plex Mono', monospace", color: "rgba(255,255,255,0.32)" }}
                                        >
                                            {obj.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export { Identity };
