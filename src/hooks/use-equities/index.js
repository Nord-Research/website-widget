import { useEffect, useMemo, useState } from "preact/hooks";
import { getEquities } from '../../services/equities.service';

const sortByDaysPercentageDiff = (a, b) => b.daysPercentageDiff - a.daysPercentageDiff;

const isValued = equitie => equitie.price - equitie.base >= 0 ? true : false;

const isDevalued = equitie => equitie.price - equitie.base < 0 ? true : false;

const getHighestHighs = equities => equities.filter(isValued).sort(sortByDaysPercentageDiff).slice(0, 4);

const getBiggestLosses = equities => equities.filter(isDevalued).sort(sortByDaysPercentageDiff).reverse().slice(0, 4);

export const useEquities = () => {
  const [equities, setEquities] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const isEmpty = !isLoading && (!equities.highs || !equities.losses);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const equities = await getEquities();
        const highs = getHighestHighs(equities);
        const losses = getBiggestLosses(equities);

        setEquities({ highs, losses });
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false)
      }
    })();
  }, []);

  return useMemo(() => ({ equities, isLoading, isEmpty }), [equities, isLoading, isEmpty]);
};

export default useEquities;