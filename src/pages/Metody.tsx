import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { methods } from "@/data/methods.js";

const Metody = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 animate-fade-in">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Nasze metody
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Metody <span className="gradient-text">terapii</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Stosujemy sprawdzone, certyfikowane metody terapeutyczne.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {methods.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.id}
                  className="bg-card rounded-2xl shadow-card overflow-hidden"
                >
                  <Accordion type="single" collapsible>
                    <AccordionItem value={method.id} className="border-0">
                      <AccordionTrigger className="px-6 py-6 hover:no-underline hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-4 text-left">
                          <div className="p-3 bg-primary/10 rounded-xl">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-display text-xl font-semibold text-foreground">
                              {method.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {method.subtitle}
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="px-6 pb-6">
                        <div className="lg:pl-[68px]">
                          <p className="my-4 text-foreground">
                            {method.description}
                          </p>

                          <div className="space-y-4">
                            {method.details.map((detail) => (
                              <div
                                key={detail.title}
                                className="bg-muted/50 rounded-xl p-4"
                              >
                                <h4 className="font-semibold mb-2">
                                  {detail.title}
                                </h4>

                                {detail.title === "Dla kogo?" &&
                                Array.isArray(detail.content) ? (
                                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                    {detail.content.map((item, i) => (
                                      <li key={i}>{item}</li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p className="text-sm text-muted-foreground">
                                    {detail.content}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Metody;
