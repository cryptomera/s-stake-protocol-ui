import * as React from 'react';
import type { NextPage } from 'next';
import PageContainer from 'components/PageContainer';
import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'
import OverviewTab from 'components/stake/OverviewTab';
import FaucetTab from 'components/stake/FaucetTab';


const Stake: NextPage = () => {
  const [tabValue, setTabValue] = React.useState('1');
  const handleTab = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  }
  return (
    <PageContainer>
      <Box
        sx={{
          width: '100%',
        }}
      >
        <TabContext value={tabValue}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <TabList onChange={handleTab}>
              <Tab sx={{fontSize: '18px', fontWeight: 'bold'}} label="Overview" value="1" />
              <Tab sx={{fontSize: '18px', fontWeight: 'bold'}} label="Faucet" value="2" />
              <Tab sx={{fontSize: '18px', fontWeight: 'bold'}} label="Rebase" value="3" />
              <Tab sx={{fontSize: '18px', fontWeight: 'bold'}} label="Reservoir" value="4" />
              <Tab sx={{fontSize: '18px', fontWeight: 'bold'}} label="Downline" value="5" />
            </TabList>
          </Box>
          <Box>
            <TabPanel value="1">
              <OverviewTab />
            </TabPanel>
            <TabPanel value="2">
              <FaucetTab />
            </TabPanel>
            <TabPanel value="3">Rebase</TabPanel>
            <TabPanel value="4">Reservoir</TabPanel>
            <TabPanel value="5">Downline</TabPanel>
          </Box>
        </TabContext>
      </Box>
    </PageContainer>
  )
}

export default Stake;