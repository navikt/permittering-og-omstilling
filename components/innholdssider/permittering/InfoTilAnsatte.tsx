import { Accordion, Heading } from "@navikt/ds-react";
import Container from "../../container/Container";
import { permitteringInnhold } from "./Permitteringsside";
import React, { FunctionComponent } from "react";
import { SanityBlockContent } from "./HvordanPermittere/HvordanPermittere";
import BlockContent from "@sanity/block-content-to-react";

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
      <Heading
        spacing
        size="xlarge"
        id={permitteringInnhold.infoTilAnsatte.anker}
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
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>{props.node.tittel}</Accordion.Header>
          <Accordion.Content>
            <BlockContent blocks={props.node.beskrivelse} />
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    ),
  },
};

export default InfoTilAnsatte;
