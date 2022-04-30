import { useState, useCallback, ReactNode } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MainDrawer from "./MainDrawer";
import MainHeader from "./MainHeader";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;

const PageContainer = (props: { children: ReactNode }) =>
{
  // @dev DELETE WHEN TOGGLE-HIDE LOGIC IS IMPLEMENTED FROM HERE
  const [ mobileOpen, setMobileOpen ] = useState<boolean>(true);

  const handleDrawerToggle = useCallback(() =>
  {
    setMobileOpen(p => !p);
  }, [ setMobileOpen ]);
  // TO HERE
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <MainHeader toggleMenuOpen={handleDrawerToggle} />
        <MainDrawer open={mobileOpen} toggleOpen={handleDrawerToggle} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          {props.children}
        </Box>
      </Box>
    </>
  );
};
export default PageContainer;
