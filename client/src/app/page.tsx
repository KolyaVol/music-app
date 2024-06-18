import styles from "./page.module.css";
import Player from "@/components/Player";
import TrackList from "@/components/TrackList";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {}, []);
  return (
    <>
      <TrackList></TrackList>
    </>
  );
}
