import { createStorefrontClient, StorefrontClient } from '@shopify/shopify-api';

let storefrontClient: StorefrontClient | null = null;

export const initializeShopify = () => {
  if (!storefrontClient) {
    storefrontClient = createStorefrontClient({
      privateStorefrontToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN,
      storeDomain: `https://${import.meta.env.VITE_SHOPIFY_SHOP_NAME}.myshopify.com`,
      apiVersion: '2024-01',
    });
  }
  return storefrontClient;
};

export const fetchProducts = async () => {
  const client = initializeShopify();
  
  const query = `
    query Products {
      products(first: 10) {
        edges {
          node {
            id
            title
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await client.query({ data: { query } });
    return response.body.data.products.edges;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const createCheckout = async (items: any[]) => {
  const client = initializeShopify();
  
  const query = `
    mutation checkoutCreate($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout {
          id
          webUrl
        }
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }
  `;

  const variables = {
    input: {
      lineItems: items.map(item => ({
        variantId: item.id,
        quantity: item.quantity,
      })),
    },
  };

  try {
    const response = await client.query({ data: { query, variables } });
    return response.body.data.checkoutCreate.checkout;
  } catch (error) {
    console.error('Error creating checkout:', error);
    throw error;
  }
};