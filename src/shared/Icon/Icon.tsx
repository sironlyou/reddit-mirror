import classNames from "classnames";
import React from "react";
import { components, IIconProps } from "../../utils/ts/interface";

import styles from "./icon.css";

export function Icon(props: IIconProps) {
  const { name, size, className } = props;
  const Component = components[name];

  return (
    <span className={className} style={{ width: size, height: size }}>
      <Component />
    </span>
  );
}
