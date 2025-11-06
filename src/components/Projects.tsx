import { ExternalLink, Github, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "My First Portfolio",
      description: "This portfolio website marks the beginning of my development journey. Built with modern web technologies, it showcases my learning progress and serves as a foundation that will grow as I learn more.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      status: "In Progress",
    },
  ];

  return (
    <section id="projects" className="section-container bg-card/30">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="section-title">Projects</h2>
        <p className="text-muted-foreground text-lg">Building and learning one project at a time</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-lg p-8 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FolderOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <span className="text-sm text-primary">{project.status}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost" className="hover:text-primary">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="hover:text-primary">
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-secondary/50 border border-border rounded-lg p-6">
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">More projects coming soon!</span> As I continue 
              learning and building, this section will grow with more exciting projects showcasing my skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
