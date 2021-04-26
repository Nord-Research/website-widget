import { useEffect, useMemo, useState } from "preact/hooks";
import { getIndicators } from '../../services/indicators.service';


export const useIndicators = (props) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const isEmpty = !isLoading && !data.indicators;

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const indicators = await getIndicators(props.labels);

        setData({ indicators });
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return useMemo(() => ({ ...data, isEmpty, isLoading }), [data, isEmpty, isLoading]);
};

export default useIndicators;