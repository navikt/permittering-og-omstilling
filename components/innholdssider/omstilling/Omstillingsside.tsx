import React, { useEffect } from "react";
import { setBreadcrumbs } from "@navikt/nav-dekoratoren-moduler";
import type { NextPage } from "next";
import Link from "next/link";
import {
  Accordion,
  Alert,
  BodyLong,
  BodyShort,
  Cell,
  ContentContainer,
  Grid,
  Header,
  Label,
  Title,
} from "@navikt/ds-react";
import Container from "../../container/Container";

import styles from "./omstilling.module.css";

const OmstillingsSide: NextPage = () => {
  return (
    <div>
      <Header description="NAV samarbeider med virksomheter i omstilling der mange ansatte mister - eller står i fare for - å miste jobben.">
        Omstilling og nedbemanning
      </Header>
      <ContentContainer>
        <Grid>
          <Cell className={"navds-story-cell"} xs={12} sm={6} lg={6}>
            <Container>
            <Title spacing size={"s"}>
              Hva kan NAV bistå med i en omstillingssituasjon?
            </Title>
            <BodyLong>
              NAV kan sammen med virksomheten bidra til at overtallige raskt
              kommer i arbeid, slik at de slipper å bli arbeidsledige. Det er
              derfor viktig at NAV kommer med i omstillingsprosessen så tidlig som
              mulig.{" "}
              <Link href="https://www.nav.no/person/kontakt-oss/nb">
                Ta kontakt med NAV
              </Link>{" "}
              for informasjon om
              <ul>
                <li>hvordan registrere seg som arbeidssøker</li>
                <li>hvordan søke om dagpenger</li>
                <li>arbeidsmarkedet</li>
                <li>andre tjenester fra NAV</li>
              </ul>
            </BodyLong>
            <Title spacing size={"s"}>
              Registrere seg som arbeidssøker
            </Title>
            <BodyLong spacing>
              Det er viktig at overtallige snarest mulig registrerer seg som
              arbeidssøker hos NAV, blant annet for å avklare behovet for
              kvalifisering. Ledige stillinger som blir meldt til NAV blir
              formidlet til aktuelle arbeidssøkere som er registrert hos NAV. Hvis
              jobbsøkingen over tid ikke fører fram, kan{" "}
              <Link href="https://www.nav.no/no/person/arbeid/oppfolging-og-tiltak-for-a-komme-i-jobb/tiltak-for-a-komme-i-jobb">
                NAV tilby ulike tiltak
              </Link>{" "}
              som opplæring, jobbklubb og arbeidstrening.
            </BodyLong>
            <Title spacing size={"s"}>
              Jobbe i utlandet?
            </Title>
            <BodyShort spacing>
              <Link href="https://www.nav.no/no/person/flere-tema/arbeid-og-opphold-i-utlandet/nav-hjelper-arbeidssokere-med-a%CC%8A-finne-jobb-i-eu-eos-og-sveits">
                EURES-tjenestene i NAV
              </Link>{" "}
              kan hjelpe arbeidssøkere som ønsker å jobbe i utlandet.
            </BodyShort>
            <BodyShort spacing>
              Se også informasjon om <Link href="/oppsigelse">permittering og oppsigelse.</Link>
            </BodyShort>
            <Alert variant="info" className={styles.forlengeRegelverkAlert}>
              <Title spacing size="m">Fakta</Title>
              <Label>Omstilling kan skje i forbindelse med</Label>
              <ul>
                <li>Permittering</li>
                <li>Driftsinnskrenkning/nedbemanning</li>
                <li>Produksjonsendring og opp-/nedbemanning</li>
                <li>Kvalifisering av allerede ansatte</li>
                <li>Flytting av en virksomhet</li>
                <li>Konkurs og annen driftsstans</li>
              </ul>
            </Alert>
            </Container>
          </Cell>
          <Cell className={"navds-story-cell"} xs={12} sm={6} lg={4}>
          <Accordion heading="Relatert innhold">
            <BodyShort>
              <Link href="/oppsigelse">Oppsigelse</Link>
            </BodyShort>
            <BodyShort>
              <Link href="https://www.nav.no/no/person/arbeid/dagpenger-ved-arbeidsloshet-og-permittering/ventelonn">Ventelønn</Link>
            </BodyShort>
          </Accordion>
          </Cell>
        </Grid>
      </ContentContainer>
    </div>
  );
};

export default OmstillingsSide;
