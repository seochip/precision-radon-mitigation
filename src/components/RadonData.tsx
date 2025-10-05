import { AlertTriangle, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const countyData = [
  {
    county: "Armstrong County",
    zone: "Zone 1",
    potential: "Highest",
    description: "EPA Zone 1 - Predicted average indoor radon screening level greater than 4 pCi/L"
  },
  {
    county: "Butler County",
    zone: "Zone 1",
    potential: "Highest",
    description: "EPA Zone 1 - Predicted average indoor radon screening level greater than 4 pCi/L"
  },
  {
    county: "Cambria County",
    zone: "Zone 1",
    potential: "Highest",
    description: "EPA Zone 1 - Predicted average indoor radon screening level greater than 4 pCi/L"
  },
  {
    county: "Fayette County",
    zone: "Zone 1",
    potential: "Highest",
    description: "EPA Zone 1 - Predicted average indoor radon screening level greater than 4 pCi/L"
  },
  {
    county: "Somerset County",
    zone: "Zone 1",
    potential: "Highest",
    description: "EPA Zone 1 - Predicted average indoor radon screening level greater than 4 pCi/L"
  },
  {
    county: "Westmoreland County",
    zone: "Zone 1",
    potential: "Highest",
    description: "EPA Zone 1 - Predicted average indoor radon screening level greater than 4 pCi/L"
  }
];

const RadonData = () => {
  return (
    <section id="radon-data" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Pennsylvania Radon Levels by County</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Pennsylvania has one of the most serious radon problems in the United States. According to the Pennsylvania Department of Environmental Protection, approximately <strong>40% of homes tested in Pennsylvania have radon levels above the EPA's action guideline of 4 pCi/L</strong>.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The EPA recommends homes and properties be mitigated if the level of radon is above 4 pCi/L. All six counties we serve are classified as EPA Zone 1 - the highest potential for elevated radon levels.
          </p>
        </div>

        <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg mb-12 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-foreground text-lg mb-2">Pennsylvania State Average: 8.6 pCi/L</h3>
              <p className="text-muted-foreground">
                Pennsylvania's average radon level of 8.6 pCi/L is more than double the EPA's action level of 4.0 pCi/L, and significantly exceeds the World Health Organization's recommended threshold of 2.7 pCi/L.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {countyData.map((county) => (
            <Card key={county.county} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  <CardTitle className="text-foreground">{county.county}</CardTitle>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-destructive/20 text-destructive font-bold rounded-full text-sm">
                    {county.zone}
                  </span>
                  <span className="text-sm font-semibold text-destructive">{county.potential} Potential</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {county.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary/50 p-8 rounded-lg max-w-4xl mx-auto">
          <h3 className="font-bold text-foreground text-xl mb-4">Understanding EPA Radon Zones</h3>
          <div className="space-y-3 text-muted-foreground">
            <p>
              <strong className="text-foreground">Zone 1 (Highest Potential):</strong> Counties with predicted average indoor radon screening levels greater than 4 pCi/L
            </p>
            <p>
              <strong className="text-foreground">Zone 2 (Moderate Potential):</strong> Counties with predicted average indoor radon screening levels between 2 and 4 pCi/L
            </p>
            <p>
              <strong className="text-foreground">Zone 3 (Low Potential):</strong> Counties with predicted average indoor radon screening levels less than 2 pCi/L
            </p>
          </div>
          <p className="text-sm text-muted-foreground mt-6 italic">
            <strong>Important:</strong> The EPA Map of Radon Zones should not be used to determine if individual homes need to be tested. Radon levels can vary dramatically from home to home, even within the same neighborhood. The only way to know your home's radon level is to test it.
          </p>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Every home in Western Pennsylvania should be tested for radon, regardless of zone classification.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-lg transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Schedule Your Free Radon Assessment
          </a>
        </div>
      </div>
    </section>
  );
};

export default RadonData;
