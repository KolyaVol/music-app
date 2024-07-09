import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StoreProvider from "./StoreProvider";
import Player from "@/components/Player";
import { Grid } from "@mui/material";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music App",
  description: "My music next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <StoreProvider count={0}>
          <div className={styles.bg}></div>
          <Grid container sx={{ paddingTop: "30vh" }}>
            <Grid xs={0.25} sm={0.5} md={1}></Grid>
            <Grid
              container
              xs={11.5}
              sm={11}
              md={10}
              position="relative"
              direction="column"
            >
              <Navbar></Navbar>

              {children}
              <Player></Player>
            </Grid>
            <Grid xs={0.25} sm={0.5} md={1}></Grid>
          </Grid>
        </StoreProvider>
      </body>
    </html>
  );
}
