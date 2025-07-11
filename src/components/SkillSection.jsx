import { useState } from "react";
import {cn} from '@/lib/utils'

// TAKE OUT THE PERCENTAGES. AND HAVE SOMETHING ELSE. I WANT TO SHOW THAT I CAN PRESENT THESE SKILLS

const skills = [

    // Frontend
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 85, category: "frontend" },
    { name: "Next.js", level: 80, category: "frontend" },

    // backend skills
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express.js", level: 75, category: "backend" },
    { name: "MongoDB", level: 70, category: "backend" },
    { name: "MySQL", level: 80, category: "backend" },
    { name: "Python", level: 90, category: "backend" },


    // Tools
    { name: "VS Code", level: 95, category: "tools" },
    { name: "PyCharm", level: 85, category: "tools" },
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Vercel", level: 85, category: "tools" },
]



const categories = ["all", "frontend", "backend", "tools"];

export const SkillSection = () => {

    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);



    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">

                    {/* category selector for the skillsets */}
                    {categories.map((category, key) => (
                        <button 
                        key={key}
                        onClick={() => setActiveCategory(category)} 
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 hover:bg-primary capitalize cursor-pointer"
                            , activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:border-secondary"
                        )}>
                            {category}
                        </button>
                    ))}

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* filtered skill cards */}
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover border border-primary/40">
                            {/* Main text */}
                            <div className="text-left mb-4 ">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            {/* This here is gonna be for the meter in the card */}
                            <div className="w-full bg-secondary/5 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out}" 
                                style={{width: skill.level + "%"}} />
                            </div>
                            {/* Number and percentage that corresponds with meter as well */}
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
}