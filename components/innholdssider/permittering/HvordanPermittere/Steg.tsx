import React, { FunctionComponent } from "react";
import { StegType } from "./HvordanPermittere";
import BlockContent from "@sanity/block-content-to-react";
import { Heading } from "@navikt/ds-react";

const Steg: FunctionComponent<StegType> = ({ steg, beskrivelse }) => {
  return (
    <>
      <Heading spacing size="small">
        {steg}
      </Heading>
      <BlockContent blocks={beskrivelse} />
    </>
  );
};

export default Steg;
