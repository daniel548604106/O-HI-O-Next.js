import axios from '../lib/axiosConfig';

export const addToFavorite = async (id, token, type) => {
  return await axios.patch(
    '/favorite',
    { id, type }
  );
};

export const getFavList = async (token) => {
  return await axios.get('/favorite');
};
