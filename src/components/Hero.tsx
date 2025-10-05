import { Button } from "@/components/ui/button";
import { CheckCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-home-inspection.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional home inspection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Locally Owned Radon Protection for Western PA Families
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Precision Radon Mitigation specializes in residential radon mitigation systems and crawlspace vapor barriers throughout Western Pennsylvania, creating individualized solutions tailored by our state licensed and nationally certified radon specialist.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get Estimate
            </Button>
            <Button 
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              size="lg" 
              variant="outline"
              className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              See Solutions
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            {["State Licensed & Nationally Certified", "Testing Fee Applied to Mitigation", "6-Month Post-Mitigation Test Guarantee"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
