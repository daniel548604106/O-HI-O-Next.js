import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { cartReducer } from "./reducers/cartReducer";
import { globalReducer } from "./reducers/globalReducer";
import { checkoutReducer } from "./reducers/checkoutReducer";
import userReducer from "./reducers/userReducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user", "global", "checkout"], // only cart will be persisted
};

import { SET_USER_LOGOUT } from "./types";

const rootReducers = combineReducers({
  global: globalReducer,
  user: userReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
});

const appReducer = (state, action) => {
  // Clear all data in redux store to initial.
  if (action.type === SET_USER_LOGOUT) state = undefined;

  return rootReducers(state, action);
};

export default persistReducer(persistConfig, appReducer);
