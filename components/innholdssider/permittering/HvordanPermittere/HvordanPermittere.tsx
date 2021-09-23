import { Accordion, BodyShort, Button, Heading } from "@navikt/ds-react";
import Container from "../../../container/Container";
import { permitteringInnhold } from "../Permitteringsside";
import { FunctionComponent } from "react";
import Steg from "./Steg";
import BlockContent from "@sanity/block-content-to-react";

import styles from "./HvordanPermittere.module.css";

export type HvordanPermittereProps = {
  tittel: string;
  alleSteg: StegType[];
  varselfristinfo: {
    tittel: string;
    beskrivelse: SanityBlockContent;
  };
};

export type StegType = {
  steg: string;
  beskrivelse: SanityBlockContent;
};

export type SanityBlockContent = any;

const HvordanPermittere: FunctionComponent<HvordanPermittereProps> = ({
  tittel,
  alleSteg,
  varselfristinfo,
}) => {
  return (
    <Container>
      <Heading
        spacing
        size="xlarge"
        id={permitteringInnhold.hvordanPermittere.anker}
      >
        {tittel}
      </Heading>
      {alleSteg.map((steg, index) => (
        <>
          <Steg
            steg={`${index + 1}. ${steg.steg}`}
            beskrivelse={steg.beskrivelse}
            key={steg.steg}
          />
          {index === 1 && (
            <Accordion className={styles.varselfrist}>
              <Accordion.Item>
                <Accordion.Header>{varselfristinfo.tittel}</Accordion.Header>
                <Accordion.Content>
                  <BlockContent blocks={varselfristinfo.beskrivelse} />
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>
          )}
        </>
      ))}
      <Heading spacing size="small">
        Informasjonsfilm om permittering
      </Heading>
      <iframe
        src="https://player.vimeo.com/video/398208025?h=a21e1f79cb"
        width="100%"
        height="300"
        frameBorder="0"
        allowFullScreen
      />
    </Container>
  );
};

export default HvordanPermittere;
