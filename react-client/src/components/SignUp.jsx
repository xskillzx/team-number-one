import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SignUp extends React.Component {
  render() {
    return (
      <Form action="/signup" method="POST">
        <FormGroup>
          <Label for="username" hidden>Username</Label>
          <Input type="text" name="uid" id="username-signup" placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <Label for="password" hidden>Password</Label>
          <Input type="password" name="pwd" id="password-signup" placeholder="Password" />
        </FormGroup>
        <Button id="switch-signup" color="primary">Sign Up</Button>
      </Form>
    );
  }
}

