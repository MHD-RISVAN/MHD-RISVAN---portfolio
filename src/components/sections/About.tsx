import ScrollReveal from "../ScrollReveal";

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="inline-block text-sm font-mono text-primary/80 tracking-wider uppercase mb-4">
              About
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
              Building with intention
            </h2>
          </ScrollReveal>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <ScrollReveal delay={0.2}>
              <p>
                I'm a student with a genuine curiosity for understanding how systems work—and 
                more importantly, how they can be made more secure and resilient. My interest 
                lies at the intersection of cybersecurity and software development.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p>
                Rather than chasing trends, I focus on building a solid foundation. I believe 
                in learning by doing: writing code, breaking things, understanding why they 
                broke, and then building them back stronger.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-foreground/80">
                Currently exploring network security, secure application development, and the 
                fundamentals that make software both functional and trustworthy.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;