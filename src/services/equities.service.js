import axios from "axios";

import { prop, values } from '../utils';
import { X_API_KEY } from '../constants/keys.contants';

const client = axios.create();

const formatEquitiesWithPercentageDiff = equities => equities.map(equitie => ({
  ...equitie,
  isMonetary: true,
}));

export const getEquities = () => client.get(
  'https://iafyojiy49.execute-api.us-east-1.amazonaws.com/prod/highlight',
  {
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
  .then(formatEquitiesWithPercentageDiff);
