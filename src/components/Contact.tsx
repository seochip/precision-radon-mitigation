import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "(724) 515-9414" },
  { icon: Mail, label: "Email", value: "precisionradonllc@gmail.com" },
  { icon: MapPin, label: "Based In", value: "Trafford, PA" },
  { icon: Clock, label: "Service Area", value: "Armstrong, Butler, Cambria, Fayette, Somerset, Westmoreland Counties" }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Protect Your Family Today</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional radon mitigation services. 100% insured, with a 5-year warranty on labor and installation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.label} className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{item.label}</div>
                            <div className="text-muted-foreground">{item.value}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Get Your Estimate</h3>
                  <p className="text-muted-foreground mb-6">
                    Protect your family with professional radon mitigation. We are 100% insured and back every installation with a 5-year warranty on labor and installation, plus a 13-month guarantee on post-mitigation system performance.
                  </p>
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                      <a href="tel:+17245159414" aria-label="Call Precision Radon Mitigation at 724-515-9414">
                        <Phone className="mr-2 h-5 w-5" />
                        Call (724) 515-9414
                      </a>
                    </Button>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                      <a href="mailto:precisionradonllc@gmail.com" aria-label="Email Precision Radon Mitigation">
                        <Mail className="mr-2 h-5 w-5" />
                        Email Us
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
