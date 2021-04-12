import { h } from "preact";

import ArrowUp from '../../icons/ArrowUp'
import ArrowDown from '../../icons/ArrowDown'

import { numberToBRL } from '../../../utils';

import './styles.css';

const Indicator = ({ comparative = 0 }) => {
  const isPositive = comparative >= 0;

  return (
    <p className={`indicator ${isPositive ? 'positive' : 'negative'}`}>
      {isPositive ? (
        <ArrowUp />
      ) : (
        <ArrowDown />
      )}
      {comparative}%
    </p>
  )
};

export const CardItem = ({ indicator = 'IBOVESPA', price = 0, comparative = 0 }) => {
  return (
    <div className="card-item-container">
      <div className="card-item">
        <div className="card-item__header">
          <div className="indicator">{indicator}</div>
          <div className="price">{numberToBRL(price)}</div>
        </div>
        <div className="card-item__content">
          <Indicator comparative={comparative} />
        </div>
      </div>
    </div>
  );
};

export default CardItem;