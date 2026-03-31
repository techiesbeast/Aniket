import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import BackgroundScene from "@/components/BackgroundScene";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <CustomCursor />
      <BackgroundScene />
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="py-6 border-t border-white/10 text-center text-gray-400 text-sm mt-auto">
        <p>© {new Date().getFullYear()} Aniket. All rights reserved.</p>
      </footer>
    </main>
  );
}

