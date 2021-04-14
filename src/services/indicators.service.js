import axios from "axios";
import dayjs from 'dayjs';

import { prop, values, keys } from '../utils';
import { X_API_KEY } from '../constants/keys.contants';
import { DEFAULT_ACCEPTED_EQUITIES } from '../constants/equities.contants';

const client = axios.create();

const EQUITIES_DAYS_TO_GET = 7;
const GET_EQUITIES_DATE_FORMAT = 'YYYY-MM-DD'

const curretDate = new Date();

const todayFormattedDate = dayjs(curretDate).format(GET_EQUITIES_DATE_FORMAT);
const yesterdayFormattedDate =
  dayjs(curretDate
    .setDate(curretDate.getDate() - EQUITIES_DAYS_TO_GET))
    .format(GET_EQUITIES_DATE_FORMAT);

const BEARER = '';

const formatIndicatorsWithPercentageDiff = indicators => indicators.map(indicator => ({
  ...indicator,
  daysPercentageDiff: (indicator.price - indicator.base) / (indicator.price) * 100,
}));

const formatEquities = (labels) => (equities) => {
  return labels.map(label => {
    const filteredEquitiesByLabel = equities.filter(equitie => keys(equitie).includes(label));

    const recentVariation = filteredEquitiesByLabel
      .find(equitie => Boolean(equitie[label]));

    const oldVariation = filteredEquitiesByLabel
      .find(equitie => {
        if (equitie.timestamp === recentVariation.timestamp) return false;

        return Boolean(equitie[label]);
      });

    const recent = recentVariation[label];
    const old = oldVariation[label];

    return {
      symbol: label,
      base: old,
      price: recent,
      daysPercentageDiff: (recent - old) / (recent) * 100,
    };
  });
}

export const getIndicators = () => client.get('https://iafyojiy49.execute-api.us-east-1.amazonaws.com/prod/highlight', {
  params: {
    range: 1,
    period: 'day',
    absolute: true,
    onlyCompanies: true
  },
  headers: {
    'x-api-key': X_API_KEY,
  },
})
  .then(prop('data'))
  .then(values)
  .then(formatIndicatorsWithPercentageDiff);

export const getEquities = (labels = DEFAULT_ACCEPTED_EQUITIES) => client.get(`https://api.abalustre.com/historical/indicators?from=${yesterdayFormattedDate}&to=${todayFormattedDate}`, {
  headers: {
    authorization: `Bearer ${BEARER}`,
    'x-api-key': X_API_KEY,
  }
})
  .then(prop('data'))
  .then(prop('data'))
  .then(formatEquities(labels));