import * as React from 'react';
import type { NextPage } from "next";
import PageContainer from "components/PageContainer";
// Material
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// components
import SwapTab from '../components/swap/SwapTab';

const Swap: NextPage = () => {
  const [tabValue, setTabValue] = React.useState("0");
  const tabHandler = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  }
  return (
    <PageContainer>
      <div style={{ width: '100%' }}>
        <TabContext value={tabValue}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <TabList value={tabValue} onChange={tabHandler}>
              <Tab sx={{ fontSize: 'h6.fontSize'}} label="Swap" value="0" />
              <Tab sx={{ fontSize: 'h6.fontSize'}} label="Add Liquidity" value="1" />
            </TabList>
          </Box>
          <TabPanel value="0">
            <SwapTab/>
          </TabPanel>
          <TabPanel value="1">Add Liquidity</TabPanel>
        </TabContext>

      </div>
    </PageContainer>
  );
};

export default Swap;