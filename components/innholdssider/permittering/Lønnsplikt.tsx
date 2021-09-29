import { Alert, Heading, Link } from "@navikt/ds-react";
import Container from "../../container/Container";
import { permitteringInnhold } from "./Permitteringsside";
import styles from "./permittering.module.css";
import { SanityBlockContent } from "./HvordanPermittere/HvordanPermittere";
import React, { FunctionComponent } from "react";
import BlockContent from "@sanity/block-content-to-react";
import KopierLenke from "../../kopierlenke/KopierLenke";

export type LønnspliktProps = {
  tittel: string;
  innhold: SanityBlockContent;
};

const Lønnsplikt: FunctionComponent<LønnspliktProps> = ({
  tittel,
  innhold,
}) => {
  return (
    <Container>
      <Heading size="xlarge" id={permitteringInnhold.lønnsplikt.anker}>
        {tittel}
      </Heading>
      <KopierLenke anker={permitteringInnhold.lønnsplikt.anker} />
      <BlockContent blocks={innhold} serializers={serializers} />
    </Container>
  );
};

const serializers = {
  marks: {
    link: (props: any) => {
      return <Link href={props.mark.href}>{props.children[0]}</Link>
    }
  },
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
