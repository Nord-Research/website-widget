import { h } from 'preact';
import * as S from './styles';

import { WALLETS } from '../../constants/wallets';

const Wallet = ({ label, value, isActive, setWallet }) => <S.Wallet isActive={isActive} onClick={() => setWallet(value)}>{label}</S.Wallet>;

export const Wallets = ({ wallet, setWallet }) => (
  <S.Container>
    {WALLETS.map(({ label, value }) => (
      <Wallet label={label} isActive={wallet === value} value={value} setWallet={setWallet} />
    ))}
  </S.Container>
);

export default Wallets;