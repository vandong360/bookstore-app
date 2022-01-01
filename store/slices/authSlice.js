import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("auth/user/register", async ({ values }, thunkAPI) => {
  try {
    const api = "https://bookstore360.herokuapp.com/auth/register";
    const response = await axios.post(api, values);
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
  const Logout = false
  return Logout;
});

// export const getAllUser = createAsyncThunk("dashboard/users/", async (thunkAPI) => {
//   try {
//     const data = await AuthService.getAllUser();
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

// export const deleteUser = createAsyncThunk("dashboard/users/delete", async (id, thunkAPI) => {
//   try {
//     const data = await AuthService.delUser(id);
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

    // [getAllUser.fulfilled]: (state, action) => {
    //   state.allUser = action.payload.users;
    // },

    // [deleteUser.fulfilled]: (state, action) => {
    //   state.message = action.payload.message;
    // },
    // [deleteUser.rejected]: (state, action) => {
    //   state.message = action.payload.message;
    // },
  },
});

// Reducer
const { reducer } = authSlice;

export default reducer;
