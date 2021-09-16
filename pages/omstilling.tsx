import React, { useEffect } from "react";
import { setBreadcrumbs } from "@navikt/nav-dekoratoren-moduler";
import type { NextPage } from "next";

import OmstillingsSide from "../components/innholdssider/omstilling/Omstillingsside";

const Omstilling: NextPage = () => {
  useEffect(() => {
    setBreadcrumbs([
      {
        title: "Permittering og omstilling",
        url: "/permittering-og-omstilling",
      },
      { title: "Omstilling", url: location.pathname },
    ]).catch(() => {
      console.error("klarte ikke å oppdatere breadcrumbs");
    });
  });
  return (
    <OmstillingsSide/>
  );
};

export default Omstilling;
