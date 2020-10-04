import axios from 'axios';
import { TOKEN } from '../global/constants';

export const productInstanceApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const productAuthInstanceApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: TOKEN,
  },
});
