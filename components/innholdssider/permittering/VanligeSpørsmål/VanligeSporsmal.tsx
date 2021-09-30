import { Heading } from "@navikt/ds-react";
import Container from "../../../container/Container";
import { permitteringInnhold } from "../Permitteringsside";
import React, { FunctionComponent } from "react";
import VanligSpørsmål, { VanligSpørsmålType } from "./VanligSpørsmål";
import KopierLenke from "../../../kopierlenke/KopierLenke";
import Lenke from "../../../lenke/Lenke";

type Props = {
  vanligeSpørsmål: VanligSpørsmålType[];
};

const VanligeSporsmal: FunctionComponent<Props> = ({ vanligeSpørsmål }) => {
  return (
    <Container>
      <Heading size="xlarge" id={permitteringInnhold.vanligeSpørsmål.anker}>
        Vanlige spørsmål
      </Heading>
      <KopierLenke anker={permitteringInnhold.infoTilAnsatte.anker} />
      {vanligeSpørsmål.map((vanligSpørsmål) => (
        <VanligSpørsmål {...vanligSpørsmål} key={vanligSpørsmål.sporsmal} />
      ))}
      <Heading spacing size="small">
        Fant du ikke det du lette etter?
      </Heading>
      <Lenke href="https://www.nav.no/person/kontakt-oss/chat/arbeidsgiver">
        Chat med NAV om permittering.
      </Lenke>
    </Container>
  );
};

export default VanligeSporsmal;
