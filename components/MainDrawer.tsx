// React
import React, { useState } from "react";
// Material
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const drawerWidth = 240;

type MainDrawerProps = {
  open: boolean,
  toggleOpen: () => void;
}

function ResponsiveDrawer(props: MainDrawerProps)
{
  // @dev DELETE WHEN TOGGLE-HIDE LOGIC IS IMPLEMENTED FROM HERE
  const { open, toggleOpen } = props;

  const isSm = useMediaQuery('(min-width:600px)');

  // TO HERE

  const drawer = (
    <>
      <Stack flexShrink={1} alignItems="center" sx={{ p: 1, pt: 2 }}>
        <div>
          <Image
            src="/logos/Logo_1.png"
            height={5268 / 40.6}
            width={6090 / 40.6}
            alt="Space Dust Logo"
          />
        </div>
      </Stack>
      <Typography sx={(theme) => ({ color: theme.palette.neutral.main })}>
        <List>
          {[ "Dashboard", "Bond", "Stake", "Bridge", "Zap" ].map(
            (text, index) => (
              //@dev add the naviagion link for each button here
              <ListItem button key={text}>
                <ListItemIcon>
                  <MailIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Typography>
      <Divider />
      <Typography
        color="secondary"
        textAlign="center"
        sx={{ my: 2 }}
        style={{ fontFamily: "Suissnord" }}
      >
        PRICE: 1 ETH
      </Typography>
      <Divider />
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ my: 2 }}>
        <MailIcon color="secondary" />
        <MailIcon color="secondary" />
        <MailIcon color="secondary" />
        <MailIcon color="secondary" />
      </Stack>
    </>
  );

  // const container =
  //   window !== undefined ? () => window.document.body : undefined;

  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant={isSm ? "permanent" : "temporary"}
          open={open}
          onClose={toggleOpen}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default ResponsiveDrawer;
