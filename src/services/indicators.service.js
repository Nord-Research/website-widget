import axios from "axios";

const client = axios.create();

export const getIndicators = () => client.get('https://iafyojiy49.execute-api.us-east-1.amazonaws.com/prod/highlight', {
  params: {
    range: 1,
    period: 'day',
    absolute: true,
    onlyCompanies: true
  },
  headers: {
    'x-api-key': 'BfjxcO3Mge7D82LcyVykR70nZuXFexvj3v1VdOMP',
  },
});