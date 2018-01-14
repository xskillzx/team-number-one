import React from 'react';
import UserEntry from './UserEntry.jsx';

const UserList = ({ users, followHandler, unfollowHandler, showButton = true }) => (
  <div className="userlist-container">
    {users && users.map(user => <UserEntry key={user.id} {...user} followHandler={followHandler} unfollowHandler={unfollowHandler} showButton={showButton}/>)} 
  </div>
);

export default UserList;
