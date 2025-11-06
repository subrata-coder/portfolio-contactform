import { ArrowRight, Download, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileSubrata from "@/assets/profile-subrata.jpg";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90" />

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-in-left">
            <div className="text-primary text-lg mb-4 font-medium">Hello, I'm</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Subrata <span className="text-primary">Paramanik</span>
            </h1>
            <div className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Aspiring Developer | B.Tech CSE Student
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Passionate about building beautiful web experiences and learning the art of software development. 
              Currently exploring Java, Python, and modern web technologies.
            </p>
            <div className="text-sm text-muted-foreground italic mb-8 border-l-4 border-primary pl-4">
              "Where thoughts spark and projects ignite—WhatsApp is my digital launchpad."
            </div>
            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToContact} size="lg" className="btn-primary group">
                Let's Talk
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="btn-outline">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/subrata-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-all duration-300 card-hover"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:subrata03006@gmail.com"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-all duration-300 card-hover"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full opacity-75 blur-xl animate-glow" />
              <img
                src={profileSubrata}
                alt="Subrata Paramanik - B.Tech CSE Student"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary flex justify-center p-1">
          <div className="w-1 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
