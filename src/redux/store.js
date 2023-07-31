import { configureStore } from "@reduxjs/toolkit";
import { loginUserReducer } from "./reducers/loginUserReducer";
import { cartReducer } from "./reducers/cardReducer";
import { orderReducer, ordersReducer } from "./reducers/orderReducer";
import { adminReducer } from "./reducers/adminReducer";

const store = configureStore({
  reducer: {
    user: loginUserReducer,
    cart: cartReducer,
    order: orderReducer,
    orders: ordersReducer,
    admin: adminReducer,
  },
});

export default store;
export const server = "https://foodie-server-iota.vercel.app/api/v1";
