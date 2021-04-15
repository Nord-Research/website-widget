import { h } from "preact";

import HistoricalGroup from './components/HistoricalGroup';
import { useEquities, useIndicators } from '../hooks/';
import { useAppContextConsumer } from "../AppContext";

import './main.css';

export const Main = () => {
  const { equities } = useAppContextConsumer();
  const { highs, losses } = useEquities({ equities });
  const { indicators } = useIndicators()

  return (
    <div className="price-history__container">
      <HistoricalGroup title="No dia de hoje" items={indicators} />
      <HistoricalGroup title="Maiores Altas" items={highs} />
      <HistoricalGroup title="Maiores baixas" items={losses} />
    </div>
  );
}



export default Main;