import React from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

interface SectionTitleProps {
    eyebrow?: string;
    title: string;
    highlight?: string;
    description?: string;
    className?: string;
    align?: "left" | "center";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
    eyebrow,
    title,
    highlight,
    description,
    className,
    align = "left",
}) => {
    return (
        <div
            className={cn(
                "mb-12 md:mb-16",
                align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl",
                className
            )}
        >
            {eyebrow && (
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 mb-3"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="text-xs font-mono font-medium uppercase tracking-widest text-cyan-400">
                        {eyebrow}
                    </span>
                </motion.div>
            )}

            <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold font-heading text-slate-100 tracking-tight leading-[1.15]"
            >
                {title}{" "}
                {highlight && (
                    <span className="text-gradient-accent">{highlight}</span>
                )}
            </motion.h2>

            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed font-normal"
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
};

export { SectionTitle };
