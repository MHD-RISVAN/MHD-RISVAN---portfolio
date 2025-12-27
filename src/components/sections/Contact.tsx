import { Mail, Github, Linkedin, Send } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="container px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="inline-block text-sm font-mono text-primary/80 tracking-wider uppercase mb-4">
              Contact
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Let's connect
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl">
              Open to opportunities, collaborations, or just a conversation about 
              security and development.
            </p>
          </ScrollReveal>

          {/* Social links */}
          <ScrollReveal delay={0.2}>
            <div className="flex items-center gap-4 mb-12">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-border hover:bg-surface transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal delay={0.25}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="bg-card/50 border-border/50 focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    required
                    className="bg-card/50 border-border/50 focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="What would you like to discuss?"
                  required
                  rows={5}
                  className="bg-card/50 border-border/50 focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <Button type="submit" className="group">
                Send message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;