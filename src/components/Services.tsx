import { Code, Palette, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Currently building my foundation in modern web technologies including HTML, CSS, JavaScript, and React. Learning to create responsive, interactive websites with clean code and best practices.",
      learningAreas: ["React", "JavaScript", "Responsive Design", "Frontend Development"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Exploring the principles of user interface and user experience design. Learning to create intuitive, visually appealing designs that put users first and solve real problems.",
      learningAreas: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
    },
  ];

  return (
    <section id="services" className="section-container">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="section-title">What I'm Learning to Build</h2>
        <p className="text-muted-foreground text-lg">
          Exploring my passion areas and building expertise
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="bg-card border border-border rounded-lg p-8 card-hover animate-fade-in group"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <service.icon className="h-8 w-8 text-primary" />
            </div>

            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

            <div className="space-y-2 mb-6">
              <p className="text-sm font-semibold text-primary">Currently Learning:</p>
              <div className="flex flex-wrap gap-2">
                {service.learningAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-foreground"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all duration-300">
              Learn more
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-center">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">My Goal</h3>
          <p className="text-muted-foreground leading-relaxed">
            I'm on a journey to master web development and UI/UX design, with the goal of creating 
            meaningful digital experiences that make a difference. Every project is a step forward, 
            and I'm excited about the endless possibilities ahead.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
