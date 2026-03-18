import { motion } from "framer-motion";
import { Database, Brain, Layout } from "lucide-react";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const TechStack = () => {
    const categories = [
        {
            title: "Frontend Architecture",
            icon: Layout,
            desc: "Crafting immersive, performant user interfaces with modern reactive frameworks and pixel-perfect design systems.",
            stack: ["React", "Tailwind", "TypeScript"],
            accent: "#00ffe5",
        },
        {
            title: "AI & Machine Learning",
            icon: Brain,
            desc: "Implementing neural networks and LLM pipelines for autonomous intelligence and intelligent UX experiences.",
            stack: ["Python", "Machine Learning", "Deep Learning", "NLP"],
            accent: "#a78bfa",
        },
        {
            title: "Backend Systems",
            icon: Database,
            desc: "Developing scalable distributed services and high-concurrency micro-architectures that power modern apps.",
            stack: ["Node.js", "Express", "MongoDB", "REST APIs", "FastAPI", "Flask"],
            accent: "#38bdf8",
        },
    ];

    return (
        <section
            id="stack"
            className="relative py-28 overflow-hidden bg-[#060a0f]"
            style={{ fontFamily: "'Syne', sans-serif" }}
        >

            {/* Background glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#00ffe5]/5 blur-[120px]" />
                <div className="absolute bottom-0 right-[-5%] w-[380px] h-[380px] rounded-full bg-[#7c3aed]/6 blur-[110px]" />
                {/* Subtle horizontal rule at top */}
                <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(0,255,229,0.15), transparent)" }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">

                {/* ── Section Header ── */}
                <motion.div {...fadeUp(0)} className="mb-16">
                    <span
                        className="text-[0.6rem] font-bold tracking-[0.3em] uppercase block mb-4"
                        style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#00ffe5" }}
                    >
                        ◈ Core Competencies
                    </span>
                    <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-tight text-white leading-tight mb-4">
                        Technical Skills
                    </h2>
                    <p className="text-[0.92rem] max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
                        My toolkit is optimised for performance, scalability, and modern AI integration —
                        built to ship fast and last long.
                    </p>
                </motion.div>

                {/* ── Cards Grid ── */}
                <div className="grid md:grid-cols-3 gap-5">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(0.12 + i * 0.1)}
                            whileHover={{ y: -6 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="relative flex flex-col p-6 rounded-2xl overflow-hidden group cursor-default"
                            style={{
                                background: "rgba(255,255,255,0.025)",
                                border: "1px solid rgba(255,255,255,0.06)",
                            }}
                        >
                            {/* Card top accent line */}
                            <div
                                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: `linear-gradient(90deg, transparent, ${cat.accent}, transparent)` }}
                            />

                            {/* Subtle glow on hover */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                                style={{ background: `radial-gradient(ellipse at 50% 0%, ${cat.accent}0d 0%, transparent 70%)` }}
                            />

                            {/* Icon */}
                            <div
                                className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0"
                                style={{ background: `${cat.accent}12` }}
                            >
                                <cat.icon size={20} style={{ color: cat.accent }} />
                            </div>

                            {/* Title */}
                            <h3 className="text-[1rem] font-bold text-white mb-3 leading-tight">{cat.title}</h3>

                            {/* Description */}
                            <p
                                className="text-[0.82rem] leading-relaxed mb-6 flex-grow"
                                style={{ color: "rgba(255,255,255,0.36)" }}
                            >
                                {cat.desc}
                            </p>

                            {/* Tech badges */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {cat.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-1 rounded-lg text-[0.6rem] font-bold tracking-[0.18em] uppercase transition-colors duration-200"
                                        style={{
                                            fontFamily: "'IBM Plex Mono', monospace",
                                            background: `${cat.accent}0f`,
                                            border: `1px solid ${cat.accent}22`,
                                            color: `${cat.accent}cc`,
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { TechStack };
