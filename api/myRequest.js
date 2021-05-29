import request from "../lib/axiosConfig";
import Cookie from "js-cookie";

const token = Cookie.get("token");

export const patchMyData = (data) => {
  return request.patch("/my", data);
};

export const patchMyPhoto = (data) => {
  return request.patch("/my/photo", data);
};
