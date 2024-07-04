import { ITrack } from "@/types/track";
import { createSlice } from "@reduxjs/toolkit";
interface IInitialState {
  track: ITrack | null;
}

const initialState: IInitialState = {
  track: null,
};
export const currentTrackSlice = createSlice({
  name: "currentTrack",
  initialState,
  reducers: {
    setCurrentTrack(state, action) {
      state.track = action.payload;
    },
    removeCurrentTrack(state) {
      state.track = null;
    },
  },
});

export const { setCurrentTrack, removeCurrentTrack } =
  currentTrackSlice.actions;
