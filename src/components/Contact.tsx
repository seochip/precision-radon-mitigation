import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "(717) 555-RADON" },
  { icon: Mail, label: "Email", value: "info@safehomeradon.com" },
  { icon: MapPin, label: "Service Area", value: "All of Pennsylvania" },
  { icon: Clock, label: "Emergency Service", value: "7 Days a Week" }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Protect Your Family Today</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a free radon assessment and discover how we can eliminate radon from your home
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
                  <h3 className="text-2xl font-bold text-foreground mb-4">Get Your Free Assessment</h3>
                  <p className="text-muted-foreground mb-6">
                    Every day you wait is another day of exposure. Call now for emergency service or schedule your free radon assessment. We respond within 24 hours.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (717) 555-RADON
                    </Button>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                      <Mail className="mr-2 h-5 w-5" />
                      Request Assessment
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
