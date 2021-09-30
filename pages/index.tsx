import type { NextPage } from "next";
import { LinkPanel, PageHeader } from "@navikt/ds-react";
import styles from "./index.module.css";

const basePath = "permittering-og-omstilling";

const Forside: NextPage = () => (
  <>
    <PageHeader className={styles.banner}>
      Permittering og omstilling
    </PageHeader>
    <div className={styles.container}>
      <LinkPanel className={styles.linkPanel} href={`${basePath}/permittering`}>
        <LinkPanel.Title>Veiviser for permittering</LinkPanel.Title>
        <LinkPanel.Description>
          Informasjon til arbeidsgivere om permittering av ansatte.
        </LinkPanel.Description>
      </LinkPanel>
      <LinkPanel className={styles.linkPanel} href={`${basePath}/omstilling`}>
        <LinkPanel.Title>Omstilling og nedbemanning</LinkPanel.Title>
        <LinkPanel.Description>
          NAV samarbeider med virksomheter i omstilling der mange ansatte mister
          - eller står i fare for - å miste jobben.
        </LinkPanel.Description>
      </LinkPanel>
    </div>
  </>
);

export default Forside;
