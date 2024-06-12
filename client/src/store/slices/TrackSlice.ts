import { ITrack } from "@/types/track";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
interface IInitialState {
  tracks: [ITrack] | [];
  isLoading: boolean;
  error: any;
}

const initialState = {
  tracks: [
    {
      _id: "string",
      name: "string",
      artist: "string",
      text: "string",
      listens: 0,
      picture: "string",
      audio: "string",
      comments: [{ _id: "string", username: "string", text: "string" }],
    },
    {
      _id: "string1",
      name: "string1",
      artist: "string1",
      text: "string1",
      listens: 0,
      picture: "string",
      audio: "string",
      comments: [{ _id: "string", username: "string", text: "string" }],
    },
  ],
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
