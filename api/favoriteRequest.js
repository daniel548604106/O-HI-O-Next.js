import request from "../lib/axiosConfig";

export const addToFavorite = async (id, token, type) => {
  return await request.patch("/favorites", { id, type });
};

export const getFavList = async () => {
  return await request.get("/favorites");
};
