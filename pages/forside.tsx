import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import ForsideSide from "../components/innholdssider/forside/ForsideSide";

const Forside: NextPage = () => {
  return (
    <>
      <Head>
        {/* Hindre Google å indeksere siden: https://nextjs.org/learn/seo/crawling-and-indexing/metatags */}
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <ForsideSide />
    </>
  );
};

export default Forside;
