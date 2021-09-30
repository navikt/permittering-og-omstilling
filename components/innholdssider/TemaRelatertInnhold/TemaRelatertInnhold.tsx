import { BodyShort, Heading } from "@navikt/ds-react";
import { FunctionComponent } from "react";
import styles from "./TemaRelatertInnhold.module.css";
import { RelatertInnhold, RelatertInnholdLenke } from "../RelatertInnhold";
import Lenke from "../../lenke/Lenke";

type Props = {
  relatertInnhold: RelatertInnhold[];
};

const TemaRelatertInnhold: FunctionComponent<Props> = ({ relatertInnhold }) => {
  const relatertInnholdSorted = relatertInnhold.sort(
    (a, b) => a.sortOrder - b.sortOrder
  );

  return (
    <div>
      {relatertInnholdSorted.map((innhold: RelatertInnhold, index) => (
        <div className={styles.relatertinnhold} key={index}>
          <Heading size={"medium"} spacing>
            {innhold.tittel}
          </Heading>
          {innhold.lenker.map((lenke: RelatertInnholdLenke) => (
            <BodyShort spacing key={lenke.navn}>
              <Lenke href={lenke.lenke}>{lenke.navn}</Lenke>
            </BodyShort>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TemaRelatertInnhold;
