import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import StoreProvider from "./StoreProvider";
import Player from "@/components/Player";

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
      <body className={styles.padd}>
        <StoreProvider count={0}>
          <Navbar></Navbar>
          {children}
          <Player></Player>
        </StoreProvider>
      </body>
    </html>
  );
}
