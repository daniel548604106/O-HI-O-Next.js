import request from "../lib/requestConfig";

export const getUserData = async (id) => {
  return await request.get(`/users/user/${id}`);
};
