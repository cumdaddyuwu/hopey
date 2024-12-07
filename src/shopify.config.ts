import { ApiVersion } from '@shopify/shopify-api';

export const shopifyConfig = {
  apiKey: process.env.SHOPIFY_API_KEY || '',
  apiSecretKey: process.env.SHOPIFY_API_SECRET || '',
  scopes: [
    'write_products',
    'read_products',
    'write_inventory',
    'read_inventory',
    'write_orders',
    'read_orders'
  ],
  hostName: process.env.SHOPIFY_APP_URL || '',
  apiVersion: ApiVersion.January24,
  isEmbeddedApp: true,
  sessionStorage: new Map(),
};