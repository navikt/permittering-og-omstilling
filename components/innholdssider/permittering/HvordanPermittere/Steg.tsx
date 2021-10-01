import React, { FunctionComponent } from "react";
import { StegType } from "./HvordanPermittere";
import { Accordion, Heading } from "@navikt/ds-react";
import BlockContent from "../../BlockContent/BlockContent";

const Steg: FunctionComponent<StegType> = ({ steg, beskrivelse }) => {
  return (
    <>
      <Heading spacing size="small">
        {steg}
      </Heading>
      <BlockContent blocks={beskrivelse} serializers={serializers} />
    </>
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

export default Steg;
