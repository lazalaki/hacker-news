import axios from 'axios';

import './httpConfig.js';

const baseUrl = () => 'http://localhost:8000/api';

export const post = (url, body) =>
  axios.post(`${baseUrl()}${url}`, body);

export const patch = (url, body) =>
  axios.patch(`${baseUrl()}${url}`, body);
