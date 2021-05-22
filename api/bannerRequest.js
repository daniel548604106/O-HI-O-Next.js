import axios from "../lib/axiosConfig";

export const getBanners = async () => {
  return await axios.get(`/banners`);
};
