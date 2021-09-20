import { Accordion, BodyShort, Label, Heading } from "@navikt/ds-react";
import Link from "next/link";
import Container from "../../container/Container";

import styles from "./permittering.module.css";
import { permitteringInnhold } from "./Permitteringsside";

const HvordanPermittere = () => {
  return (
    <Container>
      <Heading
        spacing
        size="xlarge"
        id={permitteringInnhold.hvordanPermittere.anker}
      >
        {permitteringInnhold.hvordanPermittere.tittel}
      </Heading>
      <Heading spacing size="small">
        1. Meld fra til NAV
      </Heading>
      <BodyShort spacing>
        Skal du permittere ansatte melder du fra til NAV så tidlig som mulig.
      </BodyShort>
      <Link href="https://www.nav.no/soknader/nb/bedrift/permitteringer-oppsigelser-og-konkurs/masseoppsigelser">
        Meld ifra
      </Link>
      <Heading className={styles.stegTitle} spacing size="small">
        2. Send permitteringsvarsel
      </Heading>
      <BodyShort spacing>
        Du må varsle de ansatte som permitteres 14 dager på forhånd. Dette er
        hovedregelen. Når det skjer noe uforutsett, kan varselfristen være kun 2
        dager.
      </BodyShort>
      <Accordion className={styles.varselfristAccordion}>
        <Accordion.Item>
          <Accordion.Header>Les mer om varselfrist</Accordion.Header>
          <Accordion.Content>
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
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
      <BodyShort> Varselet må inneholde disse opplysningene:</BodyShort>
      <ul>
        <li>Fortell hvorfor du permitterer ansatte.</li>
        <li>Datoen når du har varslet om permitteringen.</li>
        <li>Datoen når permitteringen starter og hvor lenge den vil vare.</li>
        <li>Navnet på den som blir permittert.</li>
        <li>Om den ansatte permitteres helt eller delvis.</li>
        <li>Arbeidsgivers underskrift.</li>
      </ul>
      For at vi skal kunne behandle søknaden om dagpenger må du i tillegg
      opplyse dette i varselet:
      <ul>
        <li>
          Du må opplyse om partene på arbeidsplassen er enige om permitteringen.
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
      <Heading className={styles.stegTitle} spacing size="small">
        3. Du bør oppfordre de ansatte om å gjøre dette:
      </Heading>
      <Link href="https://www.nav.no/arbeid/no/permittert/">
        Les informasjon til permitterte.
      </Link>
      <Heading className={styles.stegTitle} spacing size="small">
        4. Husk å rapportere permittering i a-meldingen
      </Heading>
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
        . Når du rapporterer permittering er det viktig at du registrerer det på
        samme arbeidsforhold du har rapportert inn opplysninger om tidligere.
        Bruk den kanalen du vanligvis rapporterer inn a-meldingen.
      </BodyShort>
      <Label>Oversikt over dine arbeidsforhold</Label>
      <Link href="https://arbeidsgiver.nav.no/arbeidsforhold/">
        Her finner du en oversikt over alle ansatte og arbeidsforhold rapportert
        inn via a-meldingen.
      </Link>
      <ul>
        <li>
          Har du spørsmål om hvordan du skal oppgi permittering i a-meldingen,
          kan du ta kontakt med Skatteetaten på telefon 800 80 000, tastevalg
          2-3-1.
        </li>
        <li>
          Har du spørsmål om innsynstjenesten fra Aa-registeret, kan du ta
          kontakt med NAV registerforvaltning på telefon 400 05 770, eller
          e-post nav.registerforvaltning@nav.no
        </li>
        <li>
          Dersom du bruker et lønnssystem, kan det være du må kontakte
          lønnssystemleverandøren din for hjelp med utfyllingen i a-meldingen.
        </li>
      </ul>
      <Heading spacing size="small">
        Informasjonsfilm om permittering
      </Heading>
      <iframe
        src="https://player.vimeo.com/video/398208025?h=a21e1f79cb"
        width="100%"
        height="300"
        frameBorder="0"
        allowFullScreen
      />
    </Container>
  );
};

export default HvordanPermittere;
