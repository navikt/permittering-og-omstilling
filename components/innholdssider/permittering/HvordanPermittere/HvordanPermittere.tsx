import { Heading } from "@navikt/ds-react";
import Container from "../../../container/Container";
import { permitteringInnhold } from "../Permitteringsside";
import React, { FunctionComponent } from "react";
import Steg from "./Steg";

import styles from "./HvordanPermittere.module.css";
import Lenkeknapp from "../../../lenkeknapp/Lenkeknapp";
import SistOppdatertTema from "../../../sistOppdatertTema/SistOppdatertTema";
import KopierLenke from "../../../kopierlenke/KopierLenke";

export type HvordanPermittereProps = {
  tittel: string;
  alleSteg: StegType[];
  sistOppdatert: Date[];
};

export type StegType = {
  steg: string;
  beskrivelse: SanityBlockContent;
};

export type SanityBlockContent = any;

const HvordanPermittere: FunctionComponent<HvordanPermittereProps> = ({
  tittel,
  alleSteg,
  sistOppdatert,
}) => {
  return (
    <Container>
      <SistOppdatertTema sistOppdatert={sistOppdatert} />
      <Heading
        size="xlarge"
        id={permitteringInnhold.hvordanPermittere.anker}
        className={styles.tittel}
      >
        {tittel}
      </Heading>
      <KopierLenke anker={permitteringInnhold.infoTilAnsatte.anker} />
      {alleSteg.map((steg, index) => (
        <>
          <Steg
            steg={`${index + 1}. ${steg.steg}`}
            beskrivelse={steg.beskrivelse}
            key={steg.steg}
          />
          {index === 0 && (
            <Lenkeknapp
              className={styles.meldIfra}
              href="https://www.nav.no/soknader/nb/bedrift/permitteringer-oppsigelser-og-konkurs/masseoppsigelser"
            >
              Meld fra
            </Lenkeknapp>
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
