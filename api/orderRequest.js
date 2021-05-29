import axios from '../lib/axiosConfig';
import Cookie from 'js-cookie';
const token = Cookie.get('token');
export const postNewOrder = (data) => {
  return axios.post('/orders', data);
};

export const getAllOrders = (data) => {
  return axios.get('/orders');
};
