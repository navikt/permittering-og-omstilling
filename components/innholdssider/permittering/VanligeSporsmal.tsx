import { BodyShort, Heading } from "@navikt/ds-react";
import styles from "./permittering.module.css";
import Link from "next/link";
import Container from "../../container/Container";
import { permitteringInnhold } from "./Permitteringsside";
import BlockContent from '@sanity/block-content-to-react'

const VanligeSporsmal = (props: any) => {
  return (
    <Container>
      <BlockContent blocks={props.vanligeSporsmal[0].svar} />
      <Heading
        spacing
        size="xlarge"
        id={permitteringInnhold.vanligeSpørsmål.anker}
      >
        {permitteringInnhold.vanligeSpørsmål.tittel}
      </Heading>
      {/* TODO: Lenker til hvert spørsmål */}
      <Heading spacing size="small" className={styles.stegTitle}>
        Vil dagpengemottakere få feriepenger for 2020?
      </Heading>
      <BodyShort>
        På grunn av koronasituasjonen har Stortinget vedtatt at de som mottok
        dagpenger i 2020 kan få utbetalt feriepenger av dagpenger innen utgangen
        av juni 2021.{" "}
        <Link href="https://www.nav.no/arbeid/dagpenger#feriepenger">
          Les mer på informasjonssidene til privatpersoner
        </Link>
        .
      </BodyShort>
      <Heading spacing size="small" className={styles.stegTitle}>
        Kan den ansatte ta ferie under permittering?
      </Heading>
      <BodyShort spacing>
        Ferie avvikles som normalt og teller ikke som permitteringstid.
      </BodyShort>
      <BodyShort spacing>
        Ferieloven gjelder når den ansatte er permittert. Innenfor{" "}
        <Link href="https://lovdata.no/dokument/NL/lov/1988-04-29-21">
          ferielovens
        </Link>{" "}
        bestemmelser kan du pålegge den ansatte å avvikle ferie i
        permitteringstiden.
      </BodyShort>
      <Heading spacing size="small" className={styles.stegTitle}>
        Kan jeg trekke eller utsette permitteringen før den er iverksatt?
      </Heading>
      <BodyShort spacing>
        Ja, du kan trekke varselet om permittering når som helst før
        permitteringen starter. Du trenger bare gi beskjed til dine ansatte.
      </BodyShort>
      <BodyShort spacing>
        Hvis du skal utsette permitteringen sier NHO i sine kommentarer til{" "}
        <Link href="https://www.nho.no/siteassets/publikasjoner/hovedavtalen-2018-2021.pdf">
          Hovedavtalen LO NHO § 7-3
        </Link>{" "}
        at du må utsette til en ny gitt dato og varsle den ansatte så raskt som
        mulig. Hvis denne datoen er lenger enn fire uker frem i tid bør du gi et
        nytt permitteringsvarsel. Hvis bedriften er bundet av andre avtaler kan
        det gjelde andre vilkår.
      </BodyShort>
      <Heading spacing size="small" className={styles.stegTitle}>
        Kan jeg permittere ansatte som er sykmeldt?
      </Heading>
      <BodyShort spacing>
        Ja, du kan permittere ansatte selv om de er sykmeldte. Ditt ansvar for
        lønnsutbetalingene opphører den dagen permitteringen begynner. Dette
        gjelder også i arbeidsgiverperioden for sykepenger (de første 16
        dagene). NAV overtar ansvaret fra permitteringstidspunktet og sørger for
        utbetalingen dersom den ansatte har rett til sykepenger.
      </BodyShort>
      <BodyShort spacing>
        Når NAV skal overta ansvaret for sykepenger, må du
      </BodyShort>
      <ul>
        <li>sende en korrigert inntektsmelding til NAV</li>
        <li>
          be den ansatte ettersende sykepengesøknaden til NAV fra Ditt
          sykefravær på <Link href="https://www.nav.no/">nav.no</Link>
        </li>
      </ul>
      <BodyShort>
        Hvis den ansatte allerede er 100% permittert og blir sykmeldt etter
        permitteringsdatoen, trenger du ikke sende inntektsopplysninger til NAV.
      </BodyShort>
      <Heading spacing size="small" className={styles.stegTitle}>
        Kan jeg permittere en ansatt som får omsorgspenger?
      </Heading>
      <BodyShort>
        Ja, det kan du gjøre. Du sender ut varsel om permittering på vanlig måte
        og du betaler lønn i arbeidsgiverperioden.
      </BodyShort>
      <Heading spacing size="small" className={styles.stegTitle}>
        Hvordan kan jeg være sikker på at permitteringen er gyldig, og at de
        ansatte får pengene sine?
      </Heading>
      <BodyShort spacing>
        Du kan permittere dersom virksomheten din reduseres eller stanses i en
        periode. Dette går fram av{" "}
        <Link href="https://www.lo.no/hovedavtalen/#3989">
          Hovedavtalen LO NHO
        </Link>
        .
      </BodyShort>
      <BodyShort>
        Vi tar stilling til om permitteringen gir rett til dagpenger når vi
        behandler søknaden. Det vil si at vi vurderer om permitteringen skyldes
        at bedriften har redusert eller stanset virksomheten på grunn av forhold
        du ikke har hatt mulighet til å påvirke.
      </BodyShort>
      <Heading spacing size="small" className={styles.stegTitle}>
        Kan også tilkallingsvikarer permitteres?
      </Heading>
      <BodyShort spacing>
        Tilkallingsvikarer/ringehjelper som ikke har krav på arbeid frem i tid i
        arbeidskontrakt/avtale, kan ikke permitteres og har ikke krav på
        lønnskompensasjon. Du skal kun varsle tilkallingsvikarer som har oppdrag
        om permittering. Dersom tilkallingsvikaren ikke har oppdrag kan du bli
        bedt om å bekrefte mangel på oppdrag, slik at tilkallingsvikaren kan
        legge denne bekreftelsen ved søknad om dagpenger.
      </BodyShort>
      <BodyShort>
        Har tilkallingsvikaren avtale om å jobbe i en periode og rammes av
        permitteringen, skal du varsle vikaren på vanlig måte. Permitteringen
        gjelder kun så lenge den avtalte vikarjobben varer. Det vil si siste
        dagen for det avtalte oppdraget.
      </BodyShort>
      <Heading spacing size="small" className={styles.stegTitle}>
        Kan vi permittere ansatte som ikke kommer seg inn i landet som følge av
        reiserestriksjonene?
      </Heading>
      <BodyShort spacing>
        NAV har ikke myndighet til å avgjøre hva som er saklig grunn til å
        permittere.{" "}
        <Link href="https://arbinn.nho.no/korona-aktuelt-innhold/artikler/nye-innreiserestriksjoner-fra-29.-januar-2021/">
          NHO skriver på sine sider
        </Link>{" "}
        at en ansatts manglende mulighet til å møte til arbeid fordi han ikke
        kommer inn i Norge, i seg selv ikke er grunn til å permittere
        vedkommende.
      </BodyShort>
      <BodyShort spacing>
        <Link href="https://www.regjeringen.no/no/aktuelt/innforer-de-strengeste-innreisereglene-til-norge-siden-mars-2020/id2830390/">
          Les mer om innreisereglene på regjeringen.no
        </Link>
      </BodyShort>
      <Link href="https://www.nav.no/no/bedrift/refusjon-ved-innreiseforbud-under-pandemien">
        Her finner du informasjon om refusjon ved innreiseforbud under pandemien
      </Link>
      <Heading spacing size="small" className={styles.stegTitle}>
        Kan jeg endre permitteringsgraden?
      </Heading>
      <BodyShort>
        Ja. Hvis du utvider permitteringsgraden må du vurdere om du etter
        gjeldende avtaler må gi et nytt permitteringsvarsel der du oppgir ny
        permitteringsgrad. Du trenger ikke betale ny lønnsplikt hvis du utvider
        permitteringsgraden.
      </BodyShort>
      <Heading spacing size="small" className={styles.stegTitle}>
        Kan jeg forlenge permitteringen?
      </Heading>
      <BodyShort>
        Ja, det kan du. Men du kan bare forlenge innenfor maksimal
        permitteringsperiode på 49 uker innenfor de siste 18 måneder. Ifølge{" "}
        <Link href="https://www.lo.no/hovedavtalen/#3991">
          Hovedavtalen LO NHO
        </Link>{" "}
        gjelder da vanlige permitteringsregler der du gir nytt
        permitteringsvarsel etter gjeldende varselfrist på minimum 14 dager (2
        dager ved uforutsett hendelse). Hvis bedriften er bundet av andre
        avtaler kan det gjelde andre vilkår.
      </BodyShort>
      <Heading spacing size="small" className={styles.stegTitle}>
        Hva er permittering?
      </Heading>
      <BodyShort spacing>
        Permittering kan brukes når virksomheten reduseres i en periode eller
        stanses. Ansatte som permitteres skal ikke arbeide for deg mens de er
        permittert. Du skal ikke utbetale lønn til ansatte mens de er permittert
        og mottar dagpenger.
      </BodyShort>
      <BodyShort spacing>
        Vi skiller mellom helt og delvis permitterte. Dersom ansatte er delvis
        permittert, arbeider de ansatte kortere dager eller færre dager. Du skal
        kun betale lønn for den tiden de jobber. Når ansatte er helt permittert,
        skal du ikke utbetale lønn.
      </BodyShort>
      <BodyShort>
        Når ansatte permitteres, fordeles kostnadene mellom bedriften og staten.
        Bedriften betaler den ansatte lønn de 10 første dagene. Deretter kan den
        ansatte ha rett til dagpenger. Dagpengene sikrer inntekt, men er ikke
        like mye som vanlig lønn.
      </BodyShort>
      <Heading spacing size="small" className={styles.stegTitle}>
        Hva skjer om jeg utbetaler lønn til en ansatt som er varslet om 100
        prosent permittering?
      </Heading>
      <BodyShort spacing>
        Betaler du lønn til en ansatt som har fått varsel om 100 prosent
        permittering, er den ansatte i praksis kun delvis permittert fordi den
        ansatte lønnes for arbeid.
      </BodyShort>
      <BodyShort>
        Om du utbetaler forskjellen mellom dagpengene og full lønn, vil
        dagpengene til den permitterte bli redusert. Hvis du for eksempel
        utbetaler 30 prosent av den ordinære lønnen til en ansatt, vil den
        ansatte være 70 prosent permittert.
      </BodyShort>
      <Heading spacing size="small" className={styles.stegTitle}>
        Fant du ikke det du lette etter?
      </Heading>
      <Link href="https://www.nav.no/person/kontakt-oss/chat/arbeidsgiver">
        Chat med NAV om permittering.
      </Link>
    </Container>
  );
};

export default VanligeSporsmal;
