import { motion } from "framer-motion";
import { Layout, Server, Brain, Wrench } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";

const skillCategories = [
    {
        title: "Frontend Architecture",
        icon: Layout,
        desc: "Building accessible, highly responsive, and interactive user interfaces with modern component design systems.",
        skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 & CSS3", "Vite"],
        accent: "cyan",
    },
    {
        title: "Backend & Systems",
        icon: Server,
        desc: "Engineering scalable backend architectures, authentication flows, and high-concurrency database queries.",
        skills: ["Node.js", "Express", "FastAPI", "Flask", "MongoDB", "REST APIs", "Socket.io"],
        accent: "sky",
    },
    {
        title: "AI & Machine Learning",
        icon: Brain,
        desc: "Developing and deploying predictive models, NLP classifiers, and intelligent recommendation systems.",
        skills: ["Python", "Scikit-Learn", "NLP", "Pandas", "NumPy", "Deep Learning", "Data Pipelines"],
        accent: "indigo",
    },
    {
        title: "Tools & Workflow",
        icon: Wrench,
        desc: "Employing standard DevOps tooling, version control, and continuous testing to ship high-quality code.",
        skills: ["Git & GitHub", "Vercel", "Postman", "Linux", "VS Code", "npm / yarn"],
        accent: "teal",
    },
];

const TechStack = () => {
    return (
        <section
            id="skills"
            className="relative py-24 md:py-32 overflow-hidden border-t border-white/[0.04]"
        >
            {/* Ambient Background Light */}
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/[0.03] blur-[140px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6">
                <SectionTitle
                    eyebrow="Technical Stack"
                    title="Tools & technologies"
                    highlight="I work with."
                    description="A carefully selected suite of modern languages, frameworks, and data platforms for building production-grade software."
                />

                <div className="grid md:grid-cols-2 gap-6">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 group-hover:scale-105 transition-transform">
                                            <Icon size={20} />
                                        </div>
                                        <h3 className="text-lg font-bold font-heading text-slate-100">
                                            {category.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        {category.desc}
                                    </p>
                                </div>

                                <div className="mt-6 pt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-cyan-300 text-xs font-mono font-medium border border-white/[0.07] hover:border-cyan-500/30 transition-all select-none"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export { TechStack };
