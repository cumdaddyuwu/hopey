import { useCallback } from 'react';
import { shopifyClient } from '../config/shopify';

export function useShopify() {
  const createCheckout = useCallback(async (items: any[]) => {
    const lineItems = items.map(item => ({
      variantId: item.id,
      quantity: item.quantity,
    }));

    try {
      const response = await fetch(shopifyClient.getStorefrontApiUrl(), {
        method: 'POST',
        headers: {
          ...shopifyClient.getPublicTokenHeaders(),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation createCheckout($input: CheckoutCreateInput!) {
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
          `,
          variables: {
            input: {
              lineItems,
            },
          },
        }),
      });

      const { data } = await response.json();
      return data.checkoutCreate.checkout;
    } catch (error) {
      console.error('Error creating checkout:', error);
      throw error;
    }
  }, []);

  const processGooglePayPayment = useCallback(async (paymentData: any, checkoutId: string) => {
    try {
      const response = await fetch('/api/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentData,
          checkoutId,
        }),
      });

      if (!response.ok) {
        throw new Error('Payment processing failed');
      }

      return await response.json();
    } catch (error) {
      console.error('Error processing payment:', error);
      throw error;
    }
  }, []);

  return {
    createCheckout,
    processGooglePayPayment,
  };
}