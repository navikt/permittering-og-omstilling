import { Accordion, BodyShort, Link } from "@navikt/ds-react";
import { FunctionComponent } from "react";
import { RelatertInnhold } from "../RelatertInnhold";

type Props = {
  relatertInnhold: RelatertInnhold[];
}

const TemaRelatertInnhold: FunctionComponent<Props> = ( {relatertInnhold} ) => {
  return (
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>Relatert innhold</Accordion.Header>
          <Accordion.Content>
            {relatertInnhold.map((innhold) => (
              <BodyShort key={innhold.navn}><Link href={innhold.lenke}>{innhold.navn}</Link></BodyShort>
            ))}
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
  );
};

export default TemaRelatertInnhold;