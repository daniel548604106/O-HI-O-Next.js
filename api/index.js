import { getUserData } from "./userRequest";
export const apiGetUserData = getUserData;

// 使用者登入/註冊

import {
  postLogin,
  postSignup,
  postOAuthLogin,
  postLogout,
} from "./authRequest";
export const apiPostLogin = postLogin;
export const apiPostSignup = postSignup;
export const apiPostOauthLogin = postOAuthLogin;
export const apiPostLogout = postLogout;

// 產品
import {
  getAllProducts,
  getRecommendedProducts,
  getProduct,
  getCollectionProducts,
  getEditorPickedProducts,
  getDiscountedProducts,
} from "./productRequest";
export const apiGetAllProducts = getAllProducts;
export const apiGetRecommendedProducts = getRecommendedProducts;
export const apiGetProduct = getProduct;
export const apiGetCollectionProducts = getCollectionProducts;
export const apiGetDiscountedProducts = getDiscountedProducts;
export const apiGetEditorPickedProducts = getEditorPickedProducts;
// Banner

import { getBanners } from "./bannerRequest";

export const apiGetBanners = getBanners;

// Review

import { getReviews } from "./reviewRequest";

export const apiGetReviews = getReviews;

// Favorite
import { getFavList, addToFavorite } from "./favoriteRequest";

export const apiAddToFavorite = addToFavorite;
export const apiGetFavList = getFavList;

// Shop

import {
  getPopularShops,
  getShopProducts,
  getShopInfo,
  getAllShops,
} from "./shopRequest";
export const apiGetShopProducts = getShopProducts;
export const apiGetPopularShops = getPopularShops;
export const apiGetShopInfo = getShopInfo;
export const apiGetAllShops = getAllShops;

// My

import { patchMyData, patchMyPhoto } from "./myRequest";
export const apiPatchMyData = patchMyData;
export const apiPatchMyPhoto = patchMyPhoto;

// Order

import { postNewOrder, getAllOrders } from "./orderRequest";
export const apiPostNewOrder = postNewOrder;
export const apiGetAllOrders = getAllOrders;
// Chat

import { patchChat, getChat, getAllChats } from "./chatRequest";
export const apiPatchChat = patchChat;
export const apiGetChat = getChat;
export const apiGetAllChats = getAllChats;

// Search

import { getSearchedProducts } from "./searchRequest";

export const apiGetSearchedProducts = getSearchedProducts;
