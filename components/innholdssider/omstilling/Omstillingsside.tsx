import React, { FunctionComponent } from "react";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import {
  Alert,
  BodyLong,
  BodyShort,
  Cell,
  ContentContainer,
  Grid,
  PageHeader,
  Label,
  Heading,
} from "@navikt/ds-react";
import Container from "../../container/Container";
import { RelatertInnhold } from "../RelatertInnhold";
import styles from "./omstilling.module.css";
import { TemaInnhold } from "../TemaInnhold";
import TemaRelatertInnhold from "./TemaRelatertInnhold";

type Props = {
  omstillingInnhold: TemaInnhold[];
  relatertInnhold: RelatertInnhold[];
}

const OmstillingsSide: FunctionComponent<Props> = ( {omstillingInnhold, relatertInnhold} ) => {
  return (
    <div>
      <PageHeader className={styles.banner} description="NAV samarbeider med virksomheter i omstilling der mange ansatte mister - eller står i fare for - å miste jobben.">
        Omstilling og nedbemanning
      </PageHeader>
      <ContentContainer>
        <Grid>
          <Cell className={"navds-story-cell"} xs={12} sm={6} lg={8}>
            <Container>
              {omstillingInnhold.map((innhold) => (
                <div>
                  <BlockContent blocks={innhold.innhold} />
                </div>
              ))}
              <Alert variant="info" className={styles.forlengeRegelverkAlert}>
                <Heading spacing size="medium">
                  Fakta
                </Heading>
                <Label>Omstilling kan skje i forbindelse med</Label>
                <ul>
                  <li>Permittering</li>
                  <li>Driftsinnskrenkning/nedbemanning</li>
                  <li>Produksjonsendring og opp-/nedbemanning</li>
                  <li>Kvalifisering av allerede ansatte</li>
                  <li>Flytting av en virksomhet</li>
                  <li>Konkurs og annen driftsstans</li>
                </ul>
              </Alert>
            </Container>
          </Cell>
          <Cell className={"navds-story-cell"} xs={12} sm={6} lg={4}>
            <TemaRelatertInnhold relatertInnhold={relatertInnhold} />
          </Cell>
        </Grid>
      </ContentContainer>
    </div>
  );
};

export default OmstillingsSide;
