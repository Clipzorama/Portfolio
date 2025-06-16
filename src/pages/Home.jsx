import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";
import { ProjectSection } from "../components/ProjectSection";
import { useState, useEffect } from "react";
import { ContactSection } from "../components/ContactSection";


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
            {/* First we will add theme toggle */}
            <ThemeToggle />

            {/* Background effects (Metior shower) */}
            {isDarkMod && <StarBackground />}
            
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
        </div>
    );
}


export default Home