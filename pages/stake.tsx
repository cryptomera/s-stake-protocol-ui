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
import DownlineTab from 'components/stake/DownlineTab';
import { useMediaQuery } from 'react-responsive';
import { getPrice } from 'utils/price.util';

const Stake: NextPage = () => {
  const [tabValue, setTabValue] = React.useState('1');
  const [tokenPrice, setTokenPrice] = React.useState(0);
  const router = useRouter();

  // get price
  React.useEffect(() => {
    async function getTokenPrice () {
      const price = await getPrice();
      setTokenPrice(Number(price));
    }
    getTokenPrice();
  }, []);
  // handle router
  React.useEffect(() => {
    setTabValue(String(router.query.tab))
  }, [router]);
  const isResp520 = useMediaQuery({
    query: '(max-width: 520px)'
  });
  const isResp600 = useMediaQuery({
    query: '(max-width: 600px)'
  });
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
                justifyContent: 'center',
                width:'100%',
                padding: isResp520?'0px 0px 10px 0px':'auto'
              }}
            >
              <Link href="/stake?tab=overview">
                <a
                  style={{
                    fontSize: isResp520?'15px':'20px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    color: '#FFFFFC',
                    margin: isResp520?'0px':'10px',
                    borderBottom: tabValue === 'overview' ? 'solid 3px' : '',
                    width: isResp520?'25%':'auto',
                    textAlign: 'center'
                  }}
                >
                  Overview
                </a>
              </Link>
              <Link href="/stake?tab=faucet">
                <a
                  style={{
                    fontSize: isResp520?'15px':'20px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    color: '#FFFFFC',
                    margin: isResp520?'0px':'10px',
                    borderBottom: tabValue === 'faucet' ? 'solid 3px' : '',
                    width: isResp520?'25%':'auto',
                    textAlign: 'center'
                  }}
                >
                  Faucet
                </a>
              </Link>
              <Link href="/stake?tab=rebase">
                <a
                  style={{
                    fontSize: isResp520?'15px':'20px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    color: '#FFFFFC',
                    margin: isResp520?'0px':'10px',
                    borderBottom: tabValue === 'rebase' ? 'solid 3px' : '',
                    width: isResp520?'25%':'auto',
                    textAlign: 'center'
                  }}
                >
                  Rebase
                </a>
              </Link>
              <Link href="/stake?tab=downline">
                <a
                  style={{
                    fontSize: isResp520?'15px':'20px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    color: '#FFFFFC',
                    margin: isResp520?'0px':'10px',
                    borderBottom: tabValue === 'downline' ? 'solid 3px' : '',
                    width: isResp520?'25%':'auto',
                    textAlign: 'center'
                  }}
                >
                  Downline
                </a>
              </Link>
              {/* <Link href="/stake?tab=upline">
              <a
                  style={{
                    fontSize: isResp520?'15px':'20px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    color: '#FFFFFC',
                    margin: isResp520?'0px':'10px',
                    borderBottom: tabValue === 'upline' ? 'solid 3px' : '',
                    width: isResp520?'25%':'auto',
                    textAlign: 'center'
                  }}
                >
                  Upline
                </a>
              </Link> */}
            </Box>
          </Box>
          <Box>
            <TabPanel value="overview" 
              sx={{
                padding:isResp600?'0px':'auto'
              }}>
              <OverviewTab tokenPrice={tokenPrice} />
            </TabPanel>
            <TabPanel value="faucet"
            sx={{
              padding:isResp600?'0px':'auto'
            }}>
              <FaucetTab tokenPrice={tokenPrice} />
            </TabPanel>
            <TabPanel value="rebase"
            sx={{
              padding:isResp600?'0px':'auto'
            }}>
              <RebaseTab tokenPrice={tokenPrice} />
            </TabPanel>
            <TabPanel value="downline"
            sx={{
              padding:isResp600?'0px':'auto'
            }}>
              <ReferralTab tokenPrice={tokenPrice} />
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </PageContainer>
  )
}

export default Stake;