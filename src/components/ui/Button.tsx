import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../utils/cn";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg" | "icon";
    children: React.ReactNode;
    className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const baseStyles =
            "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d14] disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

        const variants = {
            primary:
                "bg-cyan-500 text-[#090d14] font-semibold hover:bg-cyan-400 shadow-[0_0_20px_-3px_rgba(6,182,212,0.4)] active:scale-[0.98]",
            secondary:
                "bg-white/[0.05] hover:bg-white/[0.09] text-slate-100 border border-white/10 active:scale-[0.98]",
            outline:
                "bg-transparent hover:bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/60 active:scale-[0.98]",
            ghost:
                "hover:bg-white/[0.06] text-slate-400 hover:text-slate-100 active:scale-[0.98]",
        };

        const sizes = {
            sm: "h-9 px-3.5 text-xs gap-1.5",
            md: "h-11 px-5 text-sm gap-2",
            lg: "h-12 px-7 text-base gap-2.5",
            icon: "h-10 w-10 p-0",
        };

        return (
            <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ y: 0, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
