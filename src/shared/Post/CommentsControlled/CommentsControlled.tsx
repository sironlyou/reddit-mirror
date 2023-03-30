import { useStore } from "effector-react";
import React, { ChangeEvent, FormEvent, useEffect, useRef } from "react";
import { $comment, updateComment } from "../../../store/effector store/store";

import styles from "./commentscontrolled.css";
interface IProps {
  user: string;
}
export function CommentsControlled({ user }: IProps) {
  const comment = useStore($comment);

  const ref = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    ref.current?.focus();
    ref.current?.setSelectionRange(comment.length, comment.length);
  }, [comment]);
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    updateComment(event.target.value);
  };

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }
  if (ref == null) return null;
  return (
    <div className="form">
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea className={styles.input} value={comment} ref={ref} onChange={handleChange} />
        <button className={styles.button}>Ответить </button>
      </form>
    </div>
  );
}
