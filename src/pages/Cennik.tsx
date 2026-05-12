import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Clock, Phone } from "lucide-react";
import { priceList } from "@/data/priceList.js";

const Cennik = () => {
  const location = useLocation();
  const [openItem, setOpenItem] = useState("");

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    setOpenItem(id);

    requestAnimationFrame(() => {
      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          const headerOffset = 120;
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;

          window.scrollTo({
            top: elementPosition - headerOffset,
            behavior: "smooth",
          });
        }
      }, 100);
    });
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Cennik
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cennik <span className="gradient-text">usług</span>
            </h1>

            <p className="text-muted-foreground text-lg">
              Przejrzyste ceny wszystkich naszych usług. Kliknij wybraną usługę,
              aby zobaczyć szczegóły.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto bg-card border-0 shadow-card overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-3 gap-4 bg-muted/50 px-6 py-4 border-b border-border">
                <div>
                  <span className="text-sm font-semibold text-foreground">
                    Usługa
                  </span>
                </div>

                <div className="text-center">
                  <span className="text-sm font-semibold text-foreground">
                    Czas
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-sm font-semibold text-foreground">
                    Cena
                  </span>
                </div>
              </div>

              <Accordion
                type="single"
                collapsible
                value={openItem}
                onValueChange={setOpenItem}
              >
                {priceList.map((item, index) => {
                  const hasDetails =
                    item.description || item.preparation || item.methodLink;

                  return (
                    <AccordionItem
                      key={item.id || index}
                      id={item.id}
                      value={item.id || String(index)}
                      className="border-b border-border"
                    >
                      <AccordionTrigger
                        className={`px-6 py-4 hover:no-underline hover:bg-muted/30 transition-colors ${
                          !hasDetails
                            ? "pointer-events-none [&>svg]:invisible"
                            : ""
                        }`}
                      >
                        <div className="grid grid-cols-3 gap-4 w-full pr-4 text-left">
                          <div className="flex items-center min-w-0">
                            <span className="text-foreground break-words">
                              {item.service}
                            </span>
                          </div>

                          <div className="flex items-center justify-center">
                            <div className="grid grid-cols-[16px_auto] items-center gap-x-1 text-muted-foreground text-sm whitespace-nowrap w-[80px]">
                              {item.duration !== "-" ? (
                                <>
                                  <Clock className="h-4 w-4" />
                                  <span>{item.duration}</span>
                                </>
                              ) : (
                                <>
                                  <div className="h-4 w-4" />
                                  <span>-</span>
                                </>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center justify-end min-w-0">
                            <span className="font-semibold text-primary text-right whitespace-normal break-words">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      </AccordionTrigger>

                      {hasDetails && (
                        <AccordionContent className="p-6">
                          <div className="flex flex-col gap-3">
                            {item.description && (
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                              </p>
                            )}
                            {item.preparation && (
                              <div className="bg-muted/50 rounded-xl p-4">
                                <h4 className="font-semibold mb-1">
                                  {item.preparation.title}
                                </h4>

                                {item.preparation.subTitle && (
                                  <p className="text-sm text-muted-foreground mb-3">
                                    {item.preparation.subTitle}
                                  </p>
                                )}

                                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                  {item.preparation.content.map((prep, i) => (
                                    <li key={i}>{prep}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {item.methodLink && (
                              <Link
                                to={item.methodLink}
                                className="w-max p-3 rounded-lg gradient-hero text-primary-foreground font-medium"
                              >
                                Zobacz opis metody
                              </Link>
                            )}
                          </div>
                        </AccordionContent>
                      )}
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </CardContent>
          </Card>

          <div className="max-w-4xl mx-auto mt-8">
            <Card className="bg-destructive/5 border-destructive/20">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <AlertCircle className="h-6 w-6 text-destructive shrink-0" />

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Zasady odwoływania wizyt
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Z uwagi na dużą liczbę pacjentów oczekujących na termin
                      fizjoterapii, bardzo prosimy o odwoływanie wizyt
                      najpóźniej w dniu poprzedzającym wizytę do godz. 18:00.
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

          <div className="max-w-4xl mx-auto mt-8 text-center">
            <Card className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">
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
