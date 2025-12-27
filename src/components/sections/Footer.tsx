import ScrollReveal from "../ScrollReveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <span className="font-mono">Alex Chen © {currentYear}</span>
            <span className="text-muted-foreground/60">
              Built with care and curiosity
            </span>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;