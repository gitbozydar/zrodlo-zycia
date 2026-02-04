import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Rodo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-0 shadow-card">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <h1 className="font-display text-3xl md:text-4xl font-bold">
                  Ochrona danych osobowych (RODO)
                </h1>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Od 25 maja 2018 r. obowiązuje rozporządzenie Parlamentu
                Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r.
                (RODO), dotyczące ochrony osób fizycznych w związku z
                przetwarzaniem danych osobowych oraz swobodnego przepływu takich
                danych. Rozporządzenie to obowiązuje we wszystkich krajach Unii
                Europejskiej, w tym również w Polsce.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-12">
                Poniżej przedstawiamy informacje dotyczące przetwarzania danych
                osobowych osób odwiedzających serwis Centrum Rehabilitacji
                Ostródzka.
              </p>
              <section className="space-y-10">
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Czym są dane osobowe?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Dane osobowe to informacje o zidentyfikowanej lub możliwej
                    do zidentyfikowania osobie fizycznej. W przypadku
                    korzystania z naszych serwisów mogą to być m.in. adres
                    e-mail, adres IP, dane zawarte w nazwie konta poczty
                    elektronicznej lub inne dane przekazywane podczas
                    korzystania z usług Centrum Rehabilitacji Ostródzka.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Dane osobowe mogą być zapisywane w plikach cookie lub
                    podobnych technologiach (np. local storage) wykorzystywanych
                    w naszych serwisach internetowych.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-4">Zgoda</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    W ramach udostępnianych serwisów przetwarzamy Państwa dane
                    osobowe jako administrator w oparciu o prawnie uzasadniony
                    interes.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Zgoda jest dobrowolna, jednak niezbędna do korzystania z
                    zasobów Centrum Rehabilitacji Ostródzka. W przypadku braku
                    zgody prosimy o zamknięcie strony oraz usunięcie plików
                    cookie z urządzenia końcowego.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Administrator danych osobowych
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Administratorem danych osobowych jest:
                  </p>
                  <p className="mt-3 font-medium">
                    Centrum Rehabilitacji Ostródzka
                    <br />
                    Ostródzka 119
                    <br />
                    03-179 Warszawa
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Szczegółowe dane kontaktowe dostępne są na stronie:
                    <p>
                      <Link to={"/"}>
                        <p className="underline hover:text-primary">
                          zrodloruchu.pl
                        </p>
                      </Link>
                    </p>
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Podstawa i cel przetwarzania danych
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Dane osobowe przetwarzane są na podstawie:
                  </p>
                  <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
                    <li className="flex gap-2">
                      <span className="text-primary">●</span>
                      zgody osoby, której dane dotyczą (art. 6 ust. 1 lit. a
                      RODO),
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">●</span>
                      obowiązku prawnego ciążącego na administratorze (art. 6
                      ust. 1 lit. c RODO),
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">●</span>
                      realizacji zadania w interesie publicznym lub w ramach
                      sprawowania władzy publicznej (art. 6 ust. 1 lit. e RODO).
                    </li>
                  </ul>
                </div>

                {/* CZAS */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Czas przetwarzania danych
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Dane osobowe będą przetwarzane wyłącznie przez okres
                    niezbędny do realizacji celu, dla którego zostały zebrane,
                    oraz zgodnie z obowiązującymi przepisami prawa, w tym
                    przepisami archiwizacyjnymi.
                  </p>
                </div>

                {/* PRAWA */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Prawa osób, których dane dotyczą
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Zgodnie z RODO przysługują Państwu następujące prawa:
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex gap-2">
                      <span className="text-primary">●</span>
                      prawo dostępu do danych osobowych,
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">●</span>
                      prawo do sprostowania danych,
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">●</span>
                      prawo do usunięcia danych,
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">●</span>
                      prawo do ograniczenia przetwarzania,
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">●</span>
                      prawo wniesienia sprzeciwu wobec przetwarzania,
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">●</span>
                      prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych
                      Osobowych.
                    </li>
                  </ul>
                </div>

                {/* PROFILOWANIE */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Profilowanie danych
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Dane zbierane przez serwisy Centrum Rehabilitacji Ostródzka
                    nie są i nie będą poddawane profilowaniu.
                  </p>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Rodo;
