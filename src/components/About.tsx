import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Img1 from "/projekt1.png";
import Img2 from "/projekt2.png";
import Img3 from "/projekt3.png";
import Img4 from "/projekt4.png";
import Img5 from "/projekt5.png";
import Img6 from "/projekt6.png";
import { useEffect, useState } from "react";
import { features } from "@/data/features.js";

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

const About = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 overflow-hidden relative">
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  <defs>
                    <pattern
                      id="dots"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle
                        cx="2"
                        cy="2"
                        r="1.5"
                        fill="currentColor"
                        className="text-primary"
                      />
                    </pattern>
                  </defs>
                  <rect fill="url(#dots)" width="100%" height="100%" />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full max-w-[400px] h-[400px] overflow-hidden rounded-xl relative">
                  <div
                    className="flex transition-transform duration-1000 ease-in-out"
                    style={{
                      transform: `translateX(-${current * 100}%)`,
                    }}
                  >
                    {images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Galeria ${index + 1}`}
                        className="w-full flex-shrink-0 h-full object-contain"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 border left-2/4 -translate-x-2/4 bg-card p-6 rounded-2xl shadow-card">
              <div className="text-4xl font-display font-bold gradient-text mb-1">
                Galeria
              </div>
            </div>
          </div>
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              O nas
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ruch zaczyna się u <span className="gradient-text">źródła</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Źródło Ruchu to miejsce, w którym rehabilitacja i terapia
              spotykają się w jednym nurcie. Nazwa naszej placówki symbolizuje
              początek — przestrzeń, w której ciało, układ nerwowy i emocje
              ponownie uczą się współpracy.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Dla nas ruch to nie tylko ćwiczenie mięśni. To komunikacja układu
              nerwowego, stabilność emocjonalna, świadomość ciała i zdolność do
              codziennego funkcjonowania. Dlatego obejmujemy opieką pacjentów od
              narodzin aż do późnej dorosłości, dostosowując terapię do wieku,
              etapu życia i indywidualnych potrzeb.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-2 text-base">
              W ramach stałej współpracy oferujemy:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/zespol">
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg gradient-hero text-primary-foreground font-semibold transition-all hover:shadow-hover">
                Poznaj nasz zespół
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
