import { BodyShort, Heading } from "@navikt/ds-react";
import Link from "next/link";
import Container from "../../container/Container";
import { permitteringInnhold } from "./Permitteringsside";

const InfoTilAnsatte = () => {
  return (
    <Container>
      <Heading
        spacing
        size="xlarge"
        id={permitteringInnhold.infoTilAnsatte.anker}
      >
        {permitteringInnhold.infoTilAnsatte.tittel}
      </Heading>
      <BodyShort spacing>
        Denne informasjonssiden er rettet mot arbeidsgivere og inneholder kun et
        begrenset utvalg av informasjonen som angår den ansatte. Hvis du ønsker
        å gi utfyllende informasjon til dine ansatte må du sette deg inn i:
      </BodyShort>
      <ul>
        <li>
          <Link href="https://www.nav.no/arbeid/no/permittert/">
            informasjon til den permitterte
          </Link>
        </li>
        <li>
          <Link href="https://www.nav.no/arbeid/no/dagpenger/">
            informasjon til de som har søkt om eller mottar dagpenger
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default InfoTilAnsatte;
