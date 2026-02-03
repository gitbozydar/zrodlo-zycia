import { Link } from "react-router-dom";
import { MapPin, Phone, Facebook, Instagram } from "lucide-react";
import logo from "/new-logo.png";
import { locations } from "@/data/locations.js";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <img src={logo} alt="Źródło Ruchu" className="h-16 w-auto mb-6" />
            <p className="text-background/70 text-sm leading-relaxed">
              Źródło Ruchu Twoje miejsce.
            </p>
            <p className="text-background/70 text-sm leading-relaxed">
              Wiele specjalizacji.
            </p>
            <p className="text-background/70 text-sm leading-relaxed">
              Ruch od narodzin do starości.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/rehabilitacjavojta"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/centrum_rehabilitacji_warszawa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4 text-background/70 hover:text-background transition-colors text-sm">
              <Link to={"/rodo"}>Polityka prywatności.</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">
              Nawigacja
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                Strona główna
              </Link>
              <Link
                to="/metody"
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                Metody terapii
              </Link>
              <Link
                to="/zespol"
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                Zespół
              </Link>
              <Link
                to="/cennik"
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                Cennik
              </Link>
              <Link
                to="/kontakt"
                className="text-background/70 hover:text-background transition-colors text-sm"
              >
                Kontakt
              </Link>
            </nav>
          </div>
          {locations.map(({ name, address, phone }, index) => (
            <div key={index}>
              <h4 className="font-display text-lg font-semibold mb-6">
                {name}
              </h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-background/70 text-sm">{address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent shrink-0" />
                  <a
                    href="tel:+48505185572"
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
