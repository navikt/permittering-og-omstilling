import type { NextPage } from "next";
import { Alert, Header } from "@navikt/ds-react";
import HvordanPermittere from "./HvordanPermittere";
import Lonnsplikt from "./Lonnsplikt";
import Permitteringsperioden from "./Permitteringsperioden";
import InfoTilAnsatte from "./InfoTilAnsatte";
import VanligeSporsmal from "./VanligeSporsmal";
import styles from "./permittering.module.css";

const Permitteringsside: NextPage = () => {
  return (
    <>
      <Header>Veiviser for permittering</Header>
      <div className={styles.container}>
        <HvordanPermittere />
        <Lonnsplikt />
        <Permitteringsperioden />
        <InfoTilAnsatte />
        <VanligeSporsmal />
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
