import { Heading } from "@navikt/ds-react";
import Container from "../../container/Container";
import { permitteringInnhold } from "./Permitteringsside";
import { SanityBlockContent } from "./HvordanPermittere/HvordanPermittere";
import { FunctionComponent } from "react";
import BlockContent from "@sanity/block-content-to-react";

export type PermitteringsperiodenProps = {
  tittel: string;
  innhold: SanityBlockContent;
};

const Permitteringsperioden: FunctionComponent<PermitteringsperiodenProps> = ({
  tittel,
  innhold,
}) => {
  return (
    <Container>
      <Heading
        spacing
        size="xlarge"
        id={permitteringInnhold.permitteringsperioden.anker}
      >
        {tittel}
      </Heading>

      <BlockContent blocks={innhold} />
    </Container>
  );
};

export default Permitteringsperioden;
