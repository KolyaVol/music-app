import styles from "./page.module.css";
import TrackList from "@/components/TrackList";
import { Grid } from "@mui/material";

export default function Home() {
  // useEffect(() => {}, []);
  return (
    <Grid
      container
      spacing={0}
      margin={0}
      style={{
        width: "100vw",
        margin: "0",
        position: "absolute",
        left: 0,
        top: 0,
      }}
    >
      <Grid xs={12}>
        <div style={{ backgroundColor: "blueviolet", height: "30vh" }}></div>
      </Grid>
      <Grid container item xs={12}>
        <Grid xs></Grid>
        <Grid xs={10}>
          <TrackList></TrackList>
        </Grid>
        <Grid xs></Grid>
      </Grid>
    </Grid>
  );
}
