import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

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
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">
              Gabinet - Ostródzka
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Ostródzka 119, 03-289 Warszawa
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="tel:+48505185572"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  +48 505 185 572
                </a>
              </div>
            </div>
          </div>

          {/* Gabinet 2 */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">
              Gabinet - Kłopot
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Kłopot 4, 01-066 Warszawa
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="tel:+48505185572"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  +48 505 185 572
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Źródło Ruchu – Centrum Rehabilitacji.
            Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              to="/polityka-prywatnosci"
              className="text-background/50 hover:text-background transition-colors"
            >
              Polityka prywatności
            </Link>
            <Link
              to="/regulamin"
              className="text-background/50 hover:text-background transition-colors"
            >
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
