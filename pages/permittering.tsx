import type {
  GetServerSideProps,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import Permitteringsside, {
  PermitteringssideProps,
} from "../components/innholdssider/permittering/Permitteringsside";
import { sanityClient } from "../sanity/sanity";
import { HvordanPermittereProps } from "../components/innholdssider/permittering/HvordanPermittere/HvordanPermittere";
import { VanligSpørsmålType } from "../components/innholdssider/permittering/VanligeSpørsmål/VanligSpørsmål";
import { LønnspliktProps } from "../components/innholdssider/permittering/Lønnsplikt";
import { InfoTilAnsatteProps } from "../components/innholdssider/permittering/InfoTilAnsatte";

const Permittering: NextPage<PermitteringssideProps> = (props) => {
  return <Permitteringsside {...props} />;
};

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<PermitteringssideProps>
> => {
  const query = `
    *[tema == "Permittering"] {
      "hvordanPermittere": *[id == "hvordanPermittere"],
      "vanligeSporsmal": *[_type == "vanligsporsmal" && references(^._id)],
      "lonnsplikt": *[id == "lonnsplikt"],
      "varselfrist": *[id == "varselfrist"],
      "nyePermitteringsregler": *[id == "nyePermitteringsregler"],
      "forlengeDagpengeperioder": *[id == "forlengeDagpengeperioder"],
      "infoTilAnsatte": *[id == "infoTilAnsatte"],
    }
  `;

  const response = await sanityClient.fetch(query);

  const vanligeSpørsmål: VanligSpørsmålType[] = response[0].vanligeSporsmal.map(
    (spørsmål: any) => ({
      sporsmal: spørsmål.sporsmal,
      svar: spørsmål.svar,
    })
  );

  const hvordanPermittereAnsatte: HvordanPermittereProps = {
    tittel: response[0].hvordanPermittere[0].tittel,
    alleSteg: response[0].hvordanPermittere[0].steg.map((steg: any) => ({
      steg: steg.steg,
      beskrivelse: steg.beskrivelse,
    })),
    varselfristinfo: {
      tittel: response[0].varselfrist[0].tittel,
      beskrivelse: response[0].varselfrist[0].beskrivelse,
    },
  };

  const lønnsplikt: LønnspliktProps = {
    tittel: response[0].lonnsplikt[0].tittel,
    innhold: response[0].lonnsplikt[0].innhold,
    nyePermitteringsregler: {
      tittel: response[0].nyePermitteringsregler[0].tittel,
      beskrivelse: response[0].nyePermitteringsregler[0].beskrivelse,
    },
    forlengeDagpengeperioder:
      response[0].forlengeDagpengeperioder[0].beskrivelse,
  };

  const infoTilAnsatte: InfoTilAnsatteProps = {
    tittel: response[0].infoTilAnsatte[0].tittel,
    innhold: response[0].infoTilAnsatte[0].innhold,
  };

  return {
    props: {
      vanligeSpørsmål: vanligeSpørsmål,
      hvordanPermittere: hvordanPermittereAnsatte,
      lønnsplikt: lønnsplikt,
      infoTilAnsatte: infoTilAnsatte,
    },
  };
};

export default Permittering;
