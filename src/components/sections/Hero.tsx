import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Terminal, ArrowUpRight, Mail } from "lucide-react";

// --- Typewriter Component ---
const Typewriter = ({ texts }: { texts: string[] }) => {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);

    useEffect(() => {
        const currentText = texts[index % texts.length];
        const handleTyping = () => {
            if (isDeleting) {
                setDisplayText((prev) => prev.slice(0, -1));
                setSpeed(50);
            } else {
                setDisplayText((prev) => currentText.slice(0, prev.length + 1));
                setSpeed(150);
            }
            if (!isDeleting && displayText === currentText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setIndex((prev) => prev + 1);
            }
        };
        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, index, texts, speed]);

    return (
        <span className="inline-block">
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[2px] h-[1.1em] bg-[#00ffe5] ml-0.5 align-middle"
            />
        </span>
    );
};

// --- Hero Component ---
const Hero = () => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 320], [1, 0]);
    const yShift = useTransform(scrollY, [0, 320], [0, 60]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const blobX = useSpring(mouseX, { stiffness: 40, damping: 25 });
    const blobY = useSpring(mouseY, { stiffness: 40, damping: 25 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    const roles = ["Full Stack Developer", "UI/UX Designer", "ML Enthusiast", "Data Scientist"];

    return (
        <section
            id="hero"
            className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#060a0f]"
            style={{ fontFamily: "'Syne', sans-serif" }}
        >
            {/* Google Fonts */}
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');`}</style>

            {/* ── BACKGROUND ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Mouse-following glow */}
                <motion.div
                    style={{
                        x: blobX,
                        y: blobY,
                        translateX: "-50%",
                        translateY: "-50%",
                    }}
                    className="absolute w-[560px] h-[560px] rounded-full bg-[#00ffe5]/8 blur-[130px]"
                />
                {/* Corner glows */}
                <div className="absolute top-[-12%] right-[-8%] w-[480px] h-[480px] rounded-full bg-[#7c3aed]/8 blur-[110px]" />
                <div className="absolute bottom-[-10%] left-[-6%] w-[440px] h-[440px] rounded-full bg-[#00ffe5]/5 blur-[120px]" />

                {/* Fine dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.045]"
                    style={{
                        backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                        backgroundSize: "36px 36px",
                        maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
                    }}
                />

                {/* Horizontal scan line */}
                <motion.div
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ffe5]/20 to-transparent"
                />
            </div>

            {/* ── MAIN CONTENT ── */}
            <motion.div
                style={{ opacity, y: yShift }}
                className="relative z-10 w-full max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-6"
            >
                {/* Status pill */}
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >

                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[clamp(2.8rem,8vw,5.5rem)] font-extrabold leading-[0.92] tracking-tight text-white"
                >
                    Sai Sankar
                    <br />
                    <span
                        style={{
                            backgroundImage: "linear-gradient(90deg, #00ffe5 0%, #38bdf8 55%, #a78bfa 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Tumpala
                    </span>
                </motion.h1>

                {/* Typewriter role */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                    className="flex items-center gap-2.5 text-base md:text-lg font-medium"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", color: "rgba(255,255,255,0.45)" }}
                >
                    <Terminal size={17} style={{ color: "#00ffe5" }} />
                    <span>I am a</span>
                    <span className="text-white font-semibold">
                        <Typewriter texts={roles} />
                    </span>
                </motion.div>

                {/* Bio */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.48, duration: 0.7 }}
                    className="text-[0.95rem] md:text-base leading-relaxed max-w-xl"
                    style={{ color: "rgba(255,255,255,0.38)" }}
                >
                    I'm a{" "}
                    <span style={{ color: "rgba(255,255,255,0.78)", fontWeight: 600 }}>
                        Developer & Problem Solver
                    </span>{" "}
                    from Vizag — I build{" "}
                    <span style={{ color: "rgba(255,255,255,0.78)", fontWeight: 600 }}>
                        practical applications that solve real-life problems
                    </span>.
                    From idea to implementation, I focus on creating{" "}
                    <span style={{ color: "#00ffe5", fontWeight: 600 }}>impactful and user-focused solutions</span>.
                </motion.p>

                {/* Divider line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="w-24 h-px origin-left"
                    style={{ background: "linear-gradient(90deg, #00ffe5, transparent)" }}
                />

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest"
                        style={{
                            fontFamily: "'IBM Plex Mono', monospace",
                            background: "#00ffe5",
                            color: "#060a0f",
                            boxShadow: "0 8px 28px -8px rgba(0,255,229,0.35)",
                        }}
                    >
                        View My Work <ArrowUpRight size={16} />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest"
                        style={{
                            fontFamily: "'IBM Plex Mono', monospace",
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "rgba(255,255,255,0.75)",
                            backdropFilter: "blur(8px)",
                        }}
                    >
                        Let's Connect <Mail size={15} style={{ color: "#00ffe5" }} />
                    </motion.button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.82 }}
                    className="mt-6 flex items-center gap-10"
                >
                    {[

                        { value: "5+", label: "Projects" },
                        { value: "100%", label: "Passion" },
                    ].map((stat, _i) => (
                        <motion.div
                            key={stat.label}
                            whileHover={{ y: -3 }}
                            className="flex flex-col items-center gap-0.5 cursor-default group"
                        >
                            <span
                                className="text-2xl font-extrabold group-hover:text-[#00ffe5] transition-colors duration-300"
                                style={{ color: "rgba(255,255,255,0.9)" }}
                            >
                                {stat.value}
                            </span>
                            <span
                                className="text-[0.58rem] font-bold tracking-[0.3em] uppercase"
                                style={{
                                    fontFamily: "'IBM Plex Mono', monospace",
                                    color: "rgba(255,255,255,0.3)",
                                }}
                            >
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* ── SCROLL INDICATOR ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
            >
                <span
                    className="text-[0.48rem] font-bold tracking-[0.55em] uppercase group-hover:text-[#00ffe5] transition-colors"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", color: "rgba(255,255,255,0.18)" }}
                >
                    Scroll
                </span>
                <div
                    className="w-5 h-9 rounded-full flex justify-center pt-1.5"
                    style={{ border: "1.5px solid rgba(255,255,255,0.1)" }}
                >
                    <motion.div
                        animate={{ y: [0, 14, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-1 rounded-full"
                        style={{ background: "#00ffe5", boxShadow: "0 0 6px #00ffe5" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export { Hero };
