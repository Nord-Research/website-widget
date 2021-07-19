import { useEffect, useState, useCallback } from 'preact/hooks';
import { getRecommendations as getData } from '../../../services/recommendations.service';
import { floatToBRL } from '../../../parsers/monetary';

const parseRecommendations = (recommendations = []) =>
  recommendations.map(recommendation => ({
    ...recommendation,
    share: recommendation.share / 100,
    maxPriceBRL: floatToBRL(recommendation.max_price / 100),
    startPriceBRL: floatToBRL(recommendation.start_price / 100),
  }));

export const useGetRecommendations = ({ plans }) => {
  const [wallet, setWallet] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getRecommendations = useCallback((label) => {
    setIsLoading(true);
    getData(label)
      .then(({ data }) => setData(parseRecommendations(data)))
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