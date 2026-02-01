import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Baby,
  Heart,
  Footprints,
  Sparkles,
  Stethoscope,
  Activity,
} from "lucide-react";

const methods = [
  {
    id: "vojta",
    icon: Baby,
    title: "Metoda Vojty",
    subtitle: "Skuteczna rehabilitacja niemowląt i dzieci oraz dorosłych",
    description:
      "Metoda Vojty to uznana na całym świecie forma neurorehabilitacji, stosowana przede wszystkim u noworodków, niemowląt i dzieci z zaburzeniami neurologicznymi oraz opóźnieniami rozwoju motorycznego.",
    details: [
      {
        title: "Na czym polega?",
        content:
          "Metoda Vojty opiera się na tzw. odruchowej lokomocji – aktywowaniu wrodzonych, zakodowanych w mózgu wzorców ruchowych. Terapeuta, poprzez odpowiedni nacisk na konkretne punkty ciała dziecka w ściśle określonych pozycjach (na plecach, brzuchu i boku), wywołuje automatyczne reakcje ruchowe – tzw. odruchowe pełzanie i odruchowy obrót. Ruchy te zawierają wszystkie kluczowe elementy potrzebne do prawidłowego poruszania się – sterowanie postawą, naprzemienność ruchu kończyn, mechanizmy podporowo-wyprostne.",
      },
      {
        title: "Dla kogo?",
        content: [
          "Noworodki i niemowlęta z ryzykiem zaburzeń neurologicznych",
          "Dzieci z mózgowym porażeniem dziecięcym (MPD)",
          "Pacjenci z zaburzeniami napięcia mięśniowego",
          "Dzieci z opóźnieniem rozwoju psychoruchowego",
          "Pacjenci z wadami postawy i problemami w zakresie układu mięśniowo-szkieletowego",
        ],
      },
      {
        title: "Efekty terapii",
        content:
          "Poprawa kontroli postawy, wyrównanie napięcia mięśniowego, zwiększenie zakresu ruchów.",
      },
    ],
  },
  {
    id: "bobath",
    icon: Heart,
    title: "Metoda NDT-Bobath",
    subtitle: "Indywidualna terapia rozwoju ruchowego dzieci",
    description:
      "Metoda NDT-Bobath to ceniona na całym świecie forma terapii neurorozwojowej, wykorzystywana u niemowląt, dzieci i dorosłych z zaburzeniami funkcjonowania ośrodkowego układu nerwowego.",
    details: [
      {
        title: "Na czym polega?",
        content:
          "Terapia opiera się na indywidualnej analizie sposobu poruszania się dziecka oraz pracy z tzw. punktami kluczowymi ciała – głową, szyją, obręczą barkową i biodrową. Poprzez odpowiednie ułożenie ciała, terapeuta aktywuje prawidłowe wzorce ruchowe, jednocześnie hamując nieprawidłowe.",
      },
      {
        title: "Dla kogo?",
        content: [
          "Niemowlęta z opóźnieniem rozwoju psychoruchowego",
          "Dzieci z mózgowym porażeniem dziecięcym (MPD)",
          "Pacjenci z zaburzeniami napięcia mięśniowego",
          "Wcześniaki wymagające wsparcia w rozwoju ruchowym",
          "Dzieci po urazach neurologicznych",
        ],
      },
      {
        title: "Dlaczego działa?",
        content:
          "Wspiera rozwój naturalnych, funkcjonalnych wzorców ruchowych, normalizuje napięcie mięśniowe i poprawia kontrolę postawy.",
      },
    ],
  },
  {
    id: "stopy",
    icon: Footprints,
    title: "Trójwymiarowa terapia stóp",
    subtitle: "Skuteczna rehabilitacja wad stóp u dzieci i dorosłych",
    description:
      "Nowoczesna i precyzyjna metoda leczenia deformacji stóp u niemowląt, dzieci i dorosłych.",
    details: [
      {
        title: "Na czym polega?",
        content:
          "Praca manualna w podstawowych wzorcach ruchowych dziecka z uwzględnieniem trójwymiarowej budowy i funkcji stopy, stosowanie technik mobilizacyjnych i rozciągających.",
      },
      {
        title: "Dla kogo?",
        content: [
          "Stopa końsko-szpotawa",
          "Stopa szpotawa (przywiedzione przodostopie)",
          "Stopa serpentynowa",
          "Stopa piętowa",
          "Stopa płasko-koślawa",
        ],
      },
      {
        title: "Jak przebiega?",
        content:
          "Po ćwiczeniach stosuje się bandaże utrwalające prawidłowe ustawienie stopy i wspierające efekt terapii.",
      },
    ],
  },
  {
    id: "osteopatia",
    icon: Sparkles,
    title: "Osteopatia",
    subtitle: "Delikatna terapia manualna dla dzieci i dorosłych",
    description:
      "Bezpieczna i skuteczna forma terapii manualnej oparta na holistycznym podejściu do zdrowia.",
    details: [
      {
        title: "Na czym polega?",
        content:
          "Subtelne techniki manualne, które przywracają równowagę w układzie mięśniowo-szkieletowym, nerwowym i narządowym, wspomagając naturalne mechanizmy samoregulacji organizmu.",
      },
      {
        title: "Dla kogo?",
        content: [
          "Niemowlęta i dzieci z napięciami mięśniowymi lub wadami postawy",
          "Dorośli z bólami kręgosłupa i ograniczeniami ruchomości",
          "Kobiety w okresie okołoporodowym",
          "Pacjenci z problemami trawiennymi lub snu",
        ],
      },
      {
        title: "Efekty terapii",
        content:
          "Poprawa jakości snu, trawienia, redukcja napięć mięśniowych oraz ogólne lepsze samopoczucie.",
      },
    ],
  },
  {
    id: "igli",
    icon: Activity,
    title: "Wkładki IGLI",
    subtitle: "Nowoczesna terapia wad postawy i stóp",
    description:
      "Dynamiczne, sensoryczne wkładki indywidualnie dopasowane wspomagające terapię wad postawy i chodu u dzieci i dorosłych.",
    details: [
      {
        title: "Na czym polega?",
        content:
          "Indywidualnie dopasowane wkładki ortopedyczne z włókna węglowego, modyfikowane w trakcie terapii przy użyciu trzpieni terapeutycznych, wspierające aktywne korygowanie wad postawy.",
      },
      {
        title: "Dla kogo?",
        content: [
          "Dzieci z koślawością kolan lub stóp",
          "Dzieci często przewracające się lub z zaburzeniami równowagi",
          "Pacjenci odczuwający ból nóg lub stóp",
          "Osoby z nierównomiernym ścieraniem obuwia",
          "Dzieci z zaburzeniami koordynacji lub chodu",
        ],
      },
      {
        title: "Dlaczego działają?",
        content:
          "Poprawiają chód, równowagę, wspomagają rozwój prawidłowej postawy oraz aktywizują mięśnie stóp.",
      },
    ],
  },
  {
    id: "neurolog",
    icon: Stethoscope,
    title: "Neurolog dziecięcy",
    subtitle: "Diagnostyka i konsultacje neurologiczne",
    description:
      "Wczesna diagnostyka neurologiczna wspierająca prawidłowy rozwój motoryczny, poznawczy i emocjonalny dziecka.",
    details: [
      {
        title: "Zakres usług",
        content:
          "Ocena motoryki, odruchów, konsultacje, wsparcie rodziców, diagnostyka neurorozwojowa i planowanie terapii.",
      },
      {
        title: "Dla kogo?",
        content: [
          "Dzieci z asymetrią ułożeniową lub ruchową",
          "Dzieci z zaburzeniami napięcia mięśniowego",
          "Dzieci z opóźnieniem rozwoju psychomotorycznego",
          "Wcześniaki wymagające wczesnego wsparcia",
          "Dzieci z niepokojącymi objawami neurologicznymi (drżenia, tiki, napady)",
        ],
      },
      {
        title: "Dlaczego warto?",
        content:
          "Wczesna interwencja zwiększa szanse na prawidłowy rozwój i umożliwia skuteczną terapię.",
      },
    ],
  },
];

const Metody = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
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
                        <div className="pl-[68px]">
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
