import { Dialog, DialogContent, DialogTitle, IconButton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';

interface SlippageProps {
  open: boolean;
  handleClose: () => void;
  setSlippage: Function;
  slippage: number;
}

const SlippageDlg = (props: SlippageProps) => {
  const { open, handleClose, setSlippage, slippage} = props;

  const handleSlippage = (e:any) => {
    setSlippage(e.target.value);
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle
        sx={{
          display: 'flex'
        }}
      >
        <Box>
          Options
        </Box>
        <Box sx={{flexGrow: 1}}></Box>
        <Box>
          <IconButton onClick={handleClose} sx={{color: 'text.primary'}}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Slippag"
          fullWidth
          variant="standard"
          value={slippage}
          onChange={handleSlippage}
        />
      </DialogContent>
    </Dialog>
  )
}

export default SlippageDlg;