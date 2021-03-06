import { Heading } from "@navikt/ds-react";
import Container from "../../../container/Container";
import { permitteringInnhold } from "../Permitteringsside";
import React, { FunctionComponent } from "react";
import VanligSpørsmål, { VanligSpørsmålType } from "./VanligSpørsmål";
import KopierLenke from "../../../kopierlenke/KopierLenke";
import Lenke from "../../../lenke/Lenke";
import VanligeSpørsmålInnhold from "./VanligeSpørsmålInnhold";

type Props = {
  vanligeSpørsmål: VanligSpørsmålType[];
};

const VanligeSporsmal: FunctionComponent<Props> = ({ vanligeSpørsmål }) => {
  const vanligeSporsmalSorted: VanligSpørsmålType[] = vanligeSpørsmål.sort(
    (a, b) => a.sortOrder - b.sortOrder
  );
  return (
    <Container id={permitteringInnhold.vanligeSpørsmål.anker}>
      <Heading size="xlarge" id={permitteringInnhold.vanligeSpørsmål.anker}>
        Vanlige spørsmål
      </Heading>
      <KopierLenke anker={permitteringInnhold.vanligeSpørsmål.anker} />
      <VanligeSpørsmålInnhold vanligeSpørsmål={vanligeSporsmalSorted} />
      {vanligeSporsmalSorted.map((vanligSpørsmål, i) => (
        <VanligSpørsmål {...vanligSpørsmål} key={i} />
      ))}
    </Container>
  );
};

export default VanligeSporsmal;
