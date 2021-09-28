import { Alert, Heading } from "@navikt/ds-react";
import Container from "../../container/Container";
import { permitteringInnhold } from "./Permitteringsside";
import { SanityBlockContent } from "./HvordanPermittere/HvordanPermittere";
import React, { FunctionComponent } from "react";
import BlockContent from "@sanity/block-content-to-react";
import styles from "../omstilling/omstilling.module.css";

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
        spacing
        size="xlarge"
        id={permitteringInnhold.permitteringsperioden.anker}
      >
        {tittel}
      </Heading>

      <BlockContent blocks={innhold} serializers={serializers} />
    </Container>
  );
};

const serializers = {
  types: {
    infofelt: (props: any) => (
      <Alert variant="warning">
        <BlockContent blocks={props.node.beskrivelse} />
      </Alert>
    ),
  },
};

export default Permitteringsperioden;
