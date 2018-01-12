import React from 'react';
import WritePost from '../components/WritePost.jsx';
import { Grid, Row, Col } from 'react-bootstrap';
import UserInfo from '../components/UserInfo.jsx';
import $ from 'jquery';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      writePostValue: ''
    };
  }

  writePostHandler() {
    var squeak = {
      userId: 89, //TODO Fix when props are passed
      text: this.writePostValue
    };
    $.ajax({
      url: '/api/writepost', //TODO update url
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(squeak),
      success: res => {
        console.log('res');
      },
      error: err => {
        console.error('err');
      }
    });
  }

  onPostInputChangeHandler(e) {
    this.setState({writePostValue: e.target.value});
  }

  render() {
    return (
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
            <div className="home">
              <WritePost
                writePostValue={this.state.writePostValue}
                onPostInputChangeHandler={this.onPostInputChangeHandler.bind(this)}
                writePostHandler={this.writePostHandler.bind(this)}
              />
            </div>
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
    );
  }
}

export default HomePage;
