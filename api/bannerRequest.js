import request from "../lib/axiosConfig";

export const getBanners = async () => {
  return await request.get(`/banners`);
};
