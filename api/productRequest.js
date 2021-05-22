import axios from '../lib/axiosConfig';

export const getAllProducts = (query) => {
  return axios.get(`/products?${query}`);
};
export const getDiscountedProducts = () => {
  return axios.get('/products/discount');
};
export const getProduct = (id) => {
  return axios.get(`/products/product/${id}`);
};

export const getRecommendedProducts = () => {
  return axios.get(`/products/recommendation`);
};

export const getCollectionProducts = (collection) => {
  return axios.get(`/products/collection/${collection}`);
};
