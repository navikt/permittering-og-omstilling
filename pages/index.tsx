import type { NextPage } from "next";
import Link from "next/link";
import "@navikt/ds-css";

const Home: NextPage = () => {
  return (
    <div className="hovedside">
      <Link href="/permittering">Veiviser for permittering</Link>
      <Link href="/omstilling">Omstilling og nedbemanning</Link>
      <Link href="/oppsigelse">Oppsigelse</Link>
    </div>
  );
};

export default Home;
