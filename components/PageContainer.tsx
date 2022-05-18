import { useState, useCallback, ReactNode } from "react";
import {
  init,
  useConnectWallet,
  useSetChain,
  useWallets
} from '@web3-onboard/react'
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MainDrawer from "./MainDrawer";
import MainHeader from "./MainHeader";
import Toolbar from "@mui/material/Toolbar";
// import ConnectDlg from "./common/ConnectDlg";
import Onboard from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'
import walletConnectModule from '@web3-onboard/walletconnect'
import { nodes } from "data/getRpc";
import { useMediaQuery } from 'react-responsive';

const drawerWidth = 240;
const injected = injectedModule();
const walletConnect = walletConnectModule();

const onboard = Onboard({
  wallets: [
    injected,
    walletConnect,
  ],
  chains: [
    {
      id: '0x61',
      token: 'BNB',
      label: 'BSC Testnet',
      rpcUrl: nodes[97][0]
    },
    {
      id: '0x38',
      token: 'BNB',
      label: 'Binance Smart Chain',
      rpcUrl: 'https://bsc-dataseed.binance.org/'
    },
    {
      id: '0xfa',
      token: 'FTM',
      label: 'Fantom Mainnet',
      rpcUrl: 'https://rpc.ftm.tools/'
    }
  ],
  appMetadata: {
    name: 'staking app',
    icon: '/logos/Logo_1.png',
    logo: '/logos/Logo_2.png',
    description: 'My app using Onboard'
  }
});

const PageContainer = (props: { children: ReactNode }) => {
  // const [{ chains, connectedChain, settingChain }, setChain] = useSetChain('0x61');
  const [mobileOpen, setMobileOpen] = useState<boolean>(true);
  // const [openConnectDlg, setOpenConnectDlg] = useState<boolean>(false);
  const [userAccount, setUserAccount] = useState<any>();
  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((p) => !p);
  }, [setMobileOpen]);

  const connectWallet = async () => {
    const wallets = await onboard.connectWallet();
    setUserAccount(wallets[0]);
  }
  const isResp520 = useMediaQuery({
    query: '(max-width: 520px)'
  });

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <MainHeader userAccount={userAccount} toggleMenuOpen={handleDrawerToggle} connectWallet={() => connectWallet()} />
        <MainDrawer open={mobileOpen} toggleOpen={handleDrawerToggle} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: isResp520?0:3,
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

