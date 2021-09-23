import type { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { sanityClient } from "../sanity/sanity";
import React from "react";
import OppsigelsesSide from "../components/innholdssider/oppsigelse/OppsigelsesSide";
import { TemaInnhold } from "../components/innholdssider/TemaInnhold";
import { RelatertInnhold } from "../components/innholdssider/RelatertInnhold";

type Props = {
  oppsigelsesInnhold: TemaInnhold[];
  relatertInnhold: RelatertInnhold[];
};

const Oppsigelse: NextPage<Props> = (props) => {
  return (
      <OppsigelsesSide
        oppsigelsesInnhold={props.oppsigelsesInnhold}
        relatertInnhold={props.relatertInnhold}
      />
  );
};

export const getServerSideProps: GetServerSideProps = async (): Promise<GetServerSidePropsResult<Props>> => {
  const query = '*[_type == "temainnhold" && tema->tema == "Nedbemanning"]';
  const relatertInnholdQuery =
    '*[_type == "relatertinnhold" && tema->tema == "Nedbemanning"]';

  const innholdResponse = await sanityClient.fetch(query);
  const relatertInnholdResponse = await sanityClient.fetch(
    relatertInnholdQuery
  );

  const oppsigelsesInnhold: TemaInnhold[] = innholdResponse.map(
    (innhold: any) => ({
      tittel: innhold.tittel,
      ingress: innhold.ingress,
      innhold: innhold.innhold,
    })
  );

  const relatertInnhold: RelatertInnhold[] = relatertInnholdResponse.map(
    (innhold: any) => ({
      navn: innhold.navn,
      lenke: innhold.lenke,
    })
  );

  return {
    props: {
      oppsigelsesInnhold: oppsigelsesInnhold,
      relatertInnhold: relatertInnhold,
    }
  };
};


export default Oppsigelse;
