import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { NavBar } from "@/components/NavBar";


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

            {/* Simple Footer */}
        </div>
    );
}


export default Home