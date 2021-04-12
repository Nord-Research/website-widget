import axios from "axios";
import { prop } from '../utils/ramda';
import { values } from '../utils/object';
import { X_API_KEY } from '../constants/keys.contants'

const client = axios.create();
const BEARER = '';


const formatIndicatorsWithPercentageDiff = indicators => indicators.map(indicator => ({
  ...indicator,
  daysPercentageDiff: (indicator.price - indicator.base) / (indicator.price) * 100,
}));

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

export const getEquities = () => client.get('https://api.abalustre.com/historical/indicators?from=2021-04-08&to=2021-04-09', {
  headers: {
    authorization: `Bearer ${BEARER}`,
    'x-api-key': X_API_KEY,
  }
}).then(prop('data'));