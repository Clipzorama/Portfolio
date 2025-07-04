import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { NavBar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillSection } from "@/components/SkillSection";
import { ProjectSection } from "@/components/ProjectSection";
import { useState, useEffect } from "react";
import { ContactSection } from "@/components/ContactSection";
import Particles from "@/components/Particles";
import { Footer } from "@/components/Footer";




function Home() {
    // isDarkMod --> value is whats in local storage --> boolean
  const [isDarkMod, setIsDarkMod] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {

    const updateTheme = () => {
      const storedTheme = localStorage.getItem("theme");
      setIsDarkMod(storedTheme === "dark");
    };

    // storage event only fires when localStorage changes in another browser tab or window.
    window.addEventListener("storage", updateTheme);

    // fallback for same-tab updates
    const interval = setInterval(updateTheme, 300);

    
    return () => {
      window.removeEventListener("storage", updateTheme);
      clearInterval(interval);
    };
  }, []);

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle className='fixed hidden md:block top-20 right-6 z-50 p-2' />
            {isDarkMod && <StarBackground />}
            {!isDarkMod && <Particles
              particleColors={['#000000', '#000000']}
              particleCount={90}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />}
            
            {/* Navbar */}
            <NavBar />

            {/* Main Content --> Hero Section, About Section, Skills Section, Projects Section, Contact Section */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillSection />
                <ProjectSection />
                <ContactSection />
                
            </main>

            {/* Simple Footer */}
            <Footer />
        </div>
    );
}


export default Home