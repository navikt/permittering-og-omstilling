import React, { FunctionComponent } from "react";

type Props = {
  tittel: string;
  href: string;
  text: string;
};

const LinkCard: FunctionComponent<Props> = ({ tittel, href, text }) => {
  return <>
    <div>
      {tittel}
    </div>
    <div>
      {href}
    </div>
    <div>
      {text}
    </div>
    </>;
};

export default LinkCard;
