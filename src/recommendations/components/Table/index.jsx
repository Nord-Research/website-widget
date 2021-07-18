import { h } from "preact";

import { HEAD_LABELS } from '../../constants/table';

import Wallets from '../Wallets';
import TRow from '../TRow';
import { useGetRecommendations } from '../../hooks';

import './styles.css';
import './thead.css';
import './tbody.css';
import './card.css';
import './text.css';

export const Table = ({ }) => {
  const { data, wallet, setWallet } = useGetRecommendations();

  return (
    <div>
      <Wallets wallet={wallet} setWallet={setWallet} />

      <div className="container">
        <div className="thead">
          <div className="tcolumns">
            {Object.values(HEAD_LABELS).map((label) => (
              <span>{label}</span>
            ))}
          </div>
        </div>

        <div className="tbody">
          {data.map((item) => <TRow item={item} />)}
        </div>
      </div>
    </div>
  );
}

export default Table;
