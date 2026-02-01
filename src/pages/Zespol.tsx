import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, UserRound } from "lucide-react";
import doctor1 from "/doctor1.jpg";
import doctor2 from "/doctor2.jpg";
import doctor3 from "/doctor3.jpg";
import doctor4 from "/doctor4.jpg";
import doctor5 from "/doctor5.jpg";
import doctor6 from "/doctor6.jpg";

const team = [
  {
    name: "Żanetta Babilińska-Grodzicka",
    imgPath: doctor1,
    role: "Fizjoterapeutka, właścicielka",
    specializations: [
      "Metoda Vojty",
      "Terapia stóp 3D",
      "NDT-Bobath",
      "Rehabilitacja niemowląt",
    ],
    description:
      "Magister fizjoterapii z wieloletnim doświadczeniem. Certyfikowana terapeutka metody Vojty (Internationale Vojta Gesellschaft e.V.) i trójwymiarowej terapii stóp wg Barbary Zukunft-Huber. Specjalizuje się w rehabilitacji niemowląt, dzieci i młodzieży.",
    education: [
      "Mazowiecka Uczelnia Medyczna – Magister (2021)",
      "Wyższa Szkoła Mazowiecka – Licencjat Fizjoterapii (2007-2010)",
      "Medyczne Studium Zawodowe – Technik Fizjoterapii (1994-1997)",
    ],
    achievements: [
      "Absolwentka szkolenia Internationale Vojta Gesellschaft e.V.",
      "Certyfikat trójwymiarowej terapii manualnej stóp",
      "Liczne publikacje naukowe",
    ],
  },
  {
    name: "Mateusz Grodzicki",
    imgPath: doctor2,
    role: "Fizjoterapeuta",
    specializations: [
      "Fizjoterapia dorosłych",
      "Wkładki IGLI",
      "Osteopatia",
      "Terapia manualna",
    ],
    description:
      "Absolwent fizjoterapii Wyższej Szkoły Rehabilitacji w Warszawie. Pracuje z pacjentami z bólami przewlekłymi, schorzeniami ortopedycznymi, kontuzjami sportowymi oraz wadami postawy. Zwolennik treningu medycznego i funkcjonalnego.",
    education: [
      "Still Academy of Osteopathy (2022-2026)",
      "Studia podyplomowe 'Fizjoterapia w sporcie' (2021-2022)",
      "Wyższa Szkoła Rehabilitacji – Magister (2016-2021)",
    ],
    achievements: [
      "Igłoterapia sucha",
      "HVLA manipulacje krótkodźwigniowe",
      "Nowoczesna Rehabilitacja Ortopedyczna",
    ],
  },
  {
    name: "Katarzyna Hrynyszyn",
    imgPath: doctor3,
    role: "Fizjoterapeutka",
    specializations: [
      "Metoda Vojty",
      "NDT-Bobath",
      "Terapia stóp 3D",
      "Kinesiotaping",
    ],
    description:
      "Magister fizjoterapii. Certyfikowana terapeutka koncepcji NDT-Bobath oraz terapii Vojty. Posiada wieloletnie doświadczenie w pracy w klinice neurologii oraz Instytucie Matki i Dziecka. Licencjonowana nauczycielka trójwymiarowej terapii stóp.",
    education: [
      "Absolwentka szkolenia Vojty (Internationale Vojta Gesellschaft e.V.)",
      "Certyfikat NDT-Bobath",
      "Licencja nauczycielska terapii stóp wg Zukunft-Huber",
    ],
    achievements: [
      "Możliwość prowadzenia terapii w języku niemieckim",
      "Liczne asystentury u Barbary Zukunft-Huber",
      "Prowadzenie szkoleń dla fizjoterapeutów",
    ],
  },
  {
    name: "Magda Kalinowska",
    imgPath: doctor4,
    role: "Fizjoterapeutka, terapeuta SI",
    specializations: [
      "Integracja sensoryczna",
      "Rehabilitacja dzieci",
      "Praca z rodzicami",
    ],
    description:
      "Magister fizjoterapii i terapeuta integracji sensorycznej. Ukończyła Warszawski Uniwersytet Medyczny i Centrum Integracji Sensorycznej. Pracuje z dziećmi i ich rodzicami w oparciu o bezpieczną relację i dobrą komunikację.",
    education: [
      "Warszawski Uniwersytet Medyczny",
      "Centrum Integracji Sensorycznej",
    ],
    achievements: [
      "Specjalizacja w pracy z najmłodszymi pacjentami",
      "Podejście oparte na relacji i komunikacji",
    ],
  },
  {
    name: "Elżbieta Kamińska",
    imgPath: null,
    role: "Neurologopeda",
    specializations: [
      "Metoda Padovan",
      "Johansen IAS",
      "Integracja sensoryczna",
      "Terapia czaszkowo-krzyżowa",
    ],
    description:
      "Neurologopeda i pedagog specjalny. Międzynarodowy certyfikowany terapeuta Metody Neurofunkcjonalnej Reorganizacji Padovan. Pracuje z pacjentami wymagającymi wsparcia w obszarze rozwoju mowy i języka.",
    education: [
      "Certyfikat Metody Padovan",
      "Certyfikat Johansen IAS",
      "Integracja Sensoryczna I° i II°",
    ],
    achievements: [
      "Terapeuta Metody Czaszkowo-Krzyżowej (moduły I-VII)",
      "Terapeuta konduktywnej pracy z ciałem SANJO",
      "Terapeuta ręki",
    ],
  },
  {
    name: "Klaudia Kowalska-Grodzicka",
    imgPath: null,
    role: "Psycholog, instruktor jogi",
    specializations: [
      "Doradztwo psychologiczne",
      "Joga",
      "Techniki relaksacyjne",
      "Wsparcie w kryzysie",
    ],
    description:
      "Koncentruje się na promowaniu dobrostanu jednostki. Zajmuje się identyfikowaniem przekonań kluczowych oraz myśli automatycznych, a następnie ich modyfikacją. Uczy samodzielnego monitorowania stanu emocjonalnego.",
    education: [
      "Studia podyplomowe 'Relaksacja i joga' AWF (2024-2025)",
      "Mgr Psychologia kliniczna SWPS (2020-2024)",
      "Mgr Etnologia i antropologia kultury UW (2015-2020)",
    ],
    achievements: [
      "Metody relaksacyjne Jacobsona i Shultza",
      "Techniki wizualizacji",
      "Wsparcie w sytuacjach kryzysowych",
    ],
  },
  {
    name: "dr n. med. Grażyna Banaszek",
    imgPath: doctor5,
    role: "Neurolog dziecięcy",
    specializations: [
      "Neurologia dziecięca",
      "Zaburzenia neurologiczne",
      "Rozwój neurologicznego dzieci",
    ],
    description:
      "Lekarz z wieloletnim doświadczeniem, neurolog dziecięcy od 1984 roku. Specjalizuje się w badaniu dzieci z różnorodnymi problemami ze strony układu nerwowego. Łączy wiedzę kliniczną z wieloletnią praktyką, stawiając trafne diagnozy i wyznaczając skuteczne kierunki leczenia.",
    education: [
      "Studia medyczne – lekarz (1972)",
      "Specjalizacja z neurologii dziecięcej (1984)",
    ],
    achievements: [
      "Ponad 50 lat doświadczenia lekarskiego",
      "Wieloletnia praktyka w diagnostyce neurologicznej dzieci",
      "Stałe podnoszenie kwalifikacji zawodowych",
    ],
  },
  {
    name: "Małgorzata Muzalewska",
    imgPath: doctor6,
    role: "Fizjoterapeutka",
    specializations: [
      "Neurorehabilitacja",
      "Terapia funkcjonalna",
      "Praca z pacjentami neurologicznymi",
      "Terapia spastyczności",
    ],
    description:
      "Fizjoterapeutka z pasją do pracy z pacjentami neurologicznymi. W swojej pracy kieruje się dokładną obserwacją, szczegółowym wywiadem oraz indywidualnym podejściem do każdego pacjenta. Wierzy, że skuteczna terapia to suma wielu umiejętności i konsekwentnych, małych kroków.",
    education: [
      "Studia fizjoterapeutyczne",
      "Szkolenia z zakresu neurorehabilitacji i terapii manualnej",
    ],
    achievements: [
      "Szkolenie z metody Vojty (od lutego 2025)",
      "PNF, terapia bazalna, Dry Needling",
      "Neurorehabilitacja w fazie ostrej i funkcjonalnej",
      "Terapia spastyczności (także osteopatyczna)",
      "Terapia manualna, rozluźnianie mięśniowo-powięziowe",
      "Dynamic Tape",
      "Szkolenia z wykorzystania toksyny botulinowej w fizjoterapii",
    ],
  },
];

const Zespol = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Nasz zespół
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Poznaj naszych <span className="gradient-text">specjalistów</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Nasz zespół to certyfikowani terapeuci z wieloletnim
              doświadczeniem, którzy z pasją i oddaniem pomagają pacjentom w
              każdym wieku.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map(
              (
                {
                  name,
                  role,
                  specializations,
                  description,
                  education,
                  achievements,
                  imgPath,
                },
                index,
              ) => (
                <Card
                  key={name}
                  className="opacity-0 animate-fade-in bg-card border-0 shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in-up overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="h-24 gradient-hero relative">
                      <div className="absolute -bottom-10 left-6">
                        <div className="w-24 h-28 rounded-xl bg-card shadow-card overflow-hidden">
                          {imgPath ? (
                            <img
                              src={imgPath}
                              alt={name}
                              className="w-full h-full object-cover object-top"
                            />
                          ) : (
                            <UserRound className="w-full h-full flex items-center justify-center text-muted-foreground text-xs" />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="pt-14 px-6 pb-6">
                      <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                        {name}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-4">
                        {role}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {specializations.slice(0, 3).map((spec) => (
                          <Badge
                            key={spec}
                            variant="secondary"
                            className="text-xs bg-primary/10 text-primary border-0"
                          >
                            {spec}
                          </Badge>
                        ))}
                        {specializations.length > 3 && (
                          <Badge
                            variant="secondary"
                            className="text-xs bg-muted text-muted-foreground border-0"
                          >
                            +{specializations.length - 3}
                          </Badge>
                        )}
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                        {description}
                      </p>
                      <div className="pt-4 border-t border-border space-y-2">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <BookOpen className="h-4 w-4 text-secondary" />
                          <span className="line-clamp-1">{education[0]}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Award className="h-4 w-4 text-accent" />
                          <span className="line-clamp-1">
                            {achievements[0]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Zespol;
