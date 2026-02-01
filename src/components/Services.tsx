import { Link } from "react-router-dom";
import {
  Baby,
  Heart,
  Footprints,
  Brain,
  Sparkles,
  Users,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Metoda Vojty",
    description:
      "Neurorehabilitacja noworodków, niemowląt i dzieci. Aktywacja wrodzonych wzorców ruchowych.",
    color: "primary",
  },
  {
    icon: Heart,
    title: "NDT-Bobath",
    description:
      "Indywidualna terapia rozwoju ruchowego. Wspomaganie prawidłowego rozwoju.",
    color: "secondary",
  },
  {
    icon: Footprints,
    title: "Terapia stóp 3D",
    description:
      "Trójwymiarowa manualna terapia stóp wg Barbary Zukunft-Huber.",
    color: "accent",
  },
  {
    icon: Sparkles,
    title: "Osteopatia",
    description:
      "Delikatna terapia manualna dla niemowląt, dzieci i dorosłych.",
    color: "primary",
  },
  {
    icon: Brain,
    title: "Neurolog dziecięcy",
    description:
      "Diagnostyka i konsultacje neurologiczne dla najmłodszych pacjentów.",
    color: "secondary",
  },
  {
    icon: Users,
    title: "Psycholog & Joga",
    description:
      "Wsparcie psychologiczne i zajęcia jogi dla dzieci i dorosłych.",
    color: "accent",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Nasze usługi
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Kompleksowa opieka dla{" "}
            <span className="gradient-text">całej rodziny</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Łączymy różne dziedziny, bo wierzymy, że człowiek jest całością.
            Oferujemy szeroką gamę usług rehabilitacyjnych i terapeutycznych.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group p-6 bg-card rounded-xl shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${
                    service.color === "primary"
                      ? "bg-primary/10"
                      : service.color === "secondary"
                        ? "bg-secondary/10"
                        : "bg-accent/20"
                  }`}
                >
                  <Icon
                    className={`h-7 w-7 ${
                      service.color === "primary"
                        ? "text-primary"
                        : service.color === "secondary"
                          ? "text-secondary"
                          : "text-accent"
                    }`}
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/metody"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Zobacz wszystkie metody terapii
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
