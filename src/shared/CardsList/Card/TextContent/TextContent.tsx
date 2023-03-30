import React from "react";
import styles from "./textcontent.css";
import { Title } from "./Title";
import { getTimeFromTimestamp } from "../../../../utils/ts/getTimeFromTimestamp";
import { ITextContentProps } from "../../../../utils/ts/interface";

export function TextContent({ selftext, createdAt, author, title, id }: ITextContentProps) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src={"https://cdn.dribbble.com/users/174531/avatars/mini/15aa8b82e7c45563c3300038f5e18c5b.jpg?1575308145"}
            alt="avatar"
          />
          <a href="#user-url" className={styles.username}>
            {author}
          </a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {getTimeFromTimestamp(createdAt)} назад
        </span>
      </div>
      <Title selftext={selftext} title={title} id={id} />
    </div>
  );
}
