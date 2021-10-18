import React, { FunctionComponent } from "react";
import styles from "./Lenkekort.module.css";
import { Heading } from "@navikt/ds-react";
import Link from "next/link";

type Props = {
  tittel: string;
  href: string;
  innhold: string;
  imgsrc?: string;
};

const Lenkekort: FunctionComponent<Props> = ({
  tittel,
  href,
  innhold,
  imgsrc,
}) => {
  return (
    <Link href={href}>
      <a className={styles.lenkekort} role={"link"}>
        <img
          className={styles.ikon}
          src={"/permittering-og-omstilling/eksempel.svg"}
        />
        <Heading spacing className={styles.heading} size={"medium"}>
          {tittel}
        </Heading>
        <div className={styles.innholdstekst}>{innhold}</div>
      </a>
    </Link>
  );
};

export default Lenkekort;
