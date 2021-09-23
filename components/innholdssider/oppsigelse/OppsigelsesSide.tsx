import React, { FunctionComponent } from "react";
import { PageHeader } from "@navikt/ds-react";
import { RelatertInnhold } from "../RelatertInnhold";
import { TemaInnhold } from "../TemaInnhold";
import styles from "./oppsigelse.module.css";
import Container from "../../container/Container";
import BlockContent from "@sanity/block-content-to-react";
import TemaRelatertInnhold from "../TemaRelatertInnhold/TemaRelatertInnhold";

type Props = {
  oppsigelsesInnhold: TemaInnhold[];
  relatertInnhold: RelatertInnhold[];
};

const OppsigelsesSide: FunctionComponent<Props> = ( {oppsigelsesInnhold, relatertInnhold} ) => {
  return (
    <>
      <PageHeader className={styles.banner} description="Ved oppsigelse er det vanlig at NAV samhandler med arbeidsgiver og gir bistand til berørte arbeidstakere">
        Oppsigelse
      </PageHeader>
      <div className={styles.container}>
        <div className={styles.innhold}>
          <Container>
            {oppsigelsesInnhold.map((innhold) => (
                <BlockContent blocks={innhold.innhold} key={innhold.tittel}/>
            ))}
          </Container>
        </div>
        <TemaRelatertInnhold relatertInnhold={relatertInnhold} />
      </div>
    </>
  );
};

export default OppsigelsesSide;
