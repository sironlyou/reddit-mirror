import React, { useEffect, useRef, useState } from "react";
import styles from "./post.css";
import ReactDOM from "react-dom";
import { useStore } from "effector-react";
import { $loading } from "../../store/effector store/store";
import { Comments } from "./Comments";
import { useCommentData } from "../../hooks/useCommentData";
import { useNavigate } from "react-router-dom";
import { CommentForm } from "./CommentForm";
import { IComment, IPostProps } from "../../utils/ts/interface";

export function Post({ onClose, selftext, id, title }: IPostProps) {
  const commentary: IComment[] = useCommentData(id);

  const [openComment, setOpenComment] = useState<string>("");

  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const loading = useStore($loading);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        onClose?.();
        navigate("/posts");
      }
    }
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const node = document.querySelector("#modal_root");
  if (!node) return null;
  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      {loading && (
        <div style={{ width: "100%", height: 160, display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center" }}>loading...</div>
      )}
      {!loading && (
        <div>
          <div className={styles.content}>
            <h2>{title}</h2>
            <p>{selftext}</p>
          </div>
          <CommentForm />
          <Comments openComment={openComment} setOpenComment={setOpenComment} number={0} props={commentary} />
        </div>
      )}
    </div>,

    node
  );
}
