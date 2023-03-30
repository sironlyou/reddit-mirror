import React from "react";
import styles from "./userblock.css";
import { IconAnon } from "../../../Icons";
import { Break } from "../../../Break";
import { Text } from "../../../Text";
import { Ecolor, IUserBlockProps } from "../../../../utils/ts/interface";

const CLIENT_ID = "TtTT3iNgIdJIJ1X2EwAlBA";
export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=random_string&redirect_uri=https://reddit-mirror.onrender.com/auth&duration=permanent&scope=read submit identity`}
      className={styles.userBox}>
      <div className={styles.avatarBox}>{avatarSrc ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} /> : <IconAnon />}</div>
      <div className={styles.username}>
        <Break size={12} />
        {loading ? (
          <Text size={20} color={Ecolor.grey99}>
            загрузка
          </Text>
        ) : (
          <Text size={20} color={username ? Ecolor.black : Ecolor.grey99}>
            {username || "Аноним"}
          </Text>
        )}
      </div>
    </a>
  );
}
