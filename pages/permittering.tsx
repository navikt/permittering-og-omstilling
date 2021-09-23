import type {
  GetServerSideProps,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import Permitteringsside, {
  PermitteringssideProps,
} from "../components/innholdssider/permittering/Permitteringsside";
import { sanityClient } from "../sanity/sanity";
import { VanligSpørsmål } from "../components/innholdssider/permittering/VanligeSporsmal";
import { HvordanPermittereProps } from "../components/innholdssider/permittering/HvordanPermittere/HvordanPermittere";

const Permittering: NextPage<PermitteringssideProps> = (props) => {
  return <Permitteringsside {...props} />;
};

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<PermitteringssideProps>
> => {
  const query = `
    *[tema == "Permittering"] {
      "stegforsteg": *[_type == "stegforsteg" && references(^._id)],
      "vanligeSporsmal": *[_type == "vanligsporsmal" && references(^._id)],
      "relatertInnhold": *[_type == "relatertinnhold" && references(^._id)],
      "varselfrist": *[id == "varselfrist"]
    }
  `;

  const response = await sanityClient.fetch(query);

  const vanligeSpørsmål: VanligSpørsmål[] = response[0].vanligeSporsmal.map(
    (spørsmål: any) => ({
      sporsmal: spørsmål.sporsmal,
      svar: spørsmål.svar,
    })
  );

  const hvordanPermittereAnsatte: HvordanPermittereProps = {
    tittel: response[0].stegforsteg[0].tittel,
    alleSteg: response[0].stegforsteg[0].steg.map((steg: any) => ({
      steg: steg.steg,
      beskrivelse: steg.beskrivelse,
    })),
    varselfristinfo: {
      tittel: response[0].varselfrist[0].tittel,
      beskrivelse: response[0].varselfrist[0].beskrivelse,
    },
  };

  return {
    props: {
      vanligeSpørsmål: vanligeSpørsmål,
      hvordanPermittere: hvordanPermittereAnsatte,
    },
  };
};

export default Permittering;
