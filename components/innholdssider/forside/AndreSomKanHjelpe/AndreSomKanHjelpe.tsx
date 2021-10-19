import React, { FunctionComponent } from "react";
import styles from "./AndreSomKanHjelpe.module.css";
import { Heading } from "@navikt/ds-react";
import EksternKontaktKort from "./EksternKontaktKort/EksternKontaktKort";

type Props = {};

const AndreSomKanHjelpe: FunctionComponent<Props> = () => {
  return (
    <div className={styles.container}>
      <Heading size="xlarge" className={styles.heading}>
        Andre som kan hjelpe
      </Heading>
      <div className={styles.cards}>
        <EksternKontaktKort
          tittel="Næringslivets Hovedorganisasjon (NHO)"
          href="https://www.nho.no/om-nho/"
          innhold={
            <>
              Nærngslivets Hovedorganisasjon (NHO) samler Norges største
              fellesskap av bedrifter, og er den ledende organisasjonen for
              arbeidsgivere.
            </>
          }
          kategori="KONTAKT"
        />
        <EksternKontaktKort
          tittel="Næringslivets Hovedorganisasjon (NHO)"
          href="https://www.nho.no/om-nho/"
          innhold={
            <>
              Nærngslivets Hovedorganisasjon (NHO) samler Norges største
              fellesskap av bedrifter, og er den ledende organisasjonen for
              arbeidsgivere.
            </>
          }
          kategori="KONTAKT"
        />
      </div>
    </div>
  );
};

export default AndreSomKanHjelpe;
