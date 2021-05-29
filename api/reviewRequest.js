import request from "../lib/axiosConfig";

const getReviews = async (productId) => {
  return await request.get(`/reviews/${productId}`);
};

export { getReviews };
