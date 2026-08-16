import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, Fan, Layers, ShieldCheck } from "lucide-react";
import subSlabSystem from "@/assets/subslab-system.jpg";
import radonFan from "@/assets/radon-fan.jpg";
import vaporBarrier from "@/assets/vapor-barrier.jpg";
import sealedFoundation from "@/assets/sealed-foundation.jpg";

const techniques = [
  {
    icon: ArrowDown,
    title: "Sub-Slab Depressurization",
    description: "The most effective and common method for reducing radon levels in homes with basements or slab-on-grade foundations.",
    details: "This system creates negative pressure beneath the foundation, drawing radon gas from the soil before it enters your home. A PVC pipe is inserted through the foundation slab into the soil, connected to a specialized fan that vents the radon safely above the roofline.",
    image: subSlabSystem,
    effectiveness: "85-99% reduction"
  },
  {
    icon: Fan,
    title: "Radon Mitigation Fan Systems",
    description: "Specialized, quiet fans designed specifically for continuous radon mitigation with minimal energy consumption.",
    details: "We install high-quality, locally manufactured radon fans that are built to run 24/7. These fans are mounted on exterior walls or in attics and are designed for durability and long-term performance. Each system includes a manometer to monitor proper operation.",
    image: radonFan,
    effectiveness: "Critical component"
  },
  {
    icon: Layers,
    title: "Crawlspace Vapor Barriers",
    description: "Heavy-duty polyethylene sheeting that prevents radon gas from entering through exposed soil in crawlspaces.",
    details: "Professional-grade 6-mil or thicker polyethylene sheeting is laid over exposed soil and sealed at all seams and penetrations. Combined with proper ventilation or depressurization, this prevents radon entry through the crawlspace floor.",
    image: vaporBarrier,
    effectiveness: "Up to 90% reduction"
  },
  {
    icon: ShieldCheck,
    title: "Foundation Sealing & Crack Repair",
    description: "Professional sealing of cracks, joints, and openings in the foundation to reduce radon entry points.",
    details: "While sealing alone is not sufficient to solve radon problems, it's an important supplementary technique. We use professional-grade sealants to close foundation cracks, gaps around utility penetrations, and construction joints, enhancing the effectiveness of active mitigation systems.",
    image: sealedFoundation,
    effectiveness: "Supplementary measure"
  }
];

const MitigationTechniques = () => {
  return (
    <section id="techniques" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Radon Mitigation Techniques</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proven, EPA-approved methods to protect your home and family from radon exposure. Every installation is customized to your property's unique characteristics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {techniques.map((technique) => {
            const Icon = technique.icon;
            return (
              <Card key={technique.title} className="overflow-hidden hover:shadow-xl transition-shadow border-border">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img 
                    src={technique.image} 
                    alt={technique.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-foreground mb-2">{technique.title}</CardTitle>
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                        {technique.effectiveness}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-foreground font-medium">{technique.description}</p>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {technique.details}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-accent/10 border-l-4 border-accent p-8 rounded-lg max-w-4xl mx-auto">
          <h3 className="font-bold text-foreground text-xl mb-4">Custom Solutions for Western Pennsylvania Homes</h3>
          <p className="text-muted-foreground mb-4">
            Every home is different, and there's no one-size-fits-all solution for radon mitigation. We design a custom system based on your foundation type, soil conditions, and radon levels. Our installations use locally manufactured fans, ensuring long-lasting performance and reliability.
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground">All our systems meet or exceed EPA and ANSI/AARST standards.</strong> We are 100% insured and provide documentation, a 13-month guarantee on post-mitigation system performance, and a 5-year warranty on labor and installation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MitigationTechniques;
