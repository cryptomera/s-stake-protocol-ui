import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Button, ButtonGroup, Grid, Tab } from '@mui/material';
import * as React from 'react';
import CustomNoIconInput from './CustomNoIconInput';
import { useMediaQuery } from 'react-responsive';
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from '@ethersproject/providers';
import { Contract } from "@ethersproject/contracts";
import { address } from 'utils/ethers.util';
import Nerd from '../../abi/NerdFaucetV2.json';
import Image from "next/image";
import badge1 from '../../public/badges/badge1.png';
import badge2 from '../../public/badges/badge2.png';
import badge3 from '../../public/badges/badge3.png';
import badge4 from '../../public/badges/badge4.png';
import badge5 from '../../public/badges/badge5.png';
import badge6 from '../../public/badges/badge6.png';

interface ReferralProps {
  tokenPrice: number;
}

const ReferralTab = (props: ReferralProps) => {
  const { tokenPrice } = props;
  const [tabValue, setTabValue] = React.useState('1');
  const [userLevel, setUserLevel] = React.useState(0);
  const { library, account } = useWeb3React<Web3Provider>();
  React.useEffect(() => {
    async function getData() {
      const nerd = new Contract(address['nerd'], Nerd.abi, library);
      const level = await nerd.userLevel(account);
      setUserLevel(level);
    }
    getData();
  }, []);
  const handleTab = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  }
  const isResp370 = useMediaQuery({
    query: '(max-width: 370px)'
  });
  const isResp520 = useMediaQuery({
    query: '(max-width: 520px)'
  });
  const isResp600 = useMediaQuery({
    query: '(max-width: 600px)'
  });
  const isResp720 = useMediaQuery({
    query: '(max-width: 720px)'
  });
  const isResp1200 = useMediaQuery({
    query: '(max-width: 1200px)'
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
            background: isResp600 ? '#69696969' : '#212121',
            padding: '20px',
            borderRadius: '16px'
          }}
        >
          <Grid container spacing={2}>
            {/* Referral Rewards */}
            <Grid item xs={isResp370 ? 12 : isResp600 ? 6 : isResp720 ? 12 : 6} md={3}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: isResp520 ? '16px' : '20px'
                }}
              >
                Referral Rewards
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: isResp520 ? '14px' : '28px'
                }}
              >
                123.3211
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: isResp520 ? '14px' : 'initial'
                }}
              >
                $9,999.99999
              </Box>
            </Grid>
            {/* Airdrop Sent */}
            <Grid item xs={isResp370 ? 12 : isResp600 ? 6 : isResp720 ? 12 : 6} md={3}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: isResp520 ? '16px' : '20px'
                }}
              >
                Airdrop Sent
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: isResp520 ? '14px' : '28px'
                }}
              >
                123.3211
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: isResp520 ? '14px' : 'initial'
                }}
              >
                $9,999.99999
              </Box>
            </Grid>
            {/* Airdrop received */}
            <Grid item xs={isResp370 ? 12 : isResp600 ? 6 : isResp720 ? 12 : 6} md={3}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: isResp520 ? '16px' : '20px'
                }}
              >
                Airdrop Received
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: isResp520 ? '14px' : '28px'
                }}
              >
                123.3211
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: isResp520 ? '14px' : 'initial'
                }}
              >
                $9,999.99999
              </Box>
            </Grid>
            {/* team */}
            <Grid item xs={isResp370 ? 12 : isResp600 ? 6 : isResp720 ? 12 : 6} md={3}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: isResp520 ? '16px' : '20px'
                }}
              >
                Airdrop Sent
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: isResp520 ? '14px' : '28px'
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
            background: isResp600 ? '#69696969' : '#212121',
            borderRadius: '16px',
            padding: '20px'
          }}
        >
          {/* title */}
          <Box
            sx={{
              display: isResp520 ? 'block' : 'flex',
              justifyContent: 'center',
              marginBottom: '20px'
            }}
          >
            <Box
              sx={{
                fontSize: isResp520 ? '24px' : '28px',
                fontWeight: 'bold',
                display: isResp520 ? 'flex' : 'block',
                justifyContent: 'center'
              }}
            >
              Stake Master
            </Box>
            <Box
              sx={{
                fontSize: isResp520 ? '15px' : '24px',
                fontWeight: isResp520 ? '400' : 'bold',
                paddingLeft: '10px',
                paddingTop: '5px'
              }}
            >
              ( We need a better term for buddy )
            </Box>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={userLevel === 0 ? 12 : 9}>
              <Box>
                <Grid container spacing={2}>
                  <Grid
                    sx={{
                      fontWeight: isResp520 ? '400' : 'bold',
                      fontSize: isResp520 ? '16px' : '20px'
                    }}
                    item
                    xs={5} md={4}
                  >
                    Stake Master:
                  </Grid>
                  <Grid item xs={7} md={8} sx={{ wordBreak: 'break-word' }}>
                    0xc70dAF7356bC5f2eF6008E0FaA7e076C47C6e7f
                  </Grid>
                  <Grid
                    sx={{
                      fontWeight: isResp520 ? '400' : 'bold',
                      fontSize: isResp520 ? '16px' : '20px'
                    }}
                    item
                    xs={12} md={4}
                  >
                    Player Lookup:
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <CustomNoIconInput
                      buttonName="go"
                      buttonColor="secondary"
                      buttonTextColor="white"
                      placeHolder="0xc70dAF7356bC5f2eF6008E0FaA7e076C47C6e7f"
                      width={isResp1200 ? '100%' : "480px"}
                    />
                  </Grid>
                  <Grid
                    sx={{
                      fontWeight: isResp520 ? '400' : 'bold',
                      fontSize: isResp520 ? '16px' : '20px'
                    }}
                    item xs={7} md={4}>
                    Directs:
                  </Grid>
                  <Grid
                    sx={{
                      fontWeight: isResp520 ? '400' : 'bold',
                      fontSize: isResp520 ? '16px' : '20px'
                    }}
                    item xs={5} md={8}>
                    1
                  </Grid>
                  <Grid
                    sx={{
                      fontWeight: isResp520 ? '400' : 'bold',
                      fontSize: isResp520 ? '16px' : '20px'
                    }}
                    item xs={7} md={4}>
                    Team:
                  </Grid>
                  <Grid
                    sx={{
                      fontWeight: isResp520 ? '400' : 'bold',
                      fontSize: isResp520 ? '16px' : '20px'
                    }}
                    item xs={5} md={8}>
                    1
                  </Grid>
                  <Grid
                    sx={{
                      fontWeight: isResp520 ? '400' : 'bold',
                      fontSize: isResp520 ? '16px' : '20px'
                    }}
                    item xs={7} md={4}>
                    Net Deposits:
                  </Grid>
                  <Grid
                    sx={{
                      fontSize: isResp520 ? '16px' : '20px',
                      display: isResp520 ? 'flex' : 'block',
                      alignItems: 'center'
                    }}
                    item xs={5} md={8}>
                    -521
                  </Grid>
                  <Grid
                    sx={{
                      fontWeight: isResp520 ? '400' : 'bold',
                      fontSize: isResp520 ? '16px' : '20px'
                    }}
                    item xs={7} md={4}>
                    Airdrop Sent/Received:
                  </Grid>
                  <Grid
                    sx={{
                      fontSize: isResp520 ? '16px' : '20px',
                      display: isResp520 ? 'flex' : 'block',
                      alignItems: 'center'
                    }}
                    item xs={5} md={8}>
                    5.4/61.241 Stake
                  </Grid>
                  <Grid
                    sx={{
                      fontWeight: isResp520 ? '400' : 'bold',
                      fontSize: isResp520 ? '16px' : '20px'
                    }}
                    item xs={7} md={4}>
                    Last Airdrop Sent:
                  </Grid>
                  <Grid
                    sx={{
                      fontSize: isResp520 ? '16px' : '20px',
                      display: isResp520 ? 'flex' : 'block',
                      alignItems: 'center'
                    }}
                    item xs={5} md={8}>
                    4 Months ago
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            {/* budge */}
            {
              (userLevel !== 0) && (
                <Grid item xs={3}>
                  <Box
                    sx={{
                      padding: '50px'
                    }}
                  >
                    {
                      userLevel === 1 && (
                        <Image
                          src={badge1}
                          alt="user badge"
                        />
                      )
                    }
                    {
                      userLevel === 2 && (
                        <Image
                          src={badge2}
                          alt="user badge"
                        />
                      )
                    }
                    {
                      userLevel === 3 && (
                        <Image
                          src={badge3}
                          alt="user badge"
                        />
                      )
                    }
                    {
                      userLevel === 4 && (
                        <Image
                          src={badge4}
                          alt="user badge"
                        />
                      )
                    }
                    {
                      userLevel === 5 && (
                        <Image
                          src={badge5}
                          alt="user badge"
                        />
                      )
                    }
                    {
                      userLevel === 6 && (
                        <Image
                          src={badge6}
                          alt="user badge"
                        />
                      )
                    }
                  </Box>
                </Grid>
              )
            }
          </Grid>

        </Box>
      </Grid>
      {/* team tab */}
      <Grid item xs={12}>
        <Box
          sx={{
            background: isResp600 ? '#69696969' : '#212121',
            padding: '20px',
            borderRadius: '16px'
          }}
        >
          <TabContext value={tabValue}>
            <TabList onChange={handleTab}>
              <Tab label="Team Viewer" value="1"
                sx={{
                  width: isResp600 ? '33%' : 'auto',
                  minWidth: isResp520 ? 'unset' : '90px',
                  padding: isResp520 ? '12px 3px' : '12px 16px'
                }} />
              <Tab label="Team Airdrop" value="2"
                sx={{
                  width: isResp600 ? '33%' : 'auto',
                  minWidth: isResp520 ? 'unset' : '90px',
                  padding: isResp520 ? '12px 3px' : '12px 16px'
                }} />
              <Tab label="Direct Airdrop" value="3"
                sx={{
                  width: isResp600 ? '33%' : 'auto',
                  minWidth: isResp520 ? 'unset' : '90px',
                  padding: isResp520 ? '12px 3px' : '12px 16px'
                }} />
            </TabList>
            <TabPanel
              sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: isResp520 ? '24px 0px' : '24px'
              }}
              value="1"
            >
              <Box sx={{ width: isResp1200 ? '100%' : 'auto' }}>
                <CustomNoIconInput
                  buttonName="show"
                  buttonColor="primary"
                  buttonTextColor="white"
                  placeHolder="0xc70dAF7356bC5f2eF6008E0FaA7e076C47C6e7f"
                  width={isResp1200 ? '100%' : "480px"}
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: isResp520 ? 'center' : 'right',
                    marginTop: '10px'
                  }}
                >
                  <ButtonGroup color="secondary" variant="contained"
                    sx={{
                      width: isResp520 ? '100%' : 'auto'
                    }}>
                    <Button
                      sx={{
                        width: isResp520 ? '50%' : 'auto'
                      }}>
                      My address
                    </Button>
                    <Button
                      sx={{
                        width: isResp520 ? '50%' : 'auto'
                      }}>
                      viw all
                    </Button>
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
            background: isResp600 ? '#69696969' : '#212121',
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