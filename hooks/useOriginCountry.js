import { useState } from 'react';

const useOriginCountry = () => {
  const [originCountryState, setOriginCountryState] = useState({
    loading: false,
    error: null,
    data: null,
  });

  const fetchGetOriginCountry = async () => {
    try {
      setOriginCountryState({ ...originCountryState, loading: true });

      const response = await fetch('https://ipapi.co/json');
      const data = await response.json();

      setOriginCountryState({
        loading: false,
        error: null,
        data: ['MXN', 'COP'].includes(data.currency) ? data.currency : 'USD',
      });
    } catch (error) {
      setOriginCountryState({ loading: false, error: error.message });
    }
  };

  return [originCountryState, fetchGetOriginCountry];
};

export default useOriginCountry;
