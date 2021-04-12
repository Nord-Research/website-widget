import axios from "axios";
import dayjs from 'dayjs'

import { prop, values, isAcceptedEquitieKey } from '../utils';
import { X_API_KEY } from '../constants/keys.contants'

const client = axios.create();

const curretDate = new Date();
const todayFormattedDate = dayjs(curretDate).format('YYYY-MM-DD');
const yesterdayFormattedDate = dayjs(curretDate.setDate(curretDate.getDate() - 1)).format('YYYY-MM-DD');

const BEARER = '';

const formatIndicatorsWithPercentageDiff = indicators => indicators.map(indicator => ({
  ...indicator,
  daysPercentageDiff: (indicator.price - indicator.base) / (indicator.price) * 100,
}));

const formatEquities = (equities) => {
  const [today, yesterday] = equities;

  return Object.keys(today)
    .filter(isAcceptedEquitieKey)
    .map((key) => {
      const todayValuation = today[key] || 0;
      const yesterdayValuation = yesterday[key] || 0;

      return {
        symbol: key,
        price: todayValuation,
        base: yesterday,
        daysPercentageDiff: (yesterdayValuation - todayValuation) / (yesterdayValuation) * 100,
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

export const getEquities = () => client.get(`https://api.abalustre.com/historical/indicators?from=${yesterdayFormattedDate}&to=${todayFormattedDate}`, {
  headers: {
    authorization: `Bearer ${BEARER}`,
    'x-api-key': X_API_KEY,
  }
}).then(prop('data')).then(prop('data')).then(formatEquities);