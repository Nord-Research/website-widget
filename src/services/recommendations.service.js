import { nordAPI } from './api';

export const getPlans = () => nordAPI.get('/plans').then(({ data }) => data);

export const getRecommendations = async (id) => nordAPI.get(`/recommended-walllets/${id}`).then(({ data }) => data);
;