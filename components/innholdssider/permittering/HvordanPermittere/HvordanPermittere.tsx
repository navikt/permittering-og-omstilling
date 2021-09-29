import { Heading } from "@navikt/ds-react";
import Container from "../../../container/Container";
import { permitteringInnhold } from "../Permitteringsside";
import React, {createRef, FunctionComponent} from "react";
import Steg from "./Steg";

import styles from "./HvordanPermittere.module.css";
import Lenkeknapp from "../../../lenkeknapp/Lenkeknapp";
import SistOppdatertTema from "../../../sistOppdatertTema/SistOppdatertTema";

export type HvordanPermittereProps = {
  tittel: string;
  alleSteg: StegType[];
  sistOppdatert: Date[];
  elementIviewport: (elemtId: string) => boolean;
  setNåværendeHash: (hash: string) => void;
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
  elementIviewport,
    setNåværendeHash
}) => {



  if (typeof window !== "undefined") {
    const element = document.getElementById("hvordan-permittere")
    if (element) {
      element.addEventListener('scroll',(event) => {
        setNåværendeHash("hvordan-permittere");
      });

    }

  }

  return (
      <div id={"hvordan-permittere"} onScroll={() => setNåværendeHash("hvordan-permittere")}>
    <Container>
      <SistOppdatertTema sistOppdatert={sistOppdatert} />
      <Heading
        spacing
        size="xlarge"
        id={permitteringInnhold.hvordanPermittere.anker}
        className={styles.tittel}
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
          </div>
  );
};

export default HvordanPermittere;
