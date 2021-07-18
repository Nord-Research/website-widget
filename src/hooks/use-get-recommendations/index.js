import { useEffect, useState, useCallback } from 'preact/hooks';
import { getRecommendations as getData } from '../../services/recommendations.service';

export const useGetRecommendations = () => {
  const [filter, setFilter] = useState('small-caps');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getRecommendations = useCallback((label) => {
    setIsLoading(true);
    getData(label).finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    getRecommendations(filter)
  }, [filter]);

  return {
    isLoading,
    filter,
    setFilter,
    data
  }
};

export default useGetRecommendations;