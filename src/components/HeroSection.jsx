import { ArrowDown } from "lucide-react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Robot } from '@/Effects/Robot'; // adjust the path if needed


/*  

Potential add ons for the website:

text particles three.js effect

animation under the "Check out my work" button

*/


export const HeroSection = () => {

    return (
        <section id="hero" className="position-relative min-h-screen flex flex-col items-center justify-center px-4">

            <div className="container max-w-4xl mx-auto text-center z-10" >

                <div className="absolute inset-0 z-0">
                    <Canvas camera={{ position: [0, 1.5, 3] }}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[2, 2, 2]} />
                        <Environment preset="sunset" />
                        <OrbitControls enableZoom={false} />
                        <Robot scale={1.5} position={[0, -1.5, 0]} />
                    </Canvas>
                </div>


                <div className="space-y-6 ">

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Chrision</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Wynaar</span> {/* Makes it so there is a delay on each element within a sequence */}
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                        I’m passionate about helping others bring their digital vision to life through web development, 
                        while exploring finance and coding solutions in Python.
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects"
                        className="cosmic-button">Check Out My Work</a>
                    </div>

                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span>Scroll Down</span>
                <ArrowDown className="h-5 w-5 text-primary" />

            </div>
        </section>
    );
}