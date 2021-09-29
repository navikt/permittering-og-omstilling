import { FunctionComponent } from "react";
import styles from "./Container.module.css";

export type ContainerProps = {
  id?: string;
};


const Container: FunctionComponent<ContainerProps> = ({ children, id}) => {
  return <div id = {id} className={styles.container}>{children}</div>;
};

export default Container;
