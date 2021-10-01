import { Alert, Heading } from "@navikt/ds-react";
import Container from "../../container/Container";
import { permitteringInnhold } from "./Permitteringsside";
import styles from "./permittering.module.css";
import { SanityBlockContent } from "./HvordanPermittere/HvordanPermittere";
import React, { FunctionComponent } from "react";
import KopierLenke from "../../kopierlenke/KopierLenke";
import Lenke from "../../lenke/Lenke";
import BlockContent from "../BlockContent/BlockContent";

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
      <BlockContent blocks={innhold} serializers={serializers} />
    </Container>
  );
};

const serializers = {
  types: {
    infofelt: (props: any) => {
      if (props.node.id === "forlengeDagpengeperioder") {
        return (
          <Alert
            variant="warning"
            className={styles.forlengeDagpengeperioderAlert}
          >
            <BlockContent blocks={props.node.beskrivelse} />
          </Alert>
        );
      } else {
        return (
          <Alert variant="info">
            <Heading spacing size="medium">
              {props.node.tittel}
            </Heading>
            <BlockContent blocks={props.node.beskrivelse} />
          </Alert>
        );
      }
    },
  },
};

export default Lønnsplikt;
