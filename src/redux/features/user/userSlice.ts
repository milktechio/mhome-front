import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserDataType } from "../../../utils/types/user.types";
import axios from "axios";

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

export const getUsers = createAsyncThunk(
  "getUsers/user",
  async (token: string) => {
    try {
      const profile = await axios.get(`${url}users`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return profile.data.data;
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
        headers: { Authorization: `Bearer ${token}` },
      });

      return profile.data.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const postNewReport = createAsyncThunk(
  "create/report",
  async (reportData: { token: string; description: string; image: string }) => {
    try {
      const report = new FormData();

      report.append("description", reportData.description);
      report.append("image", reportData.image);
      const createNewReport = await axios.post(url + "report/save", report, {
        headers: {
          Authorization: `Bearer ${reportData.token}`,
        },
      });

      return createNewReport;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getReports = createAsyncThunk(
  "getAll/report",
  async (token: string) => {
    try {
      const profile = await axios.get(`${url}report`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return profile.data.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateReportStatus = createAsyncThunk(
  "update/statusreport",
  async (reportData: { token: string; id: string; status: string }) => {
    try {
      const report = new URLSearchParams();

      report.append("status", reportData.status);

      const createNewReport = await axios.put(
        url + "report/status/" + reportData.id,
        report,
        {
          headers: {
            Authorization: `Bearer ${reportData.token}`,
          },
        }
      );

      return createNewReport;
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
