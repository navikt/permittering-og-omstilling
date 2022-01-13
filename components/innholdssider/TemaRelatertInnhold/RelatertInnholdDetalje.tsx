import { BodyShort, Heading } from "@navikt/ds-react";
import { FunctionComponent } from "react";
import { RelatertInnhold, RelatertInnholdLenke } from "../RelatertInnhold";
import Lenke from "../../lenke/Lenke";
import styles from "./TemaRelatertInnhold.module.css";
import KopierLenke from "../../kopierlenke/KopierLenke";

type Props = {
  relatertInnhold: RelatertInnhold;
  anker: string
};

const RelatertInnholdDetalje: FunctionComponent<Props> = ({ relatertInnhold, anker }) => {
  const skjemaLenker: RelatertInnholdLenke[] = relatertInnhold.lenker.filter((lenke) => (lenke.variant === 'skjema'));
  const regelverkLenker = relatertInnhold.lenker.filter((lenke) => (lenke.variant === 'regelverk'));
  return (
    <div className={styles.relatertinnhold} >
      <Heading size={"xlarge"}>
        {relatertInnhold.tittel}
      </Heading>
      <KopierLenke anker={anker} />
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
