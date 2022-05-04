import { Box, IconButton, Button } from '@mui/material';
import * as React from 'react';
// icons
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const SwapTab = () => {
  return (
    <>
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
            width: '500px',
            height: '500px',
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
            width: '500px',
            height: '500px',
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
                height: '120px',
                backgroundColor: 'background.default',
                borderRadius: '16px',
                boxShadow: 'rgb(0 0 0) 5px 5px 7px -5px'
              }}
            >
            </Box>
            {/* change button */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <IconButton sx={{color: 'primary.main'}}>
                <ArrowDownwardIcon/>
              </IconButton>
            </Box>
            {/* select target token */}
            <Box
              sx={{
                width: '100%',
                height: '120px',
                backgroundColor: 'background.default',
                borderRadius: '16px',
                boxShadow: 'rgb(0 0 0) 5px 5px 7px -5px',
              }}
            >
            </Box>
          </Box>
          <Box
            sx={{marginTop: '25px'}}
          >
            <Button fullWidth 
              variant="contained"
              sx={{
                height: '60px',
                borderRadius: '16px',
                fontWeight: 'bold',
                color: 'text.primary',
                fontSize: 'h6.fontSize'
              }}
            >Connect Wallet</Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default SwapTab;