import { Alert, BodyShort, Label, Title } from "@navikt/ds-react";
import Link from "next/link";
import Container from "../../container/Container";
import { ForelengePerioderAlert } from "./Permitteringsside";

import styles from "./permittering.module.css";

const Lonnsplikt = () => {
  return (
    <Container>
      <Title spacing size="xl">
        Lønnsplikt ved permittering
      </Title>
      <ForelengePerioderAlert />
      <Alert variant="info" className={styles.nyePermitteringsreglerAlert}>
        <Title spacing size="m">
          Nye regler for permitteringsperioden fra 1. juli 2021
        </Title>
        <Label>Dette gjelder for permitteringer som startet</Label>
        <ul>
          <li>
            <Label spacing>1. juli 2021 eller senere:</Label>
            <BodyShort spacing>
              For nye permitteringer som startet 1. juli 2021 eller senere kan
              du permittere inntil 26 uker innenfor en periode på 18 måneder
              uten at lønnsplikten gjeninntrer.
            </BodyShort>
            <BodyShort spacing>
              For nye permitteringstilfeller fra 1. juli 2021 skal du ikke telle
              med eventuelle permitteringsperioder før 1. juli 2021 i
              18-månedersperioden.
            </BodyShort>
          </li>
          <li>
            <Label spacing>før 1. juli 2021:</Label>
            <BodyShort spacing>
              For permitteringer som startet før 1. juli, er det frem til 30.
              september 2021 ingen begrensning for hvor lenge du kan permittere
              uten at lønnsplikten gjeninntrer.
            </BodyShort>

            <BodyShort spacing>
              1. oktober 2021 vil lønnsplikten gjeninntre for løpende
              permitteringer som startet før 1. juli der du til sammen har
              permittert i 49 uker eller mer de siste 18 månedene. Har du
              permittert i mindre enn 49 uker den 1. oktober, vil lønnsplikten
              gjeninntre når du på et senere tidspunkt har permittert i til
              sammen 49 uker innenfor en periode på 18 måneder.
            </BodyShort>

            <BodyShort>
              Ansatte som blir tatt tilbake i arbeid, vil kunne permitteres på
              nytt etter 1. juli. Da vil også de omfattes av regelen om
              maksimalt 26 uker permittering innenfor en 18-månedersperiode, med
              telling bare tilbake til juli 2021.
            </BodyShort>
          </li>
        </ul>

        <Link href="https://www.regjeringen.no/no/aktuelt/regjeringen-sikrer-muligheten-for-nye-permitteringer/id2848520/">
          Les mer om de nye reglene på regjeringen.no
        </Link>

        <Label spacing className={styles.kalkulator}>
          Permitteringskalkulator
        </Label>
        <BodyShort>
          Du kan benytte en{" "}
          <Link href="https://arbeidsgiver.nav.no/permittering-kalkulator/">
            kalkulator for å regne ut hvor lenge du kan permittere
          </Link>{" "}
          før lønnsplikten gjeninntrer.
        </BodyShort>
      </Alert>
      <BodyShort spacing>
        Du betaler lønn som vanlig fra du varsler om permittering til
        permitteringen starter. Dette kalles varslingsperioden (normalt 14
        dager).
      </BodyShort>
      <BodyShort spacing>
        Når permitteringen starter, skal du betale lønn til den permitterte i ti
        dager fra første dag av permitteringen. Dette kalles arbeidsgiverperiode
        1.
      </BodyShort>
      <BodyShort spacing>Dette forskyver arbeidsgiverperiode 1:</BodyShort>
      <ul>
        <li>Arbeid</li>
        <li>Sykefravær</li>
        <li>Ferie og annet tjenestefri underveis</li>
        <li>
          Lørdag, søndag og helligdager, hvis den permitterte ellers ikke skulle
          ha jobbet. (Helge- og helligdager er lønnspliktdager hvis den ansatte
          normalt hadde jobbet på disse dagene)
        </li>
      </ul>
      <BodyShort spacing>
        Ved deltidspermittering må arbeidstimene den ansatte er permittert
        legges sammen til totalt 10 arbeidsdager. Ved permittering fra halve
        stillingen kan arbeidsgiverperioden derfor vare i 20 arbeidsdager.
      </BodyShort>
      <BodyShort spacing>
        Les mer om{" "}
        <Link href="https://lovdata.no/nav/rundskriv/v2-37-00">
          beregning av arbeidsgiverperiode 1
        </Link>
      </BodyShort>
      <BodyShort spacing>
        Skyldes permitteringen brann, ulykker eller naturomstendigheter, er det
        ingen lønnspliktperiode for deg som arbeidsgiver. Det gjelder heller
        ingen slik lønnsplikt for ansatte i fiskeforedlingsbedrifter.
      </BodyShort>

      <Title spacing size="s" className={styles.før1septemberTitle}>
        Lønnsplikt og lønnskompensasjon før 1. september 2020
      </Title>
      <BodyShort spacing>
        For permitteringer som startet i perioden 20. mars til 31. august 2020,
        betalte du to dager med lønn til den permitterte. Deretter dekket NAV
        lønnen fra dag 3 til og med dag 20 av permitteringen. Pengene som NAV
        dekket for disse dagene kalles lønnskompensasjon. Lønnskompensasjonen
        ble beregnet ut ifra opplysninger som arbeidsgiverne meldte inn i
        a-meldingen og i NAVs løsning for lønnskompensasjon og refusjon.
      </BodyShort>
      <BodyShort>
        Ordningen med lønnskompensasjon opphørte 31. august. Fristen for å melde
        inn opplysninger som utløser lønnskompensasjon til ansatte var
        31.12.2020.
      </BodyShort>
    </Container>
  );
};

export default Lonnsplikt;
