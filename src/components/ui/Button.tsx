import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../utils/cn";

// I need to install class-variance-authority as I missed it in the initial plan
// But for now I can implement without it or install it. 
// Plan said "Button: Primary (neon), Secondary (outline), Ghost".
// I'll implement a simple version first without CVA if I don't want to install more deps, 
// BUT CVA is standard in Shadcn-like setups. 
// I'll install it or just write custom logic.
// The user requirement didn't strictly ask for CVA, just "Reusable components".
// I'll stick to simple props for now to avoid installing more deps if I can, 
// OR I can quickly install it. It's better to have CVA.
// Wait, I didn't install `class-variance-authority`. 
// I'll stick to manual class logic for now to save time/complexity, or add it.
// "Clean, readable code structure" -> CVA is cleaner.
// I'll proceed with manual logic for now.

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg" | "icon";
    children: React.ReactNode;
    className?: string;
    asChild?: boolean; // Radix UI pattern, but I'll skip implementation complexity for now
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 transition-all duration-300";

        const variants = {
            primary: "bg-neon-teal text-cyber-black hover:bg-neon-teal/90 hover:shadow-[0_0_20px_rgba(0,245,212,0.5)]",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            outline: "border border-neon-teal/50 text-neon-teal bg-transparent hover:bg-neon-teal/10 hover:border-neon-teal",
            ghost: "hover:bg-accent hover:text-accent-foreground text-foreground/80 hover:text-neon-teal",
        };

        const sizes = {
            sm: "h-8 px-3 text-xs",
            md: "h-10 px-6 py-2",
            lg: "h-12 px-8 text-base",
            icon: "h-9 w-9",
        };

        return (
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
