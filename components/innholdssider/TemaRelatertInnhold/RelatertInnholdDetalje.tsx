import { BodyShort, Heading } from "@navikt/ds-react";
import { FunctionComponent } from "react";
import { RelatertInnhold, RelatertInnholdLenke } from "../RelatertInnhold";
import Lenke from "../../lenke/Lenke";
import styles from "./TemaRelatertInnhold.module.css";

type Props = {
  relatertInnhold: RelatertInnhold;
};

const RelatertInnholdDetalje: FunctionComponent<Props> = ({ relatertInnhold }) => {
  const skjemaLenker: RelatertInnholdLenke[] = relatertInnhold.lenker.filter((lenke) => (lenke.variant === 'skjema'));
  const regelverkLenker = relatertInnhold.lenker.filter((lenke) => (lenke.variant === 'regelverk'));
  return (
    <div className={styles.relatertinnhold} >
      <Heading size={"medium"} spacing>
        {relatertInnhold.tittel}
      </Heading>
      <Heading size={"small"} spacing>
        Skjemaer
      </Heading>
      <ul>
        {skjemaLenker.map((lenke: RelatertInnholdLenke) => (
          <BodyShort spacing key={lenke.navn}>
            <li><Lenke href={lenke.lenke}>{lenke.navn}</Lenke></li>
          </BodyShort>
        ))}
      </ul>
      {regelverkLenker && regelverkLenker.length > 0 && <>
        <Heading size={"small"} spacing>
          Regelverk
        </Heading>
        <ul>
          {regelverkLenker.map((lenke: RelatertInnholdLenke) => (
            <BodyShort spacing key={lenke.navn}>
              <li><Lenke href={lenke.lenke}>{lenke.navn}</Lenke></li>
            </BodyShort>
          ))}
        </ul>
      </>
      }
    </div>
  );
};

export default RelatertInnholdDetalje;
