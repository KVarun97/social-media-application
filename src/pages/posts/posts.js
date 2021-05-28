import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../components/post/post";
import Spinner from "../../components/spinner/spinner";
import { getPostsAction, deletePostAction, addPostAction } from "./post.action";
import {
  TextField,
  TextareaAutosize,
  Button,
  InputLabel,
} from "@material-ui/core";
import "./posts.scss";

const Posts = () => {
  const postsState = useSelector((state) => state.postreducer);
  const dispatch = useDispatch();

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const postTitleHandler = (event) => setPostTitle(event.target.value);
  const postBodyHandler = (event) => setPostBody(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    const postDetails = {
      userId: 1,
      title: postTitle,
      body: postBody,
    };
    document.getElementById("new-post-form").reset();
    dispatch(addPostAction(postDetails));
  };
  useEffect(() => {
    dispatch(getPostsAction());
  }, []);

  const deletePostHandler = (postId) => {
    dispatch(deletePostAction(postId));
  };

  const posts = [...postsState.posts];
  return (
    <div className="posts">
      <section className="new-post-form-container">
        <h2>Add New Post</h2>
        <form id="new-post-form" className="new-post-form" onSubmit={onSubmit}>
          <div className="new-post-form-contents">
            <InputLabel className="form-labels">title</InputLabel>
            <TextField
              className="form-fields"
              variant="outlined"
              size="small"
              type="text"
              onChange={(event) => postTitleHandler(event)}
              required
            />
            <InputLabel className="form-labels">body</InputLabel>
            <TextareaAutosize
              className="form-fields"
              rowsMin={5}
              rowsMax={10}
              onChange={(event) => postBodyHandler(event)}
              required
            />
            <Button
              variant="contained"
              className="form-button"
              color="primary"
              type="submit"
            >
              Add Post
            </Button>
          </div>
        </form>
      </section>
      <section>
        <h2>Posts</h2>
        {postsState.loading ? (
          <Spinner message="Loading Posts" />
        ) : (
          posts.map((post) => (
            <Post
              key={post.id}
              postId={post.id}
              postUserId={post.userId}
              postTitle={post.title}
              postBody={post.body}
              deleteHandler={deletePostHandler}
            />
          ))
        )}
      </section>
    </div>
  );
};

export default Posts;
