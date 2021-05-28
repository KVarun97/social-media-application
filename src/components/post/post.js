import React from 'react';
import { Paper } from "@material-ui/core";
import DeleteIcon from "../../icons/delete-icon";
import "./post.scss";

const Post = ({ postId, postUserId, postTitle, postBody, deleteHandler }) => {
  return (
    <Paper className="post-container" elevation={2}>
      <div className="post">
        <div className="row-1">
          <h3>{postTitle}</h3>
          <p>{postBody}</p>
        </div>
        <div className="row-2">
          <span onClick={() => deleteHandler(postId)}>
            <DeleteIcon />
          </span>
        </div>
      </div>
    </Paper>
  );
};

export default Post;
