import * as React from 'react';
import type { NextPage } from 'next';
import PageContainer from 'components/PageContainer';
import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'


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
              <Tab label="Overview" value="1" />
              <Tab label="Treasury" value="2" />
              <Tab label="Revenue" value="3" />
            </TabList>
          </Box>
          <Box>
            <TabPanel value="1">overview</TabPanel>
            <TabPanel value="2">Treasury</TabPanel>
            <TabPanel value="3">Revenue</TabPanel>
          </Box>
        </TabContext>
      </Box>
    </PageContainer>
  )
}

export default Stake;