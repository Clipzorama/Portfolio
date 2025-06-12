import Strat from '@/assets/strat.png'
import Tello from '@/assets/tello.jpg'
import Server from '@/assets/social-media-server.png'



const projects = [
    {
        "id": 1,
        title: "StratAnalyzer",
        description: "A Python tool for backtesting trading strategies with a Tkinter UI, visualizing price data, and using technical indicators for market insights.",
        image: Strat,
        tags: ["Python", "Tkinter", "Trading Strategies", "Backtesting", "Financial Indicators"],
        githubUrl: "",
    },

    {
        "id": 2,
        title: "Tello FaceTracker & Speech Control",
        description: "A versatile Tello drone project featuring face tracking, object detection, and voice-command control. Implemented using Vosk, OpenCV, Pygame, and Djitellopy.",
        image: Tello,
        tags: ["Python", "Vosk", "OpenCV", "Pygame", "Djitellopy"],
        githubUrl: "https://github.com/Clipzorama/TelloDrone-FaceTrack-SpeechControl",
    },

    {
        "id": 3,
        title: "Social Media Backend System",
        description: "A comprehensive backend system for a social media platform built with Spring Boot, Hibernate, and MySQL. It manages user accounts, profiles, posts, comments, likes, and follower relationships, offering a robust set of RESTful APIs for interaction.",
        image: Server,
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

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">A selection of personal and academic projects that demonstrate my technical range and passion for solving real-world problems.</p>

                {/* where ill display the projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            {/* For the tags */}
                            <div className="px-6 pt-6 pb-2">
                                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 border text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            
                            {/*  */}
                            <h3 className="text-xl font-semibold mb-1 px-4">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4 px-4">{project.description}</p>

                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}