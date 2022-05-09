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
import RebaseTab from 'components/stake/RebaseTab';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ReferralTab from 'components/stake/ReferralTab';

const Stake: NextPage = () => {
  const [tabValue, setTabValue] = React.useState('1');
  const router = useRouter();
  // handle router
  React.useEffect(() => {
    setTabValue(String(router.query.tab))
  }, [router]);
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
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Link href="/stake?tab=1">
                <a
                  style={{
                    fontSize: '20px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    color: '#FFFFFC',
                    margin: '10px',
                    borderBottom: tabValue === '1' ? 'solid 3px' : ''
                  }}
                >
                  Overview
                </a>
              </Link>
              <Link href="/stake?tab=2">
                <a
                  style={{
                    fontSize: '20px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    color: '#FFFFFC',
                    margin: '10px',
                    borderBottom: tabValue === '2' ? 'solid 3px' : ''
                  }}
                >
                  Faucet
                </a>
              </Link>
              <Link href="/stake?tab=3">
                <a
                  style={{
                    fontSize: '20px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    color: '#FFFFFC',
                    margin: '10px',
                    borderBottom: tabValue === '3' ? 'solid 3px' : ''
                  }}
                >
                  Rebase
                </a>
              </Link>
              <Link href="/stake?tab=4">
                <a
                  style={{
                    fontSize: '20px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    color: '#FFFFFC',
                    margin: '10px',
                    borderBottom: tabValue === '4' ? 'solid 3px' : ''
                  }}
                >
                  Referral
                </a>
              </Link>
            </Box>
          </Box>
          <Box>
            <TabPanel value="1">
              <OverviewTab />
            </TabPanel>
            <TabPanel value="2">
              <FaucetTab />
            </TabPanel>
            <TabPanel value="3">
              <RebaseTab />
            </TabPanel>
            <TabPanel value="4">
              <ReferralTab/>
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </PageContainer>
  )
}

export default Stake;