import { h } from "preact";
import Skeleton from 'preact-loading-skeleton';

import ArrowUp from '../../icons/ArrowUp'
import ArrowDown from '../../icons/ArrowDown'

import { getSymbolFromDictionary } from './dictionary';
import { numberToBRL } from '../../utils';

import './styles.css';

const Indicator = ({ isPositive, diff }) => (
  <p className={`indicator ${isPositive ? 'positive' : 'negative'}`}>
    {isPositive ? (
      <ArrowUp />
    ) : (
      <ArrowDown />
    )}
    {diff.toFixed(2)}%
  </p>
);

export const CardItem = ({
  symbol = '',
  price = 0,
  base = 0,
  daysPercentageDiff = 0,
  isMonetary = false,
  isLoading = false,
}) => {
  const points = price / 100;
  const isPositive = price >= base;
  const formattedPrice = isMonetary ? numberToBRL(points) : points;

  return (
    <div className="card-item-container">
      {isLoading ? <Skeleton width={140} height={74} radius={8} /> : (
        <div className="card-item">
          <div className="card-item__header">
            <div className="indicator">{getSymbolFromDictionary(symbol)}</div>
            <div className="price" title={formattedPrice}>{formattedPrice}</div>
          </div>
          <div className="card-item__content">
            <Indicator isPositive={isPositive} diff={daysPercentageDiff} />
          </div>
        </div>
      )}
    </div>
  );
}


export default CardItem;