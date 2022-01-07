import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createOrder = createAsyncThunk("order/created", async (values, thunkAPI) => {
  try {
    const api = "https://bookstore360.herokuapp.com/orders/";
    const response = await axios.post(api, values);
    if (response.data.success) {
      return response.data;
    } else {
      return thunkAPI.rejectWithValue(response.data);
    }
  } catch (error) {
    console.log(error.response.message);
    return thunkAPI.rejectWithValue(error.response.message);
  }
});

export const getUserOrders = createAsyncThunk("order/user/get", async (userId, thunkAPI) => {
  try {
    const api = "https://bookstore360.herokuapp.com/orders/user/";

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

export const cancelOrder = createAsyncThunk("order/user/cancel", async (orderId, thunkAPI) => {
  try {
    const api = "https://bookstore360.herokuapp.com/dashboard/orders/";
    const status = {
      status: "canceled"
    };
    const response = await axios.put(api + `${orderId}`, status);
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

const initialState = {
  message: null,
  allOrder: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: {
    [createOrder.fulfilled]: (state, action) => {
      state.message = action.payload.message;
    },
    [createOrder.rejected]: (state, action) => {
      state.message = action.payload.message;
    },
    [getUserOrders.fulfilled]: (state, action) => {
      state.allOrder = action.payload.order;
      state.message = action.payload.message;
    },

    [cancelOrder.fulfilled]: (state, action) => {
      state.message = action.payload.message;
    },
    [cancelOrder.rejected]: (state, action) => {
      state.message = action.payload.message;
    },
  },
});

// Reducer
const { reducer } = orderSlice;

export default reducer;
