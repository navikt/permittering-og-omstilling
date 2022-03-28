import React, { FunctionComponent, useEffect } from "react";
import { Alert, PageHeader, Heading, BodyShort } from "@navikt/ds-react";
import Container from "../../container/Container";
import { RelatertInnhold } from "../RelatertInnhold";
import { TemaInnhold } from "../TemaInnhold";
import styles from "./streik.module.css";
import TemaRelatertInnhold from "../TemaRelatertInnhold/TemaRelatertInnhold";
import SistOppdatertTema from "../../sistOppdatertTema/SistOppdatertTema";
import BlockContent from "../../BlockContent/BlockContent";
import { loggSidevinsing } from "../../../utils/logging";
import Lenkeknapp from "../../lenkeknapp/Lenkeknapp";

type Props = {
  streikInnhold: TemaInnhold[];
  sistOppdatert: Date[];
};

const StreikSide: FunctionComponent<Props> = ({
  streikInnhold,
  sistOppdatert,
}) => {
  useEffect(() => {
    loggSidevinsing(
      "https://arbeidsgiver.nav.no/permittering-og-omstilling/streik"
    );
  }, []);

  return (
    <div className={styles.streikSide}>
      <PageHeader
        className={styles.banner}
      >
        {streikInnhold[0].tittel}
      </PageHeader>
      <div className={styles.container}>
        <div className={styles.innhold}>
          <Container>
            <SistOppdatertTema sistOppdatert={sistOppdatert} />
            <h2
              className={styles.tittel}
            >
              Melding om massepermittering ved streik
            </h2>
            <BodyShort size={"medium"} spacing={true}>
              Melding om massepermittering skal også sendes inn i forbindelse med streik. 
            </BodyShort>
            <Lenkeknapp
              className={styles.meldIfra}
              href="https://www.nav.no/soknader/nb/bedrift/permitteringer-oppsigelser-og-konkurs/masseoppsigelser"
            >
              Meld fra
            </Lenkeknapp>
            {streikInnhold.map((innhold) => (
              <BlockContent
                blocks={innhold.innhold}
                key={innhold.tittel}
              />
            ))}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default StreikSide;
