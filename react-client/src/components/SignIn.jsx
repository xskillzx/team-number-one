import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SignIn extends React.Component {
  render() {
    return (
      <Form action="/sign-in" method="POST">
        <FormGroup>
          <Label for="username" hidden>Username</Label>
          <Input type="text" name="uid" id="username-login" placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <Label for="password" hidden>Password</Label>
          <Input type="password" name="pwd" id="password-login" placeholder="Password" />
        </FormGroup>
        <Button type="submit" id="switch-login" color="primary">Log In</Button>
      </Form>
    );
  }
}

