import React from 'react';
import { useShopifyProducts } from '../hooks/useShopifyProducts';
import { ProductCard } from './ProductCard';

export function ShopifyProductList() {
  const { products, loading, error } = useShopifyProducts();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#007bff]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">
        {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.images.edges[0]?.node.url || ''}
          name={product.title}
          price={`$${parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}`}
          description={product.description}
        />
      ))}
    </div>
  );
}