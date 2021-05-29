import request from "../lib/requestConfig";

export const getBanners = async () => {
  return await request.get(`/banners`);
};
