import { Box, IconButton, Button, buttonBaseClasses, Grid, TextField } from '@mui/material';
import * as React from 'react';
// icons
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
//  components
import TokenDlg from 'components/common/TokenDlg';
import { address } from 'utils/ethers.util';
import { useMediaQuery } from 'react-responsive';
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from '@ethersproject/providers';
import { Contract } from "@ethersproject/contracts";
import Foundation from 'abi/StakeFountain.json';
import Erc20 from 'abi/Erc20.json';
import { formatEther, parseEther } from 'ethers/lib/utils';

const tokenList = [
  {
    name: 'BNB',
    symbol: 'BNB',
    address: address['wbnb']
  },
  {
    name: 'STAKE',
    symbol: 'STK',
    address: address['$stake']
  }
]

const SwapTab = () => {
  const [openTokenDlg, setOpenTokenDlg] = React.useState('');
  const [slippage, setSlippage] = React.useState(3);
  const [swapToken, setSwapToken] = React.useState(tokenList[0]);
  const [targetToken, setTargetToken] = React.useState(tokenList[1]);
  const [amountIn, setAmountIn] = React.useState('0.0');
  const [amountOut, setAmountOut] = React.useState('0.0');
  const [editIn, setEditIn] = React.useState(false);
  const [editOut, setEditOut] = React.useState(false);

  const { account, library } = useWeb3React<Web3Provider>();

  // swap
  const swap = async () => {
    const foundation = new Contract(address['foundation'], Foundation.abi, library?.getSigner());
    const stake = new Contract(address['$stake'], Erc20.abi, library?.getSigner());
    if (swapToken.name === 'BNB') {
      const minTokenAmount = Number(amountOut) * (1 - slippage / 100);
      await foundation.bnbToTokenSwapInput(parseEther(minTokenAmount.toString()), { value: parseEther(amountIn) });
    } else {
      await stake.approve(address['foundation'], parseEther(amountIn));
      stake.once("Approval", async() => {
        const bnbAmount = Number(amountOut) * (1 - slippage / 100);
        await foundation.tokenToBnbSwapInput(parseEther(amountIn), parseEther(bnbAmount.toString()));
      });
    }
  }

  //when changed amountIn
  React.useEffect(() => {
    async function getAmount() {
      const foundation = new Contract(address['foundation'], Foundation.abi, library);
      if (swapToken.name === 'BNB' && editIn && Number(amountIn) > 0) {
        const out = await foundation.getBnbToTokenInputPrice(parseEther(String(amountIn)));
        setAmountOut(formatEther(out.toString()));
        setEditIn(false);
      } else {
        if (Number(amountIn) > 0 && editIn) {
          const out = await foundation.getTokenToBnbInputPrice(parseEther(amountIn));
          setAmountOut(formatEther(out.toString()));
          setEditIn(false);
        }
      }
    }
    getAmount();
  }, [amountIn]);

  // when changed amountOut
  React.useEffect(() => {
    async function getAmount() {
      const foundation = new Contract(address['foundation'], Foundation.abi, library);
      if (swapToken.name === 'BNB' && editOut && Number(amountOut) > 0) {
        const inBnb = await foundation.getBnbToTokenOutputPrice(parseEther(String(amountOut)));
        setAmountIn(formatEther(inBnb.toString()));
        setEditOut(false);
      } else {
        if (Number(amountOut) > 0 && editOut) {
          const inStake = await foundation.getTokenToBnbOutputPrice(parseEther(amountOut));
          setAmountIn(formatEther((inStake / 0.82).toString()));
          setEditOut(false);
        }
      }
    }
    getAmount();
  }, [amountOut])

  React.useEffect(() => {
    if (swapToken.name === targetToken.name) {
      if (targetToken.name === 'STAKE') {
        setTargetToken(tokenList[0]);
      } else {
        setTargetToken(tokenList[1]);
      }
    }
  }, [swapToken]);

  React.useEffect(() => {
    if (swapToken.name === targetToken.name) {
      if (targetToken.name === 'STAKE') {
        setSwapToken(tokenList[0]);
      } else {
        setSwapToken(tokenList[1]);
      }
    }
  }, [targetToken]);

  const isResp520 = useMediaQuery({
    query: '(max-width: 520px)'
  });

  const handleSlippage = (e: any) => {
    e.target.value = e.target.value.toString().replace(",", ".").replace(" ", "");
    if (isNaN(e.target.value)) {
      return;
    }
    if (Number(e.target.value) < 3) {
      setSlippage(3);
    } else if (Number(e.target.value) > 50) {
      setSlippage(50);
    } else {
      setSlippage(e.target.value);
    }
  }

  const handleAmountIn = (e: any) => {
    setAmountIn(e.target.value);
    setEditIn(true);
  }

  const handleAmountOut = (e: any) => {
    setAmountOut(e.target.value);
    setEditOut(true);
  }

  return (
    <>
      {/* token select dialog */}
      <TokenDlg
        open={openTokenDlg}
        handleClose={() => setOpenTokenDlg('')}
        tokens={tokenList}
        setSwapToken={setSwapToken}
        setTargetToken={setTargetToken}
      />
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          paddingTop: '40px'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            backgroundColor: 'primary.main',
            filter: 'blur(15px)',
            width: isResp520 ? '100%' : '500px',
            height: isResp520 ? 'auto' : '500px',
            left: 0,
            right: 0,
            margin: 'auto',
            opacity: 0.5
          }}
        >
        </Box>
        {/* swap card */}
        <Box
          sx={{
            position: 'absolute',
            border: 'solid 3px',
            width: isResp520 ? '100%' : '500px',
            height: isResp520 ? 'auto' : '500px',
            borderRadius: '16px',
            borderColor: 'secondary.main',
            backgroundColor: 'background.paper',
            left: 0,
            right: 0,
            margin: 'auto',
            padding: '25px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              textTransform: 'capitalize'
            }}
          >
            {/* title */}
            <Box
              sx={{
                fontSize: 'h5.fontSize',
                fontWeight: 'bold'
              }}
            >
              swap
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box>
              <IconButton sx={{ color: 'text.primary' }}>
                <RefreshIcon />
              </IconButton>
              <IconButton sx={{ color: 'text.primary' }}>
                <SettingsIcon />
              </IconButton>
            </Box>
          </Box>
          {/* Swap card content */}
          <Box
            sx={{
              marginTop: '20px'
            }}
          >
            {/* select swap token */}
            <Box
              sx={{
                width: '100%',
                height: isResp520 ? 'auto' : '120px',
                backgroundColor: 'background.default',
                borderRadius: '16px',
                boxShadow: 'rgb(0 0 0) 5px 5px 7px -5px',
                padding: isResp520 ? '10px' : '20px'
              }}
            >
              {/* label */}
              <Box>
                From :
              </Box>
              {/* select token */}
              <Box
                sx={{
                  display: 'flex',
                  marginTop: isResp520 ? '0px' : '20px'
                }}
              >
                {/* input amount */}
                <Box>
                  <input
                    value={amountIn}
                    name="amountIn"
                    onChange={handleAmountIn}
                    style={{
                      border: 'none',
                      outline: 'none',
                      height: '30px',
                      fontSize: '20px',
                      backgroundColor: 'transparent',
                      color: 'white',
                      width: '100%'
                    }}
                  />
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box>
                  <Button onClick={() => setOpenTokenDlg('swapToken')} sx={{ width: '100px', display: 'flex', color: 'text.primary', padding: 0, fontWeight: 'bold', fontSize: '18px' }}>
                    <Box>{swapToken.name}</Box>
                    <Box sx={{ paddingTop: '10px' }}>
                      <KeyboardArrowDownIcon />
                    </Box>
                  </Button>
                </Box>
              </Box>
            </Box>
            {/* change button */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <IconButton sx={{ color: 'primary.main' }}>
                <ArrowDownwardIcon />
              </IconButton>
            </Box>
            {/* select target token */}
            <Box
              sx={{
                width: '100%',
                height: isResp520 ? 'auto' : '120px',
                backgroundColor: 'background.default',
                borderRadius: '16px',
                boxShadow: 'rgb(0 0 0) 5px 5px 7px -5px',
                padding: isResp520 ? '10px' : '20px'
              }}
            >
              {/* label */}
              <Box>
                To :
              </Box>
              {/* select token */}
              <Box
                sx={{
                  display: 'flex',
                  marginTop: isResp520 ? '0px' : '20px'
                }}
              >
                {/* input amount */}
                <Box>
                  <input
                    value={amountOut}
                    onChange={handleAmountOut}
                    style={{
                      border: 'none',
                      outline: 'none',
                      height: '30px',
                      fontSize: '20px',
                      backgroundColor: 'transparent',
                      color: 'white',
                      width: '100%'
                    }}
                  />
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box>
                  <Button onClick={() => setOpenTokenDlg('targetToken')} sx={{ width: '100px', display: 'flex', color: 'text.primary', padding: 0, fontWeight: 'bold', fontSize: '18px' }}>
                    <Box>{targetToken.name}</Box>
                    <Box sx={{ paddingTop: '10px' }}>
                      <KeyboardArrowDownIcon />
                    </Box>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            {/* slippage */}
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box sx={{ paddingTop: '15px' }}>
                  Slippage
                </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="dense"
                  variant="standard"
                  value={slippage}
                  onChange={handleSlippage}
                  inputProps={{ min: 0, style: { textAlign: 'right' } }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{ marginTop: '25px' }}
          >
            {
              !account ? (
                <Button fullWidth
                  variant="contained"
                  color="secondary"
                  sx={{
                    height: '50px',
                    borderRadius: '16px',
                    fontWeight: 'bold',
                    color: 'text.primary',
                    fontSize: 'h6.fontSize'
                  }}
                >Connect Wallet</Button>
              ) : (
                <Button
                  onClick={swap}
                  fullWidth
                  variant="contained"
                  color="secondary"
                  sx={{
                    height: '50px',
                    borderRadius: '16px',
                    fontWeight: 'bold',
                    color: 'text.primary',
                    fontSize: 'h6.fontSize'
                  }}
                >Swap</Button>
              )
            }

          </Box>
        </Box>
      </Box>
    </>
  )
}

export default SwapTab;