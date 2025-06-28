import { Bird, BriefcaseMedical, Code } from "lucide-react";
import SpotlightCard from '@/Effects/SpotlightCard';
  



export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About
                    <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left side of the grid */}
                    <div className="space-y-6">

                        <h3 className="text-2xl font-semibold">Aspiring Web Developer & Financial Investor</h3>

                        <p className="text-muted-foreground">
                           With a strong foundation in Python, web development, and financial markets, I’m passionate about building responsive, impactful digital experiences. 
                           I love bringing ideas to life through clean code and design, while exploring innovative ways to merge technology with real-world financial insights.</p>

                        <p className="text-muted-foreground">
                           I’m driven by a desire to help others — whether by creating tools that solve problems, designing websites that tell stories, or sharing knowledge that empowers.
                           My goal is to keep learning, collaborate with like-minded creators, and make a positive difference through tech and finance.</p>
                        
                        <div className="flex sm-flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Let's Connect
                            </a>

                            <a href="/Copy of CV.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download My CV
                            </a>
                        </div>
                    </div>

                    {/* Right side of the grid */}
                    <div className="grid grid-cols-1 gap-6">
                        {/* all individual cards */}
                        <SpotlightCard spotlightColor="rgba(140, 0, 0, 0.3)" className="gradient-border p-6 card-hover border border-primary/40">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg mb-2">
                                        Tech Stack & Tools
                                    </h4>
                                    <p className="text-muted-foreground text-sm">
                                        I work primarily with Python, Java, JavaScript, HTML/CSS, and React. 
                                        I’ve built full-stack applications and backend systems using frameworks like Spring Boot and tools like Hibernate, MySQL, and REST APIs.
                                    </p>
                                </div>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard spotlightColor="rgba(140, 0, 0, 0.3)" className="gradient-border p-6 card-hover border border-primary/40">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <BriefcaseMedical className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg mb-2">
                                        A Journey Through Tech & People
                                    </h4>
                                    <p className="text-muted-foreground text-sm">
                                        With hands-on experience in both technical and customer-facing roles, 
                                        I’ve developed the skills to solve problems, work with people, and build with purpose. Each chapter of my journey has added something valuable to how I approach development.
                                    </p>
                                </div>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard spotlightColor="rgba(140, 0, 0, 0.3)" className="gradient-border p-6 card-hover border border-primary/40">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Bird className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg mb-2">
                                        More Than a Developer
                                    </h4>
                                    <p className="text-muted-foreground text-sm">
                                        From my perspective, creativity is an important side of coding. 
                                        Fashion, music, and travel let me find ways to express myself, and those experiences help my skills as a developer.
                                    </p>
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>


                </div>

            </div>

        </section>
    );
}