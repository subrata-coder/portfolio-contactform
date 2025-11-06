import { Mail, Phone, Github, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "subrata03006@gmail.com",
      href: "mailto:subrata03006@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7001202223",
      href: "tel:+917001202223",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/subrata-coder",
      href: "https://github.com/subrata-coder",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "West Bengal, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-container bg-card/30">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-muted-foreground text-lg">
          Have a question or want to work together? Let's connect!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6 animate-slide-in-left">
          <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
          <p className="text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of 
            your vision. Feel free to reach out through any of these channels.
          </p>

          <div className="space-y-4">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-medium hover:text-primary transition-colors truncate block"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium truncate">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="animate-slide-in-right">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-secondary border-border"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-secondary border-border"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or just say hi..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-secondary border-border resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full btn-primary group">
              Send Message
              <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground">
          © 2025 Subrata Paramanik. Built with passion and curiosity.
        </p>
      </div>
    </section>
  );
};

export default Contact;
