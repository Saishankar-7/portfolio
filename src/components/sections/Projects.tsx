import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import carRentalImg from "../../assets/images/carrental.png";
import wanderlustImg from "../../assets/images/Airbnb.png";
import devconnectImg from "../../assets/images/devconnect.png";
import spamImg from "../../assets/images/spam.png";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const Projects = () => {
    const projects = [
        {
            title: "DevConnect",
            desc: "DevConnect is a web platform that connects developers with employees to request job referrals. Users can create profiles, chat in real time, and send referral requests. Employees can review profiles and accept or reject requests. It helps developers improve their chances of getting interview calls.",
            tags: ["React", "Socket.io", "Tailwind CSS", "Node.js", "MongoDB"],
            links: {
                github: "https://github.com/Saishankar-7/devconnect7",
                demo: "https://devconnect7.vercel.app/",
            },
            image: devconnectImg,
            accent: "#38bdf8",
        },
        {
            title: "Car Rental",
            desc: "A full-stack MERN car rental booking app deployed on Vercel — featuring user authentication, interactive car browsing with pickup scheduling, seamless booking workflows, and an admin dashboard for inventory and order management.",
            tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
            links: {
                github: "https://github.com/Saishankar-7/CarRental",
                demo: "https://car-rental-pink-seven.vercel.app",
            },
            image: carRentalImg,
            accent: "#00ffe5",
        },
        {
            title: "SMS Spam Detection",
            desc: "An SMS spam classifier works by analyzing the content of text messages and applying machine learning techniques to sort them into two categories: spam and ham. Spam messages include unwanted content such as advertisements, scams, or fake offers, while ham messages are normal, legitimate communications like personal or important messages.",
            tags: ["Python", "Scikit-learn", "Pandas", "Numpy"],
            links: {
                github: "https://github.com/Saishankar-7/sms-spam-classifier.git",
                demo: "https://sms-spam-classifier-5ew2.onrender.com/",
            },
            image: spamImg,
            accent: "#38bdf8",
        },
        {
            title: "AirBnB Clone",
            desc: "A full-stack vacation rental platform for browsing, listing, and booking accommodations — complete with Google/GitHub OAuth login, Mapbox location views, and seamless booking flows.",
            tags: ["EJS", "Express", "MongoDB", "Mapbox"],
            links: {
                github: "https://github.com/Saishankar-7/WanderLust",
                demo: "https://wander-lust-mu-sepia.vercel.app/",
            },
            image: wanderlustImg,
            accent: "#38bdf8",
        }

    ];

    return (
        <section
            id="projects"
            className="relative py-28 overflow-hidden bg-[#060a0f]"
            style={{ fontFamily: "'Syne', sans-serif" }}
        >

            {/* Background glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-8%] right-[-6%] w-[420px] h-[420px] rounded-full bg-[#00ffe5]/5 blur-[120px]" />
                <div className="absolute bottom-[-8%] left-[-5%] w-[380px] h-[380px] rounded-full bg-[#38bdf8]/5 blur-[110px]" />
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
                        ◈ Selected Works
                    </span>
                    <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-tight text-white leading-tight mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-[0.92rem] max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
                        A curated set of real-world builds — from booking platforms to rental systems —
                        each shipped end-to-end.
                    </p>
                </motion.div>

                {/* ── Project Cards ── */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(0.12 + i * 0.12)}
                            whileHover={{ y: -6 }}
                            transition={{ type: "spring", stiffness: 240, damping: 20 }}
                            className="group relative flex flex-col rounded-2xl overflow-hidden"
                            style={{
                                background: "rgba(255,255,255,0.025)",
                                border: "1px solid rgba(255,255,255,0.06)",
                            }}
                        >
                            {/* Top accent line on hover */}
                            <div
                                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                                style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
                            />

                            {/* ── Image ── */}
                            <div className="relative h-44 overflow-hidden shrink-0">
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-[#060a0f]/40 group-hover:bg-[#060a0f]/10 transition-colors duration-500 z-10" />
                                {/* Gradient fade into card body */}
                                <div className="absolute bottom-0 left-0 right-0 h-20 z-10"
                                    style={{ background: "linear-gradient(to bottom, transparent, rgba(6,10,15,0.95))" }}
                                />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
                                />

                                {/* Live demo pill — top right */}
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.58rem] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
                                    style={{
                                        fontFamily: "'IBM Plex Mono', monospace",
                                        background: "rgba(6,10,15,0.85)",
                                        border: `1px solid ${project.accent}44`,
                                        color: project.accent,
                                        backdropFilter: "blur(8px)",
                                    }}
                                >
                                    <span
                                        className="w-1.5 h-1.5 rounded-full"
                                        style={{ background: project.accent, boxShadow: `0 0 6px ${project.accent}` }}
                                    />
                                    Live
                                </a>
                            </div>

                            {/* ── Body ── */}
                            <div className="flex flex-col flex-grow p-5 gap-4">

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-0.5 rounded-md text-[0.58rem] font-bold tracking-[0.18em] uppercase"
                                            style={{
                                                fontFamily: "'IBM Plex Mono', monospace",
                                                background: `${project.accent}0f`,
                                                border: `1px solid ${project.accent}22`,
                                                color: `${project.accent}bb`,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h3 className="text-[1.05rem] font-bold text-white leading-snug flex items-center gap-2 group/title">
                                    {project.title}
                                    <ArrowUpRight
                                        size={15}
                                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                        style={{ color: project.accent }}
                                    />
                                </h3>

                                {/* Description */}
                                <p
                                    className="text-[0.82rem] leading-relaxed flex-grow"
                                    style={{ color: "rgba(255,255,255,0.36)" }}
                                >
                                    {project.desc}
                                </p>

                                {/* Footer links */}
                                <div
                                    className="flex items-center gap-4 pt-4"
                                    style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                                >
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-[0.72rem] font-bold transition-colors duration-200 hover:text-white"
                                        style={{
                                            fontFamily: "'IBM Plex Mono', monospace",
                                            color: "rgba(255,255,255,0.35)",
                                        }}
                                    >
                                        <Github size={13} /> GitHub
                                    </a>
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-auto flex items-center gap-2 text-[0.72rem] font-bold transition-colors duration-200"
                                        style={{
                                            fontFamily: "'IBM Plex Mono', monospace",
                                            color: project.accent,
                                        }}
                                    >
                                        Live Demo <ExternalLink size={12} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Projects };
