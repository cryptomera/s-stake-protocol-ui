import type { NextPage } from "next";
import PageContainer from "components/PageContainer";
// Material
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from 'react-responsive';

const Home: NextPage = () =>
{
  const router = useRouter();
  const isResp520 = useMediaQuery({
    query: '(max-width: 520px)'
  });
  return (
    <PageContainer>
      <Typography align="center" variant="h1" component="div"
      sx={{
        fontSize:isResp520?'3rem':'3rem'
      }}>
        COMING SOON
      </Typography>
    </PageContainer>
  );
};

export default Home;
