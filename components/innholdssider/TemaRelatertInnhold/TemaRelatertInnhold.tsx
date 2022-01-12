import { BodyShort, Heading } from "@navikt/ds-react";
import { FunctionComponent } from "react";
import Container from "../../container/Container";
import { RelatertInnhold } from "../RelatertInnhold";
import RelatertInnholdDetalje from "./RelatertInnholdDetalje";

type Props = {
  relatertInnhold: RelatertInnhold[];
};

const TemaRelatertInnhold: FunctionComponent<Props> = ({ relatertInnhold }) => {
  const relatertInnholdSorted = relatertInnhold.sort(
    (a, b) => a.sortOrder - b.sortOrder
  );

  return (
    <>
      {relatertInnholdSorted.map((innhold: RelatertInnhold, index) => (
        <RelatertInnholdDetalje relatertInnhold={innhold} key={index} />
      ))}
    </>
  );
};

export default TemaRelatertInnhold;
