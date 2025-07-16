import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Terminal, Code, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "AI DEVELOPER | WEB DEVELOPER | CYBERSECURITY SPECIALIST";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-dark matrix-bg pt-20">
      {/* Matrix-style background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating code snippets */}
        <div className="absolute top-20 left-20 opacity-20 animate-float">
          <div className="font-mono text-xs text-primary border border-primary/30 p-2 rounded bg-background/20">
            {'<div className="hacker" />'}
          </div>
        </div>
        
        <div className="absolute top-1/3 right-20 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="font-mono text-xs text-primary border border-primary/30 p-2 rounded bg-background/20">
            {'npm install hack.js'}
          </div>
        </div>

        <div className="absolute bottom-1/3 left-10 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="font-mono text-xs text-primary border border-primary/30 p-2 rounded bg-background/20">
            {'sudo access granted'}
          </div>
        </div>

        {/* Geometric cyber elements */}
        <div className="absolute top-40 left-40 w-32 h-32 border border-primary/30 rotate-45 animate-float">
          <div className="absolute inset-4 border border-primary/20 animate-glow-pulse"></div>
        </div>
        
        <div className="absolute bottom-40 right-40 w-24 h-24 border border-primary/30 rotate-12 animate-float" style={{ animationDelay: '1s' }}>
          <div className="absolute inset-2 bg-gradient-primary opacity-20 rotate-45 animate-glow-pulse"></div>
        </div>

        {/* Matrix rain effect */}
        <div className="absolute top-0 left-1/4 w-1 h-20 bg-primary/30 animate-matrix-rain" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-0 left-1/2 w-1 h-16 bg-primary/20 animate-matrix-rain" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 right-1/4 w-1 h-24 bg-primary/25 animate-matrix-rain" style={{ animationDelay: '4s' }}></div>

        {/* Data streams */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-data-stream"></div>
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-data-stream" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
        <div className="animate-fade-in max-w-5xl mx-auto">
          {/* Terminal header */}
          <div className="inline-flex items-center space-x-2 mb-8 bg-background/80 backdrop-blur-sm border border-primary/30 rounded-lg px-6 py-3">
            <Terminal className="h-5 w-5 text-primary animate-glow-pulse" />
            <span className="font-mono text-sm text-primary">root@dhanush:~$</span>
            <span className="font-mono text-sm text-foreground">whoami</span>
          </div>

          <h2 className="text-lg md:text-xl text-muted-foreground mb-6 tracking-wider font-mono">
            HI THERE, I'M YOUR
          </h2>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent glitch" data-text="DHANUSH">
              DHANUSH
            </span>
          </h1>

          {/* Typing effect for role */}
          <div className="mb-8 h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-primary font-mono border-r-2 border-primary animate-pulse">
              {typedText}
              <span className="animate-blink">|</span>
            </p>
          </div>

          <p className="text-base md:text-lg text-muted-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Crafting intelligent solutions through AI development, building secure web applications, 
            penetration testing, and creating immersive 3D experiences. Passionate about cybersecurity 
            and cutting-edge technology that pushes boundaries.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="xl" 
              className="min-w-[220px] relative overflow-hidden group"
              onClick={() => scrollToSection('#projects')}
            >
              <Code className="h-5 w-5 mr-2" />
              <span className="relative z-10">View My Work</span>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="min-w-[220px] border-primary/50 hover:border-primary hover:shadow-cyber"
              onClick={() => scrollToSection('#contact')}
            >
              <Shield className="h-5 w-5 mr-2" />
              <span>Get In Touch</span>
            </Button>
          </div>

          {/* Tech Icons */}
          <div className="flex justify-center space-x-8 mb-16">
            <div className="group cursor-pointer">
              <div className="p-4 bg-gradient-subtle rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group-hover:scale-110">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <p className="text-xs mt-2 text-muted-foreground">Development</p>
            </div>
            <div className="group cursor-pointer">
              <div className="p-4 bg-gradient-subtle rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group-hover:scale-110">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <p className="text-xs mt-2 text-muted-foreground">Security</p>
            </div>
            <div className="group cursor-pointer">
              <div className="p-4 bg-gradient-subtle rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group-hover:scale-110">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <p className="text-xs mt-2 text-muted-foreground">AI/ML</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:shadow-glow transition-all duration-300 border border-transparent hover:border-primary/30">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:shadow-glow transition-all duration-300 border border-transparent hover:border-primary/30">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:shadow-glow transition-all duration-300 border border-transparent hover:border-primary/30">
              <Mail className="h-6 w-6" />
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('#services')}>
            <div className="flex flex-col items-center space-y-2">
              <ArrowDown className="h-6 w-6 text-primary animate-glow-pulse" />
              <span className="text-xs text-muted-foreground font-mono">scroll_down</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;