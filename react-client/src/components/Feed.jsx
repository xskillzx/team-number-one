import React from 'react';
import SqueakEntry from './SqueakEntry.jsx';
import UserEntry from './UserEntry.jsx';

// TODO: move users to a new component called UserList or sth
const Feed = (props) => (
<div className="feed-container">
  {props.squeaks && props.squeaks.map(squeak => <SqueakEntry key={squeak.id} squeak={squeak} />)}
  {props.users && props.users.map(user => <UserEntry key={user.id} {...user}/>)} 
</div>
);

export default Feed;
