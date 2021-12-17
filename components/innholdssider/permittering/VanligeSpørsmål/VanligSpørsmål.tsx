import React, { FunctionComponent } from "react";
import { BodyShort, Heading } from "@navikt/ds-react";
import { SanityBlockContent } from "../HvordanPermittere/HvordanPermittere";
import styles from "./VanligeSpørsmål.module.css";
import BlockContent from "../../../BlockContent/BlockContent";
import { createAnchor } from "../../../../utils/anchorFromText";

export type VanligSpørsmålType = {
  sporsmal: string;
  svar: SanityBlockContent;
  sortOrder: number;
};

const VanligSpørsmål: FunctionComponent<VanligSpørsmålType> = ({
  sporsmal,
  svar,
}) => {
  return (
    <div>
      <Heading id={createAnchor(sporsmal)} spacing size="small">
        {sporsmal}
      </Heading>
      <BodyShort className={styles.vanligSpørsmål}>
        <BlockContent blocks={svar} />
      </BodyShort>
    </div>
  );
};

export default VanligSpørsmål;
