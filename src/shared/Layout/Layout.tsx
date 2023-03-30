import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import { saveToken } from "../../store/token/actions";
import { ILayoutProps } from "../../utils/ts/interface";
import styles from "./layout.css";

export function Layout({ children }: ILayoutProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(saveToken());
  });

  return <div className={styles.layout}>{children}</div>;
}
