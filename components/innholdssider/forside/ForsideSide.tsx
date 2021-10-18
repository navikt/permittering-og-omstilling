import { NextPage } from "next";
import React from "react";
import { Heading } from "@navikt/ds-react";
import styles from "./forside.module.css";

const ForsideSide: NextPage = () => {
  return (
    <div className={styles.container}>
      <Heading size="large">Den nye forsiden</Heading>
    </div>
  );
};

export default ForsideSide;
