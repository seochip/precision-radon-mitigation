import { Button } from "@/components/ui/button";
import { Home, Phone } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Precision Radon Mitigation</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Phone className="mr-2 h-4 w-4" />
              Get Estimate
            </Button>
          </nav>

          <Button onClick={() => scrollToSection("contact")} className="md:hidden bg-accent hover:bg-accent/90 text-accent-foreground">
            Get Assessment
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
