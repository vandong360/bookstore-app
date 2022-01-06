import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get api new book for home screen
export const getNewProd = createAsyncThunk("dashboard/product/", async (thunkAPI) => {
  try {
    const api = "https://bookstore360.herokuapp.com/dashboard/product";
    const response = await axios.get(api);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

// get api top rating book for home screen
export const getHotProd = createAsyncThunk("dashboard/product/trending", async (thunkAPI) => {
  try {
    const api = "https://bookstore360.herokuapp.com/dashboard/product/trending";
    const response = await axios.get(api);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

// get api top rating book for home screen
export const getByCategory = createAsyncThunk("dashboard/get/category", async (category, thunkAPI) => {
  try {
    const api = "https://bookstore360.herokuapp.com/dashboard/get?category=";
    const response = await axios.get(api + `${category}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState = {
  message: null,
  newProducts: null,
  hotProducts: null,
  products: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getNewProd.fulfilled]: (state, action) => {
      state.newProducts = action.payload.products;
    },

    [getHotProd.fulfilled]: (state, action) => {
      state.hotProducts = action.payload.products;
    },

    [getByCategory.fulfilled]: (state, action) => {
      state.hotProducts = action.payload.products;
    },
  },
});
// Reducer
const { reducer } = productSlice;

export default reducer;
