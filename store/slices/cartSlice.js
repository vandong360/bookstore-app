import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCart = createAsyncThunk("cart/user/", async (userId, thunkAPI) => {
  try {
    const api = "https://bookstore360.herokuapp.com/cart/";

    const response = await axios.get(api + `${userId}`);
    if (response.data.success) {
      return response.data;
    } else {
      return thunkAPI.rejectWithValue(response.data);
    }
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const updateCart = createAsyncThunk("cart/user/updated", async (v, thunkAPI) => {
  try {
    const api = "https://bookstore360.herokuapp.com/cart/";
    const values = { products: v.products };
    const response = await axios.put(api + `${v.cartId}`, values);
    if (response.data.success) {
      return response.data;
    } else {
      return thunkAPI.rejectWithValue(response.data);
    }
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState = { cart: null, itemCart: null };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: {
    [getCart.fulfilled]: (state, action) => {
      state.cart = action.payload.cart;
      state.itemCart = action.payload.cart.products;
    },
    [getCart.rejected]: (state) => {
      state.cart = null;
      state.itemCart = null;
    },
    [updateCart.fulfilled]: (state, action) => {
    },
    [updateCart.rejected]: (state) => {
    },
  },
});

// Reducer
const { reducer } = cartSlice;

export default reducer;
