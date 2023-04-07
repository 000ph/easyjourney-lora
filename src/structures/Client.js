const constants = require("../util/constants");

class Client {
  /**
   *
   * @param {import("../types").ClientConstructorParams} param0
   */
  constructor({ accessToken }) {
    this.BASE_URL = constants.BASE_URL;
    this.acessToken = accessToken;
  }
  /**
   *
   * @param {import("../types").ClientImagineParams} data
   */
  async imagine(data) {
    const res = await fetch(this.BASE_URL, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    const response = await res.blob();
    return response;
  }
}

module.exports = { Client };
