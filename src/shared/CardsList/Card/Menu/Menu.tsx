import React, { useRef, useState } from "react";
import styles from "./menu.css";

import { MenuListItem } from "./MenuListItem";
import { Dropdown } from "../../../Dropdown";
import { Text } from "../../../Text";
import { MenuIcon } from "../../../Icons";
import { Ecolor } from "../../../../utils/ts/interface";

export function Menu() {
  const ref = useRef<HTMLButtonElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  let x = ref.current?.getBoundingClientRect().right || 0;
  let y = ref.current?.getBoundingClientRect().y || 0;
  let width = ref.current?.getBoundingClientRect().left || 0;
  let height = ref.current?.getBoundingClientRect().height || 0;
  if (typeof window !== "undefined") {
    x -= 171;
    y += height;
    y += window.scrollY;
    if (window.innerWidth > 1539) {
      x -= 70;
    }
    if (window.innerWidth < 768) {
      x += 15;
    }
  }

  return (
    <div className={styles.menu}>
      <button className={styles.menuButton} onClick={handleClick} ref={ref}>
        <MenuIcon />
      </button>

      {isDropdownOpen && (
        <Dropdown button={ref.current} onClose={handleClick}>
          <div className={styles.dropdown} style={{ top: y, left: x }}>
            <MenuListItem postId={"123"} />
            <button className={styles.closeButton}>
              <Text size={14} mobileSize={12} color={Ecolor.grey66}>
                Закрыть
              </Text>
            </button>
          </div>
        </Dropdown>
      )}
    </div>
  );
}
