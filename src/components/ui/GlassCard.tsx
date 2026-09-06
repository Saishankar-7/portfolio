import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../utils/cn";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
    ({ children, className, hoverEffect = true, ...props }, ref) => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={hoverEffect ? { y: -4 } : {}}
                className={cn(
                    "glass-card relative overflow-hidden rounded-2xl p-6 sm:p-8",
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);
GlassCard.displayName = "GlassCard";

export { GlassCard };
