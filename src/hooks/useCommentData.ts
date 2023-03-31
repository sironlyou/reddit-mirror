import axios from "axios";
import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { $comments, updateComments, updateLoading } from "../store/effector store/store";
import { RootState } from "../store/reducer";

export const useCommentData = (id: string) => {
  const comments = useStore($comments);
  const localToken = localStorage.getItem("token");
  const navigate = useNavigate();
  const token = useSelector<RootState, string>((state) => state.token.value) || localToken;
  useEffect(() => {
    async function load() {
      if (id === "") navigate("/posts");
      if (id === "") return;
      updateLoading(true);
      try {
        const children = await axios
          .get(`https://oauth.reddit.com/comments/${id}.json`, {
            headers: { Authorization: `bearer ${token}` },
          })
          .then((resp) => {
            resp !== undefined && updateComments(resp.data[1].data.children);
            updateLoading(false);
          });
      } catch (error) {
        console.log("comments error:", error);
      }
    }
    load();
  }, []);
  return comments;
};
