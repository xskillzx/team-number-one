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
        <span key={user.id} className="show-box">
          <span>HERE GOES THE USERENTRY COMP meanwhile...</span><br/>
          <span>@{user.username}</span><br/>
          <span>{user.display_name}</span><br/>
          <span>{user.bio_text}</span><br/>
          <button>FOLLOW</button><br/>
        </span>
      ))}
  </div>
);

export default Feed;
