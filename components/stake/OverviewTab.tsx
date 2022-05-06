import { Box, Button, Grid } from '@mui/material';
import * as React from 'react';
import CustomInput from './CustomInput';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

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
        spacing={5}
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
      </Grid>
    </Box>
  )
}

export default OverviewTab;