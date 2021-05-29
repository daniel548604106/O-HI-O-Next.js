import {
  CLOSE_LOGIN_MODAL,
  OPEN_LOGIN_MODAL,
  ADD_TO_FAVORITE,
  GET_FAVORITE_LIST,
  OPEN_SIDE_MENU,
  CLOSE_SIDE_MENU,
  TOGGLE_SIDE_MENU,
} from "../types";

let initialState = {
  isLoginModalShow: false,
  loading: false,
  favoriteProducts: [],
  favoriteShops: [],
  isSideMenuOpen: false,
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_LOGIN_MODAL:
      return { ...state, isLoginModalShow: false };
    case OPEN_LOGIN_MODAL:
      return { ...state, isLoginModalShow: true };
    case OPEN_SIDE_MENU:
      return {
        ...state,
        isSideMenuOpen: true,
      };
    case CLOSE_SIDE_MENU:
      return {
        ...state,
        isSideMenuOpen: false,
      };
    case TOGGLE_SIDE_MENU:
      return {
        ...state,
        isSideMenuOpen: !state.isSideMenuOpen,
      };
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favoriteShops: action.payload.favoriteShops,
        favoriteProducts: action.payload.favoriteProducts,
      };
    case GET_FAVORITE_LIST:
      return {
        ...state,
        favoriteShops: action.payload.favoriteShops,
        favoriteProducts: action.payload.favoriteProducts,
      };
    default:
      return state;
  }
};
