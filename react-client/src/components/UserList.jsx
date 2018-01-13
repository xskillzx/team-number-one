import React from 'react';
import UserEntry from './UserEntry.jsx';

const UserList = ({ users, followHandler, unfollowHandler }) => (
  <div className="userlist-container">
    {users && users.map(user => <UserEntry key={user.id} {...user} followHandler={followHandler} unfollowHandler={unfollowHandler}/>)} 
  </div>
);

export default UserList;
