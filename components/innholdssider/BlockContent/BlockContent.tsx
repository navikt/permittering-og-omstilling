import React, { FunctionComponent } from "react";
import Lenke from "../../lenke/Lenke";
import BlockContentFraBibliotek from "@sanity/block-content-to-react";

type SanityBlockContent = any;

type Props = {
  blocks: SanityBlockContent;
  serializers?: any;
};

const BlockContent: FunctionComponent<Props> = ({ blocks, serializers }) => {
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

export default BlockContent;
