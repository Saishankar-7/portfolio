import React from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    className?: string;
    center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className, center = false }) => {
    return (
        <div className={cn("mb-12", center && "text-center", className)}>
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-block mb-2 text-xs font-bold tracking-[0.2em] text-neon-teal uppercase"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-heading font-bold text-foreground"
            >
                {title.split(" ").map((word, i) => (
                    <span key={i} className={cn(i === 1 ? "text-neon-teal" : "")}>{word} </span>
                ))}
            </motion.h2>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={cn("h-1 bg-neon-teal mt-4 rounded-full", center && "mx-auto")}
            />
        </div>
    );
};

export { SectionTitle };
