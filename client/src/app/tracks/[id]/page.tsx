"use client";
import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useInput } from "../../../hooks/useInput";
import Image from "next/image";
import { useAppSelector } from "@/hooks/useTypedRTK";
//@ts-ignore
const TrackPage = () => {
  const track = useAppSelector((state) => state.currentTrack.track);
  const router = useRouter();
  const username = useInput("");
  const text = useInput("");

  // const addComment = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/tracks/comment",
  //       {
  //         username: username.value,
  //         text: text.value,
  //         trackId: track._id,
  //       }
  //     );
  //     setTrack({ ...track, comments: [...track.comments, response.data] });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  const addComment = () => {
    console.log("add comment");
  };

  if (!track) {
    return (
      <>
        <h2>Oops, can`t find track</h2>
        <Button onClick={() => router.push("/tracks")}>Go back</Button>
      </>
    );
  }
  return (
    <>
      <Button
        variant={"outlined"}
        style={{ fontSize: 32 }}
        onClick={() => router.push("/tracks")}
      >
        К списку
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <Image
          src={"http://localhost:5000/" + track.picture}
          width={200}
          height={200}
          alt="alt"
        />
        <div style={{ marginLeft: 30 }}>
          <h1>Название трека - {track.name}</h1>
          <h1>Исполнитель - {track.artist}</h1>
          <h1>Прослушиваний - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова в треке</h1>
      <p>{track.text}</p>
      <h1>Комментарии</h1>
      <Grid container>
        <TextField label="Ваше имя" fullWidth {...username} />
        <TextField label="Комментарий" {...text} fullWidth multiline rows={4} />
        <Button onClick={addComment}>Отправить</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div key={comment.username}>
            <div>Автор - {comment.username + Math.random() * 10000}</div>
            <div>Комментарий - {comment.text}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TrackPage;
