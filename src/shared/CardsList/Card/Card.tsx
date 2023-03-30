import React from "react";
import styles from "./card.css";
import { Preview } from "./Preview";
import { TextContent } from "./TextContent";
import { Menu } from "./Menu";
import { Controls } from "./Controls";
import { ICardKeys } from "../../../utils/ts/interface";

export function Card({ selftext, title, author, createdAt, karma, thumbnail, id }: ICardKeys) {
  return (
    <li className={styles.card}>
      <TextContent author={author} title={title} createdAt={createdAt} id={id} selftext={selftext} />
      <Preview thumbnail={thumbnail} />
      <Menu />
      <Controls karma={karma} />
    </li>
  );
}
