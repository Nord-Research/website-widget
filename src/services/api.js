import axios from 'axios';

import { HOSTS } from '../constants/hosts.constants';

export const nordAPI = axios.create({
  baseURL: HOSTS.PROD.NORD,
});
