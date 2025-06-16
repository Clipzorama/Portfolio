import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration --> For the stars
export const StarBackground = () => {

    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        }

        window.addEventListener("resize", handleResize)

        // cleanup function to handle any memory leaks
        return () => window.addEventListener("resize", handleResize);
    }, [])

    // function needed to add all the stars to the screen
    const generateStars = () => {
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000); 
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                //  generates different size of stars
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                // for the pulsating animation
                animationDuration: Math.random() * 4 + 2,
            })
        }
        setStars(newStars);
    };

    // this function will be for adding meteorites
    const generateMeteors = () => {
        const numberOfMeteors = 4; 
        const newMeteros = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteros.push({
                id: i,
                //  generates different size of meteors
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 6 + 3,
            })
        }
        setMeteors(newMeteros);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0"> 
            {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    opacity: star.opacity,
                    animationDuration: `${star.animationDuration}s`,
                }} />
            ))}
            {meteors.map((meteor) => (
                <div key={meteor.id} className="meteor animate-meteor" 
                style={{
                    width: `${meteor.size * 50}px`, 
                    height: `${meteor.size * 2}px`,
                    left: `${meteor.x}%`,
                    top: `${meteor.y}%`,
                    animationDelay: meteor.delay,
                    animationDuration: `${meteor.animationDuration}s`,
                }} />
            ))}
         
        </div>

    );
}