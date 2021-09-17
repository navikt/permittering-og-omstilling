import type { NextPage } from "next";
import { Alert, Header } from "@navikt/ds-react";
import HvordanPermittere from "./HvordanPermittere";
import Lonnsplikt from "./Lonnsplikt";
import Permitteringsperioden from "./Permitteringsperioden";
import InfoTilAnsatte from "./InfoTilAnsatte";
import VanligeSporsmal from "./VanligeSporsmal";
import styles from "./permittering.module.css";
import Innholdsmeny from "./innholdsmeny/Innholdsmeny";

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

const Permitteringsside: NextPage = () => {
  return (
    <>
      <Header>Veiviser for permittering</Header>
      <div className={styles.container}>
        <Innholdsmeny />
        <div className={styles.innhold}>
          <HvordanPermittere />
          <Lonnsplikt />
          <Permitteringsperioden />
          <InfoTilAnsatte />
          <VanligeSporsmal />
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
