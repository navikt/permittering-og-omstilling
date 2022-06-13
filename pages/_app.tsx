import { AppProps } from "next/app";
import "../styles/globals.css";
import "@navikt/ds-css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any;
  return <AnyComponent {...pageProps} />;
};

export default MyApp;
