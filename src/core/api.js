import axios from 'axios';

export default (url, method = 'get', data) => {
  return axios[method](`${process.env.REACT_APP_API_URL}${url}`, data);
};
