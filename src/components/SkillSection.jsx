
const skills = [

    // Frontend
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Next.js", level: 80, category: "frontend" },

    // backend skills
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express.js", level: 75, category: "backend" },
    { name: "MongoDB", level: 70, category: "backend" },
    { name: "MySQL", level: 65, category: "backend" },

    // Tools
    { name: "VS Code", level: 95, category: "tools" },
    { name: "PyCharm", level: 85, category: "tools" },
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Vercel", level: 80, category: "tools" },


]

export const SkillSection = () => {
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4 ">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            {/* This here is gonna be for the meter in the card */}
                            <div className="w-full bg-secondary/5 h-2 rounded-full overflow-hidden">
                                <div>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
}