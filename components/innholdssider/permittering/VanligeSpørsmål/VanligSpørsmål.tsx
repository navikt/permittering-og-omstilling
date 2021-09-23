import React, { FunctionComponent } from "react";
import { BodyShort, Heading } from "@navikt/ds-react";
import { SanityBlockContent } from "../HvordanPermittere/HvordanPermittere";
import BlockContent from "@sanity/block-content-to-react";

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
      <BodyShort spacing>
        <BlockContent blocks={svar} />
      </BodyShort>
    </>
  );
};

export default VanligSpørsmål;
