import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowUpRight, Mail, Terminal, Sparkles, ChevronDown, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";

// --- Typewriter Component ---
const Typewriter = ({ texts }: { texts: string[] }) => {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(120);

    useEffect(() => {
        const currentText = texts[index % texts.length];
        const handleTyping = () => {
            if (isDeleting) {
                setDisplayText((prev) => prev.slice(0, -1));
                setSpeed(40);
            } else {
                setDisplayText((prev) => currentText.slice(0, prev.length + 1));
                setSpeed(100);
            }
            if (!isDeleting && displayText === currentText) {
                setTimeout(() => setIsDeleting(true), 2400);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setIndex((prev) => prev + 1);
            }
        };
        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, index, texts, speed]);

    return (
        <span className="inline-flex items-center text-cyan-300 font-semibold font-mono">
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                className="inline-block w-0.5 h-4 bg-cyan-400 ml-1"
            />
        </span>
    );
};

const Hero = () => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 350], [1, 0]);
    const yShift = useTransform(scrollY, [0, 350], [0, 50]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const blobX = useSpring(mouseX, { stiffness: 45, damping: 25 });
    const blobY = useSpring(mouseY, { stiffness: 45, damping: 25 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const roles = [
        "Full Stack Web Applications",
        "Machine Learning Pipelines",
        "Scalable Backend Services",
        "Thoughtful UI/UX Systems",
    ];

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-[100vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
        >
            {/* ── Visual Backdrop ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
                {/* Mouse-following ambient glow */}
                <motion.div
                    style={{
                        x: blobX,
                        y: blobY,
                        translateX: "-50%",
                        translateY: "-50%",
                    }}
                    className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/[0.07] blur-[120px]"
                />

                {/* Secondary ambient lights */}
                <div className="absolute top-[10%] right-[15%] w-[400px] h-[400px] rounded-full bg-indigo-500/[0.05] blur-[130px]" />
                <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-cyan-500/[0.04] blur-[100px]" />

                {/* Subtle dot matrix with radial mask */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                        maskImage: "radial-gradient(ellipse 75% 65% at 50% 45%, black 20%, transparent 85%)",
                        WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 45%, black 20%, transparent 85%)",
                    }}
                />
            </div>

            {/* ── Main Hero Content ── */}
            <motion.div
                style={{ opacity, y: yShift }}
                className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-8"
            >
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md"
                >
                    <Sparkles size={13} className="text-cyan-400" />
                    <span className="text-xs font-mono font-medium tracking-wider text-slate-300 uppercase">
                        Full Stack Developer & AI Engineer
                    </span>
                </motion.div>

                {/* Confident Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-3"
                >
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-slate-100 tracking-tight leading-[1.08]">
                        Crafting digital products with{" "}
                        <span className="text-gradient-accent">clarity & precision.</span>
                    </h1>
                </motion.div>

                {/* Subtitle with Typewriter */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-2 text-base sm:text-lg text-slate-400 max-w-2xl font-normal leading-relaxed"
                >
                    <div className="flex items-center gap-2">
                        <Terminal size={16} className="text-cyan-400 shrink-0" />
                        <span>Specializing in</span>
                    </div>
                    <Typewriter texts={roles} />
                </motion.div>

                {/* Supporting Description */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed"
                >
                    Hi, I'm <strong className="text-slate-200 font-semibold">Sai Sankar Tumpala</strong>. I build robust full-stack applications and intelligent ML systems designed to solve real problems and deliver seamless user experiences.
                </motion.p>

                {/* Action CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
                >
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => scrollTo("projects")}
                        className="group"
                    >
                        <span>View Selected Work</span>
                        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Button>

                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => scrollTo("contact")}
                    >
                        <Mail size={16} className="text-cyan-400" />
                        <span>Get in Touch</span>
                    </Button>
                </motion.div>

                {/* Quick Highlights / Proof Points */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-6 text-xs text-slate-400 border-t border-white/[0.06] w-full max-w-lg"
                >
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-cyan-400" />
                        <span>5+ Full-Stack Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-cyan-400" />
                        <span>3+ AI/ML Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-cyan-400" />
                        <span>Clean Architecture</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                onClick={() => scrollTo("about")}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer text-slate-500 hover:text-slate-300 transition-colors select-none"
            >
                <span className="text-[10px] font-mono tracking-widest uppercase">Explore</span>
                <ChevronDown size={15} className="animate-bounce" />
            </motion.div>
        </section>
    );
};

export { Hero };
