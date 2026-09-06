/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "1.5rem",
            screens: {
                "2xl": "1280px",
            },
        },
        extend: {
            colors: {
                border: "rgba(255, 255, 255, 0.08)",
                input: "rgba(255, 255, 255, 0.06)",
                ring: "#06b6d4",
                background: "#090d14",
                foreground: "#f8fafc",
                surface: {
                    DEFAULT: "#0e131f",
                    card: "#111624",
                    hover: "#171e30",
                    border: "rgba(255, 255, 255, 0.07)",
                },
                primary: {
                    DEFAULT: "#06b6d4",
                    foreground: "#090d14",
                    hover: "#22d3ee",
                },
                accent: {
                    cyan: "#06b6d4",
                    teal: "#14b8a6",
                    sky: "#38bdf8",
                    indigo: "#6366f1",
                    emerald: "#10b981",
                },
                muted: {
                    DEFAULT: "#94a3b8",
                    foreground: "#64748b",
                },
            },
            borderRadius: {
                "2xl": "1rem",
                "3xl": "1.5rem",
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
                heading: ["Plus Jakarta Sans", "Inter", "sans-serif"],
                mono: ["JetBrains Mono", "IBM Plex Mono", "monospace"],
            },
            boxShadow: {
                "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                "glow": "0 0 25px -5px rgba(6, 182, 212, 0.3)",
                "glow-sm": "0 0 15px -3px rgba(6, 182, 212, 0.25)",
                "card": "0 4px 20px -2px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
                "card-hover": "0 12px 30px -4px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
            },
            animation: {
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
        },
    },
    plugins: [],
}
