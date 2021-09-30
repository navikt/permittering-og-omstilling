import styles from "./innholdsmeny.module.css";
import { Heading } from "@navikt/ds-react";
import { permitteringInnhold } from "../Permitteringsside";
import Lenke from "../../../lenke/Lenke";

const Innholdsmeny = () => {
  return (
    <nav className={styles.innholdsmeny}>
      <Heading size="small" className={styles.tittel}>
        Innhold på siden
      </Heading>
      {Object.values(permitteringInnhold).map((innhold) => (
        <Lenke
          href={`#${innhold.anker}`}
          className={styles.lenke}
          key={innhold.anker}
        >
          {innhold.tittel}
        </Lenke>
      ))}
    </nav>
  );
};

export default Innholdsmeny;
