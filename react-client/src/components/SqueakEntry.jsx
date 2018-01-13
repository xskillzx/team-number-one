import React from 'react';
import { Media, Image } from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';

const SqueakEntry = ({ squeak, user }) => (
  <Media className="squeak-entry">
    <Media.Right>
      <Image width={64} height={64} src={squeak.profile_img_url || user.profile_img_url} alt="rounded" rounded/>
    </Media.Right>
    <Media.Body>
      <Media.Heading>{user ? `@${user.username}`: <Link to={'/' + squeak.username}>@{squeak.username}</Link>}</Media.Heading>
      <p className="squeak-name-time">
        {squeak.display_name || user.display_name} &#183; {moment(squeak.created_at).fromNow()}
      </p>
      <p>
        {squeak.text}
      </p>
    </Media.Body>
  </Media>
);

export default SqueakEntry;