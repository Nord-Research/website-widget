import { h } from 'preact';
import * as S from './styles';

export const Recommendation = ({ label, status }) => (
  <S.Label status={status}>{label}</S.Label>
);

export default Recommendation;