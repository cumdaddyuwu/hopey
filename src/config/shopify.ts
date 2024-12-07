import { createStorefrontClient } from '@shopify/hydrogen-react';

export const SHOPIFY_CONFIG = {
  shopName: import.meta.env.VITE_SHOPIFY_SHOP_NAME || 'urbancarry',
  storefrontAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN,
  apiVersion: '2024-01',
  merchantId: import.meta.env.VITE_GOOGLE_MERCHANT_ID,
};

export const shopifyClient = createStorefrontClient({
  storeDomain: `https://${SHOPIFY_CONFIG.shopName}.myshopify.com`,
  publicStorefrontToken: SHOPIFY_CONFIG.storefrontAccessToken,
  storefrontApiVersion: SHOPIFY_CONFIG.apiVersion,
});

export const getStorefrontApiUrl = () => shopifyClient.getStorefrontApiUrl();
export const getPrivateTokenHeaders = () => shopifyClient.getPrivateTokenHeaders();
export const getPublicTokenHeaders = () => shopifyClient.getPublicTokenHeaders();