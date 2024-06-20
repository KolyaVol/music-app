import axios from "axios";
import {
  fetchTracksFailure,
  fetchTracksStart,
  fetchTracksSuccess,
} from "../slices/TrackSlice";

export const fetchTracks = async (dispatch: any) => {
  dispatch(fetchTracksStart());

  try {
    const response = await axios.get("http://localhost:5000/tracks");
    dispatch(fetchTracksSuccess(response.data));
  } catch (error) {
    //@ts-ignore
    dispatch(fetchTracksFailure(error.message));
  }
};

export const deleteTrack = async (id: string) => {
  try {
    const response = await axios.delete("http://localhost:5000/tracks/" + id);
  } catch (error) {
    console.log(error);
  }
};
