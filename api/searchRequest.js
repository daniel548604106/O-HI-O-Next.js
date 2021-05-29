import request from "../lib/requestConfig";

export const getSearchedProducts = (text) => {
  return request.get(`/search?text=${text}`);
};
