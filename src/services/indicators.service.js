import axios from "axios";

import { getTodayAndPastDay } from '../services/date.service';
import { prop, keys, getIsMonetaryLabel } from '../utils';
import { getPercentageDecrease, getPercentageIncrease } from '../utils/price.utils';
import { X_API_KEY } from '../constants/keys.contants';
import { DEFAULT_ACCEPTED_INDICATORS } from '../constants/indicators.constants';

const client = axios.create();

const PAST_DAYS = 14;

const { today, pastDay } = getTodayAndPastDay(PAST_DAYS);

const BEARER = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQsImVtYWlsIjoibWFpY29ucnM5NUBnbWFpbC5jb20iLCJpYXQiOjE2MTc3NDk1NDh9.e9RROS3BowFuNrLvzVhddnseJ5MmD0Wz2VrA1pLG59o';

const formatIndicators = (labels) => (indicators) => {
  return labels.map(label => {
    const filteredIndicatorsByLabel = indicators.filter(indicator => keys(indicator).includes(label));

    const recentVariation = filteredIndicatorsByLabel
      .find(indicator => Boolean(indicator[label]));

    const oldVariation = filteredIndicatorsByLabel
      .find(indicator => {
        if (indicator.timestamp === recentVariation.timestamp) return false;

        return Boolean(indicator[label]);
      });

    const old = oldVariation[label];
    const recent = recentVariation[label];
    const isDevalued = recent < old;
    const getPercentage = isDevalued ? getPercentageDecrease : getPercentageIncrease;

    return {
      symbol: label,
      base: old,
      price: recent,
      daysPercentageDiff: getPercentage(old, recent),
      isMonetary: getIsMonetaryLabel(label),
    }

  });
}

export const getIndicators = (labels = DEFAULT_ACCEPTED_INDICATORS) => client.get(
  `https://api.abalustre.com/historical/indicators?from=${pastDay}&to=${today}`,
  {
    headers: {
      authorization: `Bearer ${BEARER}`,
      'x-api-key': X_API_KEY,
    },
  })
  .then(prop('data'))
  .then(prop('data'))
  .then(formatIndicators(labels));