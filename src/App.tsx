
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { Identity } from './components/sections/Identity';
import { TechStack } from './components/sections/TechStack';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cyber-black text-foreground font-sans selection:bg-neon-teal selection:text-cyber-black overflow-x-hidden">
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
