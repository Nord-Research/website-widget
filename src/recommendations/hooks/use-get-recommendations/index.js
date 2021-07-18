import { useEffect, useState, useCallback } from 'preact/hooks';
import { getRecommendations as getData } from '../../../services/recommendations.service';

const MOCKED_ROWS = [
  {
    order: 1,
    logo: '',
    ticker: 'LCAM3',
    variation: '1,5%',
    currentPrice: 'R$ 25,35',
    maxPrice: 'R$ 30,00',
    recommendation: 'buy',
    alocation: '9,4%',
    status: 'positive',
    recommendation: 'buy',
  },
  {
    order: 2,
    logo: '',
    ticker: 'LCAM3',
    variation: '1,5%',
    currentPrice: 'R$ 25,35',
    maxPrice: 'R$ 30,00',
    recommendation: 'keep',
    alocation: '9,4%',
    status: 'negative',
  },
  {
    order: 3,
    logo: '',
    ticker: 'LCAM3',
    variation: '1,5%',
    currentPrice: 'R$ 25,35',
    maxPrice: 'R$ 30,00',
    recommendation: 'Comprar',
    alocation: '9,4%'
  },
];

export const useGetRecommendations = ({ plans }) => {
  const [wallet, setWallet] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getRecommendations = useCallback((label) => {
    setIsLoading(true);
    getData(label)
      .catch(() => Promise.resolve(MOCKED_ROWS))
      .then((response) => setData(response))
      .finally(() => setIsLoading(false));
  }, []);


  useEffect(() => {
    if (plans && plans.length) {
      setWallet(plans[0]?.id);
    }
  }, [plans]);

  useEffect(() => {
    if (wallet) getRecommendations(wallet)
  }, [wallet]);

  return {
    isLoading,
    wallet,
    setWallet,
    data
  }
};

export default useGetRecommendations;