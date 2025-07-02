import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import {cn} from '@/lib/utils';
import { useToast } from '@/hooks/use-toast'
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Robot2 } from '@/Effects/Robot2'; // adjust the path if needed
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useTheme } from "@/context/ThemeProvider";
import { useInView } from 'react-intersection-observer';


export const ContactSection = () => {

    const { theme } = useTheme();

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1, // renders when 10% visible
    });

    const {toast} = useToast();
    const [inSubmission, setSubmission] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();

    setSubmission(true);

    const form = e.target;

    emailjs.sendForm(
        'service_pkydx5m',
        'template_guhfqpc',
        form,
        'cUOI3JuKmxe5PWMEV'
    ).then(() => {
        toast({
            title: 'Message sent successfully',
            description: 'We will get back to you soon.',
        });
        form.reset();
        setSubmission(false);
    }).catch((error) => {
        toast({
            title: 'Error sending message',
            description: 'Please try again later.',
            variant: 'destructive'
        });
        setSubmission(false);
        console.error(error);
    });
}

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

                        <div className="pt-8">
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

                    <div className="bg-card/60 p-8 rounded-lg shadow-xs border border-primary">
                        <h3 className="text-2xl self-center font-semibold mb-6">Send A Message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* individual forms here */}
                            <div>
                                <label className="block text-sm font-medium mb-2 opacity-80" htmlFor="name">Your Name</label>
                                <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus-ring-2 focus-ring-primary placeholder:text-primary"
                                placeholder="Chrision Wynaar..." />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium mb-2 opacity-80" htmlFor="name">Your Email</label>
                                <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus-ring-2 focus-ring-primary placeholder:text-primary"
                                placeholder="example@gmail.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 opacity-80" htmlFor="name">Your Message</label>
                                <textarea 
                                id="message" 
                                name="message" 
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus-ring-2 focus-ring-primary placeholder:text-primary resize-none"
                                placeholder="Hi, I’d like to delve into..." />
                            </div>

                            <button 
                            type="submit" 
                            disabled={inSubmission}
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer")}
                            >
                                {inSubmission ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form> 
                    </div>

                </div>

                <div ref={ref} className="relative mx-auto top-10 w-80 h-45 md:w-72 md:h-56 md:top-10 lg:w-[300px] lg:h-[350px] lg:top-50 lg:-translate-y-1/2 xl:top-50  z-0">
                    {inView && (
                        <Canvas camera={{ position: [0, 3, 0] }}>
                            <ambientLight intensity={0} />
                            <directionalLight position={[.5, .5, .5]} />
                            <Environment preset="sunset" />
                            {/* for controlling how we turn the robot */}
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                            <Robot2 
                                modelPath={theme === "dark" 
                                    ? "/models/RobotExpressive3.glb" 
                                    : "/models/RobotExpressive4.glb"} 
                                scale={0.6} 
                                position={[0, -1.4, 0]} 
                                />

                        </Canvas>
                    )}
                        
                </div>
            </div>
        </section>
    );
}