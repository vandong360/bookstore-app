import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("auth/user/register", async ({ values }, thunkAPI) => {
  try {
    const api = "https://bookstore360.herokuapp.com/auth/register";
    const response = await axios.post(api, values);
    if (response.data.success) {
      const userId = response.data.user._id;
      const products = []
      const apiCart = "https://bookstore360.herokuapp.com/cart/";
      
      await axios.post(apiCart, { userId, products });
      return response.data;
    } else {
      return thunkAPI.rejectWithValue(response.data);
    }
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const login = createAsyncThunk("auth/user/login", async ({ username, password }, thunkAPI) => {
  try {
    const api = "https://bookstore360.herokuapp.com/auth/login";
    const response = await axios.post(api, { username, password });
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

export const logout = createAsyncThunk("logout", (thunkAPI) => {
  const Logout = false;
  return Logout;
});

const initialState = { isAuthenticated: false, user: null, message: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    [register.rejected]: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload.message;
    },

    [login.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },

    [login.rejected]: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload.message;
    },

    [logout.fulfilled]: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

// Reducer
const { reducer } = authSlice;

export default reducer;
