import { Heading } from "@navikt/ds-react";
import Container from "../../container/Container";
import { permitteringInnhold } from "./Permitteringsside";
import { SanityBlockContent } from "./HvordanPermittere/HvordanPermittere";
import React, { FunctionComponent } from "react";
import KopierLenke from "../../kopierlenke/KopierLenke";
import BlockContent from "../../BlockContent/BlockContent";

export type LønnspliktProps = {
  tittel: string;
  innhold: SanityBlockContent;
};

const Lønnsplikt: FunctionComponent<LønnspliktProps> = ({
  tittel,
  innhold,
}) => {
  return (
    <Container id={permitteringInnhold.lønnsplikt.anker}>
      <Heading size="xlarge" id={permitteringInnhold.lønnsplikt.anker}>
        {tittel}
      </Heading>
      <KopierLenke anker={permitteringInnhold.lønnsplikt.anker} />
      <BlockContent blocks={innhold} />
    </Container>
  );
};

export default Lønnsplikt;
