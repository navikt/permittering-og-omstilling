import React, { FunctionComponent } from "react";
import styles from "./Lenkeknapp.module.css";

type Props = {
  href: string;
  className?: string;
};

const Lenkeknapp: FunctionComponent<Props> = ({
  href,
  className,
  children,
}) => {
  return (
    <a
      className={`navds-button--primary ${styles.lenkeknapp} ${
        className ? className : ""
      }`}
      href={href}
    >
      {children}
    </a>
  );
};

export default Lenkeknapp;
