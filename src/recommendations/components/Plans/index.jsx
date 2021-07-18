import { h } from 'preact';
import * as S from './styles';

const Plan = ({ name, id, isActive, setWallet }) => <S.Wallet isActive={isActive} onClick={() => setWallet(id)}>{name}</S.Wallet>;

export const Plans = ({ plans = [], wallet, setWallet }) => (
  <S.Container>
    {plans.map(({ name, id }) => (
      <Plan name={name} isActive={wallet === id} id={id} setWallet={setWallet} />
    ))}
  </S.Container>
);

export default Plans;