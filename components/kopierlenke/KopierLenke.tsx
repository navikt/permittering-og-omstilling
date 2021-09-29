import { Link } from "@navikt/ds-react";
import { FunctionComponent } from "react";
import styles from "./KopierLenke.module.css";

type Props = {
  anker: string
}

const KopierLenke: FunctionComponent<Props> = ({ anker }) => {

  const kopierLenke = () => {
    const location = window.location.href.replace(window.location.hash, "");
    navigator.clipboard.writeText(`${location}#${anker}`);
  }

  return (
    <div>
      <Link  className={styles.kopierLenke} href={`#${anker}`} onClick={() => kopierLenke()}>Kopier lenke
      <img
        src="https://www.nav.no/gfx/link.svg"
        alt="Kopier lenke"
        className={styles.kopierLenkeIcon}
      ></img>
      </Link>
    </div>
  );
};

export default KopierLenke;
