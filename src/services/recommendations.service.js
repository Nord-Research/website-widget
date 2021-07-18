import axios from "axios";

const client = axios.create();

export const getRecommendations = async (filter) => client.get(`/mocked/url/${filter}`);