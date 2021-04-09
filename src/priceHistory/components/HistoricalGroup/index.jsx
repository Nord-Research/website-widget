import { h } from "preact";

import Title from '../Title';
import CardItem from '../CardItem';

import './styles.css';

export const HistoricalGroup = () => {
  return (
    <div className="historical-group__container">
      <Title>No dia de hoje</Title>
      <div className="historical-group__cards">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
};

export default HistoricalGroup;