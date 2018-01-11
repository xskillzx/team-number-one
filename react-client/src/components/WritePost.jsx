import React from 'react';

const WritePost = () => (
  <div className="post">
    <form>
      <label>
        Post a Squeak:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default WritePost;
