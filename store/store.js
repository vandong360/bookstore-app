import { configureStore } from '@reduxjs/toolkit'
import productsReducer from "./slices/productSlice";

const reducer = {
  products: productsReducer,
}
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
    