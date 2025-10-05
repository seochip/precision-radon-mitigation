import { Shield, Clock, Award, Users, Linkedin } from "lucide-react";
import toolsImage from "@/assets/inspection-tools.jpg";
import matthewBlank from "@/assets/matthew-blank.jpg";

const stats = [
  { icon: Shield, value: "Licensed", label: "PA State Licensed" },
  { icon: Award, value: "Certified", label: "Nationally Certified" },
  { icon: Clock, value: "Fast", label: "Quick Turnaround" },
  { icon: Users, value: "Quality", label: "American-Made Materials" }
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
            <div className="flex items-start gap-4 mb-6">
              <img 
                src={matthewBlank} 
                alt="Matthew Blank - Owner & Radon Specialist" 
                className="w-24 h-24 rounded-full object-cover shadow-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-1">Matthew Blank</h3>
                <p className="text-muted-foreground mb-2">Owner & State Licensed Radon Specialist</p>
                <a 
                  href="https://www.linkedin.com/in/mathew-c-blank-3077462b8/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  <Linkedin size={18} />
                  <span className="text-sm">Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              My journey into radon mitigation is deeply personal. After losing my mother to lung cancer, we later discovered elevated radon levels in her home. This devastating revelation transformed my grief into purpose—I became determined to protect other families from the silent danger of radon exposure.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Precision Radon Mitigation is a locally owned company based in Trafford, PA, proudly serving Western Pennsylvania families. We specialize in high-quality radon mitigation systems and crawlspace vapor barriers for residential properties.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              As a state licensed and nationally certified specialist, I provide fast, affordable services with quick turnaround times. We use locally manufactured radon fans and American-made materials to ensure quality and long-lasting performance. Every system is installed to meet EPA and ANSI/AARST standards.
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
