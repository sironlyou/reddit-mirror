import React from "react";
import styles from "./text.css";
import classNames from "classnames";
import { Ecolor, ITextProps } from "../../utils/ts/interface";

export function Text(props: ITextProps) {
  const { As = "span", color = Ecolor.black, children, size, mobileSize, tabletSize, desktopSize } = props;
  const classes = classNames(
    styles[`s${size}`],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
    styles[color]
  );
  return <As className={classes}>{children}</As>;
}
