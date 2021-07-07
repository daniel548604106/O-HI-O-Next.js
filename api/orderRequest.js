import request from "../lib/axiosConfig";
import Cookie from "js-cookie";
const token = Cookie.get("token");
export const postNewOrder = (data) => {
  return request.post("/orders", data);
};

export const getAllOrders = (data) => {
  return request.get("/orders");
};
