import { useEffect, useState, useTransition, useCallback } from 'react';
import { getArsPrice } from '../hooks/requests';

const useCalculateArs = () => {
  const [isPendingArs, startTransition] = useTransition();
  const [arsPrice, setArsPrice] = useState();

  const calculateArsPrice = useCallback(
    (amount) => {
      if (isPendingArs || arsPrice === undefined) return;
      return amount * parseFloat(arsPrice);
    },
    [isPendingArs, arsPrice]
  );

  useEffect(() => {
    startTransition(async () => {
      const request = await getArsPrice();
      setArsPrice(request?.buy);
    });
  }, [startTransition]);

  return { isPendingArs, arsPrice, calculateArsPrice };
};

export default useCalculateArs;
