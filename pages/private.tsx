import Head from "next/head";
import PageContainer from "components/PageContainer";
import PrivateCard from "components/private/PrivateCard";
const PrivateSale = () => {
  return (
    <>
      <Head>
        <title>Private Sale</title>
        <meta
          name="description"
          content="Sale for $STAKE, the currency of Stake Protocol."
        />
        <meta name="author" content="StakeProtocol" />
      </Head>
      <PageContainer>
        <PrivateCard />
      </PageContainer>
    </>
  );
};
export default PrivateSale;
