import axios from '../lib/axiosConfig';

const getReviews = async (productId) => {
  return await axios.get(`/reviews/${productId}`);
};

export { getReviews };
