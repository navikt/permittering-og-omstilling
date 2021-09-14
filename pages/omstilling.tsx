import type { NextPage } from "next";
import { BodyLong, ContentContainer, Ingress, Title } from "@navikt/ds-react"

import styles from "./omstilling.module.css";

const Omstilling: NextPage = () => {
  return (
    <div>
      <ContentContainer className={"navds-story-content-container"}>

        <Title spacing={false} size={"l"}>Omstilling og nedbemanning</Title>
        <Ingress spacing={false}>NAV samarbeider med virksomheter i omstilling der mange ansatte mister - eller står i fare for - å miste jobben.</Ingress>
        <Title spacing={false} size={"s"}>Hva kan NAV bistå med i en omstillingssituasjon?</Title>
        <BodyLong>
          NAV kan sammen med virksomheten bidra til at overtallige raskt kommer i arbeid, slik at de slipper å bli arbeidsledige. Det er derfor viktig at NAV kommer med i omstillingsprosessen så tidlig som mulig.
          Ta kontakt med NAV for informasjon om
          <ul>
            <li>hvordan registrere seg som arbeidssøker</li>
            <li>hvordan søke om dagpenger</li>
            <li>arbeidsmarkedet</li>
            <li>andre tjenester fra NAV</li>
          </ul>
      </BodyLong>
      </ContentContainer>
    </div>
  )
};

export default Omstilling;
