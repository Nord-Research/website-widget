import { h } from "preact";
import { useEffect } from "preact/hooks";

import HistoricalGroup from './components/HistoricalGroup';
import { getIndicators, getEquities } from '../services/indicators.service';

import './main.css';

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
      <HistoricalGroup />
      <HistoricalGroup />
      <HistoricalGroup />
    </div>
  );
}



export default Main;