import React, { FunctionComponent } from "react";
import { Heading } from "@navikt/ds-react";
import LinkCard from "../../../linkcard/LinkCard";

type Props = {};

const HvaKanNavHjelpeDegMed: FunctionComponent<Props> = () => {
  return (
    <div>
      <Heading size="xlarge">Hva kan Nav hjelpe deg med?</Heading>
      <LinkCard tittel="Hvordan permittere ansatte"></LinkCard>
      <LinkCard tittel="Skal du omstille?"></LinkCard>
      <LinkCard tittel="Hvordan nedbemanne"></LinkCard>
    </div>
  );
};

export default HvaKanNavHjelpeDegMed;
