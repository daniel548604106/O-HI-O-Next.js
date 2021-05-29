import axios from '../lib/axiosConfig';

export const getUserData = async (id) => {
  return await axios.get(`/users/user/${id}`);
};
