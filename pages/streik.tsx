import { setBreadcrumbs } from "@navikt/nav-dekoratoren-moduler";
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import Head from 'next/head'
import { useEffect } from "react";
import StreikSide from "../components/innholdssider/streik/streikside";
import { TemaInnhold } from "../components/innholdssider/TemaInnhold";
import { sanityClient } from "../sanity/sanity";
import { ekspanderReferanser } from "../utils/sanityUtils";
import {PermitteringsmeldingVedStreik} from "../components/innholdssider/PermitteringsmeldingVedStreik";


type Props = {
  streikInnhold: TemaInnhold[];
  sistOppdatert: Date[];
  permitteringsmeldingVedStreik: PermitteringsmeldingVedStreik[];
};


const Streik: NextPage<Props> = (props) => {
  useEffect(() => {
    setBreadcrumbs([
      {
        title: "Permittering og omstilling",
        url: "/permittering-og-omstilling",
      },
      { title: "Permittering ved streik", url: location.pathname },
    ]).catch(() => {
      console.error("klarte ikke å oppdatere breadcrumbs");
    });
  });
  return (
    <>
      <Head>
        <title>
          Permittering ved streik
        </title>
      </Head>
      <StreikSide
          permitteringsmeldingVedStreik={props.permitteringsmeldingVedStreik}
        streikInnhold={props.streikInnhold}
        sistOppdatert={props.sistOppdatert}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  const query = `*[_type == "temaInnhold" && tema->tema == "Streik"]{
    ...,
    ${ekspanderReferanser("innhold")}
  }`;
  const sistOppdatertQuery = `
    *[_type == "temaInnhold" && tema->tema=="Streik"]{
      _updatedAt
    }
  `;
  const permitteringsMeldingVedStreikQuery = `
    *[_type == "permitteringsmeldingVedStreik"]{
      innhold
    }
  `;

  const innholdResponse = await sanityClient.fetch(query);
  const lastUpdatedResponse = await sanityClient.fetch(sistOppdatertQuery);
  const permitteringsMeldingVedStreikRespons = await sanityClient.fetch(permitteringsMeldingVedStreikQuery)

  const streikInnhold: TemaInnhold[] = innholdResponse.map(
    (innhold: any) => ({
      tittel: innhold.tittel,
      innhold: innhold.innhold,
      sistOppdatert: innhold._updatedAt,
    })
  );

  const sistOppdatert: Date[] = lastUpdatedResponse.flatMap(
    (oppdatert: any) => oppdatert._updatedAt
  );

  const permitteringsMeldingVedStreik: PermitteringsmeldingVedStreik[] = permitteringsMeldingVedStreikRespons.map(
      (innhold: any) => ({
        innhold: innhold.innhold,
      })
  );

  console.log("juhhu")
  console.log ( "logger respons", permitteringsMeldingVedStreikRespons)

  return {
    props: {
      streikInnhold: streikInnhold,
      sistOppdatert: sistOppdatert,
      permitteringsmeldingVedStreik: permitteringsMeldingVedStreik

    },
    revalidate: 120,
  };
};

export default Streik;
