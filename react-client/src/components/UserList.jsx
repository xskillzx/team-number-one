import React from 'react';
import UserEntry from './UserEntry.jsx';

const UserList = ({ users }) => (
  <div className="userlist-container">
    {users && users.map(user => <UserEntry key={user.id} {...user}/>)} 
  </div>
);

export default UserList;
