import { Shield, Clock, Award, Users } from "lucide-react";
import toolsImage from "@/assets/inspection-tools.jpg";

const stats = [
  { icon: Shield, value: "2,500+", label: "Homes Protected" },
  { icon: Clock, value: "72hr", label: "System Installation" },
  { icon: Award, value: "EPA", label: "Certified Professionals" },
  { icon: Users, value: "100%", label: "Radon Reduction Guaranteed" }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Pennsylvania's Radon Experts
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Pennsylvania has some of the highest radon levels in the nation. We've helped over 2,500 families eliminate this silent threat and breathe easy knowing their homes are safe.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our EPA-certified professionals use proven mitigation techniques and high-quality systems to guarantee radon reduction below EPA action levels. Every installation comes with post-mitigation testing and a written guarantee.
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
              <div className="text-3xl font-bold mb-1">EPA Certified</div>
              <div className="text-sm">Radon Mitigation Specialists</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
