import { h } from "preact";

import Title from '../Title';
import CardItem from '../CardItem';

import './styles.css';

export const HistoricalGroup = ({ title = '', items = [] }) => (
  <div className="historical-group__container">
    {title && (
      <Title>{title}</Title>
    )}
    <div className="historical-group__cards">
      {items.map(item => (
        <CardItem />
      ))}
    </div>
  </div>
);


export default HistoricalGroup;