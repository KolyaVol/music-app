import { configureStore } from "@reduxjs/toolkit";
import { tracksSlice } from "./slices/TrackSlice";
import { playerSlice } from "./slices/PlayerSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { tracks: tracksSlice.reducer, player: playerSlice.reducer },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
