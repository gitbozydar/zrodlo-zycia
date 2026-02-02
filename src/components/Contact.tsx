import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { locations } from "@/data/locations.js";

const Contact = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Kontakt
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Odwiedź nasze <span className="gradient-text">gabinety</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Posiadamy dwa gabinety w Warszawie. Wybierz najbardziej dogodną dla
            Ciebie lokalizację.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location) => (
            <Card
              key={location.name}
              className="bg-card border-0 shadow-card hover:shadow-hover transition-shadow"
            >
              <CardContent className="p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  {location.name}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        Adres
                      </div>
                      <div className="text-foreground font-medium">
                        {location.address}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-secondary/10 rounded-lg shrink-0">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        Telefon
                      </div>
                      <a
                        href={`tel:${location.phone.replace(/\s/g, "")}`}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/20 rounded-lg shrink-0">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        Godziny pracy
                      </div>
                      <div className="text-foreground font-medium">
                        {location.hours}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-6"
                >
                  <Button
                    variant="outline"
                    className="w-full border-primary/30 hover:bg-primary/5"
                  >
                    Zobacz na mapie
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Card className="inline-block bg-card border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">
                    Fizjoterapia dorosłych i wkładki IGLI:
                  </span>
                  <a
                    href="tel:+48509439330"
                    className="font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Mateusz Grodzicki +48 509 439 330
                  </a>
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
