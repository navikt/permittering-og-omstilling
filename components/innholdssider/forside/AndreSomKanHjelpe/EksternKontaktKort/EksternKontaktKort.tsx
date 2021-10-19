import React, { FunctionComponent, ReactElement } from "react";
import { BodyShort, Heading } from "@navikt/ds-react";
import styles from "./EksternKontaktKort.module.css";
import Link from "next/link";

type Props = {
  tittel: string;
  href: string;
  innhold: ReactElement;
  kategori: string;
};

const EksternKontaktKort: FunctionComponent<Props> = ({
  tittel,
  href,
  innhold,
  kategori,
}) => {
  return (
    <Link href={href}>
      <a className={styles.eksternKontaktKort} role={"link"}>
        <Heading size="medium" spacing className={styles.heading}>
          {tittel}
        </Heading>
        <BodyShort spacing>{innhold}</BodyShort>
        <BodyShort className={styles.kategori}>{kategori}</BodyShort>
      </a>
    </Link>
  );
};

export default EksternKontaktKort;
