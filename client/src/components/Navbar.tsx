"use client";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
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
const menuItems = [
  { text: "Главная", href: "/" },
  { text: "Список треков", href: "/tracks" },
  { text: "Список альбомов", href: "/albums" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar color="transparent" position="fixed">
        <Grid xs></Grid>
        <Grid xs={10}>
          <Toolbar
            style={{
              padding: "0 10rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
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

            <Button>
              <MenuIcon color="action" onClick={handleDrawerOpen} />
            </Button>
          </Toolbar>
        </Grid>
        <Grid xs></Grid>
      </AppBar>
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
