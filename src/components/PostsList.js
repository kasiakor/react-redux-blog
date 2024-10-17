import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAction } from "../redux/actions/postActions";
import "./Posts.css";
import SearchPost from "./SearchPost";

const PostsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAction());
    // eslint-disable-next-line
  }, []);

  const { loading, error, posts, post } = useSelector((data) => data);

  console.log("data", loading, error, posts, post);
  return (
    <>
      <SearchPost />
      <div className="posts-list">
        <h1>Total Posts {posts.length}</h1>
        {loading && <h2>Loading...</h2>}
        {error && <h2>Something went wrong {error}</h2>}
        {posts.map((post) => (
          <div className="post-details">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostsList;
