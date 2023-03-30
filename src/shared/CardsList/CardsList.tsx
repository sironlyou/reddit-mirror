import React, { useEffect, useRef, useState } from "react";
import styles from "./cardslist.css";
import { Card } from "./Card";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import { Route, Routes } from "react-router-dom";
import { Post } from "../Post";
import { useStore } from "effector-react";
import { $id, $selftext, $title } from "../../store/effector store/store";
export function CardsList() {
  const bottomOfList = useRef(null);
  const token = useSelector<RootState, string>((state) => state.token.value);

  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState("");
  const [nextAfter, setNextAfter] = useState("");
  const id = useStore($id);
  const selftext = useStore($selftext);
  const title = useStore($title);
  useEffect(() => {
    if (!token) return;

    async function load() {
      setLoading(true);
      setErrorLoading("");
      try {
        const {
          data: {
            data: { after, children },
          },
        } = await axios.get("https://oauth.reddit.com/best.json?sr_detail=true", {
          headers: { Authorization: `bearer ${token}` },
          params: {
            limit: 10,
            after: nextAfter,
          },
        });
        setNextAfter(after);
        setPosts((prevChildren) => prevChildren.concat(...children));
      } catch (error) {
        setErrorLoading(String(error));
      }
      setLoading(false);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) load();
      },
      {
        rootMargin: "10px",
      }
    );

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) observer.unobserve(bottomOfList.current);
    };
  }, [nextAfter, token]);

  return (
    <ul className={styles.cardsList}>
      {posts.length === 0 && !loading && !errorLoading && <div className={styles.error}>Please log in to see posts</div>}
      {posts.map((post) => (
        <Card
          key={post.data.id}
          title={post.data.title}
          author={post.data.author}
          createdAt={post.data.created}
          karma={post.data.ups}
          thumbnail={post.data.thumbnail}
          permalink={post.data.permalink}
          id={post.data.id}
          selftext={post.data.selftext}
        />
      ))}
      <div ref={bottomOfList}></div>

      {loading && <div className={styles.error}>Loading...</div>}
      {errorLoading && (
        <div role="alert" className={styles.error}>
          {errorLoading}
        </div>
      )}
      <Routes>
        <Route path="/:id" element={<Post id={id} selftext={selftext} title={title} />}></Route>
      </Routes>
    </ul>
  );
}
