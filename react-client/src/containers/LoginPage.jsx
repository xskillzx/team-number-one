import React from 'react';
import $ from 'jquery';
import { Grid, Row, Col } from 'react-bootstrap';
import Login from '../components/Login.jsx';
import SignUp from '../components/SignUp.jsx';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <Grid>
        <Col className="col-md-3 show-box show-grid">
          <Row className="login">
            <h3>Log In</h3>
          </Row>
        </Col>
        <Col className="col-md-3 show-box show-grid">
          <Row className="signup">
            <h3>Sign up</h3>
          </Row>
        </Col>
      </Grid>
    );
  }
}

export default LoginPage;