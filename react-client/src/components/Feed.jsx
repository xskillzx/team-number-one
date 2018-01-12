import React from 'react';
import SqueakEntry from './SqueakEntry.jsx';
import UserEntry from './UserEntry.jsx';

const Feed = ({ squeaks, users }) => (
  <div>
    {squeaks &&
      squeaks.map(squeak => (
        <SqueakEntry key={squeak.id} squeak={squeak}/>
      ))
    }
    {users &&
      users.map(user => (
        <UserEntry {...user} key={user.id}/>
      ))}
  </div>
);

export default Feed;
