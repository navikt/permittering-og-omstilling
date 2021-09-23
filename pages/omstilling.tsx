import React, { useEffect } from "react";
import { setBreadcrumbs } from "@navikt/nav-dekoratoren-moduler";
import {
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from "next";
import OmstillingsSide from "../components/innholdssider/omstilling/Omstillingsside";
import { sanityClient } from "../sanity/sanity";
import { TemaInnhold } from "../components/innholdssider/TemaInnhold";
import { RelatertInnhold } from "../components/innholdssider/RelatertInnhold";

type Props = {
  omstillingInnhold: TemaInnhold[];
  relatertInnhold: RelatertInnhold[];
};

const Omstilling: NextPage<Props> = (props) => {
  useEffect(() => {
    setBreadcrumbs([
      {
        title: "Permittering og omstilling",
        url: "/permittering-og-omstilling",
      },
      { title: "Omstilling", url: location.pathname },
    ]).catch(() => {
      console.error("klarte ikke å oppdatere breadcrumbs");
    });
  });
  return (
    <OmstillingsSide
      omstillingInnhold={props.omstillingInnhold}
      relatertInnhold={props.relatertInnhold}
    />
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  const query = '*[_type == "temaInnhold" && tema->tema == "Omstilling"]';
  const relatertInnholdQuery =
    '*[_type == "relatertInnhold" && tema->tema == "Omstilling"]{tittel, lenker}';

  const innholdResponse = await sanityClient.fetch(query);
  const relatertInnholdResponse = await sanityClient.fetch(
    relatertInnholdQuery
  );

  const omstillingInnhold: TemaInnhold[] = innholdResponse.map(
    (innhold: any) => ({
      tittel: innhold.tittel,
      ingress: innhold.ingress,
      innhold: innhold.innhold,
    })
  );

  const relatertInnhold: RelatertInnhold[] = relatertInnholdResponse.map(
    (innhold: any) => ({ 
      tittel: innhold.tittel,
      lenker: innhold.lenker
    })
  );

  return {
    props: {
      omstillingInnhold: omstillingInnhold,
      relatertInnhold: relatertInnhold,
    },
    revalidate: 60,
  };
};

export default Omstilling;
