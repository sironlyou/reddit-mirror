import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IDropdownProps } from "../../utils/ts/interface";
import styles from "./dropdown.css";

export function Dropdown({ button, children, onClose }: IDropdownProps) {
  if (!button) return null;

  const ref = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    onClose?.();
  };

  useEffect(() => {
    function handleClickDoc(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) onClose?.();
    }
    document.addEventListener("click", handleClickDoc);
    return () => {
      document.removeEventListener("click", handleClickDoc);
    };
  }, []);

  const node = document.querySelector("#dropdown_root");
  if (!node) return null;

  return createPortal(
    <div className={styles.container} ref={ref}>
      <div onClick={handleClick} className={styles.list}>
        {children}
      </div>
    </div>,
    node
  );
}
