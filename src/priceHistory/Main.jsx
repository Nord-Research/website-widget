import { h } from "preact";

import HistoricalGroup from './components/HistoricalGroup';
import { usePriceHistory } from '../hooks/use-price-history';
import { useAppContextConsumer } from "../AppContext";

import './main.css';

export const Main = () => {
  const { equities } = useAppContextConsumer();
  const { highs, losses, today } = usePriceHistory({ equities });

  return (
    <div className="price-history__container">
      <HistoricalGroup title="No dia de hoje" items={today} />
      <HistoricalGroup title="Maiores Altas" items={highs} />
      <HistoricalGroup title="Maiores baixas" items={losses} />
    </div>
  );
}



export default Main;