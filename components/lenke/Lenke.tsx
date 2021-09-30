import React, { FunctionComponent } from "react";
import Link from "next/link";
import styles from "./Lenke.module.css";

type Props = {
  href: string;
  className?: string;
};

const Lenke: FunctionComponent<Props> = ({ href, className, children }) => {
  return (
    <Link href={href}>
      {/* Man må ha en a-tag inni NextJS sin Link for å kunne style den */}
      <a className={`navds-link ${styles.lenke} ${className ? className : ""}`}>
        {children}
      </a>
    </Link>
  );
};

export default Lenke;
