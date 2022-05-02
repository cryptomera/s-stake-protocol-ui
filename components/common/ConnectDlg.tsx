import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

interface ConnectDlgProps {
  open: boolean;
  selectedValue: string;
  onClose: (selectedValue: string) => void;
}

const ConnectDlg = (props: ConnectDlgProps) => {

  const handleClose = () => {
    onClose(selectedValue);
  }

  const handleListItemClick = (value: string) => {
    onClose(value);
  }
  const { onClose, selectedValue, open } = props; 
  return (
    <Dialog onClose={handleClose} open={open}>
      <List sx={{ pt:0 }}>
        <ListItem button onClick={() => handleListItemClick("metamask")}>
          <ListItemAvatar>
            
          </ListItemAvatar>
          <ListItemText>
            MetaMask
          </ListItemText>
        </ListItem>
        <ListItem button onClick={() => handleListItemClick("coinbase")}>
          <ListItemAvatar>
            
          </ListItemAvatar>
          <ListItemText>
            CoinBase
          </ListItemText>
        </ListItem>
      </List>
    </Dialog>
  )
}

export default ConnectDlg;