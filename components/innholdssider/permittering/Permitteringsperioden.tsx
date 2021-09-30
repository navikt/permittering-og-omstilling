import { Accordion, Alert, Heading, Link } from "@navikt/ds-react";
import Container from "../../container/Container";
import { permitteringInnhold } from "./Permitteringsside";
import { SanityBlockContent } from "./HvordanPermittere/HvordanPermittere";
import React, { FunctionComponent } from "react";
import BlockContent from "@sanity/block-content-to-react";
import styles from "./permittering.module.css";
import KopierLenke from "../../kopierlenke/KopierLenke";
import Lenke from "../../lenke/Lenke";

export type PermitteringsperiodenProps = {
  tittel: string;
  innhold: SanityBlockContent;
};

const Permitteringsperioden: FunctionComponent<PermitteringsperiodenProps> = ({
  tittel,
  innhold,
}) => {
  return (
    <Container>
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
  marks: {
    link: (props: any) => {
      return (
        <Lenke href={props.mark.href}>
          {/*<a className={styles.test}>{props.children[0]}</a>*/}
          {props.children[0]}
        </Lenke>
      );
    },
  },
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
