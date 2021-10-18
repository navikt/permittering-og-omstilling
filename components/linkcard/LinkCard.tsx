import React, { FunctionComponent } from "react";

type Props = {
  tittel: string;
};

const LinkCard: FunctionComponent<Props> = ({ tittel }) => {
  return <>{tittel}</>;
};

export default LinkCard;
