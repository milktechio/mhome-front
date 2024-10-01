import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authAxios } from "@/api/config/axios";

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

  console.log(profile);
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

type initialStateType = {
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

const initialState: initialStateType = {
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

export const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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

export default reportSlice.reducer;
