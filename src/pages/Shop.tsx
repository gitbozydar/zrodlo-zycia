import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useRef, useState } from "react";

const SHOP = "0v09i8-d1.myshopify.com";
const TOKEN = "2f9abd564eea700e0ec495acf618c02f";

function getOptions() {
  return {
    product: {
      styles: {
        product: {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            width: "100%",
            margin: "0",
          },

          border: "1px solid rgba(0, 0, 0, 0.06)",
          "border-radius": "1rem",
          padding: "1rem",
          "background-color": "#fff",

          display: "flex",
          "flex-direction": "column",
          "justify-content": "space-between",
          "box-sizing": "border-box",

          "box-shadow": "0 6px 18px rgba(0, 0, 0, 0.06)",
          transition: "all 0.25s ease",
        },

        img: {
          width: "100%",
          height: "240px",
          "border-radius": "1rem",
          "object-fit": "cover",
        },

        imgWrapper: {
          overflow: "hidden",
          aspectRatio: "1 / 1",
          padding: "0",
        },

        title: {
          color: "#111",
          "font-weight": "600",
        },

        price: {
          color: "hsl(175, 45%, 40%)",
          "font-weight": "600",
          "font-size": "1.5rem",
        },

        button: {
          "background-color": "hsl(175, 45%, 40%)",
          color: "#fff",
          "border-radius": "18px",
          width: "100%",

          ":hover": {
            "background-color": "hsl(175, 45%, 32%)",
          },
        },
      },

      buttonDestination: "modal",

      text: {
        button: "Zobacz produkt",
      },
    },

    modalProduct: {
      styles: {
        img: {},
      },
      contents: {
        img: false,
        imgWithCarousel: true,
      },
      text: {
        button: "Dodaj do koszyka",
      },
    },

    productSet: {
      styles: {
        products: {
          display: "grid",
          gap: "40px",
          "margin-left": "0px",

          "@media (min-width: 1000px)": {
            "grid-template-columns": "repeat(4, minmax(0, 1fr))",
          },

          "@media (max-width: 999px)": {
            "grid-template-columns": "repeat(2, minmax(0, 1fr))",
          },

          "@media (max-width: 640px)": {
            "grid-template-columns": "1fr",
          },
        },
      },
    },

    cart: {
      styles: {
        button: {
          "background-color": "hsl(175, 45%, 40%)",
          color: "#fff",
          "border-radius": "18px",

          ":hover": {
            "background-color": "hsl(175, 45%, 32%)",
          },
        },

        subtotal: {
          color: "hsl(175, 45%, 40%)",
          "font-weight": "600",
        },

        title: {
          color: "#111",
          "font-weight": "600",
        },
      },

      text: {
        title: "Koszyk",
        total: "Suma",
        empty: "Koszyk jest pusty",
        button: "Przejdź do płatności",
        notice: "Aby uzupełnić dane, przejdź do płatności.",
      },

      popup: false,
    },

    toggle: {
      styles: {
        toggle: {
          "background-color": "hsl(175, 45%, 40%)",

          ":hover": {
            "background-color": "hsl(175, 45%, 32%)",
          },
        },
      },
    },
  };
}

export default function Shop() {
  const mounted = useRef(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    const scriptId = "shopify-buy-button";
    const containerId = "shopify-container";

    const mount = () => {
      const container = document.getElementById(containerId);
      if (!container) return;

      container.innerHTML = "";

      const ShopifyBuy = (window as any).ShopifyBuy;
      if (!ShopifyBuy) return;

      const client = ShopifyBuy.buildClient({
        domain: SHOP,
        storefrontAccessToken: TOKEN,
      });

      ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent("collection", {
          id: "663849501000",
          node: container,
          moneyFormat: "%7B%7Bamount_with_comma_separator%7D%7D%20z%C5%82",
          options: getOptions(),
        });

        setTimeout(() => setLoading(false), 300);
      });
    };

    if (document.getElementById(scriptId)) {
      mount();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    script.async = true;
    script.onload = mount;

    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4 animate-fade-in">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Dostępne materiały
          </span>

          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Webinary i kursy <span className="gradient-text">online</span>
          </h1>

          <p className="text-muted-foreground text-lg">
            Praktyczne materiały stworzone dla osób, które chcą redukować ból,
            poprawić mobilność i lepiej rozumieć swoje ciało.
          </p>
        </div>

        <div className="w-full px-4 md:px-10 xl:px-20">
          <div className="max-w-7xl mx-auto">
            {loading && (
              <div className="flex justify-center items-center py-24">
                <div className="h-12 w-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
              </div>
            )}

            <div
              id="shopify-container"
              className={`transition-opacity duration-500 ${
                loading ? "opacity-0 h-[650px]" : "opacity-100"
              }`}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
