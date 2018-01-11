import React from 'react';
import SqueakEntry from './SqueakEntry.jsx';

const Feed = ({ squeaks, users }) => (
  <div>
    {squeaks &&
      squeaks.map(squeak => (
        <SqueakEntry key={squeak.id} squeak={squeak}/>
      ))
    }
    {users &&
      users.map(user => (
        <span key={user.id} className="show-box">User Entry Comp</span>
      ))}
  </div>
);

export default Feed;
