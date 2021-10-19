import React, { FunctionComponent } from "react";
import { Heading } from "@navikt/ds-react";
import Lenkekort from "../../../lenkekort/Lenkekort";

import styles from "./HvaKanNavHjelpeDegMed.module.css";

type Props = {};

const HvaKanNavHjelpeDegMed: FunctionComponent<Props> = () => {
  return (
    <div className={styles.container}>
      <Heading size="xlarge" className={styles.heading}>
        Hva kan Nav hjelpe deg med?
      </Heading>
      <div className={styles.cards}>
        <Lenkekort
          tittel="Hvordan permittere ansatte"
          href="/permittering"
          innhold="Skal du permittering ansatte melder du fra til NAV så tidlig som mulig"
          kategori="kategori"
        />
        <Lenkekort
          tittel="Skal du omstille?"
          href="/omstilling"
          innhold="Skal du omstille"
          kategori="kategori"
        />
        <Lenkekort
          tittel="Trenger du hjelp fra NAV eller andre?"
          href="/hjelp"
          innhold="Se på muligheter for å søke om støtte fra NAV"
          kategori="kategori"
        />
      </div>
    </div>
  );
};

export default HvaKanNavHjelpeDegMed;
