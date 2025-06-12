import Strat from '@/assets/strat.png'
import Tello from '@/assets/tello.jpg'
import Server from '@/assets/social-media-server.png'



const projects = [
    {
        "id": 1,
        title: "StratAnalyzer",
        description: "A Python tool for backtesting trading strategies with a Tkinter UI, visualizing price data, and using technical indicators for market insights.",
        image: {Strat},
        tags: ["Python", "Tkinter", "Trading Strategies", "Backtesting", "Financial Indicators"],
        githubUrl: "",
    },

    {
        "id": 2,
        title: "TelloDrone-FaceTrack-SpeechControl",
        description: "A versatile Tello drone project featuring face tracking, object detection, and voice-command control. Implemented using Vosk, OpenCV, Pygame, and Djitellopy.",
        image: {Tello},
        tags: ["Python", "Vosk", "OpenCV", "Pygame", "Djitellopy"],
        githubUrl: "https://github.com/Clipzorama/TelloDrone-FaceTrack-SpeechControl",
    },

    {
        "id": 3,
        title: "Social-Media-Backend-System",
        description: "A comprehensive backend system for a social media platform built with Spring Boot, Hibernate, and MySQL. It manages user accounts, profiles, posts, comments, likes, and follower relationships, offering a robust set of RESTful APIs for interaction.",
        image: {Server},
        tags: ["Java", "Spring Boot", "Hibernate", "MySQL", "RESTful APIs"],
        githubUrl: "https://github.com/Clipzorama/Social-Media-Backend-System",
    }
]

export const ProjectSection = () => {
    return (
        <section id="projects" className='py-24 px-4 relative'>
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:4xl font-bold mb-4 text-center">
                    Featured
                    <span className="text-primary"> Projects</span>
                </h2>

            </div>

        </section>
    );
}