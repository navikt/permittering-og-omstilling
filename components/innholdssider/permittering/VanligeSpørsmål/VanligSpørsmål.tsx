import React, { FunctionComponent } from "react";
import { BodyShort, Heading } from "@navikt/ds-react";
import { SanityBlockContent } from "../HvordanPermittere/HvordanPermittere";
import BlockContent from "@sanity/block-content-to-react";
import styles from "./VanligeSpørsmål.module.css";

export type VanligSpørsmålType = {
  sporsmal: string;
  svar: SanityBlockContent;
};

const VanligSpørsmål: FunctionComponent<VanligSpørsmålType> = ({
  sporsmal,
  svar,
}) => {
  return (
    <>
      <Heading spacing size="small">
        {sporsmal}
      </Heading>
      <BodyShort className={styles.vanligSpørsmål}>
        <BlockContent blocks={svar} />
      </BodyShort>
    </>
  );
};

export default VanligSpørsmål;
