import React from 'react';

const WritePost = (props) => (
  <div className="post">
    <form>
      <label>
        Post a Squeak:
        <input
          type="text"
          name="name"
          value={props.writePostValue}
          onChange={e => onPostInputChangeHandler(e)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default WritePost;
