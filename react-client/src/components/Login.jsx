import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Login extends React.Component {
  render() {
    return (
      <Form action="/login" method="POST">
        <FormGroup>
          <Label for="username" hidden>Username</Label>
          <Input type="text" name="uid" id="username-login" placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <Label for="password" hidden>Password</Label>
          <Input type="password" name="pwd" id="password-login" placeholder="Password" />
        </FormGroup>
        <Button id="switch-login" color="primary">Log In</Button>
      </Form>
    );
  }
}

