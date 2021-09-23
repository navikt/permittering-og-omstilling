import React, { FunctionComponent } from "react";
import { Alert, BodyShort } from "@navikt/ds-react";
import styles from "../permittering.module.css";
import { SanityBlockContent } from "../HvordanPermittere/HvordanPermittere";
import BlockContent from "@sanity/block-content-to-react";

type Props = {
  beskrivelse: SanityBlockContent;
};

const ForlengePerioderAlert: FunctionComponent<Props> = ({ beskrivelse }) => {
  return (
    <Alert variant="warning" className={styles.forlengeRegelverkAlert}>
      <BlockContent blocks={beskrivelse} />
    </Alert>
  );
};

export default ForlengePerioderAlert;
