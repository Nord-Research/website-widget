import { h } from 'preact';
import * as S from './styles';

import { WALLETS } from '../../constants/wallets';

const Wallet = ({ label, isActive }) => <S.Wallet isActive={isActive}>{label}</S.Wallet>;

export const Wallets = () => (
  <S.Container>
    {WALLETS.map((label) => (
      <Wallet label={label} isActive />
    ))}
  </S.Container>
);

export default Wallets;