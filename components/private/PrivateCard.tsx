//MUI
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
//Utils
import BigNumber from "bignumber.js";
import Countdown from "react-countdown";
import Image from "next/image";
// hooks
import { useAuth, useContract } from "hooks/useAuth";
import { useState, useCallback, useEffect, KeyboardEvent } from "react";

import presaleContract from 'abi/TokenPresale.json'

const PrivateCard = () =>
{
  const [ BNBAmount, setBNBAmount ] = useState<number>(0);
  const [ fillPercent, setFillPercent ] = useState<number>(0);

  //Blockchain
  // const { methods: presaleMethod } = useContract(
  //   presaleContract.abi,
  //   ""
  // );

  const totalToBuy = BNBAmount * 525;

  const buyNow = useCallback(() =>
  {
    console.log(BNBAmount);
  }, [ BNBAmount ]);

  // const getSaleState = useCallback(async () =>
  // {
  //   const totalRaised = new BigNumber(
  //     await presaleMethod.totalRaise().call()
  //   ).div(10 ** 18);
  //   setFillPercent(parseInt(totalRaised.div(50).times(100).toFixed()));
  // }, []);

  return (
    <Card
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
        width: 500,
        p: 8,
        my: 4,
        border: 2,
        borderColor: theme.palette.primary.main,
        borderRadius: 4,
      })}
    >
      <Stack direction="column" alignItems="center">
        {/* <progress
          id="raise_percent"
          value={fillPercent}
          max={100}
          className="w-full h-6 rounded-full"
        >
          {fillPercent}%
        </progress> */}
        <Typography
          component="div"
          style={{ fontFamily: "Century-Gothic" }}
          align="justify"
        >
          Stake Protocol seeks to have the best of some of the successful
          protocols in Defi. $STAKE is the official currency of Stake Protocol.
          This is a private sale that will allow you to buy this token. The
          token will be available when the presale ends.
          <Typography
            align="center"
            sx={(theme) => ({
              color: theme.palette.secondary.main,
              fontFamily: "Abadi",
              my: 2,
            })}
          >
            TERMS AND CONDITIONS
          </Typography>
          <ul>
            <li>The hard cap is of 75 BNB</li>
            <li>You can only buy up to 2 BNB of $STAKE per wallet</li>
            <li>The private sale will only last for 24 hours.</li>
          </ul>
        </Typography>
        {/* USER BOUGHT BNB */}
        {/* CLAIM NOW BUTTON - ONLY SHOWS WHEN SALE IS OVER AND TOKEN ADDRESS IS NOT 0 */}
        {/* PROGRESS BAR */}
        <Countdown
          date={1651489200000}
          renderer={({ days, hours, minutes, seconds }) =>
          {
            return (
              <Typography variant="h5">
                <>
                  {days > 0 ? (
                    <strong>
                      {days}{" "}
                      <Typography color="secondary" display="inline">
                        D
                      </Typography>{" "}
                    </strong>
                  ) : (
                    ""
                  )}
                  &nbsp;
                  {hours > 0 ? (
                    <strong>
                      {hours}{" "}
                      <Typography color="secondary" display="inline">
                        H
                      </Typography>{" "}
                    </strong>
                  ) : (
                    ""
                  )}
                  &nbsp;
                  {minutes > 0 ? (
                    <strong>
                      {minutes}{" "}
                      <Typography color="secondary" display="inline">
                        M
                      </Typography>{" "}
                    </strong>
                  ) : (
                    ""
                  )}
                  &nbsp;
                  {seconds > 0 ? (
                    <strong>
                      {seconds}{" "}
                      <Typography color="secondary" display="inline">
                        S
                      </Typography>{" "}
                    </strong>
                  ) : (
                    ""
                  )}
                  &nbsp;
                </>
              </Typography>
            );
          }}
        >
          <>
            <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
              <TextField
                error={false}
                value={BNBAmount}
                type="number"
                id="filled-error-helper-text"
                label="Amount"
                inputProps={{ step: "0.01", min: "0.00", max: "2.00" }}
                variant="outlined"
                sx={{ mr: 2 }}
                onChange={(e) =>
                {
                  const newVal = parseFloat(e.target.value);
                  if (newVal < 0 || isNaN(newVal)) return setBNBAmount(0);

                  if (newVal > 2) return setBNBAmount(2);
                  setBNBAmount(Math.floor(newVal * 100) / 100);
                }}
                onFocus={(e) => e.target.select()}
                onKeyUp={(e) =>
                {
                  if (e.key == "Enter") {
                    e.preventDefault();
                    (e.target as HTMLInputElement).blur();
                  }
                }}
              />
              BNB
            </Stack>
            FOR {totalToBuy.toFixed(2)} $STAKE
            <Stack direction="row" alignItems="center" sx={{ mt: 2 }}>
              <Image
                src="/logos/Logo_4.png"
                height={5877 / 50}
                width={2156 / 50}
                alt="Stake Protocol Logo 4"
              />
              <Button
                variant="contained"
                color="secondary"
                sx={{ mx: 1.5 }}
                onClick={buyNow}
              >
                BUY NOW
              </Button>
              <Image
                src="/logos/Logo_4.png"
                height={5877 / 50}
                width={2156 / 50}
                alt="Stake Protocol Logo 4"
              />
            </Stack>
          </>
        </Countdown>
      </Stack>
    </Card>
  );
};
export default PrivateCard;
