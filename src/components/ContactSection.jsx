import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";


export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">

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
                    <div className="space-y-8 flex flex-col">
                        <h3 className="text-2xl font-semibold mb-10">Contact Information</h3>

                        {/* First Section */}
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-7 sm:space-x-5 md:space-x-5 lg:space-x-0">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="w-1/2">
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:wchrision@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">wchrision@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Second Section */}
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-7 sm:space-x-5 md:space-x-5 lg:space-x-0">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="w-1/2">
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+19293746392" className="text-muted-foreground hover:text-primary transition-colors">+1 (929) 374-6392</a>
                                </div>
                            </div>
                        </div>

                        {/* Third Section */}
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-7 sm:space-x-5 md:space-x-5 lg:space-x-0">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="w-1/2">
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">Derby, CT, USA</a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            {/* All Link Icons will go here */}
                                <div className="flex space-x-4 justify-center">
                                    <a href="https://www.linkedin.com/in/chrision-wynaar-7804861a3/" target="_blank">
                                        <Linkedin className="hover:text-primary transition-colors" />
                                    </a>
                                    <a href="https://www.instagram.com/bonker.crisyon/" target="_blank">
                                        <Instagram className="hover:text-primary transition-colors" />
                                    </a>

                            </div>
                        </div>
                    </div>

                    {/* Right side and form part of the contact section */}

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>
                    </div>

                </div>
            </div>
        </section>
    );
}