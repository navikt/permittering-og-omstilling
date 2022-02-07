import React, { FunctionComponent } from "react";
import { StegType } from "./HvordanPermittere";
import { Heading } from "@navikt/ds-react";
import BlockContent from "../../../BlockContent/BlockContent";

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
