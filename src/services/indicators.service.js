import axios from "axios";
import dayjs from 'dayjs';

import { prop, keys, getIsMonetaryLabel } from '../utils';
import { X_API_KEY } from '../constants/keys.contants';
import { DEFAULT_ACCEPTED_INDICATORS } from '../constants/indicators.constants';

const client = axios.create();

const DAYS_TO_GET = 14;
const DATE_FORMAT = 'YYYY-MM-DD'

const curretDate = new Date();

const todayFormattedDate = dayjs(curretDate).format(DATE_FORMAT);
const yesterdayFormattedDate =
  dayjs(curretDate
    .setDate(curretDate.getDate() - DAYS_TO_GET))
    .format(DATE_FORMAT);

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

    const recent = recentVariation[label];
    const old = oldVariation[label];

    return {
      symbol: label,
      base: old,
      price: recent,
      daysPercentageDiff: (recent - old) / (recent) * 100,
      isMonetary: getIsMonetaryLabel(label),
    };
  });
}

export const getIndicators = (labels = DEFAULT_ACCEPTED_INDICATORS) => client.get(
  `https://api.abalustre.com/historical/indicators?from=${yesterdayFormattedDate}&to=${todayFormattedDate}`,
  {
    headers: {
      authorization: `Bearer ${BEARER}`,
      'x-api-key': X_API_KEY,
    }
  })
  .then(prop('data'))
  .then(prop('data'))
  .then(formatIndicators(labels));