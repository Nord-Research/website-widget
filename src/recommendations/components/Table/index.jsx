import { h } from "preact";

import { TABLE_HEAD } from '../../constants/table';

import './styles.css';
import './thead.css';

export const Table = ({ }) => (
  <div className="container">
    <div className="thead">
      <div className="tcolumns">
        {TABLE_HEAD.map(label => (
          <span>{label}</span>
        ))}
      </div>
    </div>

    <div className="tbody">
      {Array.from({ length: 5 }).fill('').map(() => (
        <div className="trow">
          <span>1#</span>
          <div className="tcolumns">
            <span>Logo</span>
            <span>Ticker</span>
            <span>1.5%</span>
            <span>R$ 25,35</span>
            <span>R$ 30,00</span>
            <span>Comprar</span>
            <span>9,4%</span>
          </div>
        </div>
      ))}
    </div>
  </div >
);

export default Table;
