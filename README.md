# Developer Portfolio | Sai Sankar Tumpala

A modern, highly interactive, and premium developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. The design embraces a sleek cyberpunk and glassmorphism aesthetic with multi-layered backgrounds, dynamic typography, and fluid micro-interactions.

## 🚀 Features

- **Premium UI/UX:** High-end visual design with deep backgrounds (`#060a0f`), vibrant neon accents (cyan, violet, and emerald), and frosted glass effects.
- **Dynamic Animations:** Extensive use of `framer-motion` for scroll reveals, magnetic hover effects, interactive background blobs, and a typewriter text effect in the Hero section.
- **Unified Typography:** Editorial quality typography using **Syne** for impactful display headings and **IBM Plex Mono** for technical labels and accents.
- **Fully Responsive:** Mobile-first approach ensuring perfect layouts from smartphones to ultra-wide desktop monitors, including a custom mobile sliding navigation menu.
- **Working Contact Form:** The contact section uses a seamless AJAX integration with `formsubmit.co` to send real emails directly to `tumpalasaisankar@gmail.com` without needing a backend server.
- **Optimized Performance:** Built on Vite for lightning-quick HMR (Hot Module Replacement) and optimized production builds.

## 🛠 Tech Stack

- **Framework:** React 18 + TypeScript (via Vite)
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Google Fonts (Syne, IBM Plex Mono)
- **Form Handling:** FormSubmit.co
- **Deployment:** Vercel / Netlify / GitHub Pages (configurable)

## 📂 Project Structure

```text
src/
├── components/
│   ├── ui/                 # Reusable smaller components (Buttons, Badges, etc.)
│   └── sections/           # Major page sections
│       ├── Header.tsx      # Sticky glassmorphic nav and mobile menu
│       ├── Hero.tsx        # High-impact animated introduction
│       ├── Identity.tsx    # "About Me" / Background details
│       ├── TechStack.tsx   # Visual grid of technical skills
│       ├── Projects.tsx    # Portfolio items display cards
│       ├── Contact.tsx     # Fully functional contact form
│       └── Footer.tsx      # System status and copyright
├── utils/
│   └── cn.ts               # Tailwind CSS class merging utility (`clsx` + `tailwind-merge`)
├── App.tsx                 # Main application assembly
├── index.css               # Global styles and Tailwind directives
└── main.tsx                # React root rendering
```

## ⚙️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-portfolio-repo.git
   cd your-portfolio-repo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```
   The optimized production build will be output to the `dist` directory.

## 📝 Configuration

- **Contact Form:** The contact form in `src/components/sections/Contact.tsx` is hardcoded to send to `tumpalasaisankar@gmail.com` via FormSubmit. No `.env` is required for this base functionality.
- **Resume Link:** The "Resume" buttons point to `/resume.pdf`, which maps to the physical `resume.pdf` file located in the `public/` directory.

## 🤝 Contact
- Email: tumpalasaisankar@gmail.com
- Location: Visakhapatnam, India
