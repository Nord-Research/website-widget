import axios from "axios";
import { HOSTS } from "../constants/hosts.constants";

export class ApiClient {
  #client;
  #id;

  constructor(options) {
    this.#client = axios.create();
    this.#id = options.id;

    this.#client.interceptors.response.use(undefined, error => {
      console.log(
        `Failed to call API`,
        error.response.status,
        error.response.data
      );
      return Promise.reject(error);
    });
  }

  async sendDailyForm(requestData) {
    return await this.callApi({
      url: `${HOSTS.PROD.DAILY_REPORT}/daily-report/${this.id}/subscriber`,
      method: "POST",
      requestData
    });
  }

  async callApi(request) {
    return new Promise((resolve, reject) => {
      this.client
        .request({
          url: request.url,
          method: request.method ?? "GET",
          data: request.requestData,
          responseType: "json"
        })
        .then(response =>
          response.status && response.status >= 200 && response.status < 400
            ? resolve(response.data)
            : reject(response.data)
        )
        .catch(error => reject(error.response || error.message));
    });
  }
}
