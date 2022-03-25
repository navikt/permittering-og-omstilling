import { setBreadcrumbs } from "@navikt/nav-dekoratoren-moduler";
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import { useEffect } from "react";
import StreikSide from "../components/innholdssider/streik/streikside";
import { TemaInnhold } from "../components/innholdssider/TemaInnhold";
import { sanityClient } from "../sanity/sanity";
import { ekspanderReferanser } from "../utils/sanityUtils";


type Props = {
  streikInnhold: TemaInnhold[];
  sistOppdatert: Date[];
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
    <StreikSide
      streikInnhold={props.streikInnhold}
      sistOppdatert={props.sistOppdatert}
    />
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

  const innholdResponse = await sanityClient.fetch(query);
  const lastUpdatedResponse = await sanityClient.fetch(sistOppdatertQuery);

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

  return {
    props: {
      streikInnhold: streikInnhold,
      sistOppdatert: sistOppdatert,
    },
    revalidate: 120,
  };
};

export default Streik;
