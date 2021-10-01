import { PageHeader } from "@navikt/ds-react";
import HvordanPermittere, {
  HvordanPermittereProps,
} from "./HvordanPermittere/HvordanPermittere";
import Lønnsplikt, { LønnspliktProps } from "./Lønnsplikt";
import Permitteringsperioden, {
  PermitteringsperiodenProps,
} from "./Permitteringsperioden";
import InfoTilAnsatte, { InfoTilAnsatteProps } from "./InfoTilAnsatte";
import styles from "./permittering.module.css";
import Innholdsmeny from "./innholdsmeny/Innholdsmeny";
import { FunctionComponent, useEffect, useState } from "react";
import { VanligSpørsmålType } from "./VanligeSpørsmål/VanligSpørsmål";
import VanligeSporsmal from "./VanligeSpørsmål/VanligeSporsmal";

export const permitteringInnhold = {
  hvordanPermittere: {
    tittel: "Hvordan permittere ansatte?",
    anker: "hvordan-permittere",
  },
  lønnsplikt: {
    tittel: "Lønnsplikt ved permittering",
    anker: "lonnsplikt",
  },
  permitteringsperioden: {
    tittel: "I permitteringsperioden",
    anker: "permitteringsperioden",
  },
  infoTilAnsatte: {
    tittel: "Informasjon til ansatte",
    anker: "infoTilAnsatte",
  },
  vanligeSpørsmål: {
    tittel: "Vanlige spørsmål",
    anker: "vanlige-sporsmal",
  },
};

export type PermitteringssideProps = {
  vanligeSpørsmål: VanligSpørsmålType[];
  hvordanPermittere: HvordanPermittereProps;
  lønnsplikt: LønnspliktProps;
  infoTilAnsatte: InfoTilAnsatteProps;
  permitteringsperioden: PermitteringsperiodenProps;
  sistOppdatert: Date[];
};

const avstandFraElementTilSkjermTopp = (elementId: string) => {
  const rect = document.getElementById(elementId)?.getBoundingClientRect();
  if (rect) {
    return Math.abs(rect.top);
  }
  return 1000;
};

const finnHvilketInnholdSomErScrolletTil = () => {
  let innholdsAnker = permitteringInnhold.hvordanPermittere.anker;
  let minAvstand = 10000000;
  const avstandHvordanPermittere = avstandFraElementTilSkjermTopp(
    permitteringInnhold.hvordanPermittere.anker
  );
  if (avstandHvordanPermittere < minAvstand) {
    innholdsAnker = permitteringInnhold.hvordanPermittere.anker;
    minAvstand = avstandHvordanPermittere;
  }
  const avstandPermitteringsperioden = avstandFraElementTilSkjermTopp(
    permitteringInnhold.permitteringsperioden.anker
  );
  if (avstandPermitteringsperioden < minAvstand) {
    innholdsAnker = permitteringInnhold.permitteringsperioden.anker;
    minAvstand = avstandPermitteringsperioden;
  }
  const avstandLønnsplikt = avstandFraElementTilSkjermTopp(
    permitteringInnhold.lønnsplikt.anker
  );
  if (avstandLønnsplikt < minAvstand) {
    innholdsAnker = permitteringInnhold.lønnsplikt.anker;
    minAvstand = avstandLønnsplikt;
  }
  const avstandInfoTilAnsatte = avstandFraElementTilSkjermTopp(
    permitteringInnhold.infoTilAnsatte.anker
  );
  if (avstandInfoTilAnsatte < minAvstand) {
    innholdsAnker = permitteringInnhold.infoTilAnsatte.anker;
    minAvstand = avstandInfoTilAnsatte;
  }
  const avstandVanligeSpørsmål = avstandFraElementTilSkjermTopp(
    permitteringInnhold.vanligeSpørsmål.anker
  );
  if (avstandVanligeSpørsmål < minAvstand) {
    innholdsAnker = permitteringInnhold.vanligeSpørsmål.anker;
  }
  return innholdsAnker;
};

const Permitteringsside: FunctionComponent<PermitteringssideProps> = ({
  vanligeSpørsmål,
  hvordanPermittere,
  lønnsplikt,
  infoTilAnsatte,
  permitteringsperioden,
  sistOppdatert,
}) => {
  const [nåværendeHash, setNåværendeHash] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const hash = global.location ? global.location.hash.slice(1) : null;
    if (hash) {
      setNåværendeHash(hash);
    }
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      const anker = finnHvilketInnholdSomErScrolletTil();
      setNåværendeHash(anker);
    };
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <div className={styles.permitteringsSide}>
      <PageHeader className={styles.banner}>
        Veiviser for permittering
      </PageHeader>
      <div className={styles.container}>
        <Innholdsmeny
          setNåværendeHash={setNåværendeHash}
          nåværendeHash={nåværendeHash}
        />
        <div className={styles.innhold}>
          <HvordanPermittere
            {...hvordanPermittere}
            sistOppdatert={sistOppdatert}
          />
          <Lønnsplikt {...lønnsplikt} />
          <Permitteringsperioden {...permitteringsperioden} />
          <InfoTilAnsatte {...infoTilAnsatte} />
          <VanligeSporsmal vanligeSpørsmål={vanligeSpørsmål} />
        </div>
      </div>
    </div>
  );
};

export default Permitteringsside;
