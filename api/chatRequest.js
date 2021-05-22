import axios from 'axios';
import Cookie from 'js-cookie';
const token = Cookie.get('token');
export const patchChat = async (id) => {
  return await axios.patch(
    '/v1/chat',
    { id }
  );
};

export const getAllChats = async () => {
  return axios.get('/v1/chat');
};
export const getChat = async (chatId) => {
  return axios.get(`/v1/chat/${chatId}`);
};
