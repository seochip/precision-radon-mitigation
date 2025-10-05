import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, TestTube, Shield, FileCheck, Wind } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Residential Radon Mitigation",
    description: "High-quality radon mitigation systems installed to EPA and ANSI/AARST standards using locally manufactured fans and American-made materials."
  },
  {
    icon: Wind,
    title: "Crawlspace Vapor Barriers",
    description: "Professional crawlspace encapsulation and vapor barrier installation to prevent radon entry and moisture problems."
  },
  {
    icon: TestTube,
    title: "Professional Testing",
    description: "Accurate radon testing with state-certified equipment. $500 testing fee fully applied toward your mitigation project."
  },
  {
    icon: Home,
    title: "Quick Turnaround",
    description: "Fast installation scheduling and completion to protect your family without delay. Most systems installed within days."
  },
  {
    icon: FileCheck,
    title: "Licensed & Certified",
    description: "State licensed Pennsylvania radon mitigation specialist with national certification for professional, compliant installations."
  },
  {
    icon: Building2,
    title: "Quality Guaranteed",
    description: "Every system built to last with locally manufactured fans and American materials, meeting all EPA standards."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Professional Radon Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Serving Armstrong, Butler, Cambria, Fayette, Somerset, and Westmoreland counties
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
