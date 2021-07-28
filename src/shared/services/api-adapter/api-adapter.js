const axios = require('axios').default;

export function createGetRequest(path) {
  return axios.get(path);
}