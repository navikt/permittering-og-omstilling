import styles from "./innholdsmeny.module.css";
import { AccordionMenu, Heading } from "@navikt/ds-react";
import { permitteringInnhold } from "../Permitteringsside";
import { FunctionComponent } from "react";

type InnholdsmenyProps = {
  nåværendeHash?: string;
  setNåværendeHash: (hash: string) => void;
};

const Innholdsmeny: FunctionComponent<InnholdsmenyProps> = ({
  nåværendeHash,
  setNåværendeHash,
}) => {
  return (
    <AccordionMenu className={styles.innholdsmeny}>
      <Heading size="small" className={styles.tittel}>
        Innhold på siden
      </Heading>
      {Object.values(permitteringInnhold).map((innhold) => (
        <AccordionMenu.Item
          className={styles.lenke}
          active={nåværendeHash?.includes(innhold.anker)}
          onClick={() => setNåværendeHash(innhold.anker)}
          href={`#${innhold.anker}`}
          key={innhold.anker}
        >
          {innhold.tittel}
        </AccordionMenu.Item>
      ))}
    </AccordionMenu>
  );
};

export default Innholdsmeny;
