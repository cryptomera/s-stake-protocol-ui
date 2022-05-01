import type { NextPage } from 'next';
import PageContainer from 'components/PageContainer';
// Material
import Typography from "@mui/material/Typography";

const Stake: NextPage = () =>
{
  return (
    <PageContainer>
      <Typography align="center" variant="h1" component="div">
        stake page
      </Typography>
    </PageContainer>
  );
};

export default Stake;