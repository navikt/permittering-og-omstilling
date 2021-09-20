import type { NextPage } from "next";
import "@navikt/ds-css";
import { LinkPanel, PageHeader} from "@navikt/ds-react";
import Container from "../components/container/Container";
import styles from './index.module.css'

const Home: NextPage = () => {
  return (
      <>
          <PageHeader className={styles.banner}>Veiviser for permittering</PageHeader>
      <div className={styles.container}>
    <Container>
      <div className={styles.lenkepanelContainer}>
      <LinkPanel className={styles.navdsPanel} href={"permittering-og-omstilling" + "/permittering"}>Veiviser for permittering</LinkPanel>
      <LinkPanel className={styles.navdsPanel} href={"permittering-og-omstilling" + "/omstilling"}>Omstilling og nedbemanning </LinkPanel>
      <LinkPanel className={styles.navdsPanel} href={"permittering-og-omstilling" + "/oppsigelse"}>Oppsigelse</LinkPanel>
        </div>
    </Container>
          </div>
        </>
  );
};

export default Home;
