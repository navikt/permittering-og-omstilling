import { Accordion, BodyShort, Title } from "@navikt/ds-react";
import styles from "./permittering.module.css";
import Link from "next/link";
import Container from "../../container/Container";
import { ForelengePerioderAlert } from "./Permitteringsside";

const Permitteringsperioden = () => {
  return (
    <Container>
      <Title spacing size="xl">
        I permitteringsperioden
      </Title>

      <Title spacing size="s">
        Arbeid under permitteringen
      </Title>
      <ForelengePerioderAlert />
      <BodyShort spacing>
        LO og NHO har avtalt nye permitteringsregler som vil gjelde i perioden
        fra 8. mai 2021 til og med 30. september 2021. Din virksomhet kan være
        omfattet av avtalen hvis dere har lokal enighetsprotokoll om at
        hovedavtalens regler om ansiennitet er fulgt ved inntak av permitterte
        arbeidstakere i arbeid.
      </BodyShort>
      <BodyShort spacing>
        NAV har ikke oversikt over hvilke virksomheter som er omfattet av
        avtalen, derfor må du som arbeidsgiver selv ha oversikt over gjeldende
        avtale på din arbeidsplass.
      </BodyShort>
      <Accordion heading="Regler for virksomheter som er omfattet av avtalen">
        Den permitterte kan arbeide i inntil 10 uker uten at permitteringen
        avbrytes. Hvis den ansatte er tilbake i sin vanlige stillingsstørrelse i
        mer enn 10 uker sammenhengende, vil permitteringen regnes som avbrutt.
      </Accordion>
      <Accordion
        heading="Regler for virksomheter som IKKE er omfattet av avtalen"
        className={styles.ikkeOmfattetAvAvtalenAccordion}
      >
        Den permitterte kan arbeide i inntil 6 uker uten at permitteringen
        avbrytes. Hvis den ansatte er tilbake i sin vanlige stillingsstørrelse i
        mer enn 6 uker sammenhengende, vil permitteringen regnes som avbrutt.
      </Accordion>
      <BodyShort spacing>
        Merk at{" "}
        <Link href="https://www.nav.no/arbeid/no/dagpenger#kan-jeg-jobbe-mens-jeg-mottar-dagpenger">
          dagpengene enten blir redusert eller bortfaller helt når den
          permitterte arbeider
        </Link>
        .
      </BodyShort>
      <BodyShort spacing>
        Hvis du skal permittere ansatte på nytt, må du sende nytt
        permitteringsvarsel og betale lønn for de første dagene av
        permitteringen. Den ansatte må sende en ny søknad om dagpenger.
      </BodyShort>
      <BodyShort spacing>
        <Link href="https://www.nho.no/tema/arbeidsliv/artikler/nye-permitteringsregler/">
          Du kan lese mer om de nye permitteringsreglene på NHO sine sider
        </Link>
        .
      </BodyShort>
      <BodyShort spacing>
        Er den ansatte permittert fra en fiskeforedlings- eller fiskeoljebedrift
        gjelder egne regler.
      </BodyShort>

      <Title spacing size="s" className={styles.stegTitle}>
        Sykefravær under permitteringen
      </Title>
      <BodyShort spacing>
        Permitteringen avbrytes ikke av sykefravær. Men ved sykefravær i hele
        stillingen skal fraværsperioden holdes utenfor når en teller antall
        permitteringsuker arbeidsgiver har vært fritatt fra lønnsplikt.
      </BodyShort>

      <Title spacing size="s" className={styles.stegTitle}>
        Forlenge permitteringen
      </Title>
      <BodyShort spacing>
        En permittering som løper, kan forlenges. Men du kan bare forlenge
        innenfor maksimal permitteringsperiode på 49 uker innenfor de siste 18
        måneder. Ifølge{" "}
        <Link href="https://www.lo.no/hovedavtalen/#3991">
          Hovedavtalen LO NHO
        </Link>{" "}
        gjelder da vanlige permitteringsregler der du gir nytt
        permitteringsvarsel etter gjeldende varselfrist på minimum 14 dager (2
        dager ved uforutsett hendelse). Hvis bedriften er bundet av andre
        avtaler kan det gjelde andre vilkår.
      </BodyShort>
      <BodyShort spacing>
        I perioden frem til 1. oktober 2021 gjelder ikke maksimalgrensen for
        lønnsfritak på 49 uker. I perioden frem til 1. oktober kan du derfor
        forlenge permitteringen uten en slik begrensning.
      </BodyShort>
      <BodyShort spacing>
        En permittering som er avsluttet kan ikke forlenges,{" "}
        <Link href="https://arbeidsgiver.nav.no/arbeidsgiver-permittering/">
          da må du starte en ny permittering.
        </Link>
      </BodyShort>

      <Title spacing size="s" className={styles.stegTitle}>
        Avbryte permitteringen
      </Title>
      <BodyShort spacing>
        Permitteringen kan avbrytes når som helst, uavhengig av varigheten som
        ble oppgitt i varslet. Den som er permittert må selv melde fra til NAV
        om at permitteringen er avbrutt.
      </BodyShort>
      <BodyShort spacing>
        Eksempler på hendelser som avslutter permitteringen:
      </BodyShort>
      <ul>
        <li>
          Arbeid i ordinær arbeidstid i mer enn 6 eller 10 uker sammenhengende.
          (om det er 6 eller 10 uker som gjelder for din virksomhet er avhengig
          av hvilken avtale som gjelder på arbeidsplassen. Se informasjon lenger
          opp på siden;{" "}
          <Link href="https://arbeidsgiver.nav.no/arbeidsgiver-permittering/#iPermitteringsperioden">
            Arbeid under permittering
          </Link>
          )
        </li>
        <li>Til-datoen i permitteringsvarselet er passert.</li>
        <li>
          Avtale/melding om å avslutte permitteringen tidligere enn det som er
          oppgitt i permitteringsvarslet.
        </li>
        <li>
          Maksimalt antall uker med lønnsfritak er utløpt. (I perioden frem til
          1. oktober 2021 kan du forlenge permitteringen ut over denne
          begrensningen.)
        </li>
        <li>Oppsigelse er gitt til den permitterte</li>
      </ul>

      <Title spacing size="s" className={styles.stegTitle}>
        Oppsigelse under permittering
      </Title>
      <BodyShort spacing>
        Ved oppsigelse avsluttes permitteringen umiddelbart. Du må betale lønn
        fra dagen oppsigelsen gis og ut oppsigelsestiden.
      </BodyShort>
      <BodyShort spacing>
        Hvis en permittert ansatt selv sier opp jobben sin, skal du vanligvis
        ikke utbetale lønn. Dette avhenger av for eksempel hva som står i
        tariffavtalen eller andre avtaler mellom arbeidsgiver og ansatt, og må
        undersøkes i hvert enkelt tilfelle. Oppsigelsestiden er kortere enn
        vanlig når en permittert ansatt sier opp selv.
      </BodyShort>
      <BodyShort>
        Les om regler for oppsigelsestid i{" "}
        <Link href="https://lovdata.no/nav/lov/2005-06-17-62/kap15">
          arbeidsmiljøloven § 15-3
        </Link>
      </BodyShort>
    </Container>
  );
};

export default Permitteringsperioden;
