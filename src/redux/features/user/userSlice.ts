import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { UserDataType } from "../../../utils/types/user.types";

const url = "https://api-mhome.milktech.io/api/";

export const loginUser = createAsyncThunk(
  "login/user",
  async (userData: { email: string; password: string }) => {
    const formLogin = new FormData();

    formLogin.append("email", userData.email);
    formLogin.append("password", userData.password);

    try {
      const loginAccess = await axios.post(`${url}auth/login`, formLogin);

      return loginAccess.data.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const registerUser = createAsyncThunk(
  "register/user",
  async (registerData: {
    username: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
    confirmpassword: string;
  }) => {
    try {
      const formRegister = new FormData();

      formRegister.append("username", registerData.username);
      formRegister.append("name", registerData.name);
      formRegister.append("lastname", registerData.lastname);
      formRegister.append("email", registerData.email);
      formRegister.append("password", registerData.password);
      formRegister.append("password_confirmation", registerData.password);

      const createNewUser = await axios.postForm(
        url + "auth/register",
        formRegister
      );

      console.log(createNewUser);
      return createNewUser;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getMyProfile = createAsyncThunk(
  "profile/user",
  async (token: string) => {
    try {
      const profile = await axios.get(`${url}users/my-user`, {
        headers: { Authorization: token },
      });

      return profile.data;
    } catch (err) {
      console.log(err);
    }
  }
);

type initialState = {
  successLogin: boolean;
  pendingLogin: boolean;
  rejectedLogin: boolean;
  payloadLogin: string;

  successRegister: boolean;
  pendingRegister: boolean;
  rejectedRegister: boolean;

  successMyProfile: boolean;
  pendingMyProfile: boolean;
  rejectedMyProfile: boolean;
  dataMyProfile: UserDataType;
};

const initialState: initialState = {
  successLogin: false,
  pendingLogin: false,
  rejectedLogin: false,
  payloadLogin: "",

  successRegister: false,
  pendingRegister: false,
  rejectedRegister: false,

  successMyProfile: false,
  pendingMyProfile: false,
  rejectedMyProfile: false,
  dataMyProfile: {
    name: "",
    lastname: "",
    email: "",
    mobile: "",
    gender: "",
    eth_addres: "",
    chain_id: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.payloadLogin = "";
      state.pendingLogin = false;
      state.successLogin = false;
      state.rejectedLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.successLogin = true;
        state.payloadLogin = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.successLogin = true;
      })
      .addCase(loginUser.rejected, (state) => {
        state.successLogin = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.successRegister = true;
      })
      .addCase(getMyProfile.fulfilled, (state, action) => {
        state.successMyProfile = true;
        state.dataMyProfile = action.payload; 
      });
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
