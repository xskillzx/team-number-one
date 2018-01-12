import React from 'react';

const WritePost = (props) => (
  <div className="post">
    <label>
      Post a Squeak:
      <input
        type="text"
        name="name"
        value={props.writePostValue}
        onChange={props.onPostInputChangeHandler}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            props.writePostHandler();
          }
        }}
      />
    </label>
    <input type="submit" value="Submit" onClick={props.writePostHandler} />
  </div>
);

export default WritePost;
