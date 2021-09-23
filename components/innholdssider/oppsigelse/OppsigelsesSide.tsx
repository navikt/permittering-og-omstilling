import React, { FunctionComponent } from "react";
import { BodyLong, PageHeader, Label, Link, ContentContainer, Grid, Cell } from "@navikt/ds-react";
import { RelatertInnhold } from "../RelatertInnhold";
import { TemaInnhold } from "../TemaInnhold";
import styles from "./oppsigelse.module.css";
import Container from "../../container/Container";
import BlockContent from "@sanity/block-content-to-react";
import TemaRelatertInnhold from "../omstilling/TemaRelatertInnhold";

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
      <ContentContainer>
        <Grid>
          <Cell className={"navds-story-cell"} xs={12} sm={6} lg={8}>
            <Container>
              {oppsigelsesInnhold.map((innhold) => (
                  <BlockContent blocks={innhold.innhold} key={innhold.tittel}/>
              ))}
            </Container>
          </Cell>
          <Cell className={"navds-story-cell"} xs={12} sm={6} lg={4}>
            <TemaRelatertInnhold relatertInnhold={relatertInnhold} />
          </Cell>
        </Grid>
      </ContentContainer>
    </>
  );
};

export default OppsigelsesSide;
