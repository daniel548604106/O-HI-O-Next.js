import axios from "../lib/axiosConfig";

export const getPopularShops = async () => {
  return await axios.get("/shops/popular");
};

export const getShopProducts = async (account) => {
  return await axios.get(`/shops/${account}/products`);
};

export const getShopInfo = (account) => {
  return axios.get(`/shops/shop/${account}`);
};

export const getAllShops = () => {
  return axios.get(`/shops`);
};
