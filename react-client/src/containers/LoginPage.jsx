import React from 'react';
import $ from 'jquery';
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
            <SignIn />
          </Row>
        </Col>
        <Col className="col-md-3 show-box show-grid">
          <Row className="sign-up">
            <SignUp />
          </Row>
        </Col>
      </Grid>
    );
  }
}

export default LoginPage;