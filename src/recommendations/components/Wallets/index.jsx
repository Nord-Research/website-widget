import { h } from 'preact';
import * as S from './styles';

import { WALLETS } from '../../constants/wallets';

const Wallet = ({ label }) => <S.Wallet>{label}</S.Wallet>;

export const Wallets = () => (
  <S.Container>
    {WALLETS.map((label) => (
      <Wallet label={label} />
    ))}
  </S.Container>
);

export default Wallets;