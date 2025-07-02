import { ArrowDown } from "lucide-react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Robot } from '@/Effects/Robot'; // adjust the path if needed
import { useTheme } from "@/context/ThemeProvider";
import { useInView } from 'react-intersection-observer';



export const HeroSection = () => {

    const { theme } = useTheme();

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1, 
    });

    return (
        <section id="hero" className="position-relative min-h-screen flex flex-col items-center justify-center px-4">

            <div className="container max-w-4xl mx-auto text-center z-10" >

                {/* div that contains the text and the button */}
                <div className="space-y-6 flex flex-col items-center justify-center ">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Chrision</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Wynaar</span> {/* Makes it so there is a delay on each element within a sequence */}
                    </h1>

                    <p className="text-md text-pretty md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                        I’m passionate about helping others bring their digital vision to life through web development, 
                        while exploring finance and coding solutions in Python.
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects"
                        className="cosmic-button">Check Out My Work</a>
                    </div>

                    {/* Making multiple robots within the page.*/}

                    <div ref={ref} className="relative top-10 w-80 h-45 md:w-72 md:h-56 md:top-10 lg:absolute lg:w-[300px] lg:h-[350px] lg:left-5 lg:top-180 lg:-translate-y-1/2 xl:top-150 xl:left-15  z-0">
                        {inView && (
                            <Canvas camera={{ position: [0, 3, 0] }}>
                            <ambientLight intensity={0} />
                            <directionalLight position={[.5, .5, .5]} />
                            <Environment preset="sunset" />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                            <Robot 
                                modelPath={theme === "dark" 
                                ? "/models/RobotExpressive.glb" 
                                : "/models/RobotExpressive2.glb"} 
                                scale={0.6} 
                                position={[0, -1.4, 0]} 
                            />
                            </Canvas>
                        )}
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