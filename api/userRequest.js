import request from "../lib/axiosConfig";

export const getUserData = async (id) => {
  return await request.get(`/users/user/${id}`);
};
