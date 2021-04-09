import { h } from "preact";

import ArrowUp from '../../icons/ArrowUp'
import ArrowDown from '../../icons/ArrowDown'

import './styles.css';

export const CardItem = ({ indicator = 'IBOVESPA', price = 'R$ 15,16' }) => {
  return (
    <div className="card-item-container">
      <div className="card-item">
        <div className="card-item__header">
          <div className="indicator">{indicator}</div>
          <div className="price">{price}</div>
        </div>
        <div className="card-item__content">
          <p className="negative indicator">
            <ArrowDown />
            3,20%
        </p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;