import React, { FunctionComponent } from "react";
import { Heading } from "@navikt/ds-react";
import LinkCard from "../../../linkcard/LinkCard";

import styles from "./HvaKanNavHjelpeDegMed.module.css";

type Props = {
};

const HvaKanNavHjelpeDegMed: FunctionComponent<Props> = () => {
  return (
    <div className={styles.container}>
      <Heading size="xlarge">Hva kan Nav hjelpe deg med?</Heading>
      <div className={styles.cards}>
        <LinkCard 
          tittel="Hvordan permittere ansatte"
          href="/permittering"
          text="Skal du permittering ansatte melder du fra til NAV så tidlig som mulig" />
        <LinkCard
          tittel="Skal du omstille?"
          href="/omstilling"
          text="Skal du omstille" />
        <LinkCard
          tittel="Trenger du hjelp fra NAV eller andre?"
          href="/hjelp"
          text="Se på muligheter for å søke om støtte fra NAV" />
      </div>
    </div>
  );
};

export default HvaKanNavHjelpeDegMed;
