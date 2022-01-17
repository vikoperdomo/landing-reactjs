import { AppConfig } from "configs";
import API from "./api/api";

class UserAPI {
  constructor() {
    this.requestUrl = `${AppConfig.apiURL}/leads`;
  }

  submitGoogleSheet(payload) {
    return API.post(`${this.requestUrl}/add-lead`, payload, {
      isMultipart: false,
    });
  }
}

export default new UserAPI();
