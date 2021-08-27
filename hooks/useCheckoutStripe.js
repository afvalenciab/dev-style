import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const useCheckoutStripe = () => {
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  const fetchCheckoutSession = async ({ product, selectedSize }) => {
    setIsCheckoutLoading(true);

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
      return;
    }

    const stripe = await stripePromise;
    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return [isCheckoutLoading, fetchCheckoutSession];
};

export default useCheckoutStripe;
