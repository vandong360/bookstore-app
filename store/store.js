import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";

const reducer = {
  auth: authReducer,
  products: productsReducer,
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
