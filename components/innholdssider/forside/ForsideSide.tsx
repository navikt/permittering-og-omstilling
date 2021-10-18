import { NextPage } from "next";
import React from "react";
import { LinkPanel, PageHeader } from "@navikt/ds-react";
import styles from "./forside.module.css";
import HvaKanNavHjelpeDegMed from "./HvaKanNavHjelpeDegMed/HvaKanNavHjelpeDegMed";

const ForsideSide: NextPage = () => {
  return (
    <div>
      <PageHeader description="Her er beskrivelsen">Forside</PageHeader>
      <div>Her er introduksjonen til permittering/omstilling...</div>
      <LinkPanel href="/permittering-og-omstilling/permittering#hvordan-permittere">
        <LinkPanel.Title>Hvordan permittere ansatte</LinkPanel.Title>
      </LinkPanel>

      <HvaKanNavHjelpeDegMed />
    </div>
  );
};

export default ForsideSide;
