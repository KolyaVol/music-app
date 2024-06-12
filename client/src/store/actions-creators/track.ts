import { Dispatch } from "react";
import { TrackAction, TrackActionTypes } from "../../types/track";
import axios from "axios";
import {
  fetchTracksFailure,
  fetchTracksStart,
  fetchTracksSuccess,
} from "../slices/TrackSlice";

export const fetchTracks = () => async (dispatch: any) => {
  dispatch(fetchTracksStart());

  try {
    const response = await axios.get("localhost:5000/tracks"); // Замените '/api/tracks' на ваш API-адрес
    dispatch(fetchTracksSuccess(response.data));
  } catch (error) {
    //@ts-ignore
    dispatch(fetchTracksFailure(error.message));
  }
};
