import { useEffect, useState } from "react";

const CookiesBanner = () => {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("cookiesAccepted");

    if (!saved) {
      setVisible(true);
      setAccepted(false);
    }
  }, []);

  const saveChoice = () => {
    if (accepted) {
      localStorage.setItem("cookiesAccepted", "true");
    } else {
      localStorage.removeItem("cookiesAccepted");
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-3 sm:px-0">
      <div className="mx-auto max-w-2xl rounded-2xl bg-card border shadow-xl p-4 sm:p-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        {/* TEXT */}
        <div className="flex items-start gap-3 flex-1">
          <div className="text-2xl">🍪</div>

          <div>
            <h3 className="text-sm font-semibold">Ustawienia cookies</h3>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Używamy tylko niezbędnych plików cookies do działania strony.
              Możesz zdecydować czy je akceptujesz.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-center gap-6 sm:gap-4 w-full sm:w-auto">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
              className="sr-only peer"
            />

            <div className="w-11 h-6 bg-muted rounded-full peer-checked:bg-primary transition"></div>

            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
          </label>

          <button
            onClick={saveChoice}
            className="w-full sm: min-w-[120px] px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 active:scale-[0.98] transition text-center"
          >
            Zapisz wybór
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiesBanner;
