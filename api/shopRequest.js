import request from "../lib/requestConfig";

export const getPopularShops = async () => {
  return await request.get("/shops/popular");
};

export const getShopProducts = async (account) => {
  return await request.get(`/shops/${account}/products`);
};

export const getShopInfo = (account) => {
  return request.get(`/shops/shop/${account}`);
};

export const getAllShops = () => {
  return request.get("/shops");
};
