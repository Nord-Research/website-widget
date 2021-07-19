import { h } from 'preact';
import Skeleton from 'preact-loading-skeleton';

import * as S from './styles';

const from = (length = 5) => Array.from({ length }).fill('');

const Plan = ({ name, id, isActive, setWallet }) => <S.Wallet isActive={isActive} onClick={() => setWallet(id)}>{name}</S.Wallet>;

export const Plans = ({ plans = [], wallet, setWallet, isLoading = true }) => (
  <S.Container>
    {isLoading ? from().map(i => (
      <S.LoadingWallet key={i}>
        <Skeleton height={38} width={200} />
      </S.LoadingWallet>
    )) : plans.map(({ name, id }) => (
      <Plan key={id} name={name} isActive={wallet === id} id={id} setWallet={setWallet} />
    ))}
  </S.Container>
);

export default Plans;