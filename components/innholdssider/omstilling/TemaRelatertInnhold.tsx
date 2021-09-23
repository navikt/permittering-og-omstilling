import { Accordion, BodyShort, Link } from "@navikt/ds-react";
import { FunctionComponent } from "react";
import { RelatertInnhold, RelatertInnholdLenke } from "../RelatertInnhold";

type Props = {
  relatertInnhold: RelatertInnhold[];
}

const TemaRelatertInnhold: FunctionComponent<Props> = ( {relatertInnhold} ) => {
  return (
    <>
      {relatertInnhold.map((innhold: RelatertInnhold) => (
        <Accordion>
          <Accordion.Item>
            <Accordion.Header>{innhold.tittel}</Accordion.Header>
            <Accordion.Content>
              {innhold.lenker.map((lenke: RelatertInnholdLenke) => (
                <BodyShort key={lenke.navn}><Link href={lenke.lenke}>{lenke.navn}</Link></BodyShort>
              ))}
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      ))
      }
    </>
  );
};

export default TemaRelatertInnhold;