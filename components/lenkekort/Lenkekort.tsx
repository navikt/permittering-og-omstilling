import React, { FunctionComponent } from "react";
import styles from "./Lenkekort.module.css";
import { BodyShort, Heading } from "@navikt/ds-react";
import Link from "next/link";

type Props = {
  tittel: string;
  href: string;
  innhold: string;
  // imgsrc: string;
  kategori: string;
};

const Lenkekort: FunctionComponent<Props> = ({
  tittel,
  href,
  innhold,
  kategori,
}) => {
  return (
    <Link href={href}>
      <a className={styles.lenkekort} role="link">
        <img
          className={styles.ikon}
          src="/permittering-og-omstilling/eksempel.svg"
        />
        <Heading spacing className={styles.heading} size="medium">
          {tittel}
        </Heading>
        <BodyShort className={styles.innholdstekst} spacing>
          {innhold}
        </BodyShort>
        <BodyShort className={styles.kategori}>{kategori}</BodyShort>
      </a>
    </Link>
  );
};

export default Lenkekort;
