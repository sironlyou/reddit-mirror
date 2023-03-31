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
    <div>
      {loading && <div className={styles.loader}></div>}
      {!loading && commentary.length > 0 && (
        <div className={styles.modal} ref={ref}>
          <div>
            <div className={styles.content}>
              <h2 className={styles.header}>{title}</h2>
              <p>{selftext}</p>
            </div>
            <CommentForm />
            <Comments openComment={openComment} setOpenComment={setOpenComment} number={0} props={commentary} />
          </div>
        </div>
      )}
    </div>,

    node
  );
}
