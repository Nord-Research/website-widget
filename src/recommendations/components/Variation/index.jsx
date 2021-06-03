import { h } from 'preact';
import * as S from './styles';

import arrowUp from '../../../assets/images/arrow-up.svg';
import arrowDown from '../../../assets/images/arrow-down.svg';

const getArrowByStatus = (status) => status === 'positive' ? arrowUp : arrowDown;

export const Variation = ({ value, status }) => (
  <S.Container>
    {status && (
      <img src={getArrowByStatus(status)} alt="arrow" width={40} height={40} />
    )}
    <S.Label status={status}>{value}</S.Label>
  </S.Container>
)

export default Variation;