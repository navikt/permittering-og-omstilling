import React, { FunctionComponent } from "react";
import BlockContent from "@sanity/block-content-to-react";
import {
  Alert,
  PageHeader,
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

const serializers = {
  types: {
    infofelt: (props: any) => (
      <Alert variant="info" className={styles.forlengeRegelverkAlert}>
        <Heading spacing size="medium">
          {props.node.tittel}
        </Heading>
        <BlockContent blocks={props.node.beskrivelse} />
      </Alert>
    ),
  },
};

const OmstillingsSide: FunctionComponent<Props> = ( {omstillingInnhold, relatertInnhold} ) => {
  return (
    <div className={styles.omstillingsSide}>
      <PageHeader className={styles.banner} description="NAV samarbeider med virksomheter i omstilling der mange ansatte mister - eller står i fare for - å miste jobben.">
        Omstilling og nedbemanning
      </PageHeader>
      <div className={styles.container}>
        <TemaRelatertInnhold relatertInnhold={relatertInnhold} />
        <div className={styles.innhold}>
          <Container>
            {omstillingInnhold.map((innhold) => (
                <BlockContent blocks={innhold.innhold} key={innhold.tittel} serializers={serializers}/>
            ))}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default OmstillingsSide;
