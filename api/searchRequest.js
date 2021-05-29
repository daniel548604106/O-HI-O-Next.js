import request from "../lib/axiosConfig";

export const getSearchedProducts = (text) => {
  return request.get(`/search?text=${text}`);
};
