import { h } from "preact";

import ArrowUp from '../../icons/ArrowUp'
import ArrowDown from '../../icons/ArrowDown'

import { numberToBRL } from '../../../utils';

import './styles.css';

export const CardItem = ({ indicator = 'IBOVESPA', price = 0, comparative = 0 }) => {
  return (
    <div className="card-item-container">
      <div className="card-item">
        <div className="card-item__header">
          <div className="indicator">{indicator}</div>
          <div className="price">{numberToBRL(price)}</div>
        </div>
        <div className="card-item__content">
          <p className="positive indicator">
            {/* <ArrowDown /> */}
            <ArrowUp />
            {comparative}%
        </p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;