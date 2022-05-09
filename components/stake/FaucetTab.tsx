import { Box, Button, Grid } from '@mui/material';
import { fontWeight } from '@mui/system';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import * as React from 'react';
import CustomInput from './CustomInput';

const FaucetTab = () => {
  return (
    <Grid container spacing={2}>
      {/* net faucet value */}
      <Grid item xs={12}>
        <Box
          sx={{
            background: '#212121',
            padding: '20px',
            borderRadius: '16px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '20px',
              marginBottom: '30px'
            }}
          >
            Net Faucet Value (NFV)
          </Box>
          <Grid container spacing={3}>
            {/* nfv available */}
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={3}>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginBottom: '10px'
                  }}
                >
                  NFV Available
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  123.3211
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  $3,532.23432
                </Box>
              </Box>
            </Grid>
            {/* deposits */}
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={3}>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginBottom: '10px'
                  }}
                >
                  Deposits
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  123.3211
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  $3,532.23432
                </Box>
              </Box>
            </Grid>
            {/* Gross Claimed */}
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={3}>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginBottom: '10px'
                  }}
                >
                  Gross Claimed
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  123.3211
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  $3,532.23432
                </Box>
              </Box>
            </Grid>
            {/* max payout */}
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={3}>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginBottom: '10px'
                  }}
                >
                  Max Payout
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  123.3211
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  $3,532.23432
                </Box>
              </Box>
            </Grid>
            {/* buttons */}
            <Grid item xs={4}>
              <Button fullWidth variant="contained">Claim</Button>
            </Grid>
            <Grid item xs={4}>
              <Button fullWidth variant="contained">Compound</Button>
            </Grid>
            <Grid item xs={4}>
              <Button fullWidth variant="contained">Deposit</Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            background: '#212121',
            padding: '20px',
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
      <Grid item xs={6}>
        <Box
          sx={{
            background: '#212121',
            padding: '20px',
            borderRadius: '16px'
          }}
        >
          some description
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            background: '#212121',
            padding: '20px',
            borderRadius: '16px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 'bold'
            }}
          >
            NERD
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '18px',
            }}
          >
            (Net Elastic Rebase Depletion)
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  Net Deposits
                </Grid>
                <Grid item xs={6}>
                  -123.3211
                </Grid>
                <Grid item xs={6}>
                  <Box>
                  Current Rebase Rate
                  </Box>
                  <Box
                    sx={{paddingLeft: '50px'}}
                  >
                    (daily)
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  0.2%
                </Grid>
                <Grid item xs={6}>
                  GFV Depletion
                </Grid>
                <Grid item xs={6}>
                  no
                </Grid>
                <Grid item xs={6}>
                  Depletion Amount
                </Grid>
                <Grid item xs={6}>
                  0 Stake
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default FaucetTab;