import Link from "next/link";
import styles from "./innholdsmeny.module.css";
import { Title } from "@navikt/ds-react";
import { permitteringInnhold } from "../Permitteringsside";

const Innholdsmeny = () => {
  return (
    <nav className={styles.innholdsmeny}>
      <Title spacing size="s">
        Innhold på siden
      </Title>
      {Object.values(permitteringInnhold).map((innhold) => (
        <Link href={`#${innhold.anker}`} key={innhold.anker}>
          <a className={styles.lenke}>{innhold.tittel}</a>
        </Link>
      ))}
    </nav>
  );
};

export default Innholdsmeny;
