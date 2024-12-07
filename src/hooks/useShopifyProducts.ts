import { useState, useEffect } from 'react';
import { fetchProducts } from '../utils/shopify';
import type { ShopifyProduct } from '../utils/shopifyTypes';

export function useShopifyProducts() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productData = await fetchProducts();
        setProducts(productData.map((edge: any) => edge.node));
        setLoading(false);
      } catch (err) {
        setError('Failed to load products');
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { products, loading, error };
}