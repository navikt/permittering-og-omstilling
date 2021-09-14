import { AppProps } from "next/app";
import "../styles/globals.css";
import "@navikt/ds-css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
