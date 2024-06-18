import { ITrack } from "@/types/track";
import { createSlice } from "@reduxjs/toolkit";
interface IInitialState {
  tracks: [ITrack] | [];
  isLoading: boolean;
  error: any;
}

const initialState: IInitialState = {
  tracks: [],
  isLoading: false,
  error: null,
};
export const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    fetchTracksStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchTracksSuccess(state, action) {
      state.isLoading = false;
      state.tracks = action.payload;
    },
    fetchTracksFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchTracksStart, fetchTracksSuccess, fetchTracksFailure } =
  tracksSlice.actions;
