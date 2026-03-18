import React from "react";
import { cn } from "../../utils/cn";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    variant?: "default" | "outline" | "neon" | "secondary";
}

const Badge: React.FC<BadgeProps> = ({ children, className, variant = "default", ...props }) => {
    const variants = {
        default: "bg-secondary text-secondary-foreground border-transparent",
        outline: "border-border text-foreground bg-transparent",
        neon: "border-neon-teal/50 text-neon-teal bg-neon-teal/10 shadow-[0_0_10px_rgba(0,245,212,0.2)]",
        secondary: "bg-secondary text-secondary-foreground border-transparent",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
};

export { Badge };
