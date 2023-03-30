import React from "react";
import styles from "./break.css";
import classNames from "classnames";
import { IBreakProps } from "../../utils/ts/interface";

export function Break(props: IBreakProps) {
  const { inline = false, top = false, size, mobileSize, desktopSize, tabletSize } = props;
  return (
    <div
      className={classNames(
        styles[`s${size}`],
        { [styles[`mobile_s${mobileSize}`]]: mobileSize },
        { [styles[`tablet_s${tabletSize}`]]: tabletSize },
        { [styles[`desktop_s${desktopSize}`]]: desktopSize },
        { [styles.inline]: inline },
        { [styles.top]: top }
      )}></div>
  );
}
