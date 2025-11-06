import { Code, Palette, Database, Globe } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Code,
      name: "Java",
      level: 60,
      category: "Programming",
    },
    {
      icon: Code,
      name: "Python",
      level: 55,
      category: "Programming",
    },
    {
      icon: Code,
      name: "C Programming",
      level: 50,
      category: "Programming",
    },
    {
      icon: Globe,
      name: "Web Development",
      level: 45,
      category: "Development",
    },
    {
      icon: Palette,
      name: "UI/UX Design",
      level: 40,
      category: "Design",
    },
    {
      icon: Database,
      name: "Data Structures",
      level: 50,
      category: "Fundamentals",
    },
  ];

  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="section-title">My Skills</h2>
        <p className="text-muted-foreground text-lg">Technologies I'm learning and mastering</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="bg-card border border-border rounded-lg p-6 card-hover animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <skill.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.category}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Proficiency</span>
                <span className="text-primary font-medium">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-block bg-secondary/50 border border-border rounded-lg p-6 max-w-2xl">
          <p className="text-muted-foreground">
            <span className="text-primary font-semibold">Currently Learning:</span> I'm actively building 
            my foundation in these technologies through coursework, online resources, and hands-on projects. 
            Every day is a new opportunity to grow!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
