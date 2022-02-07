import { Heading } from "@navikt/ds-react";
import Container from "../../container/Container";
import { permitteringInnhold } from "./Permitteringsside";
import { SanityBlockContent } from "./HvordanPermittere/HvordanPermittere";
import React, { FunctionComponent } from "react";
import KopierLenke from "../../kopierlenke/KopierLenke";
import BlockContent from "../../BlockContent/BlockContent";

export type PermitteringsperiodenProps = {
  tittel: string;
  innhold: SanityBlockContent;
};

const Permitteringsperioden: FunctionComponent<PermitteringsperiodenProps> = ({
  tittel,
  innhold,
}) => {
  return (
    <Container id={permitteringInnhold.permitteringsperioden.anker}>
      <Heading
        size="xlarge"
        id={permitteringInnhold.permitteringsperioden.anker}
      >
        {tittel}
      </Heading>
      <KopierLenke anker={permitteringInnhold.permitteringsperioden.anker} />
      <BlockContent blocks={innhold} />
    </Container>
  );
};

export default Permitteringsperioden;
