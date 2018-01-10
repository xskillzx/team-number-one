import React from 'react';
import SqueakEntry from './SqueakEntry.jsx';

const Feed = ({squeaks}) => (
  <div class="feed">
    {
      squeaks.map(squeak => (
        <SqueakEntry squeak={squeak}/>
      ))
    }
  </div>
);

export default Feed;
