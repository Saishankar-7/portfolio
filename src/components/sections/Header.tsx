import { useState, useEffect } from "react";
import { cn } from "../../utils/cn";
import {
    motion,
    useScroll,
    useMotionValueEvent,
    AnimatePresence,
} from "framer-motion";
import {
    Home,
    User,
    Code2,
    LayoutGrid,
    Mail,
    Monitor,
    Menu,
    X,
    MapPin,
    Zap,
    ChevronRight,
    FileText,
    ArrowUpRight,
} from "lucide-react";

const navLinks = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "About", href: "#identity", icon: User },
    { name: "Skills", href: "#stack", icon: Monitor },
    { name: "Projects", href: "#projects", icon: LayoutGrid },
    { name: "Contact", href: "#contact", icon: Mail },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    // Handle body scroll locking when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [mobileMenuOpen]);

    // Active section detection (simplified for now, usually needs IntersectionObserver)
    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => link.href.substring(1));
            const scrollPosition = window.scrollY + 100;

            for (const sectionId of sections.reverse()) {
                const element = document.getElementById(sectionId);
                if (element && scrollPosition >= element.offsetTop) {
                    const link = navLinks.find(l => l.href === `#${sectionId}`);
                    if (link) setActiveSection(link.name);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Main Header Container */}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    scrolled
                        ? "py-3 bg-cyber-black/40 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                        : "py-6 bg-transparent"
                )}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                    {/* Brand/Logo Area */}
                    <motion.a
                        href="#hero"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 group"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 rounded-xl bg-primary/30 blur-lg group-hover:bg-primary/50 transition-all duration-500" />
                            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-neon-blue flex items-center justify-center shadow-2xl border border-white/10">
                                <Code2 className="w-6 h-6 text-cyber-black animate-pulse-slow" strokeWidth={2.5} />
                            </div>
                        </div>
                        <div className="hidden sm:flex flex-col">
                            <span className="text-base font-extrabold tracking-tight text-white uppercase font-syne leading-none">
                                Sai Sankar
                            </span>
                            <div className="flex items-center gap-1.5 mt-1">
                                <span className="h-[2px] w-4 bg-primary rounded-full" />
                                <span className="text-[0.65rem] font-bold tracking-[0.2em] text-primary/80 uppercase font-mono">
                                    Software Dev
                                </span>
                            </div>
                        </div>
                    </motion.a>

                    {/* Desktop Navigation (Floating Pill style) */}
                    <nav className="hidden md:block">
                        <div className={cn(
                            "flex items-center gap-1 p-1.5 rounded-full border transition-all duration-500",
                            "bg-white/[0.03] backdrop-blur-xl border-white/[0.08] shadow-inner font-mono",
                            scrolled && "bg-cyber-black/80 border-white/20 shadow-2xl scale-95"
                        )}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onMouseEnter={() => setHoveredLink(link.name)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    className={cn(
                                        "relative px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2",
                                        activeSection === link.name ? "text-cyber-black" : "text-white/50 hover:text-white"
                                    )}
                                >
                                    {activeSection === link.name && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute inset-0 bg-primary rounded-full -z-10 shadow-[0_0_20px_rgba(0,245,212,0.4)]"
                                            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                        />
                                    )}
                                    {hoveredLink === link.name && activeSection !== link.name && (
                                        <motion.div
                                            layoutId="hover-pill"
                                            className="absolute inset-0 bg-white/5 rounded-full -z-20"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                                        />
                                    )}
                                    <link.icon className={cn("w-4 h-4", activeSection === link.name ? "text-cyber-black" : "text-primary/70")} />
                                    <span className="relative z-10">{link.name}</span>
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* Action Area */}
                    <div className="flex items-center gap-3">
                        {/* Resume Button (Desktop) */}
                        <motion.a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-xl bg-primary text-cyber-black text-[0.65rem] font-bold uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 font-mono"
                        >
                            <FileText size={14} />
                            <span>Resume</span>
                            <ArrowUpRight size={12} className="opacity-50" />
                        </motion.a>

                        {/* Availability Indicator */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="hidden lg:flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 hover:border-emerald-500/30 transition-colors duration-300"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                            </span>
                            <span className="text-[0.65rem] font-bold tracking-widest text-emerald-400/90 uppercase font-mono">
                                Open for Work
                            </span>
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden relative z-50 p-2.5 rounded-2xl bg-white/5 border border-white/10 text-white hover:text-primary transition-all duration-300 hover:scale-105 active:scale-95"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Navigation Menu - Redesigned */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <div className="fixed inset-0 z-[60] md:hidden">
                        {/* Backdrop with Blur */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-cyber-black/60 backdrop-blur-lg"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Side Panel */}
                        <motion.div
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-cyber-dark/95 border-l border-white/10 shadow-2xl flex flex-col pt-[20%] overflow-hidden"
                        >
                            {/* Decorative background element */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-neon-blue/10 rounded-full blur-[100px]" />

                            <div className="px-8 mb-12 relative">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                                        <Zap className="text-primary w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-extrabold text-white italic tracking-tighter uppercase font-syne">
                                        Navigation
                                    </h2>
                                </div>
                                <p className="text-xs text-white/40 font-bold uppercase tracking-[0.2em] font-mono">Explore my world</p>
                            </div>

                            <nav className="flex flex-col gap-4 px-6 mb-auto relative">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ x: 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={cn(
                                            "flex items-center justify-between p-5 rounded-2xl group transition-all duration-300",
                                            activeSection === link.name
                                                ? "bg-primary/10 border border-primary/20"
                                                : "hover:bg-white/5 border border-transparent"
                                        )}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={cn(
                                                "p-3 rounded-xl transition-colors duration-300",
                                                activeSection === link.name ? "bg-primary text-cyber-black" : "bg-white/5 text-white/60"
                                            )}>
                                                <link.icon size={20} strokeWidth={2.5} />
                                            </div>
                                            <span className={cn(
                                                "text-sm font-bold tracking-widest uppercase font-mono",
                                                activeSection === link.name ? "text-white" : "text-white/50"
                                            )}>
                                                {link.name}
                                            </span>
                                        </div>
                                        <ChevronRight size={18} className={cn(
                                            "transition-transform duration-300 group-hover:translate-x-1",
                                            activeSection === link.name ? "text-primary" : "text-white/20"
                                        )} />
                                    </motion.a>
                                ))}
                            </nav>

                            {/* Footer inside mobile menu */}
                            <div className="p-8 border-t border-white/5 bg-white/[0.02] relative">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                                        <div className="w-full h-full bg-gradient-to-br from-primary to-neon-blue flex items-center justify-center text-cyber-black font-black">
                                            SS
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[0.6rem] font-black text-white uppercase tracking-widest leading-none mb-1">Location</p>
                                        <div className="flex items-center gap-1.5 text-xs text-white/40 font-bold">
                                            <MapPin size={12} className="text-primary/70" />
                                            <span>Vizag, AP, India</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href="/resume.pdf"
                                        download="resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-[0.65rem] font-bold text-center text-white/60 uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 transition-colors font-mono"
                                    >
                                        <FileText size={14} /> Resume
                                    </a>
                                    <button
                                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="flex-[1.5] py-3 px-4 rounded-xl bg-primary text-cyber-black text-[0.65rem] font-bold text-center uppercase tracking-widest shadow-lg shadow-primary/20 font-mono"
                                    >
                                        Hire Me
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export { Header };
