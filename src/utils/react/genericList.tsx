import React from "react";
import { IGenericListProps } from "../ts/interface";

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = "div", id, className, divider, listElement, text, onClick, href }) => (
        <As className={className} onClick={() => id} key={id} href={href}>
          {listElement}
          {text}
          {divider}
        </As>
      ))}
    </>
  );
}
