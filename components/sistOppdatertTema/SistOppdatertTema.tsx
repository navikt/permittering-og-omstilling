import React, { FunctionComponent } from "react";

type Props = {
  sistOppdatert: Date[];
};

const SistOppdatertTema: FunctionComponent<Props> = ({ sistOppdatert }) => {
  const sistOppdatertDato = sistOppdatert.sort((a: Date, b: Date) => {
    return new Date(b).getTime() - new Date(a).getTime();
  })[0];

  const formattedDate = new Date(sistOppdatertDato).toLocaleDateString("no-NO");

  return (
    <div>
      <i>Sist oppdatert {formattedDate}</i>
    </div>
  );
};

export default SistOppdatertTema;
