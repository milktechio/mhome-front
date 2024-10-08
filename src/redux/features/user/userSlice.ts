import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { authAxios } from "@/api/config/axios";

export const loginUser = createAsyncThunk(
  "login/user",
  async (userData: { email: string; password: string }) => {
    const formLogin = new FormData();

    formLogin.append("email", userData.email);
    formLogin.append("password", userData.password);

    const loginAccess = await axios.post(`auth/login`, formLogin);

    const token = loginAccess.data.data;
    localStorage.setItem("token", token);
    return token;
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
    const formRegister = new FormData();

    formRegister.append("username", registerData.username);
    formRegister.append("name", registerData.name);
    formRegister.append("lastname", registerData.lastname);
    formRegister.append("email", registerData.email);
    formRegister.append("password", registerData.password);
    formRegister.append("password_confirmation", registerData.password);

    const createNewUser = await axios.postForm("auth/register", formRegister);

    return createNewUser;
  }
);

export const getUsers = createAsyncThunk("getUsers/user", async () => {
  const profile = await authAxios.get(`users`);
  return profile.data.data;
});

export const getMyProfile = createAsyncThunk(
  "profile/user",
  async (token: string) => {
    const profile = await axios.get("users/my-user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    token && localStorage.setItem("token", token);
    return profile.data.data;
  }
);

type initialStateType = {
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
  dataMyProfile: {
    profile: {
      name: string;
      lastname: string;
      email: string;
      mobile: string;
      gender: string;
      eth_addres: string;
      chain_id: string;
    };
    roles: [
      {
        id: number;
        name: string;
      }
    ];
  };
  successGetUsers: boolean;
  pendingGetUsers: boolean;
  rejectedGetUsers: boolean;
  dataGetUsers: any[];
};

const initialState: initialStateType = {
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
    profile: {
      name: "",
      lastname: "",
      email: "",
      mobile: "",
      gender: "",
      eth_addres: "",
      chain_id: "",
    },
    roles: [
      {
        id: 0,
        name: "",
      },
    ],
  },

  successGetUsers: false,
  pendingGetUsers: false,
  rejectedGetUsers: false,
  dataGetUsers: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      localStorage.clear();
      state.payloadLogin = "";
      state.pendingLogin = false;
      state.successLogin = false;
      state.rejectedLogin = false;
      state.successMyProfile = false;
      state.pendingMyProfile = false;
      state.rejectedMyProfile = false;
      state.dataMyProfile = {
        profile: {
          name: "",
          lastname: "",
          email: "",
          mobile: "",
          gender: "",
          eth_addres: "",
          chain_id: "",
        },
        roles: [
          {
            id: 0,
            name: "",
          },
        ],
      };
      window.location.href = "/";
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
        state.pendingMyProfile = false;
        state.dataMyProfile = action.payload;
        state.payloadLogin = localStorage.getItem("token") ?? "";
      })
      .addCase(getMyProfile.pending, (state) => {
        state.pendingMyProfile = true;
      })
      .addCase(getMyProfile.rejected, (state) => {
        state.rejectedMyProfile = true;
      })

      .addCase(getUsers.fulfilled, (state, action) => {
        state.successGetUsers = true;
        state.dataGetUsers = action.payload;
      })
      .addCase(getUsers.pending, (state) => {
        state.pendingGetUsers = true;
      })
      .addCase(getUsers.rejected, (state) => {
        state.rejectedGetUsers = true;
      });
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
