import type { GetServerSideProps, NextPage } from "next";
import Permitteringsside from "../components/innholdssider/permittering/Permitteringsside";
import { sanityClient } from "../poagpermitteringogomstilling/sanity";

const Permittering: NextPage = () => {
  return <Permitteringsside />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = "*";
  const vanligeSpørsmål = await sanityClient.fetch(query);

  console.log("Fik respons fra sanity: ", vanligeSpørsmål);
  return { props: { tekst: "hei" } };
};

export default Permittering;
