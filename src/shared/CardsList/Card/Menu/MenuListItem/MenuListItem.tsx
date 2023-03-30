import React from "react";
import { GenericList } from "../../../../../utils/react/genericList";
import { EIcons, IMenuListItem } from "../../../../../utils/ts/interface";
import { Icon } from "../../../../Icon";
import { Text } from "../../../../Text";
import styles from "./menulistitem.css";

const LIST = [
  {
    As: "li" as const,
    text: (
      <Text size={14} mobileSize={12}>
        Скрыть
      </Text>
    ),
    listElement: (
      <>
        <Icon name={EIcons.block} className={styles.icon} size={14} />
      </>
    ),

    className: styles.menuItem,
  },
  {
    divider: <div className={styles.divider} />,
  },
  {
    As: "li" as const,
    text: (
      <Text size={14} mobileSize={12}>
        Пожаловаться
      </Text>
    ),
    listElement: (
      <>
        <Icon name={EIcons.report} className={styles.icon} size={14} />
      </>
    ),

    className: styles.menuItem,
  },
];
export function MenuListItem({ postId }: IMenuListItem) {
  return (
    <ul className={styles.menuItemsList}>
      <GenericList list={LIST} />
    </ul>
  );
}
