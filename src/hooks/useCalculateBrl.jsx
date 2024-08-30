import { useEffect, useState, useTransition } from 'react';
import { getBrlCotization } from '../hooks/requests';

const useCalculateBrl = (amount) => {
  const [isPendingBrl, startTransition] = useTransition();
  const [prices, setPrices] = useState();

  useEffect(() => {
    if (!amount || isNaN(parseFloat(amount))) return;

    const debounce = setTimeout(() => {
      startTransition(async () => {
        const request = await getBrlCotization(amount);
        setPrices(request);
      });
    }, 500);

    return () => clearTimeout(debounce);
  }, [amount, startTransition]);

  return { isPendingBrl, prices };
};

export default useCalculateBrl;
