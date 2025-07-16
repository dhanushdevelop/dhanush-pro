import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye } from "lucide-react";

const gallery3D = [
  {
    title: "Futuristic City Model",
    description: "Detailed 3D cityscape with dynamic lighting and atmospheric effects",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop",
    software: ["Blender", "Unity", "3D Modeling"],
    category: "Architectural",
  },
  {
    title: "Cyberpunk Character",
    description: "High-poly character design with advanced rigging and animation",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    software: ["Maya", "ZBrush", "Substance"],
    category: "Character Design",
  },
  {
    title: "Product Visualization",
    description: "Photorealistic product renders for commercial presentation",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
    software: ["Cinema 4D", "Octane", "Photoshop"],
    category: "Product Design",
  },
  {
    title: "Interactive Environment",
    description: "Immersive 3D environment for VR/AR applications",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop",
    software: ["Unreal Engine", "VR", "AR"],
    category: "Interactive",
  },
  {
    title: "Abstract Art Piece",
    description: "Experimental 3D artwork exploring form and lighting",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
    software: ["Houdini", "Redshift", "After Effects"],
    category: "Digital Art",
  },
  {
    title: "Game Asset Collection",
    description: "Low-poly game assets optimized for real-time rendering",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    software: ["Blender", "Unity", "Game Design"],
    category: "Game Assets",
  }
];

const Gallery3D = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            3D DESIGN GALLERY
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the boundaries of 3D design through modeling, animation, and interactive experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery3D.map((item, index) => (
            <Card 
              key={index}
              className="group overflow-hidden bg-gradient-subtle border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button variant="hero" size="sm" className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="h-4 w-4 mr-2" />
                    View 3D
                  </Button>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {item.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.software.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View Full 3D Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery3D;