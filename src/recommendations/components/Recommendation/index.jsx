import { h } from 'preact';
import * as S from './styles';

import { RECOMMENDATION_LABEL } from '../../constants/table';

const getRecommendationLabel = (label) => RECOMMENDATION_LABEL[label] ?? '';

export const Recommendation = ({ label, status }) => label && (
  <S.Label status={status}>{getRecommendationLabel(label)}</S.Label>
);

export default Recommendation;