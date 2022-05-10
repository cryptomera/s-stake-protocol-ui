// React
import { ReactNode } from "react";
import { useRouter } from 'next/router';
// Material
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
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
// Icons
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import ShieldMoonIcon from "@mui/icons-material/ShieldMoon";
import MenuBookIcon from "@mui/icons-material/MenuBook";
// Socials
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";
import MediumIcon from "components/svg/MediumIcon";
import PaidIcon from "@mui/icons-material/Paid";
import FoundationIcon from '@mui/icons-material/Foundation';

const drawerWidth = 240;

type MainDrawerProps = {
  open: boolean;
  toggleOpen: () => void;
};

function ResponsiveDrawer(props: MainDrawerProps) {
  const { open, toggleOpen } = props;
  const isSm = useMediaQuery("(min-width:600px)");
  const router = useRouter();

  const gotoLink = (href: string) => {
    router.push(href);
  }
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
          <Box position="relative" flexGrow={1}>
            <Stack flexShrink={1} alignItems="center" sx={{ p: 1, pt: 2 }}>
              <div style={{cursor: 'pointer'}} onClick={() => gotoLink("/swap")}>
                <Image
                  src="/logos/Logo_1.png"
                  height={5268 / 40.6}
                  width={6090 / 40.6}
                  alt="Stake Protocol Logo"
                />
              </div>
            </Stack>

            <List>
              {menuItems.map((item, index) => (
                //@dev add the naviagion link for each button here
                <ListItem
                  button
                  onClick={() => gotoLink(item.href)}
                  key={`nav-${item.name}-${index}`}
                  href={item.href}
                  disabled={item.disabled}
                >
                  <ListItemIcon>
                    {item.icon || <MailIcon color="secondary" />}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={(theme) => ({ color: theme.palette.neutral.main })}
                  />
                </ListItem>
              ))}
            </List>

            <Box position="absolute" sx={{ bottom: 0, width: `239px` }}>
              <Typography
                color="textPrimary"
                textAlign="center"
                sx={{ my: 2 }}
                style={{ fontFamily: "Suissnord" }}
              >
                STAKE: 1.00
              </Typography>
              <Divider />
              <Stack
                direction="row"
                justifyContent="center"
                spacing={2}
                sx={{ my: 2 }}
              >
                {/* <GitHubIcon color="secondary" /> */}
                <IconButton>
                  <TelegramIcon color="secondary" />
                </IconButton>
                <IconButton>
                  <TwitterIcon color="secondary" />
                </IconButton>
                <IconButton>
                  <MediumIcon color="secondary" />
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}

export default ResponsiveDrawer;

type MenuItemType = {
  name: string;
  icon?: null | ReactNode;
  href: string;
  disabled: boolean;
};
const menuItems: Array<MenuItemType> = [
  {
    name: "Swap",
    icon: <SwapHorizontalCircleIcon color="secondary" />,
    href: "/swap",
    disabled: false,
  },
  {
    name: "Stake",
    icon: <ShieldMoonIcon color="secondary" />,
    href: "/stake?tab=overview",
    disabled: false,
  },
  {
    name: 'Foundation',
    icon: <FoundationIcon color="secondary"/>,
    href: '/foundation',
    disabled: false
  },
  {
    name: "Docs",
    icon: <MenuBookIcon color="secondary" />,
    href: "",
    disabled: true,
  },
  {
    name: "King's Riches",
    icon: <PaidIcon color="secondary" />,
    href: "",
    disabled: true,
  },
];
