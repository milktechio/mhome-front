import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const loginUser = createAsyncThunk(
  "login/user",
  async (userData: { email: string; password: string }) => {
    try {
      const loginAccess = axios.post("{{LOCAL}}auth/login", {
        email: userData.email,
        password: userData.password,
      });

      console.log(loginAccess);
      return loginAccess;
    } catch (err) {
      console.log(err);
    }
  }
);

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function

export default loginSlice.reducer;
