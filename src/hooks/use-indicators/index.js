import { useEffect, useMemo, useState } from "preact/hooks";
import { getIndicators } from '../../services/indicators.service';


export const useIndicators = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const indicators = await getIndicators();

        setData({ indicators });
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return useMemo(() => data, [data]);
};

export default useIndicators;