import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Kontakt
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Skontaktuj się <span className="gradient-text">z nami</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Masz pytania? Chcesz umówić wizytę? Skontaktuj się z nami
              telefonicznie lub przez formularz kontaktowy.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col justify-between lg:flex-row gap-6 items-center">
              <Card className="bg-card border-0 shadow-card w-full max-w-sm">
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                    Gabinet – Ostródzka
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
                          Ostródzka 119, 03-289 Warszawa
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
                          href="tel:+48505185572"
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          +48 505 185 572
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
                          Pon-Pt: 8:00 - 20:00
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-0 shadow-card w-full max-w-sm">
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                    Gabinet – Kłopot
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
                          Kłopot 4, 01-066 Warszawa
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
                          href="tel:+48505185572"
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          +48 505 185 572
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
                          Pon-Pt: 8:00 - 20:00
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex flex-col gap-8">
                <Card className="bg-muted/50 border-0">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4">
                      Fizjoterapia dorosłych i wkładki IGLI
                    </h4>
                    <a
                      href="tel:+48509439330"
                      className="flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                      <Phone className="h-5 w-5" />
                      Mateusz Grodzicki: +48 509 439 330
                    </a>
                  </CardContent>
                </Card>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/rehabilitacjavojta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow flex-1"
                  >
                    <Facebook className="h-6 w-6 text-primary" />
                    <span className="font-medium text-foreground">
                      Facebook
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/centrum_rehabilitacji_warszawa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow flex-1"
                  >
                    <Instagram className="h-6 w-6 text-secondary" />
                    <span className="font-medium text-foreground">
                      Instagram
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
