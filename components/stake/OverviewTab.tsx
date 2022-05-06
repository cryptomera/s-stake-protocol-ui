import { Box, Button, Grid } from '@mui/material';
import * as React from 'react';
import CustomInput from './CustomInput';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SimpleAreaChart from '../common/SimpleAreaChart';

const OverviewTab = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: '26px',
          fontWeight: 'bold',
          color: 'lightblue'
        }}
      >
        Earn up to 3% daily with Stake Protocol's Net Elastic Rebase Depletion
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          padding: '30px'
        }}
      >
        <Grid
          item
          xs={6}
        >
          <Box
            sx={{
              background: '#212121',
              padding: '20px',
              borderRadius: '16px'
            }}
          >
            <Box
              sx={{
                fontSize: '20px',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              Total Stake Available
            </Box>
            <Box
              sx={{
                fontSize: '26px',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              123.3211
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              $3,532.23432
            </Box>
            {/* buttons */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                paddingTop: '20px'
              }}
            >
              <Box
                sx={{
                  width: '50%'
                }}
              >
                <Button size="large" fullWidth variant="contained">Claim all</Button>
              </Box>
              <Box
                sx={{
                  width: '50%'
                }}
              >
                <Button size="large" fullWidth variant="contained">Compound all</Button>
              </Box>
            </Box>
            <Box sx={{ marginTop: '20px' }}>
              <Button size="large" fullWidth variant="contained">Deposit</Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
        >
          <Box
            sx={{
              padding: '20px',
              background: '#212121',
              borderRadius: '16px'
            }}
          >
            {/* sell */}
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <Box>
                Sell Stake
              </Box>
              <Box sx={{ flexGrow: 1 }}></Box>
              <Box>Stake Balance: 65,707</Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '10px'
              }}
            >
              <CustomInput icon={<SellIcon />} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'right' }}>
              <Button variant="contained">Sell</Button>
            </Box>
            {/* buy */}
            <Box
              sx={{
                display: 'flex',
                paddingLeft: '40px',
                paddingRight: '40px'
              }}
            >
              <Box>
                Buy Stake
              </Box>
              <Box sx={{ flexGrow: 1 }}></Box>
              <Box>BNB Balance: 1.452</Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '10px'
              }}
            >
              <CustomInput icon={<ShoppingBagIcon />} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'right' }}>
              <Button variant="contained">Buy</Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
        >
          <Box
            sx={{
              background: '#212121',
              padding: '20px',
              borderRadius: '16px'
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}
                >
                  NFV
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '10px'
                  }}
                >
                  (Net Faucet Value)
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>
                  1,865,707
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  $65,707
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}
                >
                  GFV
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '10px'
                  }}
                >
                  (Gross Faucet Value)
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>
                  1,865,707
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  $65,707
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}
                >
                  Referral Rewards
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>
                  1,865,707
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  $65,707
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}
                >
                  FLAME in Wallet
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>
                  707
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  $5,707
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
        >
          <Box
            sx={{
              background: '#212121',
              padding: '20px',
              borderRadius: '16px'
            }}
          >
            {/* NERD */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '20px'
              }}
            >
              NERD
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              (Net Elastic Rebase Depletion)
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Box
            sx={{
              background: '#212121',
              padding: '20px',
              borderRadius: '16px'
            }}
          >
            {/* market cap */}
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}
                >
                  Market Cap
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  $999,999,999
                </Box>
              </Grid>
              {/* Total players */}
              <Grid item xs={2}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}
                >
                  Total Players
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  99,999
                </Box>
              </Grid>
              {/* faucet returns */}
              <Grid item xs={2}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}
                >
                  Faucet Returns
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  1% Daily
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  (on locked value)
                </Box>
              </Grid>
              {/* Treasury Value */}
              <Grid item xs={3}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}
                >
                  Treasury Value
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  $999,999,999
                </Box>
              </Grid>
              {/* Total POL */}
              <Grid item xs={3}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}
                >
                  Total POL
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  $999,999,999
                </Box>
              </Grid>
              {/* total supply */}
              <Grid item xs={2}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}
                >
                  Total Supply
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  1,865,707
                </Box>
              </Grid>
              {/* Locked in Vault */}
              <Grid item xs={2}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}
                >
                  Locked in Vault
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  65,707
                </Box>
              </Grid>
              {/* rebase returns */}
              <Grid item xs={2}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}
                >
                  Rebase Returns
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  2% Daily
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  (on locked value)
                </Box>
              </Grid>
              {/* floor price */}
              <Grid item xs={3}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}
                >
                  Floor Price
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  65,707
                </Box>
              </Grid>
              {/* time until next rebase */}
              <Grid item xs={3}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}
                >
                  Time until next rebase
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  23 min
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Box
            sx={{
              background: '#212121',
              padding: '20px',
              borderRadius: '16px'
            }}
          >
            <SimpleAreaChart/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default OverviewTab;