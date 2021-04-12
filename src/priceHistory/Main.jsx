import { h } from "preact";
import { useEffect } from "preact/hooks";

import HistoricalGroup from './components/HistoricalGroup';
import { getIndicators, getEquities } from '../services/indicators.service';

import './main.css';

const ITEMS = [
  {
    indicator: 'IBOVESPA',
    price: 15.00,
    comparative: '0.21',
  },
  {
    indicator: 'IBOVESPA',
    price: 15.00,
    comparative: '0.21',
  },
  {
    indicator: 'IBOVESPA',
    price: 15.00,
    comparative: '0.21',
  },
  {
    indicator: 'IBOVESPA',
    price: 15.00,
    comparative: '0.21',
  }
];

export const Main = () => {
  useEffect(() => {
    (async () => {
      const response = await getIndicators();
      console.log(response)
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await getEquities();
      console.log(response)
    })();
  }, []);

  return (
    <div className="price-history__container">
      <HistoricalGroup title="No dia de hoje" items={ITEMS} />
      <HistoricalGroup title="Maiores Altas" items={ITEMS} />
      <HistoricalGroup title="Maiores baixas" items={ITEMS} />
    </div>
  );
}



export default Main;