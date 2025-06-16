import { Mail } from "lucide-react";


export const ContactSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative bg-secondary/30">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Feel Free To <span className="text-primary">Contact Me!</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Let's explore how we can create something impactful. I'm currently open to freelance and partnership opportunities.
                </p>

                {/* grid-contsainer will go here */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Left side of the grid */}
                    <div className="space-y-8 ">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}