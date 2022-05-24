import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material"
import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useState } from "react";
import { address } from 'utils/ethers.util';
import { Contract } from "@ethersproject/contracts";
import Erc20 from '../../abi/Erc20.json';
import Nerd from '../../abi/NerdFaucetV2.json';
import { parseEther } from "ethers/lib/utils";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from '@ethersproject/providers';

interface DepositModalProps {
  open: boolean;
  handleClose: () => void;
}
const DepositModal = (props: DepositModalProps) => {
  const [amount, setAmount] = useState('0');
  const [upline, setUpline] = useState('');
  const { open, handleClose } = props;
  const { library, account } = useWeb3React<Web3Provider>();
  const deposit = async () => {
    if(parseEther(amount) < parseEther("1")) {
      window.alert("You must deposit at least 1 ether.")
      return;
    }
    const stakeToken = new Contract(address['$stake'], Erc20.abi, library?.getSigner());
    await stakeToken.approve(address['nerd'], parseEther(amount));
    stakeToken.once("Approval", () => {
      const nerd = new Contract(address['nerd'], Nerd.abi, library?.getSigner());
      nerd.deposit(amount, upline);
    });
  }
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Deposit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Amount"
            fullWidth
            variant="standard"
            value={amount}
            onChange={e=>setAmount(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Upline"
            fullWidth
            variant="standard"
            value={upline}
            onChange={e=>setUpline(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={deposit}>Deposit</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
  )
}

export default DepositModal;