import axios from '../lib/axiosConfig';

export const getSearchedProducts = (text) => {
  return axios.get(`/search?text=${text}`);
};
