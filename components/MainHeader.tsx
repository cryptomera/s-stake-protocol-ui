// Material
import AppBar from "@mui/material/AppBar";
import Fab from "@mui/material/Fab";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// Hooks
import { useMemo } from "react";
import { useAuth, ConnectorNames } from "hooks/useAuth";

const drawerWidth = 240;


const MainHeader = (props: { userAccount: any, toggleMenuOpen: () => void, connectWallet: () => void }) => {
  const { toggleMenuOpen, connectWallet, userAccount } = props;
  const { login, account } = useAuth();

  const shortAddress = (address: string) => {
    const addressChars = address.split("");
    const itemsToDelete = addressChars.length - 8;
    if (itemsToDelete <= 0) return address;
    addressChars.splice(4, itemsToDelete, "...");
    return addressChars.join("");
  };
  const displayAccount = useMemo(() => shortAddress(account || ""), [account]);

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
        {
          !userAccount && (
            <Button
              variant="contained"
              color="secondary"
              onClick={connectWallet}
            >
              <Typography style={{ fontFamily: "Century-Gothic" }}>
                {account ? displayAccount : "Connect"}
              </Typography>
            </Button>
          )
        }
        
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
