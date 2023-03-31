import React, { useRef, useState } from "react";
import { useStore } from "effector-react";
import { $formState, updateComment, updateForm } from "../../../store/effector store/store";
import { getTimeFromTimestamp } from "../../../utils/ts/getTimeFromTimestamp";
import { IProps } from "../../../utils/ts/interface";
import { CommentIcon } from "../../Icons";
import { CommentsControlled } from "../CommentsControlled";

export function Comments({ props, number, setOpenComment, openComment }: IProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const formState = useStore($formState);
  return number === 2 ? null : (
    <div>
      {props.length !== 0 &&
        props.map((item, index) => (
          <div className="comment">
            {item.data.body !== undefined && (
              <div style={{ border: "gray 1px solid", marginBottom: 10, padding: 15 }}>
                <div>
                  <span className="user" style={{ marginRight: 10 }}>
                    {item.data?.author}
                  </span>
                  <span>{getTimeFromTimestamp(item.data?.created)} назад</span>
                </div>
                <p className="comenttext"> {item.data?.body}</p>
                <div></div>
                <button
                  style={{ display: "flex", alignItems: "center" }}
                  type="button"
                  ref={ref}
                  onClick={(e) => {
                    e.stopPropagation();
                    updateComment(item.data?.author + ", ");
                    setOpenComment(item.data.id);
                    updateForm("open");
                  }}>
                  <span style={{ marginRight: 5 }}> Ответить </span> <CommentIcon />
                </button>
                {openComment == item.data.id && formState === "open" && <CommentsControlled user={item.data?.author} />}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
