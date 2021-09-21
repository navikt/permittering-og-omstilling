import type {
  GetServerSideProps,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import Permitteringsside from "../components/innholdssider/permittering/Permitteringsside";
import { sanityClient } from "../sanity/sanity";
import { VanligSpørsmål } from "../components/innholdssider/permittering/VanligeSporsmal";

type Props = {
  vanligeSpørsmål: VanligSpørsmål[];
};

const Permittering: NextPage<Props> = (props) => {
  return <Permitteringsside vanligeSpørsmål={props.vanligeSpørsmål} />;
};

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<Props>
> => {
  const query = '*[_type == "vanligsporsmal"]';
  const response = await sanityClient.fetch(query);

  const vanligeSpørsmål: VanligSpørsmål[] = response.map((spørsmål: any) => ({
    sporsmal: spørsmål.sporsmal,
    svar: spørsmål.svar,
  }));

  return { props: { vanligeSpørsmål: vanligeSpørsmål } };
};

export default Permittering;
