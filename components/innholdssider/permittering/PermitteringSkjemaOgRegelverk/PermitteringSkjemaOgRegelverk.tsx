import { FunctionComponent } from "react";
import Container from "../../../container/Container";
import { RelatertInnhold } from "../../RelatertInnhold";
import TemaRelatertInnhold from "../../TemaRelatertInnhold/TemaRelatertInnhold";
import { permitteringInnhold } from "../Permitteringsside";

type Props = {
  relatertInnhold: RelatertInnhold[];
};

const PermitteringSkjemaOgRegelverk: FunctionComponent<Props> = ({
  relatertInnhold
}) => {
  return (
    <Container id={permitteringInnhold.skjemaOgRegelverk.anker}>
      <TemaRelatertInnhold relatertInnhold={relatertInnhold} anker={permitteringInnhold.skjemaOgRegelverk.anker}/>
    </Container>
  )
};

export default PermitteringSkjemaOgRegelverk;
