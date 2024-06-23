"use client";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ITrack } from "../types/track";
import { Card, Grid, IconButton } from "@mui/material";
import styles from "../styles/TrackItem.module.scss";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { deleteTrack } from "@/store/actions-creators/track";
import { useAppDispatch } from "@/hooks/useTypedRTK";
import { changePauseState, setActive } from "@/store/slices/PlayerSlice";
import Image from "next/image";

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const play = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    dispatch(
      setActive({ name: track.name, artist: track.artist, audio: track.audio }),
      changePauseState()
    );
  };
  const delTrack = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    deleteTrack(track._id);
  };

  return (
    <Card
      className={styles.track}
      onClick={() => router.push("/tracks/" + track._id)}
    >
      <IconButton onClick={play}>
        {!active ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Image
      style={{borderRadius: '0.25rem'}}
        width={70}
        height={70}
        src={"http://localhost:5000/" + track.picture}
        alt={track.name}
      />
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
      </Grid>
      {active && <div>02:42 / 03:22</div>}
      <IconButton onClick={(e) => delTrack(e)} style={{ marginLeft: "auto" }}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
