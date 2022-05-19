import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Button, ButtonGroup, Grid, Tab } from '@mui/material';
import * as React from 'react';
import CustomNoIconInput from './CustomNoIconInput';
import { useMediaQuery } from 'react-responsive';

const ReferralTab = () => {
  const [tabValue, setTabValue] = React.useState('1');
  const handleTab = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  }
  const isResp520 = useMediaQuery({
    query: '(max-width: 520px)'
  });
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box>
          Next rebase in : 24 mins
        </Box>
      </Grid>
      {/* next rebase */}
      <Grid item xs={12}>
        <Box
          sx={{
            background: '#212121',
            padding: '20px',
            borderRadius: '16px'
          }}
        >
          <Grid container spacing={2}>
            {/* Referral Rewards */}
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '20px'
                }}
              >
                Referral Rewards
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: isResp520?'18px':'28px'
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
                $9,999.99999
              </Box>
            </Grid>
            {/* Airdrop Sent */}
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '20px'
                }}
              >
                Airdrop Sent
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: isResp520?'18px':'28px'
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
                $9,999.99999
              </Box>
            </Grid>
            {/* Airdrop received */}
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '20px'
                }}
              >
                Airdrop Received
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: isResp520?'18px':'28px'
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
                $9,999.99999
              </Box>
            </Grid>
            {/* team */}
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '20px'
                }}
              >
                Airdrop Sent
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: isResp520?'18px':'28px'
                }}
              >
                1/1
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      {/* stake master */}
      <Grid item xs={12}>
        <Box
          sx={{
            background: '#212121',
            borderRadius: '16px',
            padding: '20px'
          }}
        >
          {/* title */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '20px'
            }}
          >
            <Box
              sx={{
                fontSize: '28px',
                fontWeight: 'bold'
              }}
            >
              Stake Master
            </Box>
            <Box
              sx={{
                fontSize: '24px',
                fontWeight: 'bold',
                paddingLeft: '10px',
                paddingTop: '5px'
              }}
            >
              ( We need a better term for buddy )
            </Box>
          </Box>
          <Grid container spacing={2}>
            <Grid
              sx={{
                fontWeight: 'bold',
                fontSize: '20px'
              }}
              item
              xs={4}
            >
              Stake Master:
            </Grid>
            <Grid item xs={8} sx={{wordBreak:'break-word'}}>
              0xc70dAF7356bC5f2eF6008E0FaA7e076C47C6e7f
            </Grid>
            <Grid
              sx={{
                fontWeight: 'bold',
                fontSize: '20px'
              }}
              item
              xs={4}
            >
              Player Lookup:
            </Grid>
            <Grid item xs={8}>
              <CustomNoIconInput
                buttonName="go"
                buttonColor="secondary"
                buttonTextColor="white"
                placeHolder="0xc70dAF7356bC5f2eF6008E0FaA7e076C47C6e7f"
                width={isResp520?'100%':"480px"}
              />
            </Grid>
            <Grid sx={{ fontSize: '20px' }} item xs={4}>
              Directs:
            </Grid>
            <Grid sx={{ fontSize: '20px' }} item xs={8}>
              1
            </Grid>
            <Grid sx={{ fontSize: '20px' }} item xs={4}>
              Team:
            </Grid>
            <Grid sx={{ fontSize: '20px' }} item xs={8}>
              1
            </Grid>
            <Grid sx={{ fontSize: '20px' }} item xs={4}>
              Net Deposits:
            </Grid>
            <Grid sx={{ fontSize: '20px' }} item xs={8}>
              -521
            </Grid>
            <Grid sx={{ fontSize: '20px' }} item xs={4}>
              Airdrop Sent/Received:
            </Grid>
            <Grid sx={{ fontSize: '20px' }} item xs={8}>
              5.4/61.241 Stake
            </Grid>
            <Grid sx={{ fontSize: '20px' }} item xs={4}>
              Last Airdrop Sent:
            </Grid>
            <Grid sx={{ fontSize: '20px' }} item xs={8}>
              4 Months ago
            </Grid>
          </Grid>
        </Box>
      </Grid>
      {/* team tab */}
      <Grid item xs={12}>
        <Box
          sx={{
            background: '#212121',
            padding: '20px',
            borderRadius: '16px'
          }}
        >
          <TabContext value={tabValue}>
            <TabList onChange={handleTab}>
              <Tab label="Team Viewer" value="1" 
              sx={{
                width: isResp520?'33%':'auto'
              }}/>
              <Tab label="Team Airdrop" value="2" 
              sx={{
                width: isResp520?'33%':'auto'
              }}/>
              <Tab label="Direct Airdrop" value="3" 
              sx={{
                width: isResp520?'33%':'auto'
              }}/>
            </TabList>
            <TabPanel
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
              value="1"
            >
              <Box>
                <CustomNoIconInput
                  buttonName="show"
                  buttonColor="primary"
                  buttonTextColor="white"
                  placeHolder="0xc70dAF7356bC5f2eF6008E0FaA7e076C47C6e7f"
                  width={isResp520?'100%':"480px"}
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520?'center':'right',
                    marginTop: '10px'
                  }}
                >
                  <ButtonGroup color="secondary" variant="contained">
                    <Button>My address</Button>
                    <Button>viw all</Button>
                  </ButtonGroup>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value="2">
              team airdrop
            </TabPanel>
            <TabPanel value="3">
              direct airdrop
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            background: '#212121',
            padding: '20px',
            borderRadius: '16px'
          }}
        >
          BlahBlah full rundown on referrals
        </Box>
      </Grid>
    </Grid>
  );
}

export default ReferralTab;