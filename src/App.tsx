
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { Identity } from './components/sections/Identity';
import { TechStack } from './components/sections/TechStack';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#090d14] text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-300 overflow-x-hidden">
      <Header />
      <main className="relative z-10">
        <Hero />
        <Identity />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
