import { Heading, Link } from "@navikt/ds-react";
import Container from "../../../container/Container";
import { permitteringInnhold } from "../Permitteringsside";
import { FunctionComponent } from "react";
import VanligSpørsmål, { VanligSpørsmålType } from "./VanligSpørsmål";

type Props = {
  vanligeSpørsmål: VanligSpørsmålType[];
};

const VanligeSporsmal: FunctionComponent<Props> = ({ vanligeSpørsmål }) => {
  return (
    <Container>
      <Heading
        spacing
        size="xlarge"
        id={permitteringInnhold.vanligeSpørsmål.anker}
      >
        Vanlige spørsmål
      </Heading>
      {vanligeSpørsmål.map((vanligSpørsmål) => (
        <VanligSpørsmål {...vanligSpørsmål} key={vanligSpørsmål.sporsmal} />
      ))}
      <Heading spacing size="small">
        Fant du ikke det du lette etter?
      </Heading>
      <Link href="https://www.nav.no/person/kontakt-oss/chat/arbeidsgiver">
        Chat med NAV om permittering.
      </Link>
    </Container>
  );
};

export default VanligeSporsmal;
