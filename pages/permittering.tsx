import type { GetServerSideProps, NextPage } from "next";
import Permitteringsside from "../components/innholdssider/permittering/Permitteringsside";
import { sanityClient } from "../sanity/sanity";

const Permittering: NextPage = () => {
  return <Permitteringsside />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = "*[_type == \"vanligsporsmal\"]";
  const vanligeSpørsmål = await sanityClient.fetch(query);

  console.log("Fik respons fra sanity: ", vanligeSpørsmål);
  return { props: { tekst: "hei" } };
};

export default Permittering;
