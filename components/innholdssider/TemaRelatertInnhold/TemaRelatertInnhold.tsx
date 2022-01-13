import { BodyShort, Heading } from "@navikt/ds-react";
import { FunctionComponent } from "react";
import Container from "../../container/Container";
import { RelatertInnhold } from "../RelatertInnhold";
import RelatertInnholdDetalje from "./RelatertInnholdDetalje";

type Props = {
  relatertInnhold: RelatertInnhold[];
  anker?: string;
};

const TemaRelatertInnhold: FunctionComponent<Props> = ({ relatertInnhold, anker }) => {
  const relatertInnholdSorted = relatertInnhold.sort(
    (a, b) => a.sortOrder - b.sortOrder
  );

  return (
    <>
      {relatertInnholdSorted.map((innhold: RelatertInnhold, index) => (
        <RelatertInnholdDetalje relatertInnhold={innhold} anker={anker ? anker : innhold.tittel} key={index} />
      ))}
    </>
  );
};

export default TemaRelatertInnhold;
