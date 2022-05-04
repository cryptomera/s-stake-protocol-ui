import { Box } from '@mui/material';
import * as React from 'react';

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
          }}
        >
        </Box>
      </Box>
    </>
  )
}

export default SwapTab;