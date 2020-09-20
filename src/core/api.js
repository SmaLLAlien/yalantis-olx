import axios from 'axios';

const productInstanceApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default productInstanceApi;
