import React from "react";
import { cn } from "../../utils/cn";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    variant?: "default" | "cyan" | "outline" | "subtle" | "emerald";
    size?: "sm" | "md";
}

const Badge: React.FC<BadgeProps> = ({
    children,
    className,
    variant = "default",
    size = "sm",
    ...props
}) => {
    const variants = {
        default: "bg-white/[0.05] text-slate-300 border-white/[0.08]",
        cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20 shadow-[0_0_12px_rgba(6,182,212,0.15)]",
        emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
        outline: "bg-transparent text-slate-400 border-white/10 hover:border-white/20 hover:text-slate-200",
        subtle: "bg-white/[0.03] text-slate-400 border-transparent",
    };

    const sizes = {
        sm: "px-2.5 py-0.5 text-[11px] font-medium tracking-wide",
        md: "px-3 py-1 text-xs font-medium tracking-wide",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center gap-1.5 rounded-full border transition-all duration-200 select-none",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
};

export { Badge };
