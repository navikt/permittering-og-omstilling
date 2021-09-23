import { Alert, BodyShort, Heading } from "@navikt/ds-react";
import Container from "../../container/Container";
import { permitteringInnhold } from "./Permitteringsside";
import styles from "./permittering.module.css";
import { SanityBlockContent } from "./HvordanPermittere/HvordanPermittere";
import { FunctionComponent } from "react";
import BlockContent from "@sanity/block-content-to-react";
import ForlengePerioderAlert from "./ForlengePerioderAlert/ForlengePerioderAlert";

export type LønnspliktProps = {
  tittel: string;
  innhold: SanityBlockContent;
  nyePermitteringsregler: {
    tittel: string;
    beskrivelse: SanityBlockContent;
  };
  forlengeDagpengeperioder: SanityBlockContent;
};

const Lønnsplikt: FunctionComponent<LønnspliktProps> = ({
  tittel,
  innhold,
  nyePermitteringsregler,
  forlengeDagpengeperioder,
}) => {
  return (
    <Container>
      <Heading spacing size="xlarge" id={permitteringInnhold.lønnsplikt.anker}>
        {tittel}
      </Heading>
      <ForlengePerioderAlert beskrivelse={forlengeDagpengeperioder} />
      <Alert variant="info" className={styles.nyePermitteringsreglerAlert}>
        <Heading spacing size="medium">
          {nyePermitteringsregler.tittel}
        </Heading>
        <BodyShort>
          <BlockContent blocks={nyePermitteringsregler.beskrivelse} />
        </BodyShort>
      </Alert>

      <BlockContent blocks={innhold} />
    </Container>
  );
};

export default Lønnsplikt;
