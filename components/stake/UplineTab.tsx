import { Box, Grid } from '@mui/material';
import * as React from 'react';
import CustomNoIconInput from './CustomNoIconInput';


const data = {
  name: "Parent",
  children: [
    {
      name: "Child One"
    },
    {
      name: "Child Two"
    }
  ]
};

const UplineTab = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={6}>
          player
        </Grid>
        <Grid item xs={6}>
          <CustomNoIconInput
            buttonName="show"
            buttonColor="primary"
            buttonTextColor="white"
            placeHolder="0xc70dAF7356bC5f2eF6008E0FaA7e076C47C6e7f"
            width="600px"
          />
        </Grid>
        <Grid item xs={12}>
       
        </Grid>
      </Grid>
    </Box>
  );
}

export default UplineTab;