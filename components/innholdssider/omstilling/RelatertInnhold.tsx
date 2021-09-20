import { Accordion, BodyShort, Link } from "@navikt/ds-react";

const RelatertInnhold = () => {
  return (
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>Relatert innhold</Accordion.Header>
          <Accordion.Content>
            <BodyShort>
              <Link href="/oppsigelse">Oppsigelse</Link>
            </BodyShort>
            <BodyShort>
              <Link href="https://www.nav.no/no/person/arbeid/dagpenger-ved-arbeidsloshet-og-permittering/ventelonn">
                Ventelønn
              </Link>
            </BodyShort>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
  );
};

export default RelatertInnhold;
