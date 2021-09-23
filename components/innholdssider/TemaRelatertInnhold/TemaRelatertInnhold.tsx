import { Accordion, BodyShort, Link } from "@navikt/ds-react";
import { FunctionComponent } from "react";
import styles from "./TemaRelatertInnhold.module.css";
import { RelatertInnhold, RelatertInnholdLenke } from "../RelatertInnhold";

type Props = {
  relatertInnhold: RelatertInnhold[];
}

const TemaRelatertInnhold: FunctionComponent<Props> = ( {relatertInnhold} ) => {
  return (
    <div className={styles.relatertinnhold}>
      {relatertInnhold.map((innhold: RelatertInnhold, index) => (
        <Accordion key={index}>
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
    </div>
  );
};

export default TemaRelatertInnhold;