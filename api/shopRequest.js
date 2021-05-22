import axios from '../lib/axiosConfig';

export const getHotShop = async () => {
  return await axios.get('/shops/hot');
};

export const getShopProducts = async (account) => {
  return await axios.get(`/shops/${account}/products`);
};

export const getShopInfo = (account) => {
  return axios.get(`/shops/${account}`);
};
