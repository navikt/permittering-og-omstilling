import type { GetServerSideProps, NextPage } from "next";
import Permitteringsside from "../components/innholdssider/permittering/Permitteringsside";
import { sanityClient } from "../sanity/sanity";

const Permittering: NextPage = (props) => {
  return <Permitteringsside {...props} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = "*[_type == \"vanligsporsmal\"]";
  const vanligeSpørsmål = await sanityClient.fetch(query);

  console.log("Fik respons fra sanity: ", vanligeSpørsmål);
  return { props: { vanligeSporsmal: vanligeSpørsmål } };
};

export default Permittering;
