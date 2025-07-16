import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Gallery3D from "@/components/Gallery3D";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>
      
      <section id="services" className="scroll-mt-20">
        <Services />
      </section>
      
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>
      
      <section id="gallery" className="scroll-mt-20">
        <Gallery3D />
      </section>
      
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
      
      {/* Footer with cyber styling */}
      <footer className="py-12 px-4 lg:px-6 border-t border-primary/20 bg-gradient-dark relative overflow-hidden">
        {/* Cyber footer background */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © 2025 Dhanush. All rights reserved.
              </p>
              <p className="text-sm text-primary font-mono">
                Built with passion for technology &amp; security
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-muted-foreground font-mono">
                Status: 
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
                <span className="text-xs text-primary font-mono">ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
