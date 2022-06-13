import React, { FunctionComponent, useEffect } from "react";
import { PageHeader, BodyShort } from "@navikt/ds-react";
import Container from "../../container/Container";
import { TemaInnhold } from "../TemaInnhold";
import styles from "./streik.module.css";
import SistOppdatertTema from "../../sistOppdatertTema/SistOppdatertTema";
import BlockContent from "../../BlockContent/BlockContent";
import { loggSidevinsing } from "../../../utils/logging";
import Lenkeknapp from "../../lenkeknapp/Lenkeknapp";
import {PermitteringsmeldingVedStreik} from "../PermitteringsmeldingVedStreik";

type Props = {
  streikInnhold: TemaInnhold[];
  sistOppdatert: Date[];
  permitteringsmeldingVedStreik: PermitteringsmeldingVedStreik[]
};

const StreikSide: FunctionComponent<Props> = ({
  streikInnhold,
  sistOppdatert,
    permitteringsmeldingVedStreik
}) => {
  useEffect(() => {
    loggSidevinsing(
      "https://arbeidsgiver.nav.no/permittering-og-omstilling/streik"
    );
  }, []);

  console.log(permitteringsmeldingVedStreik[0].innhold)

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
              Hva gjør du hvis virksomheten din blir rammet av streik?
            </h2>
            <BodyShort size={"medium"} spacing={true}>
              Melding om permittering skal også sendes inn i forbindelse med streik. Meld fra så tidlig som mulig.
            </BodyShort>
            <BlockContent blocks={permitteringsmeldingVedStreik[0].innhold}></BlockContent>
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
