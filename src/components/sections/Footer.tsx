import { Cpu } from "lucide-react";

const Footer = () => {
    return (
        <footer 
            className="relative py-12 overflow-hidden bg-[#060a0f] border-t border-white/[0.05]"
            style={{ fontFamily: "'Syne', sans-serif" }}
        >
            <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
                
                {/* Visual marker */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,255,229,0.3))" }} />
                    <div className="p-2 rounded-lg" style={{ background: "rgba(0,255,229,0.06)" }}>
                        <Cpu size={18} className="text-[#00ffe5]/40 animate-pulse" />
                    </div>
                    <div className="w-10 h-px" style={{ background: "linear-gradient(270deg, transparent, rgba(0,255,229,0.3))" }} />
                </div>

                <div className="text-center space-y-2">
                    <p className="text-[0.65rem] font-bold tracking-[0.4em] uppercase text-white/60">
                        © 2024 Sai Sankar Tumpala
                    </p>
                    <p 
                        className="text-[0.55rem] font-medium tracking-[0.25em] uppercase" 
                        style={{ fontFamily: "'IBM Plex Mono', monospace", color: "rgba(255,255,255,0.2)" }}
                    >
                        Built with React + Tailwind + Precision
                    </p>
                </div>

                {/* Status indicator */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.03] bg-white/[0.02]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ffe5] animate-pulse shadow-[0_0_8px_#00ffe5]" />
                    <span className="text-[0.5rem] font-bold tracking-[0.1em] uppercase text-white/30" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                        System Status: Operational
                    </span>
                </div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-[#00ffe5]/10 to-transparent" />
        </footer>
    );
};

export { Footer };
