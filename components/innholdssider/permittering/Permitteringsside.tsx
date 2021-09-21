import { Alert, PageHeader } from "@navikt/ds-react";
import HvordanPermittere from "./HvordanPermittere";
import Lonnsplikt from "./Lonnsplikt";
import Permitteringsperioden from "./Permitteringsperioden";
import InfoTilAnsatte from "./InfoTilAnsatte";
import VanligeSporsmal, { VanligSpørsmål } from "./VanligeSporsmal";
import styles from "./permittering.module.css";
import Innholdsmeny from "./innholdsmeny/Innholdsmeny";
import { FunctionComponent } from "react";

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

type Props = {
  vanligeSpørsmål: VanligSpørsmål[];
};

const Permitteringsside: FunctionComponent<Props> = ({ vanligeSpørsmål }) => {
  return (
    <>
      <PageHeader className={styles.banner}>Veiviser for permittering</PageHeader>
      <div className={styles.container}>
        <Innholdsmeny />
        <div className={styles.innhold}>
          <HvordanPermittere />
          <Lonnsplikt />
          <Permitteringsperioden />
          <InfoTilAnsatte />
          {vanligeSpørsmål.map((vanligSpørsmål) => (
            <VanligeSporsmal
              sporsmal={vanligSpørsmål.sporsmal}
              svar={vanligSpørsmål.svar}
              key={vanligSpørsmål.sporsmal}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export const ForelengePerioderAlert = () => {
  return (
      <Alert variant="warning" className={styles.forlengeRegelverkAlert}>
        Regjeringen har foreslått å forlenge dagpenge- og permitteringsperioder
        som nærmer seg slutten frem til og med 31. oktober 2021. Vi oppdaterer
        sidene så snart vi har mer informasjon.
      </Alert>
  );
};

export default Permitteringsside;
