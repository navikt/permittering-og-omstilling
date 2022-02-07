import { Heading } from "@navikt/ds-react";
import Container from "../../container/Container";
import { permitteringInnhold } from "./Permitteringsside";
import React, { FunctionComponent } from "react";
import { SanityBlockContent } from "./HvordanPermittere/HvordanPermittere";
import KopierLenke from "../../kopierlenke/KopierLenke";
import BlockContent from "../../BlockContent/BlockContent";

export type InfoTilAnsatteProps = {
  tittel: string;
  innhold: SanityBlockContent;
};

const InfoTilAnsatte: FunctionComponent<InfoTilAnsatteProps> = ({
  tittel,
  innhold,
}) => {
  return (
    <Container id={permitteringInnhold.infoTilAnsatte.anker}>
      <Heading size="xlarge" id={permitteringInnhold.infoTilAnsatte.anker}>
        {tittel}
      </Heading>
      <KopierLenke anker={permitteringInnhold.infoTilAnsatte.anker} />
      <BlockContent blocks={innhold} />
    </Container>
  );
};

export default InfoTilAnsatte;
