import { h } from "preact";

import ArrowUp from '../../icons/ArrowUp'
import ArrowDown from '../../icons/ArrowDown'

import { getSymbolFromDictionary } from './dictionary';
import { numberToBRL } from '../../utils';

import './styles.css';

const Indicator = ({ diff = 0 }) => {
  const isPositive = diff > 0;

  return (
    <p className={`indicator ${isPositive ? 'positive' : 'negative'}`}>
      {isPositive ? (
        <ArrowUp />
      ) : (
        <ArrowDown />
      )}
      {diff.toFixed(2)}%
    </p>
  )
};

export const CardItem = ({ symbol = '', price = 0, base = 0, daysPercentageDiff, isMonetary = false }) => {
  const points = price / 100;

  return (
    <div className="card-item-container">
      <div className="card-item">
        <div className="card-item__header">
          <div className="indicator">{getSymbolFromDictionary(symbol)}</div>
          <div className="price">{isMonetary ? numberToBRL(points) : points}</div>
        </div>
        <div className="card-item__content">
          <Indicator price={price} base={base} diff={daysPercentageDiff} />
        </div>
      </div>
    </div>
  );
}


export default CardItem;