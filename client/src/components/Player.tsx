"use client";
import React, { useEffect, useState } from "react";
import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Button, Grid, IconButton } from "@mui/material";
import styles from "../styles/Player.module.scss";
import TrackProgress from "./TrackProgress";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedRTK";
import {
  setDuration,
  changeCurrentTime,
  changeVolume,
  changePauseState,
} from "@/store/slices/PlayerSlice";
import { normalizeSeconds } from "@/helpers/normalizeSeconds";
let audio: HTMLAudioElement;

const Player = () => {
  const { pause, volume, active, duration, currentTime } = useAppSelector(
    (state) => state.player
  );
  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
      setAudio();
    } else {
      setAudio();
      play();
    }
  }, [active]);

  const setAudio = () => {
    if (active) {
      audio.src = "http://localhost:5000/" + active.audio;

      audio.onerror = () => {
        setError(true);
      };
      audio.volume = (volume as number) / 100;
      audio.onloadedmetadata = () => {
        dispatch(setDuration(Math.ceil(audio.duration)));
        play();
      };
      audio.ontimeupdate = () => {
        dispatch(changeCurrentTime(Math.ceil(audio.currentTime)));

        if (audio.currentTime === audio.duration) {
          dispatch(changePauseState(true));
        }
      };
    }
  };

  const play = () => {
    if (!error) {
      if (pause) {
        audio.play();
        dispatch(changePauseState(false));
      } else {
        audio.pause();
        dispatch(changePauseState(true));
      }
    } else console.log(error);
  };

  const changePlayerVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    dispatch(changeVolume(+e.target.value * 100));
  };

  const changeCurrentPlayerTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    dispatch(changeCurrentTime(+e.target.value));
    if (audio.currentTime === audio.duration) {
      dispatch(changePauseState(true));
    }
  };

  if (!active) {
    return null;
  }
  return (
    <div className={styles.player}>
      <Button onClick={play} disabled={error}>
        {pause ? <PlayArrow /> : <Pause />}
      </Button>

      <Grid
        container
        direction="column"
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{active?.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{active?.artist}</div>
      </Grid>
      <TrackProgress
        left={currentTime}
        right={duration}
        nleft={normalizeSeconds(+currentTime)}
        nright={normalizeSeconds(+duration)}
        onChange={changeCurrentPlayerTime}
      />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <VolumeUp />
        <TrackProgress
          left={volume as number}
          right={100}
          onChange={changePlayerVolume}
        />
      </div>
    </div>
  );
};

export default Player;
