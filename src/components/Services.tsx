import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, TestTube, Shield, FileCheck, Wind } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Radon Mitigation Systems",
    description: "Professional installation of active soil depressurization systems that reduce radon levels below EPA guidelines."
  },
  {
    icon: TestTube,
    title: "Radon Testing",
    description: "Accurate short-term and long-term radon testing to determine your home's radon levels and risk."
  },
  {
    icon: Home,
    title: "Residential Solutions",
    description: "Custom radon mitigation for homes of all sizes, from single-family to multi-unit properties."
  },
  {
    icon: Building2,
    title: "Commercial Mitigation",
    description: "Complete radon solutions for businesses, schools, and commercial properties with compliance documentation."
  },
  {
    icon: Wind,
    title: "System Maintenance",
    description: "Annual inspections and maintenance to ensure your radon system continues operating at peak efficiency."
  },
  {
    icon: FileCheck,
    title: "Post-Mitigation Testing",
    description: "Verification testing after installation to confirm radon levels are reduced to safe levels."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Complete Radon Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From testing to mitigation and maintenance - protecting Pennsylvania families from radon
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="hover:shadow-lg transition-shadow border-border">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
