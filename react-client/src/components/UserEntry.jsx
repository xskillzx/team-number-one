import React from 'react';
import { Image, Button, Col, Panel } from 'react-bootstrap';

const UserEntry = ({ id, username, display_name, bio_text, profile_img_url, is_followed, followHandler, unfollowHandler }) => (
  <Col xs={4}>
    <Panel>
      <Panel.Body>
      <Image className="user-entry-image" src={profile_img_url} circle/>
      </Panel.Body>
      <Panel.Footer className="user-footer">
        <h6>@{username}</h6>
        <p>{bio_text}</p>
        {is_followed ? <Button bsStyle="primary" onClick={e => unfollowHandler(id)}>Unfollow</Button> : <Button bsStyle="primary" onClick={e => followHandler(id)}>Follow</Button>}
      </Panel.Footer>
    </Panel>
  </Col>
);

export default UserEntry;