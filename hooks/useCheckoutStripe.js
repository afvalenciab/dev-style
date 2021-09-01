import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const useCheckoutStripe = () => {
  const [checkoutState, setCheckoutState] = useState({ loading: false, error: null });

  const fetchCheckoutSession = async ({ product, selectedSize }) => {
    setCheckoutState({ ...checkoutState, loading: true });

    try {
      const response = await fetch('/api/stripe/checkoutSessions', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product, selectedSize }),
      });

      const data = await response.json();

      if (data.statusCode === 500) {
        setCheckoutState({ loading: false, error: data.message });
        return;
      }

      const stripe = await stripePromise;
      stripe.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      setCheckoutState({ loading: false, error });
    }
  };

  return [checkoutState, fetchCheckoutSession];
};

export default useCheckoutStripe;
