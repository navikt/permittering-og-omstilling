import type { NextPage } from "next";
import Link from "next/link";
import "@navikt/ds-css";
import {LinkPanel} from "@navikt/ds-react";
import Container from "../components/container/Container";
import styles from './index.module.css'

const Home: NextPage = () => {
  return (
      <div className={styles.container}>
    <Container>

      <LinkPanel href="/permittering">Veiviser for permittering</LinkPanel>
      <LinkPanel href="/omstilling">Omstilling og nedbemanning</LinkPanel>
      <LinkPanel href="/oppsigelse">Oppsigelse</LinkPanel>
    </Container>
          </div>
  );
};

export default Home;
