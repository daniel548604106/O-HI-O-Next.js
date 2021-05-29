import axios from "../lib/axiosConfig";

export const addToFavorite = async (id, token, type) => {
  return await axios.patch("/favorites", { id, type });
};

export const getFavList = async () => {
  return await axios.get("/favorites");
};
