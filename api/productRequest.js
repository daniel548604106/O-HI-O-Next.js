import axios from "../lib/axiosConfig";

export const getAllProducts = () => {
  return axios.get(`/products`);
};
export const getDiscountedProducts = () => {
  return axios.get("/products/discount");
};
export const getProduct = (id) => {
  console.log("2", id);
  return axios.get(`/products/product/${id}`);
};

export const getRecommendedProducts = () => {
  return axios.get(`/products/recommendation`);
};

export const getEditorPickedProducts = () => {
  return axios.get(`/products/editorPicked`);
};
export const getCollectionProducts = (collection) => {
  return axios.get(`/products/collection/${collection}`);
};
