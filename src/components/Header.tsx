import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Strona główna", path: "/" },
    { name: "Metody terapii", path: "/metody" },
    { name: "Zespół", path: "/zespol" },
    { name: "Cennik", path: "/cennik" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Źródło Ruchu" className="h-14 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+48505185572"
              className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              +48 505 185 572
            </a>
            <Link to={"/Kontakt"}>
              <button className="px-4 py-2 rounded-lg gradient-hero text-primary-foreground font-medium transition-all hover:shadow-hover">
                Umów wizytę
              </button>
            </Link>
          </div>
          <button
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border opacity-0 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base font-medium py-2 transition-colors ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <a
                  href="tel:+48505185572"
                  className="flex items-center gap-2 text-base font-medium text-primary mb-4"
                >
                  <Phone className="h-5 w-5" />
                  +48 505 185 572
                </a>
                <Link to={"/Kontakt"}>
                  <button className="w-full py-3 rounded-lg gradient-hero text-primary-foreground font-medium">
                    Umów wizytę
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
