import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleClick() {
    this.props.signUp(this.state.username, this.state.password);
  }
  render() {
    return (
      <Form action="/sign-up" method="POST">
        <FormGroup>
          <Label for="username" hidden>Username</Label>
          <Input type="text" name="uid" id="username-signup" placeholder="Username" value={this.state.username} onChange ={this.handleChangeUsername}/>
        </FormGroup>
        <FormGroup>
          <Label for="password" hidden>Password</Label>
          <Input type="password" name="pwd" id="password-signup" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword}/>
        </FormGroup>
        <Button type="submit" id="switch-signup" color="primary">Sign Up</Button>
      </Form>
    );
  }
}

