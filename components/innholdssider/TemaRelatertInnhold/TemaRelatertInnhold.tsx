import { BodyShort, Heading, Link } from "@navikt/ds-react";
import { FunctionComponent } from "react";
import styles from "./TemaRelatertInnhold.module.css";
import { RelatertInnhold, RelatertInnholdLenke } from "../RelatertInnhold";

type Props = {
  relatertInnhold: RelatertInnhold[];
}

const TemaRelatertInnhold: FunctionComponent<Props> = ( {relatertInnhold} ) => {
  return (
    <div>
      {relatertInnhold.map((innhold: RelatertInnhold, index) => (
        <div className={styles.relatertinnhold}>
            <Heading size={"medium"} spacing>{innhold.tittel}</Heading>
            {innhold.lenker.map((lenke: RelatertInnholdLenke) => (
              <BodyShort spacing key={lenke.navn}><Link href={lenke.lenke}>{lenke.navn}</Link></BodyShort>
            ))}
        </div>
      ))
      }
    </div>
  );
};

export default TemaRelatertInnhold;
