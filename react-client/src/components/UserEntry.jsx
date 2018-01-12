import React from 'react';
import { Image, Button, Col, Panel } from 'react-bootstrap';

const UserEntry = ({ id, username, display_name, bio_text, profile_img_url }) => (
  <Col xs={4}>
    <Panel>
      <Panel.Body>
      <Image className="image" src={profile_img_url} circle/>
      </Panel.Body>
      <Panel.Footer className="user-footer">
        <h6>@{username}</h6>
        <p>{bio_text}</p>
        <Button bsStyle="primary">Follow</Button>
      </Panel.Footer>
    </Panel>
  </Col>
);

export default UserEntry;