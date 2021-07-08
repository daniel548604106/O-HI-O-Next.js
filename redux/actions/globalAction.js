import {
  SET_USER_LOGIN,
  CLOSE_LOGIN_MODAL,
  OPEN_LOGIN_MODAL,
  OPEN_SIDE_MENU,
  TOGGLE_SIDE_MENU,
  CLOSE_SIDE_MENU,
  ADD_TO_FAVORITE,
  GET_FAVORITE_LIST,
} from "../types";

import Cookie from "js-cookie";
import { apiAddToFavorite, apiGetFavList } from "../../api/index";

export const openLoginModal = () => {
  return { type: OPEN_LOGIN_MODAL };
};
export const closeLoginModal = () => {
  return { type: CLOSE_LOGIN_MODAL };
};

export const setUserLoggedIn = () => {
  return { type: SET_USER_LOGIN };
};

export const toggleSideMenu = () => {
  return { type: TOGGLE_SIDE_MENU };
};

export const openSideMenu = () => {
  return {
    type: OPEN_SIDE_MENU,
  };
};
export const closeSideMenu = () => {
  return {
    type: CLOSE_SIDE_MENU,
  };
};

export const getFavList = () => async (dispatch) => {
  try {
    const { data } = await apiGetFavList();
    console.log("redux, favlist", data);
    dispatch({ type: GET_FAVORITE_LIST, payload: data.userFavList });
  } catch (error) {
    console.log(error);
  }
};

export const addToFavorite = (id, type) => async (dispatch) => {
  try {
    // dispatch({ type: ADD_TO_FAVORITE });
    const token = Cookie.get("token");
    await apiAddToFavorite(id, token, type);
    dispatch(getFavList(token));
  } catch (error) {
    console.log(error);
  }
};
