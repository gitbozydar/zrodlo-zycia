import { ArrowRight, Heart, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import HomeImg from "/bobas.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-background" />

      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 opacity-0 animate-fade-in">
              <Heart className="h-4 w-4" />
              Centrum Rehabilitacji w Warszawie
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in [animation-delay:100ms]">
              <span className="gradient-text">Źródło Ruchu</span>
              <br />
              <span className="text-foreground/90">dla całej rodziny</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 opacity-0 animate-fade-in [animation-delay:200ms]">
              Centrum Rehabilitacji i terapii dzieci oraz dorosłych w Warszawie
              – zadbamy o zdrowie całej rodziny z empatią i skutecznością!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-in [animation-delay:300ms]">
              <Link to={"/Kontakt"}>
                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg gradient-hero text-primary-foreground font-semibold group transition-all hover:shadow-hover">
                  Umów wizytę
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link to={"/Zespol"}>
                <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary/30 text-foreground font-medium hover:bg-primary/5 transition-colors">
                  Poznaj nas
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 opacity-0 animate-fade-in [animation-delay:400ms]">
              <div className="text-center p-4 rounded-xl bg-card shadow-soft">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  30+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Lat doświadczenia
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card shadow-soft">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  8+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Specjalistów
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card shadow-soft">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  100+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Szczęśliwych pacjentów
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden gradient-hero flex items-center justify-center">
                <img
                  src={HomeImg}
                  alt="bobas"
                  className="w-full h-full object-cover opacity-0 animate-fade-in [animation-delay:400ms]"
                />
              </div>
              <div className="absolute -top-8 -left-8 p-4 bg-card rounded-2xl shadow-card opacity-0 animate-fade-in [animation-delay:500ms]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Metoda Vojty
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Od urodzenia
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 p-4 bg-card rounded-2xl shadow-card opacity-0 animate-fade-in [animation-delay:600ms]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Dla całej rodziny
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Dzieci i dorośli
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-16 p-4 bg-card rounded-2xl shadow-card opacity-0 animate-fade-in [animation-delay:700ms]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/20 rounded-lg">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Certyfikowani
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Terapeuci
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
