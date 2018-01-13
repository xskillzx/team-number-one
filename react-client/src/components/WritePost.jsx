import React from 'react';
import { Image } from 'react-bootstrap';

const WritePost = (props) => (
  <div className="post">
    <Image className="post-userimage" src={props.userimage} circle />
    <span className="post-squeakbox">
      <input
        className="post-squeakinput"
        type="text"
        name="name"
        placeholder="Share a Squeak to the world!"
        onChange={props.onPostInputChangeHandler}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            props.writePostHandler();
            e.target.value = "";
          }
        }}
      />
    </span>
  </div>
);

export default WritePost;