import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";

const reducer = {
  auth: authReducer,
  products: productsReducer,
  cart: cartReducer,
  order: orderReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;

//folder tree:
//slides
//thunks
//selectors

// or normal way:
//actions
//reducers
//types
