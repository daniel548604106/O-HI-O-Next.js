import axios from '../lib/axiosConfig';
import Cookie from 'js-cookie';

const token = Cookie.get('token');

export const patchMyData = (data) => {
  return axios.patch('/my', data);
};

export const patchMyPhoto = (data) => {
  return axios.patch('/my/photo', data);
};
