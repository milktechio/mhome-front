import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserDataType } from "../../../utils/types/user.types";

import axios, { authAxios } from "../../../api/config/axios";

export const loginUser = createAsyncThunk(
  "login/user",
  async (userData: { email: string; password: string }) => {
    const formLogin = new FormData();

    formLogin.append("email", userData.email);
    formLogin.append("password", userData.password);

    const loginAccess = await axios.post(`auth/login`, formLogin);

    let token = loginAccess.data.data;
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

    console.log(createNewUser);
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
    const profile = await authAxios.get(`users/my-user`);
    token && localStorage.setItem("token", token);
    return profile.data.data;
  }
);

export const postNewReport = createAsyncThunk(
  "create/report",
  async (reportData: { description: string; image: string }) => {
    const report = new FormData();

    report.append("description", reportData.description);
    report.append("image", reportData.image);
    const createNewReport = await authAxios.post("report/save", report);

    return createNewReport;
  }
);

export const getReports = createAsyncThunk("getAll/report", async () => {
  const profile = await authAxios.get(`report`);

  return profile.data.data;
});

export const updateReportStatus = createAsyncThunk(
  "update/statusreport",
  async (reportData: { id: string; status: string }) => {
    const report = new URLSearchParams();

    report.append("status", reportData.status);

    const createNewReport = await authAxios.put(
      "report/status/" + reportData.id,
      report
    );

    return createNewReport;
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

  successGetUsers: boolean;
  pendingGetUsers: boolean;
  rejectedGetUsers: boolean;
  dataGetUsers: UserDataType[];

  successPostReport: boolean;
  pendingPostReport: boolean;
  rejectedPostReport: boolean;

  successGetReports: boolean;
  pendingGetReports: boolean;
  rejectedGetReports: boolean;
  dataGetReports: any;

  successUpdateStatusReports: boolean;
  pendingUpdateStatusReports: boolean;
  rejectedUpdateStatusReports: boolean;
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

  successPostReport: false,
  pendingPostReport: false,
  rejectedPostReport: false,

  successGetReports: false,
  pendingGetReports: false,
  rejectedGetReports: false,
  dataGetReports: [],

  successUpdateStatusReports: false,
  pendingUpdateStatusReports: false,
  rejectedUpdateStatusReports: false,
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
        state.payloadLogin = localStorage.getItem("token");
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
      })

      .addCase(postNewReport.fulfilled, (state) => {
        state.successPostReport = true;
      })
      .addCase(postNewReport.pending, (state) => {
        state.pendingPostReport = true;
      })
      .addCase(postNewReport.rejected, (state) => {
        state.rejectedPostReport = true;
      })

      .addCase(getReports.fulfilled, (state, action) => {
        state.successGetReports = true;
        state.dataGetReports = action.payload;
      })
      .addCase(getReports.pending, (state) => {
        state.pendingGetReports = true;
      })
      .addCase(getReports.rejected, (state) => {
        state.rejectedGetReports = true;
      })

      .addCase(updateReportStatus.fulfilled, (state) => {
        state.successUpdateStatusReports = true;
        state.pendingUpdateStatusReports = false;
      })
      .addCase(updateReportStatus.pending, (state) => {
        state.pendingUpdateStatusReports = true;
      })
      .addCase(updateReportStatus.rejected, (state) => {
        state.rejectedUpdateStatusReports = true;
      });
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
