import type { NextPage } from "next";
import PageContainer from "components/PageContainer";
// Material
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () =>
{
  const router = useRouter();
  return (
    <PageContainer>
      <Typography align="center" variant="h1" component="div">
        COMING SOON
      </Typography>
    </PageContainer>
  );
};

export default Home;
