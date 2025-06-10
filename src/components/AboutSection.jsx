import { BriefcaseMedical, Code } from "lucide-react";


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

                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download My CV
                            </a>
                        </div>
                    </div>

                    {/* Right side of the grid */}
                    <div className="grid grid-cols-1 gap-6">
                        {/* all individual cards */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="w-6 h-6 text-primary" />
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <BriefcaseMedical className="w-6 h-6 text-primary" />
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="w-6 h-6 text-primary" />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </section>
    );
}