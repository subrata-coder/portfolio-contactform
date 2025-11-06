import { GraduationCap, Target, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-container bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">About Me</h2>
          <p className="text-muted-foreground text-lg">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm Subrata Paramanik, a passionate student currently pursuing my B.Tech in Computer Science & 
              Engineering at Gargi Memorial Institution of Technology. Expected to graduate in 2028, I'm 
              building a strong foundation in software development and design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in tech is driven by curiosity and creativity. I believe in learning by doing, 
              and I'm constantly exploring new technologies to expand my skillset. From writing my first 
              "Hello World" to building this portfolio, every step has been an exciting adventure.
            </p>
          </div>

          <div className="space-y-4 animate-slide-in-right">
            <div className="bg-secondary/50 p-6 rounded-lg border border-border card-hover">
              <GraduationCap className="h-10 w-10 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Education</h4>
              <p className="text-muted-foreground">
                B.Tech in Computer Science & Engineering
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Gargi Memorial Institution of Technology (2024 - 2028)
              </p>
            </div>

            <div className="bg-secondary/50 p-6 rounded-lg border border-border card-hover">
              <Target className="h-10 w-10 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">My Approach</h4>
              <p className="text-muted-foreground">
                Learning through experimentation, driven by curiosity, and always eager to collaborate on meaningful projects.
              </p>
            </div>

            <div className="bg-secondary/50 p-6 rounded-lg border border-border card-hover">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Collaboration</h4>
              <p className="text-muted-foreground">
                I believe great things happen when minds meet. Open to teamwork and learning from others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
