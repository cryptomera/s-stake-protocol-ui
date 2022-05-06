import { Box, Button } from '@mui/material';
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '80px',
          paddingTop: '20px'
        }}
      >
        <Box
          sx={{
            width: '40%',
            background: '#212121',
            borderRadius: '16px',
            padding: '20px'
          }}
        >
          <Box
            sx={{
              fontSize: '20px',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'center',
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
              <Button fullWidth variant="contained">Claim all</Button>
            </Box>
            <Box
              sx={{
                width: '50%'
              }}
            >
              <Button fullWidth variant="contained">Compound all</Button>
            </Box>
          </Box>
          <Box sx={{marginTop: '20px'}}>
            <Button fullWidth variant="contained">Deposit</Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: '40%',
            background: '#212121',
            borderRadius: '16px',
            padding: '40px'
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
            <Box sx={{flexGrow: 1}}></Box>
            <Box>Stake Balance: 65,707</Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '10px'
            }}
          >
            <CustomInput icon={<SellIcon/>}/>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'right'}}>
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
            <Box sx={{flexGrow: 1}}></Box>
            <Box>BNB Balance: 1.452</Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '10px'
            }}
          >
            <CustomInput icon={<ShoppingBagIcon/>}/>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'right'}}>
            <Button variant="contained">Buy</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default OverviewTab;