
import styles from "./innholdsmeny.module.css";
import {AccordionMenu, Heading} from "@navikt/ds-react";
import { permitteringInnhold } from "../Permitteringsside";
import {useEffect, useState} from "react";

const Innholdsmeny = () => {
 const [nåærendeHash, setNåværendeHash] = useState<string|undefined>(undefined);

    useEffect(() => {
        const hash= global.location ? global.location.hash.slice(1): null;
        if (hash) {
            setNåværendeHash(hash);
        }
    },[])

  return (
      <AccordionMenu className={styles.innholdsmeny}>
          <Heading size="small" className={styles.tittel}>
              Innhold på siden
          </Heading>
          {Object.values(permitteringInnhold).map((innhold) => {
                  return  nåærendeHash?.includes(innhold.anker) ?
              <AccordionMenu.Item active href={`#${innhold.anker}`} key={innhold.anker}>
                  {innhold.tittel}
              </AccordionMenu.Item>
                      :
                      <AccordionMenu.Item onClick={() => setNåværendeHash(innhold.anker)} href={`#${innhold.anker}`} key={innhold.anker}>
                          {innhold.tittel}
                      </AccordionMenu.Item>
          })}
      </AccordionMenu>
  );
};

export default Innholdsmeny;
