import { h } from "preact";

import Recommendation from '../Recommendation';
import Variation from '../Variation';

import { HEAD_AREAS, HEAD_LABELS } from '../../constants/table';

import logo from '../../../assets/images/locameria.svg';

import './trow.css';

export const TRow = ({ item }) => {
  return (
    <div className="trow">
      <span className="order">#{item.position}</span>
      <div className="tcolumns card">
        <span className="logo">
          <img src={logo} alt="logo" />
        </span>
        <span className="ticker row-item">
          <p className="card-title">{HEAD_LABELS[HEAD_AREAS.TICKER]}</p>
          <p className="ticker-text">{item.ticker}</p>
        </span>
        <span className="variation row-item">
          <p className="card-title">{HEAD_LABELS[HEAD_AREAS.VARIATION]}</p>
          <Variation value={item.variation} status={item.status} />
        </span>
        <span className="current-price row-item">
          <p className="card-title">{HEAD_LABELS[HEAD_AREAS.CURRENT_PRICE]}</p>
          <p className="current-price-text">{item.startPriceBRL}</p>
        </span>
        <span className="max-price row-item">
          <p className="card-title">{HEAD_LABELS[HEAD_AREAS.MAX_PRICE]}</p>
          <p className="max-price-text">{item.maxPriceBRL}</p>
        </span>
        <span className="recommendation">
          <Recommendation label={item.recommendation} status={item.recommendation} />
        </span>
        <span className="alocation row-item">
          <p className="card-title">{HEAD_LABELS[HEAD_AREAS.ALOCATION]}</p>
          <p className="alocation-text">{item.share}</p>
        </span>
      </div>
    </div>
  );
}

export default TRow;
