import type { NextPage } from "next";
import PageContainer from "components/PageContainer";
// Material
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () =>
{
  const router = useRouter();
  useEffect(() => {
    if(router.pathname === '/') {
      router.push({pathname: '/stake', query: {tab: 'overview'}});
    }
  }, [])
  return (
    <PageContainer>
      <Typography align="center" variant="h1" component="div">
        COMING SOON
      </Typography>
    </PageContainer>
  );
};

export default Home;
