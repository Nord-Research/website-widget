import axios from "axios";

import { getToday, getYesterday } from '../services/date.service';
import { prop, values } from '../utils';
import { X_API_KEY } from '../constants/keys.contants';

const client = axios.create();
const today = getToday()
const yesterday = getYesterday();

const formatEquitiesWithPercentageDiff = equities => equities.map(equitie => ({
  ...equitie,
  isMonetary: true,
}));

export const getIndexComposition = ({ id = '', from = yesterday, to = today } = {}) => client.get(
  `https://api.abalustre.com/historical/index-composition/${id}`,
  {
    headers: {
      'x-api-key': X_API_KEY,
    },
    params: {
      from,
      to,
    }
  })
  .then(prop('data'))

export const getEquities = (symbols = []) => client.get(
  'https://iafyojiy49.execute-api.us-east-1.amazonaws.com/prod/highlight',
  {
    params: {
      range: 1,
      period: 'day',
      absolute: true,
      onlyCompanies: true,
      symbols: symbols.length ? symbols.join(',') : '',
    },
    headers: {
      'x-api-key': X_API_KEY,
    },
  })
  .then(prop('data'))
  .then(values)
  .then(formatEquitiesWithPercentageDiff);
