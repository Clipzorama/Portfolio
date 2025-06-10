import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";


function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* First we will add theme toggle */}
            <ThemeToggle />

            {/* Background effects (Metior shower) */}
            <StarBackground />

            {/* Navbar */}
            <NavBar />

            {/* Main Content --> Hero Section, About Section, Skills Section, Projects Section, Contact Section */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillSection />
                
            </main>

            {/* Simple Footer */}
        </div>
    );
}


export default Home