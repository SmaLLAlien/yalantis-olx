import axios from 'axios';
import { PRODUCT_SERVER } from '../global/constants';

export default (url, method = 'get', data) => {
  return axios[method](`${PRODUCT_SERVER}${url}`, data);
};
