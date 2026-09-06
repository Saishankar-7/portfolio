import { useState, useEffect } from "react";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import {
    Home,
    User,
    Code2,
    LayoutGrid,
    Mail,
    Menu,
    X,
    FileText,
    ArrowUpRight,
    MapPin,
    Sparkles,
} from "lucide-react";

const navLinks = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Projects", href: "#projects", icon: LayoutGrid },
    { name: "Contact", href: "#contact", icon: Mail },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Active section detection via scroll position
            const sections = [
                { id: "hero", name: "Home" },
                { id: "about", name: "About" },
                { id: "skills", name: "Skills" },
                { id: "projects", name: "Projects" },
                { id: "contact", name: "Contact" },
            ];

            const scrollPosition = window.scrollY + 200;

            for (const section of [...sections].reverse()) {
                const el = document.getElementById(section.id);
                if (el && scrollPosition >= el.offsetTop) {
                    setActiveSection(section.name);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle body scroll locking when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = targetElement.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setMobileMenuOpen(false);
    };

    return (
        <>
            {/* Main Header Container */}
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    scrolled
                        ? "py-3.5 bg-[#090d14]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-glass"
                        : "py-6 bg-transparent"
                )}
            >
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    {/* Brand / Logo */}
                    <a
                        href="#hero"
                        onClick={(e) => scrollToSection(e, "#hero")}
                        className="flex items-center gap-3 group focus:outline-none"
                    >
                        <div className="relative w-10 h-10 rounded-xl bg-surface-card border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_16px_rgba(6,182,212,0.25)]">
                            <span className="font-heading font-extrabold text-sm text-cyan-400">
                                ST
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold font-heading text-slate-100 group-hover:text-cyan-300 transition-colors">
                                Sai Sankar
                            </span>
                            <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">
                                Full Stack Dev
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation (Floating Pill) */}
                    <nav className="hidden md:block">
                        <div className="flex items-center gap-1 p-1.5 rounded-full bg-surface-card/80 backdrop-blur-md border border-white/[0.08] shadow-inner">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.name;
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        onMouseEnter={() => setHoveredLink(link.name)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                        className={cn(
                                            "relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 flex items-center gap-1.5 select-none focus:outline-none",
                                            isActive
                                                ? "text-slate-900 font-semibold"
                                                : "text-slate-400 hover:text-slate-100"
                                        )}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-active-pill"
                                                className="absolute inset-0 bg-cyan-400 rounded-full shadow-[0_0_16px_rgba(6,182,212,0.4)]"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 30,
                                                }}
                                            />
                                        )}
                                        {hoveredLink === link.name && !isActive && (
                                            <motion.div
                                                layoutId="nav-hover-pill"
                                                className="absolute inset-0 bg-white/[0.06] rounded-full"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 30,
                                                }}
                                            />
                                        )}
                                        <span className="relative z-10">{link.name}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </nav>

                    {/* Action Area */}
                    <div className="flex items-center gap-3">
                        {/* Open for Work Beacon */}
                        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                            </span>
                            <span className="text-[11px] font-medium tracking-wide text-emerald-300">
                                Available for Work
                            </span>
                        </div>

                        {/* Resume Button */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 hover:text-white text-xs font-medium border border-white/10 transition-all duration-200 hover:border-white/20 active:scale-[0.98]"
                        >
                            <FileText size={13} className="text-cyan-400" />
                            <span>Resume</span>
                            <ArrowUpRight size={12} className="opacity-60" />
                        </a>

                        {/* Mobile Menu Trigger */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden relative z-50 p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white active:scale-95 transition-all"
                            aria-label="Toggle navigation menu"
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Slide-in Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <div className="fixed inset-0 z-50 md:hidden">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 bg-[#090d14]/80 backdrop-blur-md"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 28, stiffness: 280 }}
                            className="absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#0e131f] border-l border-white/10 shadow-2xl flex flex-col p-6 pt-24 overflow-y-auto"
                        >
                            <div className="flex items-center gap-2 mb-8 px-2">
                                <Sparkles className="text-cyan-400" size={16} />
                                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                                    Navigation
                                </span>
                            </div>

                            <nav className="flex flex-col gap-2 mb-auto">
                                {navLinks.map((link) => {
                                    const isActive = activeSection === link.name;
                                    const Icon = link.icon;
                                    return (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) => scrollToSection(e, link.href)}
                                            className={cn(
                                                "flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200",
                                                isActive
                                                    ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-semibold"
                                                    : "text-slate-400 hover:text-slate-100 hover:bg-white/[0.04]"
                                            )}
                                        >
                                            <Icon
                                                size={18}
                                                className={isActive ? "text-cyan-400" : "text-slate-500"}
                                            />
                                            <span>{link.name}</span>
                                        </a>
                                    );
                                })}
                            </nav>

                            {/* Mobile Drawer Footer */}
                            <div className="pt-6 border-t border-white/[0.08] space-y-4">
                                <div className="flex items-center gap-2 text-xs text-slate-400 px-1">
                                    <MapPin size={13} className="text-cyan-400" />
                                    <span>Visakhapatnam, AP, India</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2.5">
                                    <a
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-medium text-slate-200 hover:bg-white/[0.08]"
                                    >
                                        <FileText size={13} />
                                        Resume
                                    </a>
                                    <button
                                        onClick={(e) => {
                                            scrollToSection(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#contact");
                                        }}
                                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-cyan-500 text-slate-950 text-xs font-semibold hover:bg-cyan-400"
                                    >
                                        Contact Me
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
