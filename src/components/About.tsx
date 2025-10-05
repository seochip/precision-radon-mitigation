import { Shield, Clock, Award, Users } from "lucide-react";
import toolsImage from "@/assets/inspection-tools.jpg";

const stats = [
  { icon: Shield, value: "Licensed", label: "PA State Licensed" },
  { icon: Award, value: "Certified", label: "Nationally Certified" },
  { icon: Clock, value: "Fast", label: "Quick Turnaround" },
  { icon: Users, value: "Free", label: "Free Estimates" }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Locally Owned, Professionally Certified
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Precision Radon Mitigation is a locally owned company based in Trafford, PA, proudly serving Western Pennsylvania families. We specialize in high-quality radon mitigation systems and crawlspace vapor barriers for residential properties.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our state licensed and nationally certified specialist provides fast, affordable services with free estimates and quick turnaround times. We use locally manufactured radon fans and American-made materials to ensure quality and long-lasting performance. Every system is installed to meet EPA and ANSI/AARST standards.
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
              <div className="text-3xl font-bold mb-1">Licensed</div>
              <div className="text-sm">State & Nationally Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
