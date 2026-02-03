import { useState } from "react";

const CookiesBanner = () => {
  const [visible, setVisible] = useState(
    !localStorage.getItem("cookiesAccepted"),
  );

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl rounded-xl bg-card shadow-card border p-4 flex flex-col sm:flex-row items-center gap-4">
      <p className="text-sm text-muted-foreground">
        Serwis wykorzystuje wyłącznie niezbędne pliki cookies w celu
        prawidłowego działania strony (np. pobierania plików PDF). Nie stosujemy
        cookies analitycznych ani marketingowych.
      </p>
      <button
        onClick={acceptCookies}
        className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
      >
        OK
      </button>
    </div>
  );
};

export default CookiesBanner;
