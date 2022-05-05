import * as React from 'react';
import type { NextPage } from "next";
import PageContainer from "components/PageContainer";
// Material
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
// components
import SwapTab from '../components/swap/SwapTab';
import Link from '@mui/material/Link';

const Swap: NextPage = () => {
  return (
    <PageContainer>
      <div style={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            width: '100%',
            left: 0,
          }}
        >
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button href="/swap" component={Link} >swap</Button>
            <Button href="/stake" component={Link}>Liquidity</Button>
          </ButtonGroup>
        </Box>
        <SwapTab />
      </div>
    </PageContainer>
  );
};

export default Swap;