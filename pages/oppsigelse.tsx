import type { NextPage } from "next";
import {BodyLong, BodyShort, Ingress, Label, Link, Title} from "@navikt/ds-react";
import Container from "../components/container/Container";

const Oppsigelse: NextPage = () => {
  return (
  <Container>
  <Title spacing={true} size={'l'}>Oppsigelse</Title>
    <Ingress spacing = {true}>
      Ved oppsigelse er det vanlig at NAV samhandler med arbeidsgiver og gir bistand til berørte arbeidstakere
    </Ingress>
    <Label spacing = {true}>
      Informer NAV så tidlig som mulig
    </Label>
    <BodyLong spacing = {true}>
      En arbeidsgiver som vurderer å gå til masseoppsigelser skal så tidlig som mulig gi melding om dette til NAV. Meldeplikten skal sikre at NAV kan bistå virksomheten og de berørte arbeidstakerne.
      </BodyLong>
    <BodyLong spacing = {true}>
      Med masseoppsigelser menes at minst 10 arbeidstakere blir sagt opp innenfor et tidsrom på 30 dager. Når en arbeidsgiver planlegger masseoppsigelser vil den tidligst tre i kraft 30 dager etter at NAV har fått melding.
    </BodyLong>
    <BodyLong spacing = {true}>
      Arbeidsgiver skal gi tilsvarende melding til NAV hvis minst 10 arbeidstakere vil bli permittert uten lønn, eller vil få sin ukentlige arbeidstid redusert med mer enn 50 prosent i mer enn fire uker.
    </BodyLong>
    <BodyLong spacing = {true}>
      Se <Link href={'https://lovdata.no/nav/lov/2004-12-10-76/kap3/%C2%A78'}> arbeidsmarkedsloven § 8</Link> og <Link href={'https://lovdata.no/nav/lov/2005-06-17-62/kap15/%C2%A715-2'}> arbeidsmiljøloven § 15-2</Link> for mer om arbeidsgivers meldeplikt ved masseoppsigelser og permitteringer.
    </BodyLong>
    <BodyLong spacing = {true}>
      Du skal benytte det digitale skjemaet <Link href={'https://arbeidsgiver.nav.no/permittering/'}>Arbeidsgivers meldeplikt til NAV ved masseoppsigelser, permitteringer uten lønn og innskrenking i arbeidstiden.</Link>
    </BodyLong>
    <Label>Samhandling med NAV</Label>
    <BodyLong spacing = {true}>
      Når NAV har mottatt meldingen (skjemaet), tar vi som hovedregel kontakt med virksomheten for å avtale et snarlig møte med virksomhetens ledelse og de tillitsvalgte.
    </BodyLong>
    <BodyLong spacing = {true}>
      Formålet er å avklare situasjonen, informere om hva slags bistand NAV kan gi ansatte som er oppsagt eller permittert, og diskutere mulige løsninger. NAV og virksomheten skal også avtale videre samhandling.
    </BodyLong>
    <BodyLong spacing = {true}>
      Les også om <Link href={'https://www.nav.no/no/bedrift/oppfolging/permittering-og-omstilling/omstilling-og-nedbemanning'}>omstilling og nedbemanning</Link>.
    </BodyLong>
    <Label>Bistand til berørte arbeidstakere</Label>
    <BodyLong spacing = {true}>
      Ved masseoppsigelser og permitteringer kan NAV som hovedregel tilby de arbeidstakerne som er berørt.
    </BodyLong>
    <BodyLong spacing = {true}>
      <li>felles informasjonsmøter om arbeidsmarkedet og <Link href={'https://arbeidsplassen.nav.no/stillinger'}>ledige stillinger</Link> og om NAVs tjenester: <Link href={'https://arbeidssokerregistrering.nav.no/start'}>Hvordan du registrerer deg som arbeidssøker</Link>, hvordan du <Link href={'https://www.nav.no/soknader/nb/person/arbeid/dagpenger'}>søker om dagpenger</Link>, <Link href={'https://www.nav.no/no/ditt-nav'}>selvbetjeningstjenester på nav.no</Link> og informasjon om andre virkemidler som NAV har.</li>
      <li>
        ulike <Link href={'https://www.nav.no/no/person/arbeid/oppfolging-og-tiltak-for-a-komme-i-jobb/tiltak-for-a-komme-i-jobb'}>arbeidsmarkedstiltak</Link>som for eksempel oppfølging og opplæringstiltak.
      </li>
    </BodyLong>
    <BodyLong spacing = {true}>
      Fylkeskommunen har tiltak som bedriftsintern opplæring (BIO) som kan gis til opplæring av bedriftens ansatte ved større omstillinger.
    </BodyLong>
    <Label>Varsel til de ansatte</Label>
    <BodyLong spacing = {true}>
      De ansatte skal normalt ha varsel om permittering senest 14 dager før permitteringen trer i kraft. Ved uforutsette hendelser er fristen normalt to dager.
    </BodyLong>
    <BodyLong spacing = {true}>
      Varselet skal inneholde: Informasjon om permitteringens årsak, varslingsdato, dato for iverksettelse og permitteringens lengde, hvem som blir permittert, og om det er hel eller delvis permittering.
    </BodyLong>
    <Label>I tillegg ber vi deg som arbeidsgiver oppgi følgende i varselet:</Label>
    <BodyLong spacing = {true}>
      <li>Om det er enighet mellom partene på arbeidsplassen om permitteringen (JA/NEI) </li>
      <li>Den permitteres stillingsstørrelse </li>
      <li>Når den permitterte ble ansatt i bedriften. </li>
      Dersom permitteringsvarselet inneholder denne informasjonen, vil dette som hovedregel være tilstrekkelig for å kunne behandle søknad om dagpenger under permittering.
    </BodyLong>
    <Label>Dokumentert enighet</Label>
    <BodyLong spacing = {true}>
      Det skal som hovedregel legges til grunn at vilkårene etter <Link href={'https://lovdata.no/nav/folketrygdloven/kap4/%C2%A74-7'}>folketrygdloven § 4-7</Link> er oppfylt dersom det dokumenteres enighet mellom arbeidsgiver og arbeidstaker om at grunnlaget for permittering foreligger og det på denne måten godtgjøres at virksomheten har gjort det som med rimelighet kan forventes for å unngå permittering og at årsaken ligger utenfor det som arbeidsgiver kan påvirke.
      Dersom permitteringsvarselet inneholder denne informasjonen, vil dette som hovedregel være tilstrekkelig for å kunne behandle søknad om dagpenger under permittering.
    </BodyLong>
    <BodyLong spacing = {true}>
      Arbeidsgiver må gi NAV tilstrekkelig informasjon om permitteringsårsaken. Når det er enighet mellom partene om at arbeidsgiver har gjort det som med rimelighet kan forventes og at årsaken til permittering er forhold som arbeidsgiver ikke kan påvirke, må dette kunne dokumenteres. Det er mest hensiktsmessig at enigheten mellom partene dokumenteres i protokoll.   Skal du som <Link href={'https://www.nav.no/soknader/nb/bedrift/permitteringer-oppsigelser-og-konkurs/forespoersel-permittering'}>arbeidsgiver sende  inn denne type dokumentasjon til NAV?</Link>
    </BodyLong>
    <Label spacing = {true}>
      <Link href={'https://arbeidsgiver.nav.no/arbeidsgiver-permittering/#hvordanPermittere'}>Se informasjon om permittering</Link>
    </Label>
    </Container>
  );
};

export default Oppsigelse;
