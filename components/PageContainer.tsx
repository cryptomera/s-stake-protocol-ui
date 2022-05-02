import { useState, useCallback, ReactNode } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MainDrawer from "./MainDrawer";
import MainHeader from "./MainHeader";
import Toolbar from "@mui/material/Toolbar";
// import ConnectDlg from "./common/ConnectDlg";
import Onboard from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'
import { nodes } from "data/getRpc";

const drawerWidth = 240;
const injected = injectedModule();

const onboard = Onboard({
  wallets: [injected],
  chains: [
    {
      id: '0x61',
      token: 'BNB',
      label: 'BSC Testnet',
      rpcUrl: nodes[97][0]
    }
  ],
  appMetadata: {
    name: 'staking app',
    icon: '/logos/Logo_1.png',
    description: 'My app using Onboard'
  }
});

const PageContainer = (props: { children: ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(true);
  const [openConnectDlg, setOpenConnectDlg] = useState<boolean>(false);
  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((p) => !p);
  }, [setMobileOpen]);

  const connectWallet = async () => {
    const wallets = await onboard.connectWallet();
    console.log(wallets);
  }

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <MainHeader toggleMenuOpen={handleDrawerToggle} connectWallet={() => connectWallet()} />
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
