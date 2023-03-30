import React from "react";
import { IPreviewProps } from "../../../../utils/ts/interface";
import styles from "./preview.css";

export function Preview({ thumbnail }: IPreviewProps) {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={thumbnail?.includes("http") ? thumbnail : "https://cdn.dribbble.com/users/1090020/screenshots/17342450/media/08b490886f49c5e041b3e6fbff8dc90c.png"}
        alt="previewImg"
      />
    </div>
  );
}
