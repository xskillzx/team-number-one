import React from 'react';
import UserInfo from '../components/UserInfo.jsx';
import { Grid, Row, Col } from 'react-bootstrap';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};

	}

	render() {
		return(
		  <Grid>
		    <Col className="col-md-3 show-box show-grid">
		      <Row className="show-box">
		        <UserInfo />
		      </Row>
		      <Row className="show-box">
		        <h3>TRENDING</h3>
		      </Row>
		    </Col>
		    <Col className="col-md-6 show-box show-grid">
		      <Row className="show-box">
		        <h3>POST</h3>
		      </Row>
		      <Row className="show-box">
		        <h3>FEED</h3>
		      </Row>
		    </Col>
		    <Col className="col-md-3 show-box show-grid">
		      <Row className="show-box">
		        <h3>WHO TO FOLLOW</h3>
		      </Row>
		      <Row className="show-box">
		        <h3>BOTTOM NAV</h3>
		      </Row>
		    </Col>
		  </Grid>
		)
	}
}

export default HomePage;