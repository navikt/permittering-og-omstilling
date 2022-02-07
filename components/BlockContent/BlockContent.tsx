import React, { FunctionComponent } from "react";
import Lenke from "../lenke/Lenke";
import BlockContentFraBibliotek from "@sanity/block-content-to-react";
import { Accordion, Alert } from "@navikt/ds-react";
import styles from "./BlockContent.module.css"

type SanityBlockContent = any;

type Props = {
  blocks: SanityBlockContent;
  serializers?: any;
};

const BlockContent: FunctionComponent<Props> = ({ blocks }) => {
  return (
    <BlockContentFraBibliotek
      blocks={blocks}
      serializers={{ ...standardSerializers, ...serializers }}
    />
  );
};

const standardSerializers = {
  marks: {
    link: (props: any) => {
      return <Lenke href={props.mark.href}>{props.children[0]}</Lenke>;
    },
  },
};

const serializers = {
  types: {
    infofelt: (props: any) => {
      const isInfofelt = props.node.variant === 'info' || props.node.variant === 'success' || props.node.variant === 'warning' || props.node.variant === 'error'
      if(isInfofelt) {
        return (
          <Alert
            variant={props.node.variant}
            className={styles.alertMargins}
          >
            <BlockContent blocks={props.node.beskrivelse} />
          </Alert>
        )
      }
      else {
        return (
          <Accordion>
            <Accordion.Item>
              <Accordion.Header>{props.node.tittel}</Accordion.Header>
              <Accordion.Content>
                <BlockContent blocks={props.node.beskrivelse} />
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        )
      }
    }
  },
};

export default BlockContent;
