import {
  Baby,
  Heart,
  Footprints,
  Sparkles,
  Stethoscope,
  Activity,
} from "lucide-react";

export const methods = [
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
