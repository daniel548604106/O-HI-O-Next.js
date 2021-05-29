import request from "../lib/requestConfig";

export const getAllProducts = () => {
  return request.get(`/products`);
};
export const getDiscountedProducts = () => {
  return request.get("/products/discount");
};
export const getProduct = (id) => {
  console.log("2", id);
  return request.get(`/products/product/${id}`);
};

export const getRecommendedProducts = () => {
  return request.get(`/products/recommendation`);
};

export const getEditorPickedProducts = () => {
  return request.get(`/products/editorPicked`);
};
export const getCollectionProducts = (collection) => {
  return request.get(`/products/collection/${collection}`);
};
