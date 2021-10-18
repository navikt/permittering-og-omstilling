import { NextPage } from "next";
import React from "react";
import { BodyLong, LinkPanel, PageHeader } from "@navikt/ds-react";
import HvaKanNavHjelpeDegMed from "./HvaKanNavHjelpeDegMed/HvaKanNavHjelpeDegMed";
import Container from "../../container/Container";

import styles from "./forside.module.css";

const ForsideSide: NextPage = () => {
  return (
    <div>
      <PageHeader description="Her er beskrivelsen">
        Permittering og omstilling
      </PageHeader>

      <div className={styles.intro}>
        <Container>
          <BodyLong spacing>
            Litt om omstilling permittering og nedmannning - hva er det AG kan
            finne ut av her? Hvilken verdi får AG hvis de leser informasjonen på
            disse sidene?
          </BodyLong>
          <LinkPanel
            href="/permittering-og-omstilling/permittering#hvordan-permittere"
            className={styles.hvordanPermittere}
          >
            <LinkPanel.Title>Hvordan permittere ansatte</LinkPanel.Title>
          </LinkPanel>
        </Container>
      </div>

      <HvaKanNavHjelpeDegMed />
    </div>
  );
};

export default ForsideSide;
