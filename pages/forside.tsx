import { NextPage } from "next";
import React from "react";
import { Heading } from "@navikt/ds-react";
import Head from "next/head";

const Forside: NextPage = () => {
  return (
    <>
      <Head>
        {/* Hindre Google å indeksere siden: https://nextjs.org/learn/seo/crawling-and-indexing/metatags */}
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Heading size="large">Den nye forsiden</Heading>
    </>
  );
};

export default Forside;
