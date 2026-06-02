import { useEffect, useState } from "react";
import { getProducts } from "@/lib/getProducts";

export function useProducts() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return products;
}
