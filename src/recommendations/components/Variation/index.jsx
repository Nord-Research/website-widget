import { h } from 'preact';
import * as S from './styles';

export const Variation = ({ value, status }) => <S.Label status={status}>{value}</S.Label>

export default Variation;