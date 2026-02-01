import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, AlertCircle, Phone } from "lucide-react";

const priceList = [
  { service: "Neurolog dziecięcy", duration: "30 min.", price: "300 zł" },
  {
    service: "Rehabilitacja metodą Vojty",
    duration: "30 min.",
    price: "200 zł",
  },
  { service: "Rehabilitacja dzieci x 2", duration: "30 min.", price: "320 zł" },
  { service: "Rehabilitacja dorosłych", duration: "45 min.", price: "160 zł" },
  { service: "Osteopatia", duration: "30 min.", price: "200 zł" },
  { service: "Terapia stóp", duration: "45-60 min.", price: "250-300 zł" },
  {
    service: "Kolejna wizyta terapii stóp",
    duration: "30 min.",
    price: "200 zł",
  },
  { service: "Neurologopeda", duration: "45 min.", price: "180 zł" },
  {
    service: "Badanie i dobór wkładek IGLI",
    duration: "30 min.",
    price: "470 zł",
  },
  { service: "Badanie kontrolne wkładek IGLI", duration: "-", price: "120 zł" },
  { service: "Joga indywidualna", duration: "45 min.", price: "150 zł" },
  { service: "Doradztwo psychologiczne", duration: "45 min.", price: "150 zł" },
  { service: "Fala Uderzeniowa", duration: "-", price: "80 zł" },
  {
    service: "Opis/obserwacja neurologopedyczna",
    duration: "-",
    price: "120 zł",
  },
  { service: "Płyta z treningu słuchowego", duration: "-", price: "350 zł" },
];

const Cennik = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24 animate-fade-in">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Cennik
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cennik <span className="gradient-text">usług</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Przejrzyste ceny wszystkich naszych usług. Szczegółowe informacje
              uzyskasz podczas rejestracji.
            </p>
          </div>

          {/* Price Table */}
          <Card className="max-w-4xl mx-auto bg-card border-0 shadow-card overflow-hidden">
            <CardContent className="p-0">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 bg-muted/50 px-6 py-4 border-b border-border">
                <div className="col-span-6 md:col-span-7">
                  <span className="text-sm font-semibold text-foreground">
                    Usługa
                  </span>
                </div>
                <div className="col-span-3 md:col-span-2 text-center">
                  <span className="text-sm font-semibold text-foreground">
                    Czas
                  </span>
                </div>
                <div className="col-span-3 text-right">
                  <span className="text-sm font-semibold text-foreground">
                    Cena
                  </span>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-border">
                {priceList.map((item, index) => (
                  <div
                    key={item.service}
                    className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-muted/30 transition-colors opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 0.03}s` }}
                  >
                    <div className="col-span-6 md:col-span-7 flex items-center">
                      <span className="text-foreground">{item.service}</span>
                    </div>
                    <div className="col-span-3 md:col-span-2 flex items-center justify-center">
                      {item.duration !== "-" ? (
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <Clock className="h-4 w-4" />
                          {item.duration}
                        </div>
                      ) : (
                        <span className="text-muted-foreground text-sm">-</span>
                      )}
                    </div>
                    <div className="col-span-3 flex items-center justify-end">
                      <span className="font-semibold text-primary">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cancellation Policy */}
          <div className="max-w-4xl mx-auto mt-8">
            <Card className="bg-destructive/5 border-destructive/20">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <AlertCircle className="h-6 w-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Zasady odwoływania wizyt
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Z uwagi na dużą liczbę pacjentów oczekujących na termin
                      fizjoterapii, bardzo prosimy o odwoływanie wizyt
                      najpóźniej w dniu poprzedzającym wizytę do godz. 18:00, a
                      w dni poświąteczne do godz. 10:30.
                      <strong className="text-foreground">
                        {" "}
                        Dodatkowa opłata za nieodwołaną w terminie wizytę wynosi
                        50% ceny.
                      </strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact CTA */}
          <div className="max-w-4xl mx-auto mt-8 text-center">
            <Card className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-0">
              <CardContent className="p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Masz pytania dotyczące cen?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Skontaktuj się z nami, chętnie odpowiemy na wszystkie pytania.
                </p>
                <a
                  href="tel:+48505185572"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  <Phone className="h-5 w-5" />
                  +48 505 185 572
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cennik;
