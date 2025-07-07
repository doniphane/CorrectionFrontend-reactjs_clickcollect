import ProductCard from "@/components/shared/ProductCard"
import { MessageLoading } from "@/components/ui/message-loading";
import api from "@/lib/api";
import type Product from "@/types/Product";
import { useEffect, useState } from "react";

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        // Vérifie bien si la propriété existe et est un tableau
        const data = response.data['member'];
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]); // fallback sécurité
          setError("Aucun produit trouvé.");
        }
      } catch (e) {
        setError('Impossible de charger les produits.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {loading ? (
        <MessageLoading />
      ) : error ? (
        <div className="text-red-500 font-semibold">{error}</div>
      ) : (
        Array.isArray(products) && products.length > 0 ? (
          products.map((product, index) =>
            <ProductCard key={index} product={product} />
          )
        ) : (
          <div className="text-gray-500">Aucun produit à afficher.</div>
        )
      )}
    </div>
  )
}

export default HomePage
