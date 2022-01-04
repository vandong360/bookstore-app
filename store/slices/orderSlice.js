import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createOrder = createAsyncThunk("order/created", async (values ,thunkAPI) => {
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

// export const getAll = createAsyncThunk("dashboard/orders/", async (thunkAPI) => {
//   try {
//     const data = await OrderService.getAllOrder();
//     if (data.success) {
//       return data;
//     } else {
//       return thunkAPI.rejectWithValue(data);
//     }
//   } catch (error) {
//     console.log(error.response.message);
//     return thunkAPI.rejectWithValue(error.response.message);
//   }
// });

// export const changeStatus = createAsyncThunk("dashboard/orders/changeStatus/:id", async ({ id, status }, thunkAPI) => {
//   try {
//     const data = await OrderService.changeStatus(id, status);
//     if (data.success) {
//       return data;
//     } else {
//       return thunkAPI.rejectWithValue(data);
//     }
//   } catch (error) {
//     console.log(error.response.message);
//     return thunkAPI.rejectWithValue(error.response.message);
//   }
// });

// export const getOneOrder = createAsyncThunk("dashboard/orders/getOne", async (id, thunkAPI) => {
//   try {
//     const data = await OrderService.getOneOrder(id);
//     if (data.success) {
//       return data;
//     } else {
//       return thunkAPI.rejectWithValue(data);
//     }
//   } catch (error) {
//     console.log(error.response.message);
//     return thunkAPI.rejectWithValue(error.response.message);
//   }
// });

const initialState = {
  message: null,
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
  },
});

// Reducer
const { reducer } = orderSlice;

export default reducer;
