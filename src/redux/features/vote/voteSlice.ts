import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authAxios } from "@/api/config/axios";

export const createVoting = createAsyncThunk(
  "create/voting",
  async (votingData: {
    title: string;
    description: string;
    options: string;
    minimum_participations: string;
    status: string;
    date_end: string;
    image: any;
  }) => {
    const voting = new FormData();

    voting.append("title", votingData.title);
    voting.append("description", votingData.description);
    voting.append("options", votingData.options);
    voting.append("minimum_participations", votingData.minimum_participations);
    voting.append("status", votingData.status);
    voting.append("date_end", votingData.date_end);
    voting.append("image", votingData.image);

    const createNewVoting = await authAxios.post("vote", voting);

    return createNewVoting.data;
  }
);

export const getVotes = createAsyncThunk("get/votes", async () => {
  const voting = await authAxios.get(`vote`);

  return voting.data;
});

export const getVoting = createAsyncThunk("get/voting", async (id: string) => {
  const voting = await authAxios.get(`vote/${id}/result`);
  console.log(voting.data);
  return voting.data;
});

export const deleteVote = createAsyncThunk(
  "delete/vote",
  async (id: string) => {
    const voting = await authAxios.delete(`vote/${id}`);

    return voting;
  }
);

export const updateVoteStatus = createAsyncThunk(
  "update/voteStatus",
  async (voteData: { id: string; status: string }) => {
    const vote = new URLSearchParams();
    vote.append("status", voteData.status);
    const updateVote = await authAxios.put("vote/" + voteData.id, vote);

    return updateVote;
  }
);

export const postVote = createAsyncThunk(
  "post/vote",
  async (voteData: { id: string; option: string }) => {
    const vote = new URLSearchParams();
    vote.append("status", voteData.id);
    vote.append("status", voteData.option);
    const postVote = await authAxios.post("voting", vote);

    return postVote.data;
  }
);

type initialState = {
  successPostVoting: boolean;
  pendingPostVoting: boolean;
  rejectedPostVoting: boolean;
  dataPostVoting: any;

  successGetVotes: boolean;
  pendingGetVotes: boolean;
  rejectedGetVotes: boolean;
  dataGetVotes: any;

  successGetVoting: boolean;
  pendingGetVoting: boolean;
  rejectedGetVoting: boolean;
  dataGetVoting: any;

  successDeleteVoting: boolean;
  pendingDeleteVoting: boolean;
  rejectedDeleteVoting: boolean;

  successUpdateVote: boolean;
  pendingUpdateVote: boolean;
  rejectedUpdateVote: boolean;

  successPotsVote: boolean;
};

const initialState: initialState = {
  successPostVoting: false,
  pendingPostVoting: false,
  rejectedPostVoting: false,
  dataPostVoting: [],

  successGetVotes: false,
  pendingGetVotes: false,
  rejectedGetVotes: false,
  dataGetVotes: [],

  successGetVoting: false,
  pendingGetVoting: false,
  rejectedGetVoting: false,
  dataGetVoting: [],

  successDeleteVoting: false,
  pendingDeleteVoting: false,
  rejectedDeleteVoting: false,

  successUpdateVote: false,
  pendingUpdateVote: false,
  rejectedUpdateVote: false,

  successPotsVote: false,
};

export const voteSlice = createSlice({
  name: "vote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createVoting.fulfilled, (state, action) => {
        state.successPostVoting = true;
        state.dataPostVoting = action.payload;
      })
      .addCase(createVoting.rejected, (state) => {
        state.rejectedPostVoting = true;
      })
      .addCase(createVoting.pending, (state) => {
        state.pendingPostVoting = true;
      })

      .addCase(getVotes.fulfilled, (state, action) => {
        state.successGetVotes = true;
        state.dataGetVotes = action.payload;
      })
      .addCase(getVotes.rejected, (state) => {
        state.rejectedGetVotes = true;
      })
      .addCase(getVotes.pending, (state) => {
        state.pendingGetVotes = true;
      })

      .addCase(getVoting.fulfilled, (state, action) => {
        state.successGetVoting = true;
        state.dataGetVoting = action.payload;
      })
      .addCase(getVoting.rejected, (state) => {
        state.rejectedGetVoting = true;
      })
      .addCase(getVoting.pending, (state) => {
        state.pendingGetVoting = true;
      })

      .addCase(deleteVote.fulfilled, (state) => {
        state.successDeleteVoting = true;
      })
      .addCase(deleteVote.rejected, (state) => {
        state.rejectedDeleteVoting = true;
      })
      .addCase(deleteVote.pending, (state) => {
        state.pendingDeleteVoting = true;
      })

      .addCase(updateVoteStatus.fulfilled, (state) => {
        state.successUpdateVote = true;
      })
      .addCase(updateVoteStatus.rejected, (state) => {
        state.rejectedUpdateVote = true;
      })
      .addCase(updateVoteStatus.pending, (state) => {
        state.pendingUpdateVote = true;
      })

      .addCase(postVote.fulfilled, (state) => {
        state.successPotsVote = true;
      });
  },
});

export default voteSlice.reducer;
