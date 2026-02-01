import { CheckCircle, Gift } from "lucide-react";
import newsletter from "@/assets/newsletter.pdf";
import { useState } from "react";

const Newsletter = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = newsletter;
    link.download = "newsletter.pdf";
    link.click();

    setDownloaded(true);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl gradient-hero flex items-center justify-center">
            <Gift className="h-10 w-10 text-primary-foreground" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Darmowy przewodnik dla{" "}
            <span className="gradient-text">młodych rodziców</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              "Porady o leżeniu na brzuszku",
              "Techniki kangurowania",
              "Wskazówki pielęgnacyjne",
            ].map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <CheckCircle className="h-5 w-5 text-primary" />
                {benefit}
              </div>
            ))}
          </div>
          <div className="flex justify-center min-h-[56px]">
            {!downloaded ? (
              <button
                onClick={handleDownload}
                className="h-12 px-6 rounded-lg gradient-hero text-primary-foreground font-semibold transition-all duration-300 hover:shadow-hover hover:scale-105"
              >
                Pobierz za darmo
              </button>
            ) : (
              <div className="flex items-center gap-2 text-primary animate-fade-in">
                <CheckCircle className="w-7 h-7 animate-pop text-primary" />
                <span className="font-semibold">Pobrano!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
