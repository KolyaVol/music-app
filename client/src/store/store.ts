import { configureStore } from "@reduxjs/toolkit";
import { tracksSlice } from "./slices/TracksSlice";
import { playerSlice } from "./slices/PlayerSlice";
import { currentTrackSlice } from "./slices/CurrentTrackSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      tracks: tracksSlice.reducer,
      currentTrack: currentTrackSlice.reducer,
      player: playerSlice.reducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
