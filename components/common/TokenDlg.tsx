import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material'

interface TokenDlgProps {
  open: boolean;
  handleClose: () => void;
  tokens: Array<any>;
}

const TokenDlg = (props: TokenDlgProps) => {
  const {open, handleClose, tokens} = props;
  return (
    <Dialog open={open} onClose={handleClose}>
      <Box
        sx={{
          width: '400px',
          height: '600px',
          borderRadius: '16px'
        }}
      >
      </Box>
    </Dialog>
  )
}

export default TokenDlg;