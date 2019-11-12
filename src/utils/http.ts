import axios from 'axios';
import qs = require('qs');

export const makeGetRequest = (url: string) =>
  axios
    .get(url)
    .then(response => response)
    .catch(error => error.response);

export const makePostRequest = (url: string, payload: any = undefined) =>
  axios
    .post(url, qs.stringify(payload))
    .then(response => response)
    .catch(error => error.response);

export const makePutRequest = (url: string, payload: any) =>
  axios
    .post(url, qs.stringify(payload))
    .then(response => response)
    .catch(error => error.response);

export const makeDeleteRequest = (url: string) =>
  axios
    .post(url)
    .then(response => response)
    .catch(error => error.response);
