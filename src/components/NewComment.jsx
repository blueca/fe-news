import React from 'react';

const NewComment = ({ handlePost, handleChange, newComment }) => {
  return (
    <form onSubmit={handlePost}>
      <label>
        <textarea
          name="newComment"
          cols="50"
          rows="10"
          onChange={handleChange}
          value={newComment}
          placeholder="Add new comment..."
        ></textarea>
        <button>Post</button>
      </label>
    </form>
  );
};

export default NewComment;
