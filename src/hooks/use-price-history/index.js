import { useEffect, useMemo, useState } from "preact/hooks";
import { getIndicators, getEquities } from '../../services/indicators.service';

const sortByDaysPercentageDiff = (a, b) => b.daysPercentageDiff - a.daysPercentageDiff;

const isValued = indicator => indicator.price - indicator.base >= 0 ? true : false;

const isDevalued = indicator => indicator.price - indicator.base < 0 ? true : false;

const getHighestHighs = indicators => indicators.filter(isValued).sort(sortByDaysPercentageDiff).slice(0, 4);

const getBiggestLosses = indicators => indicators.filter(isDevalued).sort(sortByDaysPercentageDiff).reverse().slice(0, 4);

export const usePriceHistory = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const [indicators, equities] = await Promise.all([getIndicators(), getEquities()]);
        const highs = getHighestHighs(indicators);
        const losses = getBiggestLosses(indicators);

        setData({ highs, losses, equities });
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return useMemo(() => data, [data]);
};

export default usePriceHistory;