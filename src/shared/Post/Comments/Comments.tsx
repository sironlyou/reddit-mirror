import React, { useRef } from "react";
import { updateComment } from "../../../store/effector store/store";
import { IProps } from "../../../utils/ts/interface";
import { CommentIcon } from "../../Icons";
import { CommentsControlled } from "../CommentsControlled";

export function Comments({ props, number, setOpenComment, openComment }: IProps) {
  const ref = useRef<HTMLButtonElement>(null);
  return number === 4 ? null : (
    <div>
      {props.length !== 0 &&
        props.map((item, index) => (
          <div>
            {item.data.body !== undefined && (
              <div className="card" style={{ marginLeft: 10 + number * 10 }}>
                <p>Author username: {item.data?.author}</p>
                <p>comment: {item.data?.body}</p>
                <button
                  type="button"
                  ref={ref}
                  onClick={(e) => {
                    e.stopPropagation();
                    updateComment(item.data?.author + ", ");
                    setOpenComment(item.data.id);
                  }}>
                  Ответить <CommentIcon />
                </button>
                {openComment == item.data.id && <CommentsControlled user={item.data?.author} />}

                {item.data !== undefined &&
                  item.data.replies !== undefined &&
                  item.data.replies.data !== undefined &&
                  item.data.replies.data.children !== undefined && (
                    <Comments openComment={openComment} setOpenComment={setOpenComment} number={++number} props={item.data.replies.data.children} />
                  )}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
