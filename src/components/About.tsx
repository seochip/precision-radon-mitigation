import { Shield, Clock, Award, Users } from "lucide-react";
import toolsImage from "@/assets/inspection-tools.jpg";

const stats = [
  { icon: Shield, value: "5,000+", label: "Inspections Completed" },
  { icon: Clock, value: "24hr", label: "Report Delivery" },
  { icon: Award, value: "20+", label: "Years Experience" },
  { icon: Users, value: "100%", label: "Client Satisfaction" }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose TrustCheck?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              With over two decades of experience, we've built our reputation on thorough, honest inspections that give you peace of mind.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our certified inspectors use the latest technology and follow strict industry standards to provide you with comprehensive reports that help you make informed decisions.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center p-4 rounded-lg bg-secondary/50">
                    <Icon className="h-8 w-8 text-accent mx-auto mb-2" />
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <img 
              src={toolsImage} 
              alt="Professional inspection tools" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold mb-1">Certified</div>
              <div className="text-sm">Licensed Professionals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
