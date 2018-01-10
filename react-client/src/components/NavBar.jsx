import React from 'react';

const NavBar = ({ inputValue, searchHandler, onChangeHandler }) => {
  return (
    <div>
      <span>Squeaker</span>
      <input type="text"
        placeholder="Search for user.."
        value={inputValue}
        onChange={onChangeHandler}
        onKeyPress={e => {
          if (e.key === 'Enter') return searchHandler();
        }}/>
      <button onClick={searchHandler}>GO</button>
    </div>
  );
}

export default NavBar;