import React, { FunctionComponent } from "react";
import { StegType } from "./HvordanPermittere";
import BlockContent from "@sanity/block-content-to-react";
import { Accordion, Heading, Link } from "@navikt/ds-react";

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
  marks: {
    link: (props: any) => {
      return <Link href={props.mark.href}>{props.children[0]}</Link>
    }
  },
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
