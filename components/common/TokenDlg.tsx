import Dialog from '@mui/material/Dialog';
import { Box, IconButton } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

interface TokenDlgProps {
  open: string;
  handleClose: () => void;
  tokens: Array<any>;
  setSwapToken: Function;
  setTargetToken: Function;
}

const TokenDlg = (props: TokenDlgProps) => {
  const { open, handleClose, tokens, setSwapToken, setTargetToken } = props;

  const handleToken = (value: any) => {
    if(open == 'swapToken') {
      setSwapToken(value);
    } else if (open == 'targetToken') {
      setTargetToken(value);
    }
    handleClose();
  } 

  return (
    <Dialog
      open={!!open}
      onClose={handleClose}
    >
      <DialogTitle
        sx={{
          display: 'flex'
        }}
      >
        <Box>
          Select a Token
        </Box>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Box>
          <IconButton onClick={handleClose} sx={{ color: 'text.primary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <List
        sx={{
          width: '400px',
          height: '600px',
          borderRadius: '16px'
        }}
      >
        {
          tokens.map((token, i) => (
            <ListItem
              onClick={() => handleToken(token)}
              button
              key={i}
            >
              <ListItemAvatar>
              </ListItemAvatar>
              <ListItemText primary={token.name} />
            </ListItem>
          ))
        }
      </List>
    </Dialog>
  )
}

export default TokenDlg;