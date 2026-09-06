import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import carRentalImg from "../../assets/images/carrental.png";
import wanderlustImg from "../../assets/images/Airbnb.png";
import devconnectImg from "../../assets/images/devconnect.png";
import spamImg from "../../assets/images/spam.png";
import movieImg from "../../assets/images/movie.png";
import nitisetuImg from "../../assets/images/nitisetu.png";
import cloudshieldImg from "../../assets/images/cloudshield.png";
import { SectionTitle } from "../ui/SectionTitle";

interface Project {
    title: string;
    category: "Full Stack" | "AI / ML";
    desc: string;
    tags: string[];
    links: {
        github: string;
        demo: string;
    };
    image: string;
    featured?: boolean;
}

const projectsData: Project[] = [
    {
        title: "DevConnect",
        category: "Full Stack",
        desc: "A developer networking platform enabling engineers to connect with employees for referral requests, real-time messaging, and profile evaluation.",
        tags: ["React", "Socket.io", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        links: {
            github: "https://github.com/Saishankar-7/devconnect7",
            demo: "https://devconnect7.vercel.app/",
        },
        image: devconnectImg,
        featured: true,
    },
    {
        title: "Niti-Setu",
        category: "AI / ML",
        desc: "A voice-enabled, Retrieval-Augmented Generation (RAG) engine that helps farmers instantly discover eligible government schemes. It uses local embeddings and Gemini LLM to reason over official government PDFs and provide citation-backed decisions.",
        tags: ["React", "Node.js", "Express", "MongoDB Atlas", "Gemini 2.5 Flash", "RAG"],
        links: {
            github: "https://github.com/Saishankar-7/Niti-Setu",
            demo: "https://niti-setu-sand.vercel.app",
        },
        image: nitisetuImg,
        featured: true,
    },
    {
        title: "CloudShield",
        category: "Full Stack",
        desc: "An enterprise-grade Zero-Trust Access Management & Secure Vault platform implementing dynamic context-aware policy evaluation, step-up MFA verification, AES-256 document encryption, and real-time audit logging.",
        tags: ["React", "Node.js", "Express", "MongoDB", "Zero Trust", "Cloudinary", "JWT & MFA"],
        links: {
            github: "https://github.com/Saishankar-7/CloudShield",
            demo: "https://cloud-shield-theta.vercel.app",
        },
        image: cloudshieldImg,
        featured: true,
    },
    {
        title: "Movie Recommendation Engine",
        category: "AI / ML",
        desc: "An intelligent content-based recommendation system that analyzes plot summaries, genres, and metadata to generate personalized movie recommendations.",
        tags: ["React", "FastAPI", "Python", "Scikit-Learn", "NLP"],
        links: {
            github: "https://github.com/Saishankar-7/Movie-Recommandation.git",
            demo: "https://movierecommandation-ruddy.vercel.app/",
        },
        image: movieImg,
        featured: true,
    },
    {
        title: "Car Rental Platform",
        category: "Full Stack",
        desc: "A full-stack booking application featuring real-time vehicle availability, custom pickup scheduling, secure auth, and an admin inventory management dashboard.",
        tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
        links: {
            github: "https://github.com/Saishankar-7/CarRental",
            demo: "https://car-rental-pink-seven.vercel.app",
        },
        image: carRentalImg,
    },
    {
        title: "SMS Spam Detection",
        category: "AI / ML",
        desc: "A real-time SMS spam classifier built with machine learning and natural language processing to reliably distinguish legitimate messages from fraud.",
        tags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "NLP"],
        links: {
            github: "https://github.com/Saishankar-7/sms-spam-classifier.git",
            demo: "https://sms-spam-classifier-5ew2.onrender.com/",
        },
        image: spamImg,
    },
    {
        title: "WanderLust — Vacation Rentals",
        category: "Full Stack",
        desc: "A vacation rental marketplace with Google OAuth authentication, interactive Mapbox geolocation map views, listing management, and booking flows.",
        tags: ["Node.js", "Express", "MongoDB", "Mapbox", "EJS"],
        links: {
            github: "https://github.com/Saishankar-7/WanderLust",
            demo: "https://wander-lust-mu-sepia.vercel.app/",
        },
        image: wanderlustImg,
    },
];

const categories = ["All", "Full Stack", "AI / ML"] as const;

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>("All");

    const filteredProjects = projectsData.filter((project) => {
        if (selectedCategory === "All") return true;
        return project.category === selectedCategory;
    });

    return (
        <section
            id="projects"
            className="relative py-24 md:py-32 overflow-hidden border-t border-white/[0.04]"
        >
            {/* Ambient Background Light */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/[0.03] blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <SectionTitle
                        eyebrow="Selected Works"
                        title="Featured projects &"
                        highlight="recent builds."
                        description="Real-world applications engineered end-to-end, combining clean frontend aesthetics with robust backend pipelines."
                        className="mb-0 md:mb-0"
                    />

                    {/* Filter Tabs */}
                    <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-surface-card border border-white/[0.08] self-start md:self-auto select-none">
                        {categories.map((cat) => {
                            const isActive = selectedCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className="relative px-4 py-1.5 rounded-xl text-xs font-medium transition-colors duration-200 cursor-pointer focus:outline-none"
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="project-tab-pill"
                                            className="absolute inset-0 bg-white/[0.1] rounded-xl border border-white/10 shadow-sm"
                                            transition={{ type: "spring", stiffness: 380, damping: 28 }}
                                        />
                                    )}
                                    <span className={`relative z-10 ${isActive ? "text-cyan-300 font-semibold" : "text-slate-400 hover:text-slate-200"}`}>
                                        {cat}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300"
                            >
                                {/* ── Image Container (Consistent 16:10 Aspect Ratio) ── */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-surface-card border-b border-white/[0.06] select-none">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#090d14]/70 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                                    {/* Category Chip */}
                                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#090d14]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono font-medium text-cyan-300 uppercase tracking-wider">
                                        {project.category}
                                    </span>

                                    {/* Live Badge */}
                                    {project.links.demo && (
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-slate-950 text-[11px] font-semibold tracking-wide transition-all shadow-md active:scale-95"
                                        >
                                            <span>Live Demo</span>
                                            <ArrowUpRight size={12} />
                                        </a>
                                    )}
                                </div>

                                {/* ── Card Content ── */}
                                <div className="p-6 flex flex-col flex-grow justify-between gap-5">
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-bold font-heading text-slate-100 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                                            <span>{project.title}</span>
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                                            {project.desc}
                                        </p>
                                    </div>

                                    <div className="space-y-4 pt-2">
                                        {/* Tech Tags */}
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2.5 py-0.5 rounded-md bg-white/[0.04] text-slate-300 text-[11px] font-mono border border-white/[0.06]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Links */}
                                        <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-100 transition-colors"
                                            >
                                                <Github size={14} />
                                                <span>Source Code</span>
                                            </a>

                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                                            >
                                                <span>Visit Site</span>
                                                <ExternalLink size={12} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export { Projects };
