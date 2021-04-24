import { h } from "preact";

import Title from '../Title';
import CardItem from '../CardItem';

import './styles.css';

export const HistoricalGroup = ({ title = '', items = [], isLoading = false }) => {
  return (
    <div className="historical-group__container">
      {title && (
        <Title isLoading={isLoading}>{title}</Title>
      )}
      <div className="historical-group__cards">
        {isLoading ?
          new Array(4).fill().map(() => <CardItem isLoading />) :
          items.map(item => (
            <CardItem
              symbol={item.symbol}
              price={item.price}
              base={item.base}
              daysPercentageDiff={item.daysPercentageDiff}
              isMonetary={item.isMonetary}
            />
          ))}
      </div>
    </div>
  );
}


export default HistoricalGroup;