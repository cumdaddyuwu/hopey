import { useState } from 'react';
import { createCheckout } from '../utils/shopify';
import type { CartItem, CheckoutCreateResponse } from '../utils/shopifyTypes';

export function useShopifyCheckout() {
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  const initiateCheckout = async (items: CartItem[]): Promise<CheckoutCreateResponse | null> => {
    setCheckoutLoading(true);
    setCheckoutError(null);

    try {
      const checkout = await createCheckout(items);
      return checkout;
    } catch (error) {
      setCheckoutError('Failed to create checkout');
      return null;
    } finally {
      setCheckoutLoading(false);
    }
  };

  return {
    initiateCheckout,
    checkoutLoading,
    checkoutError,
  };
}