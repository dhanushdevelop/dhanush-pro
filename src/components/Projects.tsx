import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Threat Detection",
    description: "Machine learning system for real-time cybersecurity threat analysis and prevention using neural networks and behavioral analytics.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    technologies: ["Python", "TensorFlow", "Cybersecurity", "ML"],
    category: "AI & Security",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Smart Finance Web App",
    description: "Full-stack web application for financial management with AI-driven insights and real-time analytics dashboard.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "AI"],
    category: "Web Development",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Mobile Security Scanner",
    description: "Cross-platform mobile app for vulnerability assessment and security auditing with real-time monitoring capabilities.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
    technologies: ["React Native", "Security", "Mobile"],
    category: "App Development",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "3D Portfolio Showcase",
    description: "Interactive 3D web experience showcasing architectural designs and product visualizations with WebGL rendering.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
    technologies: ["Three.js", "WebGL", "3D", "React"],
    category: "3D Design",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Blockchain Security Audit",
    description: "Comprehensive security analysis tool for smart contracts with automated vulnerability detection and reporting.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    technologies: ["Blockchain", "Security", "Python"],
    category: "Cybersecurity",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Neural Network Visualizer",
    description: "Interactive web application for visualizing and understanding neural network architectures and training processes.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
    technologies: ["AI", "Visualization", "React", "D3.js"],
    category: "AI Development",
    demoUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            SELECTED WORKS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative projects spanning AI, cybersecurity, web development, and 3D design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;