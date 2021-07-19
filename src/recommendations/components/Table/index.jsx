import { h } from "preact";
import Skeleton from 'preact-loading-skeleton';

import { HEAD_LABELS } from '../../constants/table';

import Plans from '../Plans';
import TRow from '../TRow';
import { useGetRecommendations, useGetPlans } from '../../hooks';

import './styles.css';
import './thead.css';
import './tbody.css';
import './card.css';
import './text.css';

const Empty = () => (
  <p style={{ textAlign: 'center', padding: '100px', fontSize: '28px' }}>Não há dados para mostrar.</p>
);

export const Table = ({ }) => {
  const { plans, isLoading: isLoadingPlans } = useGetPlans();
  const { isEmpty, data, wallet, setWallet, isLoading: isLoadingRecommendations } = useGetRecommendations({ plans });
  const isLoadingTable = isLoadingPlans || isLoadingRecommendations;

  return (
    <div>
      <Plans plans={plans} wallet={wallet} setWallet={setWallet} isLoading={isLoadingPlans} />

      <div className="container">
        <div className="thead">
          <div className="tcolumns">
            {Object.values(HEAD_LABELS).map((label) => (
              <span>{label}</span>
            ))}
          </div>
        </div>

        <div className="tbody">
          {isLoadingTable ?
            <Skeleton height={200} /> :
            isEmpty ? <Empty /> :
              data.map(item => <TRow item={item} />)
          }
        </div>
      </div>
    </div>
  );
}

export default Table;
