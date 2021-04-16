import { useEffect, useMemo, useState } from "preact/hooks";
import { getEquities } from '../../services/equities.service';

const sortByDaysPercentageDiff = (a, b) => b.daysPercentageDiff - a.daysPercentageDiff;

const isValued = equitie => equitie.price - equitie.base >= 0 ? true : false;

const isDevalued = equitie => equitie.price - equitie.base < 0 ? true : false;

const getHighestHighs = equities => equities.filter(isValued).sort(sortByDaysPercentageDiff).slice(0, 4);

const getBiggestLosses = equities => equities.filter(isDevalued).sort(sortByDaysPercentageDiff).reverse().slice(0, 4);

export const useEquities = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const equities = await getEquities();
        const highs = getHighestHighs(equities);
        const losses = getBiggestLosses(equities);

        setData({ highs, losses });
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return useMemo(() => data, [data]);
};

export default useEquities;