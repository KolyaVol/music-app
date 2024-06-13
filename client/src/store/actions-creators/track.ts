import axios from "axios";
import {
  fetchTracksFailure,
  fetchTracksStart,
  fetchTracksSuccess,
} from "../slices/TrackSlice";

export const fetchTracks = async (dispatch: any) => {
  console.log(1);

  dispatch(fetchTracksStart());

  try {
    console.log(2);

    const response = await axios.get("http://localhost:5000/tracks"); // Замените '/api/tracks' на ваш API-адрес
    dispatch(fetchTracksSuccess(response.data));
    console.log(response);
  } catch (error) {
    //@ts-ignore
    dispatch(fetchTracksFailure(error.message));
  }
};
