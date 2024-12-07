export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string;
      };
    }>;
  };
}

export interface CheckoutCreateResponse {
  id: string;
  webUrl: string;
}

export interface CartItem {
  variantId: string;
  quantity: number;
}