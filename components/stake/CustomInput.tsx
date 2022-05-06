import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

interface ButtonProps {
  icon: any
}

const CustomInput = (props: ButtonProps) => {
  const { icon } = props;
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', background: 'white', }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: 'black' }}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Button type="submit" sx={{ p: '10px', color: 'black', fontWeight: 'bold' }}>
        max
      </Button>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        {icon}
      </IconButton>
    </Paper>
  );
}

export default CustomInput;