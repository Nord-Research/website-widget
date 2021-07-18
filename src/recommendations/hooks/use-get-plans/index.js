import { useState, useEffect } from 'preact/hooks';
import { getPlans } from '../../../services';

export const useGetPlans = () => {
  const [plans, setPlans] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (() => {
      setIsLoading(true);
      getPlans()
        .then(({ data }) => {
          setPlans(data);
        })
        .finally(() => setIsLoading(true));
    })();
  }, []);

  return {
    plans,
    isLoading,
  };
};

export default useGetPlans;