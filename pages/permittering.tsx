import type { NextPage } from "next";
import Link from "next/link";
import Container from "../components/container/Container";
import {
  Accordion,
  Alert,
  BodyShort,
  Header,
  Label,
  Title,
} from "@navikt/ds-react";

import styles from "./permittering.module.css";

const Permittering: NextPage = () => {
  return (
    <>
      <Header>Veiviser for permittering</Header>

      <div className={styles.container}>
        <Container>
          <Title spacing size="xl">
            Hvordan permittere ansatte?
          </Title>
          <Title spacing size="s">
            1. Meld fra til NAV
          </Title>
          <BodyShort spacing>
            Skal du permittere ansatte melder du fra til NAV så tidlig som
            mulig.
          </BodyShort>
          <Link href="https://www.nav.no/soknader/nb/bedrift/permitteringer-oppsigelser-og-konkurs/masseoppsigelser">
            Meld ifra
          </Link>
          <Title className={styles.stegTitle} spacing size="s">
            2. Send permitteringsvarsel
          </Title>
          <BodyShort spacing>
            Du må varsle de ansatte som permitteres 14 dager på forhånd. Dette
            er hovedregelen. Når det skjer noe uforutsett, kan varselfristen
            være kun 2 dager.
          </BodyShort>
          <Accordion
            className={styles.varselfristAccordion}
            heading="Les mer om varselfrist"
          >
            <BodyShort spacing>
              Permitteringsordningen er i hovedsak regulert i avtaleverk mellom
              partene i arbeidslivet. Dere må gjøre en selvstendig vurdering på
              arbeidsplassen om hva som er riktig varselfrist ut ifra deres
              avtaler om arbeidsforholdet. Er dere ikke omfattet av egne avtaler
              er det hovedavtalen LO NHO og arbeidsmiljøloven som gjelder.
            </BodyShort>
            <BodyShort>
              Permitteringer som skyldes koronaviruset kan være forventet eller
              uforutsett. En plutselig nedstengning som den vi har sett i
              enkelte kommuner er et eksempel på hendelse som kan falle inn
              under uforutsett. Vi oppfordrer til å begrunne grunnlaget for
              forkortet frist på en god måte i permitteringsvarslet.
            </BodyShort>
          </Accordion>
          <BodyShort> Varselet må inneholde disse opplysningene:</BodyShort>
          <ul>
            <li>Fortell hvorfor du permitterer ansatte.</li>
            <li>Datoen når du har varslet om permitteringen.</li>
            <li>
              Datoen når permitteringen starter og hvor lenge den vil vare.
            </li>
            <li>Navnet på den som blir permittert.</li>
            <li>Om den ansatte permitteres helt eller delvis.</li>
            <li>Arbeidsgivers underskrift.</li>
          </ul>
          For at vi skal kunne behandle søknaden om dagpenger må du i tillegg
          opplyse dette i varselet:
          <ul>
            <li>
              Du må opplyse om partene på arbeidsplassen er enige om
              permitteringen.
            </li>
            <li>Du må oppgi stillingsprosenten til den som permitteres.</li>
            <li>Du må oppgi når den permitterte ble ansatt i bedriften.</li>
          </ul>
          <BodyShort spacing>
            Arbeidsgiverorganisasjonene utarbeider ofte egne maler for
            permitteringsvarsel. Du finner også en{" "}
            <Link href="https://www.altinn.no/globalassets/dokumentmaler/permitteringsvarsel.doc">
              mal for permitteringsvarsel
            </Link>{" "}
            hos Altinn.
          </BodyShort>
          <Title className={styles.stegTitle} spacing size="s">
            3. Du bør oppfordre de ansatte om å gjøre dette:
          </Title>
          <Link href="https://www.nav.no/arbeid/no/permittert/">
            Les informasjon til permitterte.
          </Link>
          <Title className={styles.stegTitle} spacing size="s">
            4. Husk å rapportere permittering i a-meldingen
          </Title>
          <Label>Hvordan rapporterer du?</Label>
          <BodyShort spacing>
            På Skatteetatens nettside finner du veiledning til{" "}
            <Link href="https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/a-meldingen/veiledning/">
              hvordan du rapporterer arbeidsforhold
            </Link>
            , og{" "}
            <Link href="https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/a-meldingen/veiledning/arbeidsforholdet/opplysninger-om-arbeidsforholdet/permittering/">
              hvordan du rapporterer permitteringer
            </Link>
            . Når du rapporterer permittering er det viktig at du registrerer
            det på samme arbeidsforhold du har rapportert inn opplysninger om
            tidligere. Bruk den kanalen du vanligvis rapporterer inn
            a-meldingen.
          </BodyShort>
          <Label>Oversikt over dine arbeidsforhold</Label>
          <Link href="https://arbeidsgiver.nav.no/arbeidsforhold/">
            Her finner du en oversikt over alle ansatte og arbeidsforhold
            rapportert inn via a-meldingen.
          </Link>
          <ul>
            <li>
              Har du spørsmål om hvordan du skal oppgi permittering i
              a-meldingen, kan du ta kontakt med Skatteetaten på telefon 800 80
              000, tastevalg 2-3-1.
            </li>
            <li>
              Har du spørsmål om innsynstjenesten fra Aa-registeret, kan du ta
              kontakt med NAV registerforvaltning på telefon 400 05 770, eller
              e-post nav.registerforvaltning@nav.no
            </li>
            <li>
              Dersom du bruker et lønnssystem, kan det være du må kontakte
              lønnssystemleverandøren din for hjelp med utfyllingen i
              a-meldingen.
            </li>
          </ul>
          <Title spacing size="s">
            Informasjonsfilm om permittering
          </Title>
          <iframe
            src="https://player.vimeo.com/video/398208025?h=a21e1f79cb"
            width="100%"
            height="300"
            frameBorder="0"
            allowFullScreen
          />
        </Container>

        <Container>
          <Title spacing size="xl">
            Lønnsplikt ved permittering
          </Title>
          <Alert variant="warning" className={styles.forlengeRegelverkAlert}>
            Regjeringen har foreslått å forlenge dagpenge- og
            permitteringsperioder som nærmer seg slutten frem til og med 31.
            oktober 2021. Vi oppdaterer sidene så snart vi har mer informasjon.
          </Alert>
          <Alert variant="info" className={styles.nyePermitteringsreglerAlert}>
            <Title spacing size="m">
              Nye regler for permitteringsperioden fra 1. juli 2021
            </Title>
            <Label>Dette gjelder for permitteringer som startet</Label>
            <ul>
              <li>
                <Label spacing>1. juli 2021 eller senere:</Label>
                <BodyShort spacing>
                  For nye permitteringer som startet 1. juli 2021 eller senere
                  kan du permittere inntil 26 uker innenfor en periode på 18
                  måneder uten at lønnsplikten gjeninntrer.
                </BodyShort>
                <BodyShort spacing>
                  For nye permitteringstilfeller fra 1. juli 2021 skal du ikke
                  telle med eventuelle permitteringsperioder før 1. juli 2021 i
                  18-månedersperioden.
                </BodyShort>
              </li>
              <li>
                <Label spacing>før 1. juli 2021:</Label>
                <BodyShort spacing>
                  For permitteringer som startet før 1. juli, er det frem til
                  30. september 2021 ingen begrensning for hvor lenge du kan
                  permittere uten at lønnsplikten gjeninntrer.
                </BodyShort>

                <BodyShort spacing>
                  1. oktober 2021 vil lønnsplikten gjeninntre for løpende
                  permitteringer som startet før 1. juli der du til sammen har
                  permittert i 49 uker eller mer de siste 18 månedene. Har du
                  permittert i mindre enn 49 uker den 1. oktober, vil
                  lønnsplikten gjeninntre når du på et senere tidspunkt har
                  permittert i til sammen 49 uker innenfor en periode på 18
                  måneder.
                </BodyShort>

                <BodyShort>
                  Ansatte som blir tatt tilbake i arbeid, vil kunne permitteres
                  på nytt etter 1. juli. Da vil også de omfattes av regelen om
                  maksimalt 26 uker permittering innenfor en 18-månedersperiode,
                  med telling bare tilbake til juli 2021.
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
            Når permitteringen starter, skal du betale lønn til den permitterte
            i ti dager fra første dag av permitteringen. Dette kalles
            arbeidsgiverperiode 1.
          </BodyShort>
          <BodyShort spacing>Dette forskyver arbeidsgiverperiode 1:</BodyShort>
          <ul>
            <li>Arbeid</li>
            <li>Sykefravær</li>
            <li>Ferie og annet tjenestefri underveis</li>
            <li>
              Lørdag, søndag og helligdager, hvis den permitterte ellers ikke
              skulle ha jobbet. (Helge- og helligdager er lønnspliktdager hvis
              den ansatte normalt hadde jobbet på disse dagene)
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
            Skyldes permitteringen brann, ulykker eller naturomstendigheter, er
            det ingen lønnspliktperiode for deg som arbeidsgiver. Det gjelder
            heller ingen slik lønnsplikt for ansatte i fiskeforedlingsbedrifter.
          </BodyShort>

          <Title spacing size="s" className={styles.før1septemberTitle}>
            Lønnsplikt og lønnskompensasjon før 1. september 2020
          </Title>
          <BodyShort spacing>
            For permitteringer som startet i perioden 20. mars til 31. august
            2020, betalte du to dager med lønn til den permitterte. Deretter
            dekket NAV lønnen fra dag 3 til og med dag 20 av permitteringen.
            Pengene som NAV dekket for disse dagene kalles lønnskompensasjon.
            Lønnskompensasjonen ble beregnet ut ifra opplysninger som
            arbeidsgiverne meldte inn i a-meldingen og i NAVs løsning for
            lønnskompensasjon og refusjon.
          </BodyShort>
          <BodyShort>
            Ordningen med lønnskompensasjon opphørte 31. august. Fristen for å
            melde inn opplysninger som utløser lønnskompensasjon til ansatte var
            31.12.2020.
          </BodyShort>
        </Container>
      </div>
    </>
  );
};

export default Permittering;
