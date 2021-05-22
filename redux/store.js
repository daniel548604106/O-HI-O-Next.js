import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import { globalReducer } from "./reducers/globalReducer";
import { cartReducer } from "./reducers/cartReducer";
import { checkoutReducer } from "./reducers/checkoutReducer";
const store = configureStore({
  reducer: {
    user: userReducer,
    global: globalReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
  },
});

export default store;
