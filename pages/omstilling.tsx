import React, { useEffect } from "react";
import { setBreadcrumbs } from "@navikt/nav-dekoratoren-moduler";
import type { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";

import OmstillingsSide from "../components/innholdssider/omstilling/Omstillingsside";

import { RelatertInnhold } from "../components/innholdssider/RelatertInnhold";
import { sanityClient } from "../sanity/sanity";
import { TemaInnhold } from "../components/innholdssider/TemaInnhold";
import { attributesToProps } from "html-react-parser";

type Props = {
  omstillingInnhold: TemaInnhold[];
}

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
    <OmstillingsSide omstillingInnhold={props.omstillingInnhold}/>
  );
};

export const getServerSideProps: GetServerSideProps = async (): Promise<GetServerSidePropsResult<Props>> => {
  const query = '*[_type == "temainnhold" && tema->tema == "Omstilling"]';
  const response = await sanityClient.fetch(query);

  const omstillingInnhold: TemaInnhold[] = response.map((innhold: any) => ({
    tittel: innhold.tittel,
    ingress: innhold.ingress,
    innhold: innhold.innhold
  }));

  return { props: { omstillingInnhold: omstillingInnhold } };
}

export default Omstilling;
