import { h } from "preact";

import HistoricalGroup from './components/HistoricalGroup';

import './main.css';

export const Main = () => (
  <div className="price-history__container">
    <HistoricalGroup />
    <HistoricalGroup />
    <HistoricalGroup />
  </div>
);


export default Main;