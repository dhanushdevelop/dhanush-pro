import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Shield, Smartphone, Globe, Box } from "lucide-react";

const services = [
  {
    id: "01",
    title: "AI Development",
    description: "Building intelligent systems with machine learning, neural networks, and AI algorithms to solve complex problems and automate processes.",
    icon: Brain,
  },
  {
    id: "02", 
    title: "Web Development",
    description: "Creating responsive, modern web applications using cutting-edge technologies like React, Node.js, and cloud platforms.",
    icon: Globe,
  },
  {
    id: "03",
    title: "App Development", 
    description: "Developing cross-platform mobile applications with seamless user experiences and robust backend integrations.",
    icon: Smartphone,
  },
  {
    id: "04",
    title: "Cybersecurity",
    description: "Implementing security measures, conducting penetration testing, and ensuring data protection for digital assets.",
    icon: Shield,
  },
  {
    id: "05",
    title: "3D Design",
    description: "Creating stunning 3D models, animations, and immersive experiences for games, web, and interactive applications.",
    icon: Box,
  },
  {
    id: "06",
    title: "Full Stack",
    description: "End-to-end development solutions combining frontend elegance with backend robustness and database optimization.",
    icon: Code,
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 lg:px-6 bg-background relative overflow-hidden">
      {/* Cyber background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-data-stream"></div>
        <div className="absolute bottom-20 left-20 w-48 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-data-stream" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            SERVICES
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions from AI development to cybersecurity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-gradient-subtle border-border/50 hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-sm text-primary font-mono">
                        {service.id}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;