import { nordAPI } from './api';

export const getPlans = () => nordAPI.get('/plans').then(({ data }) => data);

export const getRecommendations = async (filter) => nordAPI.get(`/mocked/url/${filter}`);