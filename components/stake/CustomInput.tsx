import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Box } from '@mui/material';

interface ButtonProps {
  icon: any;
  width?: string;
}

const CustomInput = (props: ButtonProps) => {
  const { icon, width } = props;
  return (
    <Paper
      component="form"
      sx={{ display: 'flex', alignItems: 'center', width: !!width ? width : '100%', background: 'gray', }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: 'white' }}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Box sx={{ background: 'lightBlue', display: 'flex', borderRadius: '5px' }}>
        <Button type="submit" sx={{ p: '10px', color: 'black', fontWeight: 'bold' }}>
          max
        </Button>
        <Divider sx={{ height: 34, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
          {icon}
        </IconButton>
      </Box>
    </Paper>
  );
}

export default CustomInput;