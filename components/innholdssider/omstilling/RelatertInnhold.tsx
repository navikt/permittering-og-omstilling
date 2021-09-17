import { Accordion, BodyShort, Link } from "@navikt/ds-react";

const RelatertInnhold = () => {
    return (
        <Accordion heading="Relatert innhold">
            <BodyShort>
              <Link href="/oppsigelse">Oppsigelse</Link>
            </BodyShort>
            <BodyShort>
              <Link href="https://www.nav.no/no/person/arbeid/dagpenger-ved-arbeidsloshet-og-permittering/ventelonn">Ventelønn</Link>
            </BodyShort>
          </Accordion>
    );
}

export default RelatertInnhold;
