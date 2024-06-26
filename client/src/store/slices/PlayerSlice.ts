import { createSlice } from "@reduxjs/toolkit";
interface IPlayer {
  pause?: boolean;
  volume?: number;
  active?: {
    name: string;
    artist: string;
    audio: string;
  };
  duration?: number;
  currentTime?: number;
}

const initialState: IPlayer | null = {
  pause: true,
  volume: 0,
  duration: 0,
  currentTime: 0,
};
export const playerSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setActive(state, action) {
      state.active = action.payload;
    },
    setDuration(state, action) {
      state.duration = action.payload;
    },
    changePauseState(state) {
      state.pause = !state.pause;
    },
    changeVolume(state, action) {
      state.volume = action.payload / 100;
    },
    changeCurrentTime(state, action) {
      state.currentTime = action.payload;
    },
  },
});

export const {
  setActive,
  setDuration,
  changePauseState,
  changeVolume,
  changeCurrentTime,
} = playerSlice.actions;
