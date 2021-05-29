import request from "../lib/requestConfig";

const getReviews = async (productId) => {
  return await request.get(`/reviews/${productId}`);
};

export { getReviews };
