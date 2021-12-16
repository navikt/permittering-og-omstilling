import { Link } from "@navikt/ds-react";
import { FunctionComponent } from "react";
import  { VanligSpørsmålType } from "./VanligSpørsmål";
import styles from "./VanligeSpørsmålInnhold.module.css";

type Props = {
  vanligeSpørsmål: VanligSpørsmålType[];
};

const VanligeSporsmalInnhold: FunctionComponent<Props> = ({ vanligeSpørsmål }) => {

  return (
    <div className={styles.vanligSporsmalInnhold}>
        {vanligeSpørsmål.map((vanligSpørsmål) => (
          <div key={vanligSpørsmål.sporsmal}>
            <Link
              className={styles.innholdLenke}
              href={`#${vanligSpørsmål.sporsmal}`}
            >
              {vanligSpørsmål.sporsmal}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default VanligeSporsmalInnhold;
