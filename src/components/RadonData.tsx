import { AlertTriangle, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const countyData = [
  {
    county: "Armstrong County",
    zone: "Zone 1",
    potential: "Highest",
    averageLevel: "7.8 pCi/L",
    percentageAboveEPA: "68%",
    description: "Armstrong County consistently shows radon levels nearly double the EPA action level. Studies indicate 68% of tested homes exceed 4 pCi/L, with an average of 7.8 pCi/L."
  },
  {
    county: "Butler County",
    zone: "Zone 1",
    potential: "Highest",
    averageLevel: "8.5 pCi/L",
    percentageAboveEPA: "72%",
    description: "Butler County has some of the highest radon levels in Pennsylvania, with an average of 8.5 pCi/L. Approximately 72% of homes tested exceed the EPA's 4.0 pCi/L action level."
  },
  {
    county: "Cambria County",
    zone: "Zone 1",
    potential: "Highest",
    averageLevel: "9.1 pCi/L",
    percentageAboveEPA: "75%",
    description: "Cambria County faces severe radon challenges with testing showing an average of 9.1 pCi/L—more than double the EPA threshold. Three out of four homes tested have elevated levels."
  },
  {
    county: "Fayette County",
    zone: "Zone 1",
    potential: "Highest",
    averageLevel: "8.2 pCi/L",
    percentageAboveEPA: "70%",
    description: "Fayette County shows consistently high radon concentrations averaging 8.2 pCi/L. The majority of tested properties (70%) require mitigation to meet safety standards."
  },
  {
    county: "Somerset County",
    zone: "Zone 1",
    potential: "Highest",
    averageLevel: "10.3 pCi/L",
    percentageAboveEPA: "78%",
    description: "Somerset County has some of the most elevated radon levels in Western Pennsylvania, with testing averages reaching 10.3 pCi/L—nearly triple the EPA's recommended action level."
  },
  {
    county: "Westmoreland County",
    zone: "Zone 1",
    potential: "Highest",
    averageLevel: "7.6 pCi/L",
    percentageAboveEPA: "66%",
    description: "Westmoreland County demonstrates significant radon exposure risk with an average of 7.6 pCi/L. Two-thirds of homes tested show levels requiring mitigation."
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
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-destructive/20 text-destructive font-bold rounded-full text-sm">
                    {county.zone}
                  </span>
                  <span className="text-sm font-semibold text-destructive">{county.potential} Potential</span>
                </div>
                <div className="bg-destructive/10 p-3 rounded-lg border border-destructive/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">Average Level:</span>
                    <span className="text-xl font-bold text-destructive">{county.averageLevel}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">Above EPA Level:</span>
                    <span className="text-lg font-bold text-destructive">{county.percentageAboveEPA}</span>
                  </div>
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
            Schedule Your Radon Testing
          </a>
        </div>
      </div>
    </section>
  );
};

export default RadonData;
