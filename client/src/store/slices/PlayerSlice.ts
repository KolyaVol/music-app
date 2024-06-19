import { createSlice } from "@reduxjs/toolkit";

interface IPlayer {
  pause: boolean;
  volume: number;
  active: {
    name: string;
    artist: string;
    audio: string;
  };
  duration: number;
  currentTime: number;
}

const initialState: IPlayer | null = null;
export const playerSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    // fetchTracksStart(state) {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // fetchTracksSuccess(state, action) {
    //   state.isLoading = false;
    //   state.tracks = action.payload;
    // },
    // fetchTracksFailure(state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export const {} = playerSlice.actions;
