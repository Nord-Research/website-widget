import { h } from "preact";

import Recommendation from '../Recommendation';
import Variation from '../Variation';

import { HEAD_AREAS, HEAD_LABELS } from '../../constants/table';

import logo from '../../../assets/images/locameria.svg';

import './styles.css';
import './thead.css';
import './tbody.css';
import './trow.css';
import './card.css';
import './text.css';

const MOCKED_ROWS = [
  {
    order: 1,
    logo: '',
    ticker: 'LCAM3',
    variation: '1,5%',
    currentPrice: 'R$ 25,35',
    maxPrice: 'R$ 30,00',
    recommendation: 'Comprar',
    alocation: '9,4%',
    status: 'positive'
  },
  {
    order: 2,
    logo: '',
    ticker: 'LCAM3',
    variation: '1,5%',
    currentPrice: 'R$ 25,35',
    maxPrice: 'R$ 30,00',
    recommendation: 'Comprar',
    alocation: '9,4%',
    status: 'negative'
  },
  {
    order: 3,
    logo: '',
    ticker: 'LCAM3',
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
              <p className="current-price-text">{item.currentPrice}</p>
            </span>
            <span className="max-price row-item">
              <p className="card-title">{HEAD_LABELS[HEAD_AREAS.MAX_PRICE]}</p>
              <p className="max-price-text">{item.maxPrice}</p>
            </span>
            <span className="recommendation">
              <Recommendation label={item.recommendation} />
            </span>
            <span className="alocation row-item">
              <p className="card-title">{HEAD_LABELS[HEAD_AREAS.ALOCATION]}</p>
              <p className="alocation-text">{item.alocation}</p>
            </span>
          </div>
        </div>
      ))}
    </div>
  </div >
);

export default Table;
