import axios from "../lib/axiosConfig";

//註冊

export const postSignup = async (data) => {
  return await axios.post("/auth/signup", data);
};

//登入

export const postLogin = (data) => {
  return axios.post("/auth/login", data);
};

// 社群登入

export const postOAuthLogin = (data) => {
  return axios.post("/oauth/login", data);
};

// 登出
export const postLogout = (token) => axios.post("/auth/logout");
