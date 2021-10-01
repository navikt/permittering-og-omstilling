import { Accordion, Alert, Heading, Link } from "@navikt/ds-react";
import Container from "../../container/Container";
import { permitteringInnhold } from "./Permitteringsside";
import { SanityBlockContent } from "./HvordanPermittere/HvordanPermittere";
import React, { FunctionComponent } from "react";
import styles from "./permittering.module.css";
import KopierLenke from "../../kopierlenke/KopierLenke";
import BlockContent from "../BlockContent/BlockContent";

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
      <KopierLenke anker={permitteringInnhold.infoTilAnsatte.anker} />
      <BlockContent blocks={innhold} serializers={serializers} />
    </Container>
  );
};

const serializers = {
  types: {
    infofelt: (props: any) => {
      if (props.node.id === "forlengeDagpengeperioder") {
        return (
          <Alert variant="warning">
            <BlockContent blocks={props.node.beskrivelse} />
          </Alert>
        );
      } else {
        return (
          <Accordion className={styles.accordion}>
            <Accordion.Item>
              <Accordion.Header>{props.node.tittel}</Accordion.Header>
              <Accordion.Content>
                <BlockContent blocks={props.node.beskrivelse} />
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        );
      }
    },
  },
};

export default Permitteringsperioden;
