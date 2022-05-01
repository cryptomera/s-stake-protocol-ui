// Material
import AppBar from "@mui/material/AppBar";
import Fab from "@mui/material/Fab";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;

const MainHeader = (props: { toggleMenuOpen: () => void }) => {
  const { toggleMenuOpen } = props;
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
      color="transparent"
      elevation={0}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Fab
          size="small"
          color="secondary"
          aria-label="open drawer"
          onClick={toggleMenuOpen}
          sx={{ mx: 2, visibility: { sm: "hidden" } }}
        >
          <MenuIcon />
        </Fab>
        <Button variant="contained" color="secondary">
          <Typography style={{ fontFamily: "Century-Gothic" }}>
            Connect
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
