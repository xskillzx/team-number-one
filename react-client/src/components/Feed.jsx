import React from 'react';
import SqueakEntry from './SqueakEntry.jsx';
import UserEntry from './UserEntry.jsx';

const Feed = (props) => (
<div className="feed-container">
  {props.squeaks.map(squeak => <SqueakEntry key={squeak.id} squeak={squeak} />)}
</div>
);

export default Feed;
