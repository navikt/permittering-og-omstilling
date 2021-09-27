import React, { FunctionComponent } from "react";
import BlockContent from "@sanity/block-content-to-react";
import {
  Alert,
  PageHeader,
  Label,
  Heading,
} from "@navikt/ds-react";
import Container from "../../container/Container";
import { RelatertInnhold } from "../RelatertInnhold";
import { TemaInnhold } from "../TemaInnhold";
import styles from "./omstilling.module.css";
import TemaRelatertInnhold from "../TemaRelatertInnhold/TemaRelatertInnhold";

type Props = {
  omstillingInnhold: TemaInnhold[];
  relatertInnhold: RelatertInnhold[];
}

const OmstillingsSide: FunctionComponent<Props> = ( {omstillingInnhold, relatertInnhold} ) => {
  return (
    <>
      <PageHeader className={styles.banner} description="NAV samarbeider med virksomheter i omstilling der mange ansatte mister - eller står i fare for - å miste jobben.">
        Omstilling og nedbemanning
      </PageHeader>
      <div className={styles.container}>
        <TemaRelatertInnhold relatertInnhold={relatertInnhold} />
        <div className={styles.innhold}>
          <Container>
            {omstillingInnhold.map((innhold) => (
                <BlockContent blocks={innhold.innhold} key={innhold.tittel}/>
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
        </div>
      </div>
    </>
  );
};

export default OmstillingsSide;
