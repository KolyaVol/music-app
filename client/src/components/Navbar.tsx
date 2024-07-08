"use client";
import { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useRouter } from "next/navigation";
import { Button, Grid, ListItemButton } from "@mui/material";
import Link from "next/link";
import useResize from "../hooks/useResize";
import styles from "../styles/Nav.module.scss";
const menuItems = [
  { text: "Главная", href: "/" },
  { text: "Список треков", href: "/tracks" },
  { text: "Список альбомов", href: "/albums" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const width = useResize()[0];

  return (
    <>
      <header className={styles.navBar}>
        <Link href={"/"} style={{ textDecoration: "none", color: "white" }}>
          <Typography
            sx={{ textDecoration: "none" }}
            variant="h6"
            noWrap
            component="div"
          >
            Music App
          </Typography>
        </Link>
        {width > 500 ? (
          <Toolbar>
            <Button color="inherit">Tracks</Button>
            <Button color="inherit">Albums</Button>
            <Button color="inherit">Profile</Button>
          </Toolbar>
        ) : (
          <Button color="inherit">
            <MenuIcon color="inherit" onClick={handleDrawerOpen} />
          </Button>
        )}
      </header>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List>
          {menuItems.map(({ text, href }, index) => (
            <ListItemButton key={href} onClick={() => router.push(href)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
