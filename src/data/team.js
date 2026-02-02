import doctor1 from "/doctor1.jpg";
import doctor2 from "/doctor2.jpg";
import doctor3 from "/doctor3.jpg";
import doctor4 from "/doctor4.jpg";
import doctor5 from "/doctor5.jpg";
import doctor6 from "/doctor6.jpg";

export const team = [
  {
    id: "zanetta-babilinska",
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
      "Dobra Szkoła Ortopodologii (DSO) – Pakiet PIWO, eduPODOLOGIA.pl, styczeń 2026 Kurs specjalistyczny z zakresu diagnostyki stóp i kończyn dolnych oraz projektowania indywidualnych wkładek ortopedycznych",
    ],
    trainings: [],
  },
  {
    id: "mateusz-grodzicki",
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
    id: "katarzyna-hrynyszyn",
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
    id: "magda-kalinowska",
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
    id: "elżbieta-kamińska",
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
    id: "klaudia-kowalska-grodzicka",
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
    id: "grazyna-banaszek",
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
    id: "malgorzata-muzalewska",
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
  {
    id: "beata-bucko",
    name: "Beata Bućko",
    imgPath: null,
    role: "Terapeutka osteopata",
    specializations: ["Osteopatia dziecięca"],
    description:
      "Terapeutka osteopata pracująca z niemowlętami i dziećmi, wykorzystująca bardzo łagodne, bezpieczne techniki manualne dostosowane do wieku i potrzeb małego pacjenta. W swojej pracy kieruje się dokładną obserwacją, szczegółowym wywiadem oraz indywidualnym podejściem. Jej celem jest wsparcie naturalnych zdolności organizmu dziecka do samoregulacji oraz harmonijnego rozwoju.",
    education: [
      "Studia z zakresu fizjoterapii",
      "Szkolenia i kursy z zakresu osteopatii oraz terapii manualnej",
      "Kształcenie w obszarze pracy z niemowlętami i dziećmi",
    ],
    achievements: [
      "Osteopatia dziecięca – techniki manualne dostosowane do niemowląt i dzieci",
      "Terapia napięć mięśniowych i powięziowych",
      "Praca z dziećmi po trudnych porodach i urazach",
      "Wsparcie w problemach trawiennych, kolkach i zaburzeniach snu",
      "Holistyczne podejście do układu nerwowego, mięśniowo-szkieletowego i narządów wewnętrznych",
    ],
  },
];
