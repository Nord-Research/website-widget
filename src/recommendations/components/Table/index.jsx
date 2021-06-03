import { h } from "preact";

import { HEAD_AREAS,HEAD_LABELS } from '../../constants/table';

import './styles.css';
import './thead.css';
import './tbody.css';
import './trow.css';
import './card.css';

const MOCKED_ROWS = [
  {
    order: 1,
    logo: 'Logo',
    ticker: 'Ticker',
    variation: '1,5%',
    currentPrice: 'R$ 25,35',
    maxPrice: 'R$ 30,00',
    recommendation: 'Comprar',
    alocation: '9,4%'
  },
  {
    order: 2,
    logo: 'Logo',
    ticker: 'Ticker',
    variation: '1,5%',
    currentPrice: 'R$ 25,35',
    maxPrice: 'R$ 30,00',
    recommendation: 'Comprar',
    alocation: '9,4%'
  },
  {
    order: 3,
    logo: 'Logo',
    ticker: 'Ticker',
    variation: '1,5%',
    currentPrice: 'R$ 25,35',
    maxPrice: 'R$ 30,00',
    recommendation: 'Comprar',
    alocation: '9,4%'
  },
]

export const Table = ({ }) => (
  <div className="container">
    <div className="thead">
      <div className="tcolumns">
        {Object.values(HEAD_LABELS).map((label) => (
          <span>{label}</span>
        ))}
      </div>
    </div>

    <div className="tbody">
      {MOCKED_ROWS.map((item) => (
        <div className="trow">
          <span className="order">#{item.order}</span>
          <div className="tcolumns card">
            <span className="logo">{item.logo}</span>
            <span className="ticker row-item">
              <p className="card-title">{HEAD_LABELS[HEAD_AREAS.TICKER]}</p>
              <p className="value">{item.ticker}</p>
            </span>
            <span className="variation row-item">
              <p className="card-title">{HEAD_LABELS[HEAD_AREAS.VARIATION]}</p>
              <p>{item.variation}</p>
            </span>
            <span className="current-price row-item">
              <p className="card-title">{HEAD_LABELS[HEAD_AREAS.CURRENT_PRICE]}</p>
              <p>{item.currentPrice}</p>
            </span>
            <span className="max-price row-item">
              <p className="card-title">{HEAD_LABELS[HEAD_AREAS.MAX_PRICE]}</p>
              <p>{item.maxPrice}</p>
            </span>
            <span className="recommendation">
              <p>{item.recommendation}</p>
            </span>
            <span className="alocation row-item">
              <p className="card-title">{HEAD_LABELS[HEAD_AREAS.ALOCATION]}</p>
              <p>{item.alocation}</p>
            </span>
          </div>
        </div>
      ))}
    </div>
  </div >
);

export default Table;
