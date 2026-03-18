import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../utils/cn";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
    ({ children, className, hoverEffect = false, ...props }, ref) => {
        return (
            <motion.div
                whileHover={hoverEffect ? { y: -5, boxShadow: "0 10px 30px -10px rgba(0, 245, 212, 0.15)" } : {}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "relative overflow-hidden rounded-xl border border-white/5 bg-cyber-dark/40 backdrop-blur-xl p-6 shadow-xl",
                    "hover:border-neon-teal/30 transition-colors duration-300",
                    className
                )}
                ref={ref}
                {...props}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-teal/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                {children}
            </motion.div>
        );
    }
);
GlassCard.displayName = "GlassCard";

export { GlassCard };
