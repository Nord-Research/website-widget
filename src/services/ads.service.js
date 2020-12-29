import axios from "axios";
import { HOSTS } from "../constants/hosts.constants";

const client = axios.create();
client.interceptors.response.use(undefined, (error) => {
  console.log(`Failed to call API`, error.response.status, error.response.data);
  return Promise.reject(error);
});

const details = async (id) => {
  return await callApi({
    url: `${HOSTS.PROD.API}/ads/${id}`,
    method: "GET",
  });
};

const callApi = async (request) => {
  return new Promise((resolve, reject) => {
    client
      .request({
        url: request.url,
        method: request.method ?? "GET",
        data: request.requestData,
        responseType: "json",
      })
      .then((response) =>
        response.status && response.status >= 200 && response.status < 400
          ? resolve(response.data)
          : reject(response.data)
      )
      .catch((error) => reject(error.response || error.message));
  });
};

export const adsService = {
  details,
};
