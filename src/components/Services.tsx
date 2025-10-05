import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Home, FileText, Thermometer, Zap, Droplet } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Pre-Purchase Inspections",
    description: "Comprehensive evaluation before you buy, identifying potential issues and safety concerns."
  },
  {
    icon: Building2,
    title: "Commercial Inspections",
    description: "Thorough inspections for commercial properties, ensuring compliance and structural integrity."
  },
  {
    icon: FileText,
    title: "Pre-Listing Inspections",
    description: "Identify issues before listing to negotiate confidently and speed up the sale process."
  },
  {
    icon: Thermometer,
    title: "Thermal Imaging",
    description: "Advanced infrared technology to detect moisture, insulation issues, and energy loss."
  },
  {
    icon: Zap,
    title: "Electrical Inspections",
    description: "Complete electrical system evaluation for safety and code compliance."
  },
  {
    icon: Droplet,
    title: "Moisture & Mold Testing",
    description: "Professional moisture detection and mold assessment to protect your health."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Inspection Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional home inspection services tailored to your needs
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
