import type { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import React, { useEffect } from "react";
import { setBreadcrumbs } from "@navikt/nav-dekoratoren-moduler";
import Permitteringsside, {
  PermitteringssideProps,
} from "../components/innholdssider/permittering/Permitteringsside";
import { sanityClient } from "../sanity/sanity";
import { HvordanPermittereProps } from "../components/innholdssider/permittering/HvordanPermittere/HvordanPermittere";
import { VanligSpørsmålType } from "../components/innholdssider/permittering/VanligeSpørsmål/VanligSpørsmål";
import { LønnspliktProps } from "../components/innholdssider/permittering/Lønnsplikt";
import { InfoTilAnsatteProps } from "../components/innholdssider/permittering/InfoTilAnsatte";
import { PermitteringsperiodenProps } from "../components/innholdssider/permittering/Permitteringsperioden";

const Permittering: NextPage<PermitteringssideProps> = (props) => {
  useEffect(() => {
    setBreadcrumbs([
      {
        title: "Permittering og omstilling",
        url: "/permittering-og-omstilling",
      },
      { title: "Permittering", url: location.pathname },
    ]).catch(() => {
      console.error("klarte ikke å oppdatere breadcrumbs");
    });
  });
  return <Permitteringsside {...props} />;
};

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<PermitteringssideProps>
> => {
  const query = `
    *[tema == "Permittering"] {
      "vanligeSporsmal": *[_type == "vanligSporsmal" && references(^._id)],
      "hvordanPermittere": *[id == "hvordanPermittere"]{
        ...,
        steg[]{
          ...,
          beskrivelse[]{
            _type == "reference" => @->,
            _type != "reference" => @
          }
        },
      },
      "lonnsplikt": *[id == "lonnsplikt"]{
        ...,
        innhold[]{
          _type == "reference" => @->,
          _type != "reference" => @
        }
      },
      "infoTilAnsatte": *[id == "infoTilAnsatte"]{
        ...,
        innhold[]{
          _type == "reference" => @->,
          _type != "reference" => @
        }
      },
      "permitteringsperioden": *[id == "permitteringsperioden"]{
        ...,
        innhold[]{
          _type == "reference" => @->,
          _type != "reference" => @
        }
      },
    }
  `;

  const sistOppdatertQuery = `
    *[_type == "temaInnhold" && tema->tema=="Permittering"]{
      _updatedAt
    }
  `;

  const response = await sanityClient.fetch(query);
  const lastUpdatedResponse = await sanityClient.fetch(sistOppdatertQuery);

  const vanligeSpørsmål: VanligSpørsmålType[] = response[0].vanligeSporsmal.map(
    (spørsmål: any) => ({
      sporsmal: spørsmål.sporsmal,
      svar: spørsmål.svar,
    })
  );
  
  const sistOppdatert: Date[] = lastUpdatedResponse.flatMap((oppdatert: any) => oppdatert._updatedAt);

  const hvordanPermittereAnsatte: HvordanPermittereProps = {
    tittel: response[0].hvordanPermittere[0].tittel,
    alleSteg: response[0].hvordanPermittere[0].steg.map((steg: any) => ({
      steg: steg.steg,
      beskrivelse: steg.beskrivelse,
    })),
    sistOppdatert: sistOppdatert
  };

  const lønnsplikt: LønnspliktProps = {
    tittel: response[0].lonnsplikt[0].tittel,
    innhold: response[0].lonnsplikt[0].innhold,
  };

  const infoTilAnsatte: InfoTilAnsatteProps = {
    tittel: response[0].infoTilAnsatte[0].tittel,
    innhold: response[0].infoTilAnsatte[0].innhold,
  };

  const permitteringsperioden: PermitteringsperiodenProps = {
    tittel: response[0].permitteringsperioden[0].tittel,
    innhold: response[0].permitteringsperioden[0].innhold,
  };


  return {
    props: {
      vanligeSpørsmål: vanligeSpørsmål,
      hvordanPermittere: hvordanPermittereAnsatte,
      lønnsplikt: lønnsplikt,
      infoTilAnsatte: infoTilAnsatte,
      permitteringsperioden: permitteringsperioden,
      sistOppdatert: sistOppdatert
    },
    revalidate: 60,
  };
};

export default Permittering;
