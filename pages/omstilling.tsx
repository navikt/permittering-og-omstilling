import React, { useEffect } from 'react';
import { setBreadcrumbs } from "@navikt/nav-dekoratoren-moduler"
import type { NextPage } from "next";
import Link from "next/link"
import { BodyLong, BodyShort, ContentContainer, Ingress, Title } from "@navikt/ds-react"

const Omstilling: NextPage = () => {
    useEffect(() => {
      setBreadcrumbs([
          {title: 'Permittering og omstilling',  url: "/permittering-og-omstilling" },
          {title: 'Omstilling',  url: location.pathname },
      ]).catch(() => {
          console.error('klarte ikke å oppdatere breadcrumbs');
      });
  });
  return (
    <div>
      <ContentContainer className={"navds-story-content-container"}>
        <Title spacing={true} size={"l"}>Omstilling og nedbemanning</Title>
        <Ingress spacing={true}>NAV samarbeider med virksomheter i omstilling der mange ansatte mister - eller står i fare for - å miste jobben.</Ingress>
        <Title spacing={true} size={"s"}>Hva kan NAV bistå med i en omstillingssituasjon?</Title>
        <BodyLong>
          NAV kan sammen med virksomheten bidra til at overtallige raskt kommer i arbeid, slik at de slipper å bli arbeidsledige. Det er derfor viktig at NAV kommer med i omstillingsprosessen så tidlig som mulig. <Link href="https://www.nav.no/person/kontakt-oss/nb">Ta kontakt med NAV</Link> for informasjon om
          <ul>
            <li>hvordan registrere seg som arbeidssøker</li>
            <li>hvordan søke om dagpenger</li>
            <li>arbeidsmarkedet</li>
            <li>andre tjenester fra NAV</li>
          </ul>
      </BodyLong>
      <Title spacing={true} size={"s"}>Registrere seg som arbeidssøker</Title>
      <BodyLong spacing>
        Det er viktig at overtallige snarest mulig registrerer seg som arbeidssøker hos NAV, blant annet for å avklare behovet for kvalifisering.
        Ledige stillinger som blir meldt til NAV blir formidlet til aktuelle arbeidssøkere som er registrert hos NAV.
        Hvis jobbsøkingen over tid ikke fører fram, kan <Link href="https://www.nav.no/no/person/arbeid/oppfolging-og-tiltak-for-a-komme-i-jobb/tiltak-for-a-komme-i-jobb">NAV tilby ulike tiltak</Link> som opplæring, jobbklubb og arbeidstrening. 
      </BodyLong>
      <Title spacing={true} size={"s"}>Jobbe i utlandet?</Title>
      <BodyLong spacing>
      <Link href="https://www.nav.no/no/person/flere-tema/arbeid-og-opphold-i-utlandet/nav-hjelper-arbeidssokere-med-a%CC%8A-finne-jobb-i-eu-eos-og-sveits"> EURES-tjenestene i NAV</Link> kan hjelpe arbeidssøkere som ønsker å jobbe i utlandet.
      </BodyLong>
      <BodyShort>Se også informasjon om permittering og oppsigelse.</BodyShort>
      </ContentContainer>
    </div>
  )
};

export default Omstilling;
