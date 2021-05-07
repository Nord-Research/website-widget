import { useEffect, useMemo, useState } from "preact/hooks";
import { getEquities } from '../../services/equities.service';
import { getPercentageDecrease, getPercentageIncrease } from '../../utils/price.utils';

const getIncrease = (equitie) => ({
  ...equitie,
  daysPercentageDiff: getPercentageIncrease(equitie.base, equitie.price),
});

const getDecrease = (equitie) => ({
  ...equitie,
  daysPercentageDiff: getPercentageDecrease(equitie.base, equitie.price),
});

const sortByDaysPercentageDiff = (a, b) => b.daysPercentageDiff - a.daysPercentageDiff;

const isValued = equitie => Boolean(equitie.price >= equitie.base);

const isDevalued = equitie => Boolean(equitie.price < equitie.base);

const getHighestHighs = equities => equities
  .filter(isValued)
  .map(getIncrease)
  .sort(sortByDaysPercentageDiff)
  .slice(0, 4);

const getBiggestLosses = equities => equities
  .filter(isDevalued)
  .map(getDecrease)
  .sort(sortByDaysPercentageDiff)
  .slice(0, 4);

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