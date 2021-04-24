import { useEffect, useMemo, useState } from "preact/hooks";
import { getIndicators } from '../../services/indicators.service';


export const useIndicators = (props) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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

  return useMemo(() => ({ ...data, isLoading }), [data, isLoading]);
};

export default useIndicators;