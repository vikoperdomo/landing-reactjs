class ApiService {
  resolveAPIUrl(path) {
    const root = process.env.API_URL || '';
    return `${root}${path}`;
  }

  /**
   * Handle Success Response
   * @param {*} response APi Response
   * @returns 
   */
  handleSuccess(response) {
    return Promise.resolve(response);
  }

  /**
   * Parsing error req/res
   * @param {*} error api err
   * @returns 
   */
  handleErrors(error) {
    return Promise.reject(error);
  }

  /**
   * Validate Response Status Code
   * @param {*} response API Response
   * @returns 
   */
  status(response) {
    if (response.ok) {
      return response;
    } else {
      const err = new Error(response.statusText);
      return Promise.reject(err);
    }
  }

  /**
   * Parse Fetch API response
   * @param {*} response API Response
   * @returns 
   */
  json(response) {
    return response.json();
  }

  async get(path, options = {}) {
    return fetch(this.resolveAPIUrl(path), options)
      .then(this.status)
      .then(this.json)
      .then(this.handleSuccess)
      .catch(this.handleErrors);
  }

  async post(path, payload, options) {
    return fetch(this.resolveAPIUrl(path), {
      ...options,
      method: "POST",
      headers: !options.isMultipart ? {
        "Content-Type": "application/json",
      } : undefined,
      body: !options.isMultipart ? JSON.stringify(payload) : payload,
    })
      .then(this.status)
      .then(this.json)
      .then(this.handleSuccess)
      .catch(this.handleErrors);
  }

  async put(path, payload, options = {}) {
    return fetch(this.resolveAPIUrl(path), {
      ...options,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(this.status)
      .then(this.json)
      .then(this.handleSuccess)
      .catch(this.handleErrors);
  }

  async delete(path, payload, options = {}) {
    return fetch(this.resolveAPIUrl(path), {
      ...options,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(this.status)
      .then(this.json)
      .then(this.handleSuccess)
      .catch(this.handleErrors);
  }
}

export default new ApiService();
