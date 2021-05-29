import request from "../lib/axiosConfig";
import Cookie from "js-cookie";
const token = Cookie.get("token");
export const patchChat = async (id) => {
  return await request.patch("/v1/chat", { id });
};

export const getAllChats = async () => {
  return request.get("/v1/chat");
};
export const getChat = async (chatId) => {
  return request.get(`/v1/chat/${chatId}`);
};
