import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Player from "@/components/Player";
import TrackList from "@/components/TrackList";

export default function Home() {
  return (
    <>
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
            comments: [{ _id: "string", username: "string", text: "string" }],
          },
          {
            _id: "string1",
            name: "string1",
            artist: "string1",
            text: "string1",
            listens: 0,
            picture: "string",
            audio: "string",
            comments: [{ _id: "string", username: "string", text: "string" }],
          },
        ]}
      ></TrackList>
    </>
  );
}
