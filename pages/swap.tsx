import * as React from 'react';
import type { NextPage } from "next";
import PageContainer from "components/PageContainer";
// Material
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Swap: NextPage = () =>
{
  const [tabValue, setTabValue] = React.useState(0);
  const tabHandler = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  }
  return (
    <PageContainer>
      <div style={{ width: '100%'}}>
        <Box 
          sx={{ 
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Tabs value={tabValue} onChange={tabHandler}>
            <Tab label="Swap" id="simple-tab-0" aria-controls="simple-tabpanel-0" />
            <Tab label="Add Liquidity" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
          </Tabs>
  
        </Box>
      </div>
      <Typography align="center" variant="h1" component="div">
        swap page
      </Typography>
    </PageContainer>
  );
};

export default Swap;
