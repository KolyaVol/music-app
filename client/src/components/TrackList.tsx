"use client";
import React, { useEffect } from "react";
import { ITrack } from "../types/track";
import { Box, Grid } from "@mui/material/";
import TrackItem from "./TrackItem";
import { useAppDispatch, useAppSelector } from "@/hooks/useTypedRTK";
import { fetchTracks } from "@/store/actions-creators/track";

const TrackList: React.FC = () => {
  const dispatch = useAppDispatch();
  const tracks = useAppSelector((state) => state.tracks.tracks);
  const isLoading = useAppSelector((state) => state.tracks.isLoading);
  const error = useAppSelector((state) => state.tracks.error);

  useEffect(() => {
    dispatch(() => fetchTracks());
  }, [dispatch]);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map((track: ITrack) => (
          <TrackItem key={track._id} track={track} />
        ))}
      </Box>
    </Grid>
  );
};

export default TrackList;
