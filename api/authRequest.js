import request from "../lib/requestConfig";

//註冊

export const postSignup = async (data) => {
  return await request.post("/auth/signup", data);
};

//登入

export const postLogin = (data) => {
  return request.post("/auth/login", data);
};

// 社群登入

export const postOAuthLogin = (data) => {
  return request.post("/oauth/login", data);
};

// 登出
export const postLogout = (token) => request.post("/auth/logout");
