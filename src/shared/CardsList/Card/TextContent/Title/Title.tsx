import React from "react";
import styles from "./title.css";
import { Link } from "react-router-dom";
import { updateId, updateLoading, updateSelftext, updateTitle } from "../../../../../store/effector store/store";
import { ITitleProps } from "../../../../../utils/ts/interface";

export function Title({ title, id, selftext }: ITitleProps) {
  return (
    <h2 className={styles.title}>
      <Link
        to={`/posts/id:${id}`}
        onClick={(e) => {
          updateId(id);
          updateTitle(title);
          updateSelftext(selftext);
          updateLoading(true);
        }}
        className={styles.postLink}>
        {title}
      </Link>
    </h2>
  );
}
