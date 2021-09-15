import { useState } from 'react';

const useCheckoutRetrieve = () => {
  const [checkoutRetrieveState, setCheckoutRetrieveState] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const fetchCheckoutRetrieve = async ({ sessionId }) => {
    setCheckoutRetrieveState({ ...checkoutRetrieveState, loading: true });

    try {
      const response = await fetch(`/api/stripe/checkoutSessions/${sessionId}`);
      const data = await response.json();

      if (data.statusCode === 500) {
        setCheckoutRetrieveState({ loading: false, error: data.message });
        return;
      }

      setCheckoutRetrieveState({ data, loading: false, error: null });
    } catch (error) {
      setCheckoutRetrieveState({ loading: false, error });
    }
  };

  return [checkoutRetrieveState, fetchCheckoutRetrieve];
};

export default useCheckoutRetrieve;
