import { useState, useEffect } from 'preact/hooks';
import { getPlans } from '../../../services';

export const useGetPlans = () => {
  const [plans, setPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (() => {
      setIsLoading(true);
      getPlans()
        .then(({ data }) => {
          setPlans(data);
        })
        .finally(() => setIsLoading(false));
    })();
  }, []);

  return {
    plans,
    isLoading,
  };
};

export default useGetPlans;