import React from "react";
import { IContentProps } from "../../utils/ts/interface";
import styles from "./content.css";

export function Content({ children }: IContentProps) {
  return <main className={styles.content}>{children}</main>;
}
