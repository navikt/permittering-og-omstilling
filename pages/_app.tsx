import { AppProps } from "next/app";
import "../styles/globals.css";
import "@navikt/ds-css";
import Script from "next/script";
import { basePath } from "./index";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script src={`/${basePath}/hotjar.js`} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
