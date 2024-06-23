"use client";
import React from "react";
import { Box, Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { ITrack } from "../../types/track";
import TrackList from "../../components/TrackList";
import { fetchTracks } from "../../store/actions-creators/track";

const Index = () => {
  const router = useRouter();
  //const { tracks, error } = useTypedSelector((state) => state.track);

  //   if (error) {
  //     return (
  //       <>
  //         <h1>{error}</h1>
  //       </>
  //     );
  //   }

  return (
    <>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button onClick={() => router.push("/tracks/create")}>
                Загрузить
              </Button>
            </Grid>
          </Box>
          <TrackList
            tracks={[
              {
                _id: "string",
                name: "string",
                artist: "string",
                text: "string",
                listens: 0,
                picture: "string",
                audio: "string",
                comments: [
                  { _id: "string", username: "string", text: "string" },
                ],
              },
              {
                _id: "string1",
                name: "string1",
                artist: "string1",
                text: "string1",
                listens: 0,
                picture: "string",
                audio: "string",
                comments: [
                  { _id: "string", username: "string", text: "string" },
                ],
              },
            ]}
          />
        </Card>
      </Grid>
    </>
  );
};

export default Index;

// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ store }) => {
//     const dispatch = store.dispatch as NextThunkDispatch;
//     await dispatch(await fetchTracks());
//   }
// );
