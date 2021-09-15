import type { NextPage } from "next";
import "@navikt/ds-css";
import { LinkPanel } from "@navikt/ds-react";
import Container from "../components/container/Container";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Container>
        <LinkPanel href={"permittering-og-omstilling" + "/permittering"}>
          Veiviser for permittering
        </LinkPanel>
        <LinkPanel href={"permittering-og-omstilling" + "/omstilling"}>
          Omstilling og nedbemanning{" "}
        </LinkPanel>
        <LinkPanel href={"permittering-og-omstilling" + "/oppsigelse"}>
          Oppsigelse
        </LinkPanel>
      </Container>
    </div>
  );
};

export default Home;
