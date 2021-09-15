import { Header } from "@navikt/ds-react";
import styles from "./permittering.module.css";
import HvordanPermittere from "./HvordanPermittere";
import Lonnsplikt from "./Lonnsplikt";

const PermitteringSide = () => {
  return (
    <>
      <Header>Veiviser for permittering</Header>
      <div className={styles.container}>
        <HvordanPermittere />
        <Lonnsplikt />
      </div>
    </>
  );
};

export default PermitteringSide;
