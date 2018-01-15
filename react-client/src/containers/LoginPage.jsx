import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';
import SignIn from '../components/SignIn.jsx';
import SignUp from '../components/SignUp.jsx';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <Grid>
        <Col className="col-md-3 show-box show-grid">
          <Row className="sign-in">
            <SignIn signIn={this.props.signIn} loggedIn={this.props.loggedIn} userinfo={this.props.userinfo}/>
          </Row>
        </Col>
        <Col className="col-md-3 show-box show-grid">
          <Row className="sign-up">
            <SignUp signUp={this.props.signUp}/>
          </Row>
        </Col>
      </Grid>
    );
  }
}

export default LoginPage;