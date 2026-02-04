import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const UstawaKamilka = () => {
  return (
    <>
      <Header />

      <main className="py-24">
        <div className="container mx-auto px-4 animate-fade-in">
          <div className="mx-auto max-w-4xl rounded-2xl border bg-card p-6 md:p-10 shadow-card space-y-8">
            <header className="space-y-2 text-center">
              <p className="text-sm text-muted-foreground">
                Do Standardów Ochrony Małoletnich
              </p>
              <p className="text-sm text-muted-foreground">
                &quot;REH - MAS&quot; Żanetta Babilińska-Grodzicka
              </p>

              <h1 className="text-2xl md:text-3xl font-bold">
                Standardy Ochrony Małoletnich
              </h1>
              <h2 className="text-lg md:text-xl font-semibold">
                w &quot;REH - MAS&quot; Żanetta Babilińska-Grodzicka
              </h2>
              <p className="text-sm text-muted-foreground italic">
                (wersja dla dzieci)
              </p>
            </header>
            <section className="space-y-4">
              <p>
                Standardy Ochrony Małoletnich są dokumentem, który został
                stworzony po to, by zapewnić, Wam, dzieciom-pacjentom godność i
                szacunek oraz by chronić Was przed krzywdzeniem. Szczególnie
                zależy nam żebyście na wizycie u fizjoterapeuty - pani Żanetty
                Babilińskiej-Grodzickiej w &quot;REH - MAS&quot; czuli się
                bezpiecznie i komfortowo.
              </p>
            </section>
            <section className="space-y-3">
              <h3 className="text-xl font-semibold">Pojęcia i definicje:</h3>
              <p>
                Poniżej wytłumaczyliśmy podstawowe pojęcia, żeby łatwiej było
                zrozumieć ich znaczenie:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>1) Dziecko</strong> – każdy, kto nie ukończył 18 lat;
                </li>
                <li>
                  <strong>2) Krzywdzenie</strong> – zrobienie czegoś chcący lub
                  niechcący przez osobę dorosłą lub inne dziecko, które
                  negatywnie, czyli źle wpływa na Twój rozwój;
                </li>
                <li>
                  <strong>3) Interwencja</strong> – inaczej działanie, tutaj
                  oznacza reakcję na objawy krzywdzenia i podjęcie kroków celem
                  zabezpieczenia Dziecka.
                </li>
              </ul>

              <p>Standardy Ochrony Małoletnich podzieliliśmy na części:</p>
            </section>
            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-center">
                I. Rozpoznawanie krzywdzenia dziecka
              </h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Każdy członek personelu &quot;REH - MAS&quot; Żanetta
                  Babilińska-Grodzicka musi reagować, gdy Tobie lub innemu
                  dziecku dzieje się krzywda.
                </li>
                <li>
                  Istnieją różne formy krzywdzenia:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      <strong>1) Przemoc fizyczna</strong> jest wtedy, gdy na
                      przykład ktoś Cię popycha, uderza, szczypie, kopie lub
                      rzuca w Ciebie przedmiotami;
                    </li>
                    <li>
                      <strong>2) Przemoc psychiczna</strong> to na przykład
                      obrażanie, ośmieszanie, wyzywanie, wyśmiewanie;
                    </li>
                    <li>
                      <strong>3) Wykorzystanie seksualne</strong> to np.
                      zmuszanie do oglądania nagich osób, robienie zdjęć lub
                      nagrywanie dzieci bez ubrań, zmuszanie do dotykania miejsc
                      intymnych innych osób;
                    </li>
                    <li>
                      <strong>4) Zaniedbywanie</strong> to np. niezapewnienie
                      jedzenia, odpowiedniego ubrania lub środków do mycia,
                      pozostawianie dzieci na dworze bez opieki dorosłych, nie
                      wysyłanie dziecka do szkoły lub niechodzenie do lekarza.
                    </li>
                  </ul>
                </li>
                <li>
                  Jeśli doświadczasz jakiejkolwiek z powyższych form
                  krzywdzenia, powiedz o tym komuś z naszego personelu. Pomożemy
                  Ci uruchamiając odpowiednią procedurę.
                </li>
              </ol>
            </section>
            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-center">
                II. Podjęcie działań
              </h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Jeśli coś Cię niepokoi, nie czujesz się bezpiecznie i nam o
                  tym mówisz, podejmujemy wtedy działanie, czyli interwencję.
                  Interwencja jest też podejmowana, gdy sami zauważymy, że coś
                  nie jest bezpieczne. Najważniejsze jest Twoje dobro.
                </li>
                <li>
                  Czasami możemy wezwać Policję, wypełnić specjalny dokument lub
                  napisać pismo do Sądu Rodzinnego, aby zapewnić Ci
                  bezpieczeństwo.
                </li>
                <li>
                  Pani Żanetta Babilińska-Grodzicka dba o przestrzeganie tych
                  Standardów, udziela informacji innym i zbiera wszystkie dane o
                  podejmowanych działaniach na rzecz bezpieczeństwa dzieci.
                </li>
              </ol>
            </section>
            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-center">
                III. Zasady bezpiecznych relacji
              </h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Dla Twojego komfortu i bezpieczeństwa spisaliśmy kilka zasad,
                  które zobowiązaliśmy się przestrzegać podczas pracy z dziećmi
                  – „Zasady bezpiecznych relacji”.
                </li>
                <li>
                  Określają, w jaki sposób Cię traktować z szacunkiem i
                  zapewniać bezpieczeństwo. Napisaliśmy też czego nie wolno
                  robić – np. krzyczeć, obrażać, popychać.
                </li>
                <li>
                  Zasady są wywieszone w poczekalni przed gabinetem i dostępne
                  na stronie internetowej.
                </li>
              </ol>
            </section>
            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-center">
                IV. Bezpieczne korzystanie z Internetu i urządzeń
                elektronicznych
              </h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Masz możliwość skorzystania z sieci Wi-Fi po wpisaniu loginu i
                  hasła.
                </li>
                <li>
                  Strony z niebezpiecznymi treściami są zablokowane. Jeśli
                  trafisz na niebezpieczną stronę, powiedz nam.
                </li>
                <li>
                  Możesz korzystać z własnych urządzeń, ale nie przeszkadzaj
                  innym.
                </li>
                <li>
                  Jeśli zobaczymy niebezpieczne treści, możemy porozmawiać z
                  Twoimi rodzicami/opiekunami.
                </li>
                <li>
                  Nikt nie może Cię nagrywać bez zgody, Ty też nie nagrywaj bez
                  zgody innych.
                </li>
              </ol>
            </section>
            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-center">
                V. Ocenianie Standardów Ochrony Małoletnich
              </h3>
              <p>
                Co najmniej raz na dwa lata personel przegląda wszystkie
                dokumenty, w tym te Standardy i Zasady bezpiecznych relacji.
                Jeśli zajdzie potrzeba zmian, wprowadzamy je.
              </p>
            </section>
            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-center">
                VI. Udostępnianie Standardów Ochrony Małoletnich
              </h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Standardy Ochrony Małoletnich są dostępne w wersji papierowej
                  w poczekalni i na stronie{" "}
                  <Link
                    to="https://www.rehabilitacjavojta.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-4"
                  >
                    www.rehabilitacjavojta.pl
                  </Link>
                  , aby każdy mógł je przeczytać w dowolnym momencie.
                </li>
                <li>
                  Standardy Ochrony Małoletnich oraz Zasady bezpiecznych relacji
                  są też opracowane w wersji skróconej, przeznaczonej dla
                  dzieci.
                </li>
              </ol>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default UstawaKamilka;
