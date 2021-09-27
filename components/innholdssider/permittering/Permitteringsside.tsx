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
import { FunctionComponent } from "react";
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
};

const Permitteringsside: FunctionComponent<PermitteringssideProps> = ({
  vanligeSpørsmål,
  hvordanPermittere,
  lønnsplikt,
  infoTilAnsatte,
  permitteringsperioden,
}) => {
  return (
    <div className={styles.permitteringsSide}>
      <PageHeader className={styles.banner}>
        Veiviser for permittering
      </PageHeader>
      <div className={styles.container}>
        <Innholdsmeny />
        <div className={styles.innhold}>
          <HvordanPermittere {...hvordanPermittere} />
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
