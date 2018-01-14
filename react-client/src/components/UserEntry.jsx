import React from 'react';
import { Image, Button, Col, Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserEntry = ({ id, username, display_name, bio_text, profile_img_url, is_followed, followHandler, unfollowHandler, showButton }) => (
  <Col xs={4}>
    <Panel>
      <Panel.Body>
      <Image className="user-entry-image" src={profile_img_url} circle/>
      </Panel.Body>
      <Panel.Footer className="user-footer">
        <Link to={'/' + username}>@{username}</Link>
        <p>{bio_text}</p>
        {showButton ? 
          is_followed ? <Button bsStyle="primary" onClick={e => unfollowHandler(id)}>Unfollow</Button> : <Button bsStyle="primary" onClick={e => followHandler(id)}>Follow</Button>
          : null}
      </Panel.Footer>
    </Panel>
  </Col>
);

export default UserEntry;